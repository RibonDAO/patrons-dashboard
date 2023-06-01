import RibonIcon from "assets/icons/ribon-square-icon.svg";
import * as S from "./styles";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <S.Container>
      <S.Icon src={RibonIcon} alt="ribon-logo" />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Header;
