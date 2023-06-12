import { renderComponent } from "config/testUtils/renders";
import GiftBoostSection from "pages/contributions/ContributionPage/GiftBoostSection/index";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";

describe("GiftBoostSection", () => {
  it("renders without error", () => {
    renderComponent(<GiftBoostSection />);

    expectTextToBeInTheDocument("info");
  });
});
