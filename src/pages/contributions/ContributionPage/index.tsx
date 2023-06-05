import { useTranslation } from "react-i18next";
import Header from "components/moleculars/Header";
import { useCurrentPatron } from "contexts/currentPatronContext";
import Select from "components/moleculars/Select";
import { useContributions } from "hooks/apiHooks/useContributions";
import { useEffect, useState } from "react";
import { Contribution } from "@ribon.io/shared/types";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  const { currentPatron } = useCurrentPatron();
  const { contributions } = useContributions();

  // eslint-disable-next-line no-unused-vars
  const [currentContribution, setCurrentContribution] =
    useState<Contribution>();

  useEffect(() => {
    if (contributions?.length) {
      setCurrentContribution(contributions[0]);
    }
  }, [JSON.stringify(contributions)]);

  return (
    <S.Container>
      <Header title={`${t("title")}, ${currentPatron?.name}!`} />
      <S.GiftText>{t("giftText")}</S.GiftText>
      {contributions && (
        <Select
          name="name"
          values={contributions}
          valueText={(value) => value.label}
          onOptionChanged={(contribution) => {
            setCurrentContribution(contribution);
          }}
        />
      )}
    </S.Container>
  );
}

export default ContributionPage;
