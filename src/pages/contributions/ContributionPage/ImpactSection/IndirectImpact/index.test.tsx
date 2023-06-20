import { renderComponent } from "config/testUtils/renders";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { waitForPromises } from "config/testUtils";
import IndirectImpactSection from ".";

describe("ImpactSection", () => {
  beforeEach(async () => {
    renderComponent(
      <IndirectImpactSection
        boost="$3,000"
        newContributors={300}
        newPatrons={2}
      />,
    );
    await waitForPromises();
  });

  it("renders without error", () => {
    expectTextToBeInTheDocument("Indirect impact");
  });

  it("renders the indirect impact section", () => {
    expectTextToBeInTheDocument("300");
  });
});
