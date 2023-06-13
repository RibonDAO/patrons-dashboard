import Data from "components/moleculars/Data";
import * as S from "./styles";

export type Props = {
  logo: string;
  image: string;
  title: string | number;
  data: string;
  label?: string;
  color?: string;
  description?: string;
};
function CardImpact({
  logo,
  image,
  title,
  data,
  color,
  label,
  description,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.CardContainer>
        <S.Logo src={logo} />
        <S.Title>{title}</S.Title>
        <Data data={data} label={label} color={color} />
        {description && <S.Label>{description}</S.Label>}
      </S.CardContainer>
    </S.Container>
  );
}

export default CardImpact;
