import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import Banner from ".";

describe("Banner", () => {
  it("should render without error", () => {
    renderComponent(<Banner text="Banner" />);

    expectTextToBeInTheDocument("Banner");
  });

  describe("when has a icon", () => {
    it("renders Icon when icon is passed", () => {
      renderComponent(<Banner text="Banner" icon={{ name: "ribon" }} />);
      expectTextToBeInTheDocument("ribon");
    });
  });

  describe("when has a title with specific style", () => {
    it("renders title when title is passed", () => {
      renderComponent(<Banner text="Banner" title={{ text: "title" }} />);
      expectTextToBeInTheDocument("title");
    });

    it("renders title with specific color", () => {
      renderComponent(
        <Banner text="Banner" title={{ text: "title", color: "#000000" }} />,
      );
      expect(screen.getByText("title")).toHaveStyle("color: #000000;");
    });   
  });
});
