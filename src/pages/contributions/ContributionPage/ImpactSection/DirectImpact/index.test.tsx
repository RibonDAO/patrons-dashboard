import { renderComponent } from "config/testUtils/renders";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { nonProfitFactory } from "@ribon.io/shared/config";
import { waitForPromises } from "config/testUtils";
import DirectImpactSection from ".";

describe("ImpactSection", () => {
  const formattedImpact = ["1 month", "of water for", "10 people"];
  const directImpact = [
    {
      nonProfit: nonProfitFactory(),
      formattedImpact,
      totalAmountDonated: "$1,000",
    },
  ];

  beforeEach(async () => {
    renderComponent(<DirectImpactSection directImpact={directImpact} />);
    await waitForPromises();
  });

  it("renders without error", () => {
    expectTextToBeInTheDocument("Your impact");
  });

  it("renders the direct impact section", () => {
    formattedImpact.forEach((text) => {
      expectTextToBeInTheDocument(text);
    });
    expectTextToBeInTheDocument("$1,000");
  });
});
