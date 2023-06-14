import { renderComponent } from "config/testUtils/renders";
import EngagementSection from "pages/contributions/ContributionPage/EngagementSection/index";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";

describe("EngagementSection", () => {
  it("renders without error", () => {
    renderComponent(
      <EngagementSection
        firstTimeDonors="16,000"
        donationsPerPerson="2,0"
        totalDonors="80,000"
      />,
    );

    expectTextToBeInTheDocument("Engagement");
  });
});
