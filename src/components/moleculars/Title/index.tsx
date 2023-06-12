import Icon, { IconProps } from "components/atomics/Icon";

import * as S from "./styles";

export type Props = {
  title: string;
  icon: IconProps;
  secondaryColor: string;
};
function Title({ title, icon, secondaryColor }: Props): JSX.Element {
  return (
    <S.Container>
      <S.IconBox secondaryColor={secondaryColor}>
        <Icon {...icon} />
      </S.IconBox>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Title;
