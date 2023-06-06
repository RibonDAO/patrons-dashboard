/* eslint-disable react/require-default-props */
import { useRef } from "react";
import * as S from "./styles";

export type Props = {
  value: number;
  max: number;
  label: string;
  color?: string;
  backgroundColor?: string;
};

function ProgressBar({
  value,
  max,
  label,
  color,
  backgroundColor,
}: Props): JSX.Element {
  const percentage = (value / max) * 100;

  const wrapperRef = useRef(null);
  return (
    <S.Container ref={wrapperRef} backgroundColor={backgroundColor}>
      <S.Progress progress={percentage} color={color}>
        <S.Text>{label}</S.Text>
      </S.Progress>
    </S.Container>
  );
}

export default ProgressBar;
