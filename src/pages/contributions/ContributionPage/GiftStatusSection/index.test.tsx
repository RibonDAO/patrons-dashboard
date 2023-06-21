import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import GiftStatusSection from ".";

describe("GiftStatusSection", () => {
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
      boostNewContributors: 0,
      boostNewPatrons: 0,
    },
  };

  it("should render without errors", () => {
    renderComponent(<GiftStatusSection {...currentContribution.stats} />);
    expectTextToBeInTheDocument("10");
  });

  it("should render without errors", () => {
    renderComponent(<GiftStatusSection {...currentContribution.stats} />);
    expectTextToBeInTheDocument("10");
  });
});
