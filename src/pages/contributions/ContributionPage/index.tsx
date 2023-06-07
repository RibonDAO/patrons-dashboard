import { useTranslation } from "react-i18next";
import Header from "components/moleculars/Header";
import { useCurrentPatron } from "contexts/currentPatronContext";
import Select from "components/moleculars/Select";
import { useContributions } from "hooks/apiHooks/useContributions";
import { useEffect, useState } from "react";
import { Contribution } from "@ribon.io/shared/types";
import { AVG_FIRST_TIME_DONORS_PERCENTAGE } from "utils/constants";
import EngagementSection from "./EngagementSection";
import * as S from "./styles";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  const { currentPatron } = useCurrentPatron();
  const { contributions } = useContributions();
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
        <S.SelectContributionContainer>
          <Select
            name="name"
            values={contributions}
            valueText={(value) => value.label}
            onOptionChanged={(contribution) => {
              setCurrentContribution(contribution);
            }}
          />
        </S.SelectContributionContainer>
      )}
      <S.Section>
        <S.Divider />
        {currentContribution?.stats && (
          <EngagementSection
            totalDonors={currentContribution.stats.totalTickets?.toLocaleString()}
            donationsPerPerson={currentContribution.stats.avgDonationsPerPerson?.toLocaleString()}
            firstTimeDonors={(
              currentContribution.stats.totalTickets *
              AVG_FIRST_TIME_DONORS_PERCENTAGE
            ).toLocaleString()}
          />
        )}
        <S.Divider />
      </S.Section>
    </S.Container>
  );
}

export default ContributionPage;
