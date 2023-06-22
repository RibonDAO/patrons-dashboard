import { renderComponent } from "config/testUtils/renders";
import {
  expectCookieToHaveBeenRemoved,
  expectTextNotToBeInTheDocument,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import { clickOn } from "config/testUtils";
import { TOKEN_KEY } from "utils/constants";
import { screen } from "@testing-library/react";
import LayoutHeader from ".";

describe("LayoutHeader", () => {
  it("should render without errors", () => {
    renderComponent(<LayoutHeader title="title" />);

    expectTextToBeInTheDocument("title");
  });

  describe("when user clicks on sign out button", () => {
    beforeEach(() => {
      renderComponent(<LayoutHeader title="title" />);
      clickOn("Sign out");
    });

    it("should show sign out modal", () => {
      expectTextToBeInTheDocument("You're signing out");
    });

    describe("when user clicks on stay button", () => {
      it("closes the sign out modal", () => {
        clickOn("Stay in Ribon");

        expectTextNotToBeInTheDocument("You're signing out");
      });
    });

    describe("when user clicks on sign out button", () => {
      it("signs out the user", () => {
        const signOutButton = screen.queryAllByText("Sign out").at(-1);
        clickOn(signOutButton);

        expectCookieToHaveBeenRemoved(TOKEN_KEY);
      });
    });
  });
});
