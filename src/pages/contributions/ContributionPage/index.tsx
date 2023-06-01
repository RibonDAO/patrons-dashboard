import { useTranslation } from "react-i18next";
import Header from "components/moleculars/Header";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  return (
    <S.Container>
      <Header title={`${t("title")}, Rina Sawayama!`} />
    </S.Container>
  );
}

export default ContributionPage;
