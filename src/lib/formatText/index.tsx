import * as S from "./styles";

export function formattedImpactText(formattedImpact: string[]) {
  const [unit, impact, receiver] = formattedImpact;
  return (
    <S.Text>
      <S.HighlightedText>{unit} </S.HighlightedText>
      {impact}
      <S.HighlightedText> {receiver}</S.HighlightedText>
    </S.Text>
  );
}
