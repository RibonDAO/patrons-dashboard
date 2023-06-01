import { useTranslation } from "react-i18next";
import Header from "components/moleculars/Header";
import { useCurrentPatron } from "contexts/currentPatronContext";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  const { currentPatron } = useCurrentPatron();

  return (
    <S.Container>
      <Header title={`${t("title")}, ${currentPatron?.name}!`} />
    </S.Container>
  );
}

export default ContributionPage;
