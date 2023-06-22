import { screen } from "@testing-library/react";
import { mockCookieRemove, mockCookieSet } from "setupTests";

export function expectTextToBeInTheDocument(text: string) {
  return expect(screen.getByText(text)).toBeInTheDocument();
}

export function expectTextNotToBeInTheDocument(text: string) {
  return expect(screen.queryByText(text)).not.toBeInTheDocument();
}

export function expectImageToBeInTheDocument(alt: string) {
  return expect(screen.getByAltText(alt)).toBeInTheDocument();
}

export function expectDisplayValueToBeInTheDocument(value: string) {
  return expect(screen.getByDisplayValue(value)).toBeInTheDocument();
}

export function expectFunctionNotToHaveBeenCalledWith(fn: any, value: any) {
  return expect(fn).not.toHaveBeenCalledWith(value);
}

export function expectCookieToHaveBeenSet(key: string, value: string) {
  return expect(mockCookieSet).toHaveBeenCalledWith(key, value, {
    sameSite: "strict",
    secure: true,
  });
}

export function expectCookieToHaveBeenRemoved(key: string) {
  return expect(mockCookieRemove).toHaveBeenCalledWith(key, {
    sameSite: "strict",
    secure: true,
  });
}
