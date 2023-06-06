/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";

export type IconProps = {
  name: string;
  size?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

function Icon({
  name,
  color,
  size,
  className,
  onClick,
  ...props
}: IconProps): JSX.Element {
  return (
    <S.Icon
      color={color}
      size={size}
      {...props}
      onClick={onClick}
      className={`${className} material-symbols-rounded`}
      data-testid={`icon-${name}`}
    >
      {name}
    </S.Icon>
  );
}

export default Icon;
