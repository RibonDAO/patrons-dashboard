import { clickOn, renderComponent } from "config/testUtils";
import {
  expectFunctionNotToHaveBeenCalledWith,
  expectTextNotToBeInTheDocument,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import { fireEvent, screen } from "@testing-library/react";
import Select from ".";

describe("Select", () => {
  const mockFn = jest.fn();

  beforeEach(() => {
    renderComponent(
      <Select
        name="select"
        values={["test1", "test2"]}
        label="dropdown"
        onOptionChanged={mockFn}
        placeholder="placeholder"
      />,
    );
  });

  it("renders the placeholder", () => {
    expectTextToBeInTheDocument("placeholder");
  });

  describe("when focusing the input", () => {
    beforeEach(() => {
      const input = screen.getByText("placeholder");
      fireEvent.focus(input);
      fireEvent.keyDown(input, {
        key: "ArrowDown",
        code: 40,
      });
    });

    it("shows the options when clicked", () => {
      expectTextToBeInTheDocument("test1");
      expectTextToBeInTheDocument("test2");
    });

    it("calls the onOptionChanged function with correct params", () => {
      clickOn("test1");

      expect(mockFn).toHaveBeenCalledWith("test1");
    });

    it("update optionsVisible state when onClose", () => {
      clickOn("test1");

      expectTextNotToBeInTheDocument("test2");
    });
  });
});
