import { renderComponent } from "config/testUtils/renders";
import GiftBoostSection from "pages/contributions/ContributionPage/GiftBoostSection/index";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import {clickOn} from "config/testUtils";
import {screen} from "@testing-library/react";

describe("GiftBoostSection", () => {
  beforeEach(() => {
    renderComponent(
      <GiftBoostSection
        contributionsInspiredByYou="$800"
        increaseAmount="+100%"
        amountToCause="$900"
        ribonFee="$10"
        initialGift="$100"
      />,
    );
  });

  it("renders without error", () => {
    expectTextToBeInTheDocument("Gift Boost");
  });

  it("renders the props correctly", () => {
    expectTextToBeInTheDocument("$800");
    expectTextToBeInTheDocument("+100%");
    expectTextToBeInTheDocument("$900");
    expectTextToBeInTheDocument("$10");
  });

  it("show the amount to cause modal correctly", () => {
    const tooltip = screen.getByLabelText("tooltip values transparency")
    clickOn(tooltip)

    expectTextToBeInTheDocument("Initial gift")
    expectTextToBeInTheDocument("$100")
  });

  it("show the ribon fees modal correctly", () => {
    const tooltip = screen.getByLabelText("tooltip ribon fees transparency")
    clickOn(tooltip)

    expectTextToBeInTheDocument("How Ribon’s fee works")
  });
});
