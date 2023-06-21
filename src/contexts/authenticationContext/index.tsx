import { createContext, useContext, useMemo, useState } from "react";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "utils/constants";
import authApi from "services/api/authApi";
import { getCookiesItem, removeCookiesItem, setCookiesItem } from "lib/cookies";
import { logError } from "services/crashReport";
import { useCurrentPatron } from "contexts/currentPatronContext";

type authTokenProps = {
  authToken: string;
  id: string;
  onSuccess?: () => void;
  onError?: () => void;
};

type authenticationLinkProps = {
  email: string;
  onSuccess?: () => void;
  onError?: () => void;
};
export interface IAuthenticationContext {
  signInByAuthToken: (signInByAuthTokenProps: authTokenProps) => void;
  sendAuthenticationLink: (
    sendAuthenticationLinkProps: authenticationLinkProps,
  ) => void;
  accessToken: string | null;
  logout: () => void;
  loading: boolean;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext,
);

function AuthenticationProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(getCookiesItem(TOKEN_KEY));
  const { setCurrentPatron } = useCurrentPatron();
  async function signInByAuthToken({
    authToken,
    id,
    onSuccess,
    onError,
  }: authTokenProps) {
    setLoading(true);
    try {
      const response = await authApi.postAuthorizeFromAuthToken(authToken, id);
      const token = response.headers["access-token"];
      const refreshToken = response.headers["refresh-token"];

      setCurrentPatron(response.data);
      setCookiesItem(TOKEN_KEY, token);
      setCookiesItem(REFRESH_TOKEN_KEY, refreshToken);
      setAccessToken(token);

      if (onSuccess) onSuccess();
    } catch (error: any) {
      logError(error);
      if (onError) onError();
    } finally {
      setLoading(false);
    }
  }

  async function sendAuthenticationLink({
    email,
    onSuccess,
    onError,
  }: authenticationLinkProps) {
    setLoading(true);
    try {
      await authApi.postSendAuthenticationEmail(email);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      logError(error);
      if (onError) onError();
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    removeCookiesItem(TOKEN_KEY);
    removeCookiesItem(REFRESH_TOKEN_KEY);
  }

  const authenticationObject: IAuthenticationContext = useMemo(
    () => ({
      logout,
      accessToken,
      loading,
      sendAuthenticationLink,
      signInByAuthToken,
    }),
    [accessToken],
  );

  return (
    <AuthenticationContext.Provider value={authenticationObject}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used within AuthenticationProvider",
    );
  }

  return context;
};
