import "@testing-library/jest-dom";
import "jest-canvas-mock";

export const mockCookieSet = jest.fn();
export const mockCookieGet = jest.fn();
jest.mock("react-chartjs-2", () => ({
  Pie: () => null,
}));

jest.mock("js-cookie", () => ({
  __esModule: true,
  default: {
    set: mockCookieSet,
    get: mockCookieGet,
  },
}));
