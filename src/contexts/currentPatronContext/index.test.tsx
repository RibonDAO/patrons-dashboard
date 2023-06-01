import React from "react";
import { render, screen } from "@testing-library/react";
import { useCurrentPatron } from ".";

function CurrentPatronTestPage() {
  useCurrentPatron();
  return <div>CurrentPatron</div>;
}

describe("useCurrentPatron", () => {
  it("should render without error", () => {
    render(<CurrentPatronTestPage />);
    expect(screen.getByText("CurrentPatron")).toBeInTheDocument();
  });
});
