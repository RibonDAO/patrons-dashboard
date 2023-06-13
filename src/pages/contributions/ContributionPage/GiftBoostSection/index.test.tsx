import { renderComponent } from "config/testUtils/renders";
import GiftBoostSection from "pages/contributions/ContributionPage/GiftBoostSection/index";

describe("GiftBoostSection", () => {
  it("renders without error", () => {
    renderComponent(<GiftBoostSection />);
  });
});
