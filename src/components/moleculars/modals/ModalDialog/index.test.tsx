import React from "react";
import { renderComponent } from "config/testUtils";
import {
  expectTextNotToBeInTheDocument,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import { fireEvent, screen } from "@testing-library/react";
import { theme } from "@ribon.io/shared/styles";
import ModalDialog from ".";

describe("ModalDialog", () => {
  it("should render without error", () => {
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        setVisible={() => {}}
      />,
    );

    expectTextToBeInTheDocument("title of modal");
    expectTextToBeInTheDocument("modal");
  });

  it("should not render when visible is false", () => {
    renderComponent(
      <ModalDialog
        visible={false}
        setVisible={() => {}}
        title="title of modal"
        description="modal"
      />,
    );

    expectTextNotToBeInTheDocument("title of modal");
    expectTextNotToBeInTheDocument("modal");
  });

  it("should render and call the primary button", () => {
    const onClick = jest.fn();
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        primaryButton={{ text: "Button", onClick }}
        setVisible={() => {}}
      />,
    );

    const buttonElement = screen.getByText("Button");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render and call the secondary button", () => {
    const onClick = jest.fn();
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        secondaryButton={{ text: "Button", onClick }}
        setVisible={() => {}}
      />,
    );

    const buttonElement = screen.getByText("Button");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render modal of type error", () => {
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        type="error"
        primaryButton={{ text: "Button" }}
        setVisible={() => {}}
      />,
    );

    const titleElement = screen.getByText("title of modal");
    const primaryButtonElement = screen.getByText("Button");
    const iconElement = screen.getByTestId("icon-report");

    expect(iconElement).toHaveStyle({
      color: theme.colors.feedback.error[600],
    });

    expect(titleElement).toHaveStyle({
      color: theme.colors.feedback.error[900],
    });

    expect(primaryButtonElement).toHaveStyle({
      color: theme.colors.neutral10,
      backgroundColor: theme.colors.feedback.error[600],
    });
  });

  it("should render modal of type warning", () => {
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        type="warning"
        primaryButton={{ text: "Button" }}
        setVisible={() => {}}
      />,
    );

    const titleElement = screen.getByText("title of modal");
    const primaryButtonElement = screen.getByText("Button");
    const iconElement = screen.getByTestId("icon-warning");

    expect(iconElement).toHaveStyle({
      color: theme.colors.brand.quaternary[200],
    });

    expect(titleElement).toHaveStyle({
      color: theme.colors.brand.quaternary[900],
    });

    expect(primaryButtonElement).toHaveStyle({
      color: theme.colors.neutral[900],
      backgroundColor: theme.colors.brand.quaternary[200],
    });
  });

  it("should render modal of type info", () => {
    renderComponent(
      <ModalDialog
        visible
        title="title of modal"
        description="modal"
        type="info"
        primaryButton={{ text: "Button" }}
        setVisible={() => {}}
      />,
    );

    const titleElement = screen.getByText("title of modal");
    const primaryButtonElement = screen.getByText("Button");
    const iconElement = screen.getByTestId("icon-info");

    expect(iconElement).toHaveStyle({
      color: theme.colors.feedback.informational[500],
    });

    expect(titleElement).toHaveStyle({
      color: theme.colors.feedback.informational[900],
    });

    expect(primaryButtonElement).toHaveStyle({
      color: theme.colors.neutral10,
      backgroundColor: theme.colors.brand.primary[600],
    });
  });
});
