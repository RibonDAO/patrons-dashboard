import { useTranslation } from "react-i18next";
import RibonIcon from "assets/icons/ribon-icon.svg";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>{t("title")}</S.Title>
    </S.Container>
  );
}
export default ContributionPage;
