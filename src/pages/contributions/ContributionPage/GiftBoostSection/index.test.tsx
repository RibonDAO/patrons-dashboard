import { renderComponent } from "config/testUtils/renders";
import GiftBoostSection from "pages/contributions/ContributionPage/GiftBoostSection/index";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";

describe("GiftBoostSection", () => {
  const currentContribution = {
    stats: {
      initialAmount: "$100",
      usedAmount: "0",
      usagePercentage: 60,
      remainingAmount: "10",
      totalTickets: 0,
      avgDonationsPerPerson: 0,
      boostAmount: "0",
      totalIncreasePercentage: 0,
      totalAmountToCause: 0,
      ribonFee: 0,
    },
  };

  it("renders without error", () => {
    renderComponent(<GiftBoostSection {...currentContribution.stats} />);

    expectTextToBeInTheDocument("info");
  });
});
