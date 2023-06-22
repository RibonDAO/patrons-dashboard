import RibonIcon from "assets/icons/ribon-square-icon.svg";
import * as S from "./styles";

type Props = {
  title: string;
  rightComponent?: JSX.Element;
};

function Header({ title, rightComponent }: Props) {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Icon src={RibonIcon} alt="ribon-logo" />
        <S.RightContainer>{rightComponent}</S.RightContainer>
      </S.TopContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Header;
