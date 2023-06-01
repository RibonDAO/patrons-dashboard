import { getLocalStorageItem } from "lib/localStorage";
import { BigDonor as Patron } from "@ribon.io/shared/types";
import { CURRENT_PATRON_KEY } from "contexts/currentPatronContext";

export function currentPatronFromStorage(): Patron | null {
  const patronFromStorage = getLocalStorageItem(CURRENT_PATRON_KEY);
  if (!patronFromStorage || patronFromStorage === "undefined") return null;

  return JSON.parse(patronFromStorage);
}
