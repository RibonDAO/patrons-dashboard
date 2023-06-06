import * as S from "./styles";

export type Props = {
  data: string;
  label: string;
  color: string;
};
function Data({ data, label, color }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Data color={color}>{data}</S.Data>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}

export default Data;
