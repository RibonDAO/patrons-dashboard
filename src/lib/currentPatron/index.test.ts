import { setLocalStorageItem } from "@ribon.io/shared";
import { CURRENT_PATRON_KEY } from "contexts/currentPatronContext";
import { currentPatronFromStorage } from ".";

describe("currentPatronFromStorage", () => {
  it("should return the correct patron", () => {
    expect(currentPatronFromStorage()).toEqual(null);
  });

  it("should return the correct patron", () => {
    setLocalStorageItem(CURRENT_PATRON_KEY, JSON.stringify({ name: "John" }));
    expect(currentPatronFromStorage()).toEqual({ name: "John" });
  });
});
