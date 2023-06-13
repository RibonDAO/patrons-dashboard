import { renderComponent } from "config/testUtils/renders";
import GiftBoostSection from "pages/contributions/ContributionPage/GiftBoostSection/index";

describe("GiftBoostSection", () => {
  it("renders without error", () => {
    renderComponent(
      <GiftBoostSection
        contributionsInspiredByYou="800"
        increaseAmount="100"
        amountToCause="900"
        ribonFee="10"
        initialGift="100"
      />,
    );
  });
});
