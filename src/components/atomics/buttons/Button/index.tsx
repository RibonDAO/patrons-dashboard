import React, { ButtonHTMLAttributes } from "react";
import { ReactComponent as RibonIcon } from "assets/icons/ribon.svg";
import { theme } from "@ribon.io/shared/styles";
import Icon, { IconProps } from "components/atomics/Icon";
import * as S from "./styles";

export type onClickType = () => void;

export type ButtonProps = {
  text: string | JSX.Element;
  textColor?: string;
  backgroundColor?: string;
  softDisabled?: boolean;
  borderColor?: string;
  ribons?: boolean;
  ribonsColor?: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  onClick?: onClickType;
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  size?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const { primary } = theme.colors.brand;

export default function Button({
  text,
  textColor,
  backgroundColor = primary[300],
  softDisabled = false,
  borderColor = "",
  ribons = false,
  ribonsColor = primary[300],
  leftIcon,
  rightIcon,
  onClick,
  outline = false,
  disabled = false,
  round = false,
  size = "large",
  ...props
}: ButtonProps): JSX.Element {
  function activeTextColor() {
    if (outline && !textColor) return primary[300];
    if (softDisabled) return theme.colors.neutral[500];
    if (!textColor) return theme.colors.neutral10;

    return textColor;
  }

  function activeBackgroundColor() {
    if (outline || softDisabled) return theme.colors.neutral10;
    if (disabled) return theme.colors.neutral[500];

    return backgroundColor;
  }

  function activeBorderColor() {
    if (outline && !borderColor) return primary[300];
    if (disabled && !borderColor) return theme.colors.neutral[500];
    if (softDisabled) return theme.colors.neutral[200];

    return borderColor;
  }

  function borderRadius() {
    if (round) return "80px";

    return "8px";
  }

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <S.Container
      textColor={activeTextColor()}
      backgroundColor={activeBackgroundColor()}
      borderColor={activeBorderColor()}
      ribonsColor={ribonsColor}
      onClick={handleClick}
      disabled={disabled}
      borderRadius={borderRadius()}
      size={size}
      {...props}
    >
      {leftIcon && <Icon {...leftIcon} id="left-icon" />}
      {text}
      {rightIcon && <Icon {...rightIcon} id="right-icon" />}
      {ribons && <RibonIcon />}
    </S.Container>
  );
}
