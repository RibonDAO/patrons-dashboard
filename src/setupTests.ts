import "@testing-library/jest-dom";
import "jest-canvas-mock";

export const mockCookieSet = jest.fn();
export const mockCookieGet = jest.fn();
jest.mock("react-chartjs-2", () => ({
  Pie: () => null,
}));

jest.mock("universal-cookie", () =>
  jest.fn().mockImplementation(() => ({
    set: mockCookieSet,
    get: mockCookieGet,
  })),
);
