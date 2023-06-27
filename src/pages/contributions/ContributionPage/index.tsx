import { useTranslation } from "react-i18next";
import { useCurrentPatron } from "contexts/currentPatronContext";
import Select from "components/moleculars/Select";
import { useContributions } from "hooks/apiHooks/useContributions";
import { useEffect, useState } from "react";
import { Contribution } from "@ribon.io/shared/types";
import { AVG_FIRST_TIME_DONORS_PERCENTAGE } from "utils/constants";
import ImpactSection from "pages/contributions/ContributionPage/ImpactSection";
import LayoutHeader from "layouts/LayoutHeader";
import Banner from "components/moleculars/cards/Banner";
import supportBackground from "assets/images/support-background-green.svg";
import { theme } from "@ribon.io/shared/styles";
import EngagementSection from "./EngagementSection";
import * as S from "./styles";
import GiftStatusSection from "./GiftStatusSection";
import GiftBoostSection from "./GiftBoostSection";

function ContributionPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  const { currentPatron } = useCurrentPatron();
  const { contributions, isLoading: loadingContributions } = useContributions();
  const [currentContribution, setCurrentContribution] =
    useState<Contribution>();

  useEffect(() => {
    if (contributions?.length && !loadingContributions)
      setCurrentContribution(contributions[0]);
  }, [loadingContributions]);

  return (
    <S.Container>
      <LayoutHeader title={`${t("title")}, ${currentPatron?.name}!`} />
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
            defaultValue={contributions[0]}
            isSearchable
          />
        </S.SelectContributionContainer>
      )}
      <S.GiftSection>
        {currentContribution && (
          <GiftStatusSection {...currentContribution.stats} />
        )}
      </S.GiftSection>
      <S.Section>
        <S.Divider />
        {currentContribution?.stats && (
          <EngagementSection
            totalDonors={currentContribution.stats.totalTickets?.toLocaleString()}
            donationsPerPerson={currentContribution.stats.avgDonationsPerPerson?.toLocaleString()}
            firstTimeDonors={(
              currentContribution.stats.totalTickets *
              AVG_FIRST_TIME_DONORS_PERCENTAGE
            )
              .toFixed()
              .toLocaleString()}
          />
        )}
        <S.Divider />
        {currentContribution?.stats && (
          <GiftBoostSection
            amountToCause={`${currentContribution.stats.totalAmountToCause}`}
            increaseAmount={`+${currentContribution.stats.totalIncreasePercentage.toFixed(
              2,
            )}%`}
            contributionsInspiredByYou={`+${currentContribution.stats.boostAmount}`}
            ribonFee={currentContribution.stats.ribonFee.toString()}
            initialGift={currentContribution.stats.initialAmount.toString()}
          />
        )}
        <S.Divider />
      </S.Section>
      {currentContribution && (
        <ImpactSection contribution={currentContribution} />
      )}

      {Number(currentContribution?.stats.usagePercentage) > 75 && (
        <S.BannerContainer>
          <Banner
            title={{
              text: t("banner.title"),
              color: theme.colors.neutral[900],
              size: "medium",
            }}
            cardBackground={supportBackground}
            text={t("banner.description")}
            onArrowClick={() => {
              window.open(t("banner.patronDonationLink"), "_blank");
            }}
          />
        </S.BannerContainer>
      )}
    </S.Container>
  );
}

export default ContributionPage;
