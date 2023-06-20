import { renderComponent } from "config/testUtils/renders";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { Contribution } from "@ribon.io/shared/types";
import { mockRequest } from "config/testUtils/test-helper";
import { nonProfitFactory } from "@ribon.io/shared/config";
import { waitForPromises } from "config/testUtils";
import ImpactSection from ".";

describe("ImpactSection", () => {
  const contribution = {
    id: 1,
    stats: {
      boostAmount: "$3,000",
      boostNewContributors: 300,
      boostNewPatrons: 2,
    },
  } as Contribution;
  const formattedImpact = ["1 month", "of water for", "10 people"];
  mockRequest("patrons/v1/contributions/1/impacts", {
    payload: [
      {
        nonProfit: nonProfitFactory(),
        formattedImpact,
        totalAmountDonated: "$1,000",
      },
    ],
  });

  beforeEach(async () => {
    renderComponent(<ImpactSection contribution={contribution} />);
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
