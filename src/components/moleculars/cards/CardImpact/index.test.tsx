import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import CardImpact from ".";

describe("CardImpact", () => {
  it("should render without error", () => {
    renderComponent(
      <CardImpact logo="" image="" data="" title="title" description="texto" />,
    );

    expectTextToBeInTheDocument("texto");
  });
});
