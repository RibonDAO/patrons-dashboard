import React from "react";
import { theme } from "@ribon.io/shared/styles";
import Icon from "components/atomics/Icon";
import useBreakpoint from "hooks/useBreakpoint";
import Button, { ButtonProps } from "components/atomics/buttons/Button";
import * as S from "./styles";
import { defaultCustomStyles } from "../defaultCustomStyles";

export type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  type?: string;
  icon?: string;
  iconColor?: string;
  title?: string | null;
  description?: string | JSX.Element | JSX.Element[] | null;
  primaryButton?: ButtonProps | null;
  secondaryButton?: ButtonProps | null;
  children?: JSX.Element[] | JSX.Element | null;
};

function ModalDialog({
  visible = false,
  setVisible,
  title = null,
  description = null,
  primaryButton = null,
  secondaryButton = null,
  children = null,
  type,
  icon,
  iconColor,
}: Props): JSX.Element {
  const { isMobile } = useBreakpoint();

  const handleCloseModal = () => {
    setVisible(false);
  };

  const modalIcon = () => {
    if (icon) return icon;

    switch (type) {
      case "error":
        return "report";
      case "warning":
        return "warning";
      case "info":
        return "info";
      default:
        return "info";
    }
  };

  const titleColor = () => {
    switch (type) {
      case "error":
        return theme.colors.feedback.error[900];
      case "warning":
        return theme.colors.brand.quaternary[900];
      case "info":
        return theme.colors.feedback.informational[900];
      default:
        return theme.colors.feedback.informational[900];
    }
  };

  const themeColor = () => {
    if (iconColor) return iconColor;

    switch (type) {
      case "error":
        return theme.colors.feedback.error[600];
      case "warning":
        return theme.colors.brand.quaternary[200];
      case "info":
        return theme.colors.feedback.informational[500];
      default:
        return theme.colors.feedback.informational[500];
    }
  };

  const primaryButtonTextColor = () => {
    switch (type) {
      case "warning":
        return theme.colors.neutral[900];

      default:
        return theme.colors.neutral10;
    }
  };

  const primaryButtonBackgroundColor = () => {
    switch (type) {
      case "error":
        return theme.colors.feedback.error[600];
      case "warning":
        return theme.colors.brand.quaternary[200];
      case "info":
        return theme.colors.brand.primary[600];
      default:
        return theme.colors.brand.primary[600];
    }
  };

  return (
    <S.Container
      isOpen={visible}
      onRequestClose={handleCloseModal}
      style={{
        ...defaultCustomStyles,
        overlay: {
          ...defaultCustomStyles.overlay,
          alignItems: isMobile ? "flex-end" : "center",
        },
      }}
      ariaHideApp={false}
    >
      <S.CloseIcon
        name="close"
        className="close"
        onClick={handleCloseModal}
        color={theme.colors.neutral[600]}
        size="24px"
      />
      {(type || icon) && (
        <Icon
          name={modalIcon()}
          color={themeColor()}
          className={modalIcon()}
          size="40px"
        />
      )}
      {title && <S.Title style={{ color: titleColor() }}>{title}</S.Title>}
      {description && <S.Description>{description}</S.Description>}
      {primaryButton && (
        <Button
          text={primaryButton.text}
          textColor={primaryButtonTextColor()}
          backgroundColor={primaryButtonBackgroundColor()}
          onClick={primaryButton.onClick}
        />
      )}
      {secondaryButton && (
        <Button
          text={secondaryButton.text}
          textColor={theme.colors.neutral[600]}
          backgroundColor={theme.colors.neutral10}
          onClick={secondaryButton.onClick}
          borderColor={theme.colors.neutral[600]}
        />
      )}

      {children}
    </S.Container>
  );
}

export default ModalDialog;
