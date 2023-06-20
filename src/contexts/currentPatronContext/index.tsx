import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BigDonor as Patron } from "@ribon.io/shared/types";
import { initializeApi } from "services/api";

export interface ICurrentPatronContext {
  currentPatron: Patron | undefined;
  setCurrentPatron: Dispatch<SetStateAction<Patron | undefined>>;
  updateCurrentPatron: (data: Partial<Patron>) => void;
  logoutCurrentPatron: () => void;
  signedIn: boolean;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const CurrentPatronContext = createContext<ICurrentPatronContext>(
  {} as ICurrentPatronContext,
);

export const CURRENT_PATRON_KEY = "CURRENT_PATRON_KEY";
export const SHOW_MENU = "SHOW_MENU";

function CurrentPatronProvider({ children }: Props) {
  function getPatronFromLocalStorage() {
    const patron = localStorage.getItem(CURRENT_PATRON_KEY);
    if (!patron || patron === "undefined") return undefined;

    return JSON.parse(patron);
  }

  const [currentPatron, setCurrentPatron] = useState<Patron | undefined>(
    getPatronFromLocalStorage(),
  );

  const [signedIn, setSignedIn] = useState(false);

  function updateCurrentPatron(data: Partial<Patron>) {
    setCurrentPatron({ ...currentPatron, data } as Patron);
  }

  function logoutCurrentPatron() {
    setCurrentPatron(undefined);
    localStorage.removeItem(CURRENT_PATRON_KEY);
    localStorage.removeItem(SHOW_MENU);
  }

  function setPatronInLocalStorage() {
    localStorage.setItem(CURRENT_PATRON_KEY, JSON.stringify(currentPatron));
  }

  useEffect(() => {
    setSignedIn(!!currentPatron);
    setPatronInLocalStorage();
    initializeApi();
  }, [currentPatron]);

  const currentPatronObject: ICurrentPatronContext = useMemo(
    () => ({
      currentPatron,
      setCurrentPatron,
      updateCurrentPatron,
      signedIn,
      logoutCurrentPatron,
    }),
    [currentPatron, signedIn],
  );

  return (
    <CurrentPatronContext.Provider value={currentPatronObject}>
      {children}
    </CurrentPatronContext.Provider>
  );
}

export default CurrentPatronProvider;

export const useCurrentPatron = () => {
  const context = useContext(CurrentPatronContext);

  if (!context) {
    throw new Error(
      "useCurrentPatron must be used within CurrentPatronProvider",
    );
  }

  return context;
};
