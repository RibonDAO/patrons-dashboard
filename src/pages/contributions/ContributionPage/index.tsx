import { useTranslation } from "react-i18next";
import Header from "components/moleculars/Header";
import { useCurrentPatron } from "contexts/currentPatronContext";
import Select from "components/moleculars/Select";
import { useContributions } from "hooks/apiHooks/useContributions";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  const { currentPatron } = useCurrentPatron();
  const { contributions } = useContributions();

  return (
    <S.Container>
      <Header title={`${t("title")}, ${currentPatron?.name}!`} />
      <S.GiftText>{t("giftText")}</S.GiftText>
      <Select name="name" values={contributions || []} valueText={(value) => value.label} />
    </S.Container>
  );
}

export default ContributionPage;
