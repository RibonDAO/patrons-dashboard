import Icon, { IconProps } from "components/atomics/Icon";

import * as S from "./styles";

export type Props = {
  text: string | JSX.Element;
  icon: IconProps;
  secondaryColor: string;
};
function Subtitle({ text, icon, secondaryColor }: Props): JSX.Element {
  return (
    <S.Container>
      <S.IconBox secondaryColor={secondaryColor}>
        <Icon {...icon} />
      </S.IconBox>
      <S.Subtitle>{text}</S.Subtitle>
    </S.Container>
  );
}

export default Subtitle;
