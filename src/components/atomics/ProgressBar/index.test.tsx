import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ProgressBar from ".";

describe("ProgressBar", () => {
  it("should render without errors", () => {
    renderComponent(<ProgressBar value={1} max={4} label="60%" />);
    expectTextToBeInTheDocument("60%");
  });
});
