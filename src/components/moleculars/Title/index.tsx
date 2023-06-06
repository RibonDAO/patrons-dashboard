import Icon, { IconProps } from "components/atomics/Icon";

import * as S from "./styles";

export type Props = {
  title: string;
  icon: IconProps;
  secondaryColor: string;
};
function Title({ title, icon, secondaryColor }: Props): JSX.Element {
  return (
    <S.Title>
      <S.IconBox secondaryColor={secondaryColor}>
        <Icon {...icon} />
      </S.IconBox>
      {title}
    </S.Title>
  );
}

export default Title;
