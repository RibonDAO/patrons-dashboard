import { useTranslation } from "react-i18next";
import Card from "components/moleculars/cards/Card";
import Data from "components/moleculars/Data";
import { theme } from "@ribon.io/shared/styles";
import Title from "components/moleculars/Title";
import ProgressBar from "components/atomics/ProgressBar";
import { ContributionStats } from "@ribon.io/shared";
import * as S from "./styles";

function GiftStatusSection({ ...stats }: ContributionStats): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.giftStatus",
  });

  const titleAttributes = {
    title: t("title"),
    icon: { name: "alarm", color: theme.colors.brand.primary[600] },
    secondaryColor: theme.colors.brand.primary[50],
  };

  const progressBarAttributes = {
    label: `${stats.usagePercentage}%`,
    value: stats.usagePercentage,
    max: 100,
  };

  const giftAttributes = {
    label: t("gift"),
    data: stats.initialAmount.toString(),
    color: theme.colors.brand.primary[800],
  };

  const alreadyUsedAttributes = {
    label: t("already_used"),
    data: stats.usedAmount.toString(),
    color: theme.colors.brand.primary[600],
  };

  const yetToBeUsedAttributes = {
    label: t("yet_to_be_used"),
    data: stats.remainingAmount.toString(),
    color: theme.colors.neutral[800],
  };

  return (
    <Card border={false} backgroundColor={theme.colors.neutral[25]}>
      <S.Container>
        <S.TitleContainer>
          <Title {...titleAttributes} />
        </S.TitleContainer>
        <S.Mobile>
          <Data {...giftAttributes} />
          <ProgressBar {...progressBarAttributes} />
        </S.Mobile>
        <S.DataContainer>
          <S.Web>
            <Data {...giftAttributes} />
          </S.Web>
          <Data {...alreadyUsedAttributes} />
          <Data {...yetToBeUsedAttributes} />
        </S.DataContainer>
      </S.Container>
      <S.Web>
        <ProgressBar {...progressBarAttributes} />
      </S.Web>
    </Card>
  );
}

export default GiftStatusSection;
