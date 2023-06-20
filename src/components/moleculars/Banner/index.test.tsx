import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import Banner from ".";

describe("Banner", () => {
  it("should render without error", () => {
    renderComponent(<Banner />);

    expectTextToBeInTheDocument("Banner");
  });
});
