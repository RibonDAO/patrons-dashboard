import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import Title from "components/moleculars/Title";
import CardImpact from "components/moleculars/cards/CardImpact";
import { Contribution, ContributionDirectImpact } from "@ribon.io/shared/types";
import { useContributionDirectImpact } from "hooks/apiHooks/useContributionDirectImpact";
import parse from "html-react-parser";
import { formattedImpactText } from "lib/formatText";
import * as S from "./styles";

type Props = {
  contribution: Contribution;
};
function ImpactSection({ contribution }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.impactSection",
  });
  const { brand } = theme.colors;
  const { directImpact } = useContributionDirectImpact(contribution);

  const icon = {
    name: "psychiatry",
    color: brand.primary[600],
    size: "24px",
  };

  return (
    <S.Container>
      <Title
        title={t("title")}
        subtitle={t("subtitle")}
        icon={icon}
        secondaryColor={brand.primary[50]}
      />
      <S.DirectImpactSectionTitle>
        {t("directImpactTitle")}
      </S.DirectImpactSectionTitle>
      <S.DirectImpactSectionSubtitle>
        {parse(t("directImpactSubtitle"))}
      </S.DirectImpactSectionSubtitle>
      <S.ImpactCardsContainer>
        {directImpact?.map((impact: ContributionDirectImpact) => (
          <CardImpact
            key={impact.nonProfit.id}
            logo={impact.nonProfit.logo}
            image={impact.nonProfit.backgroundImage}
            data={impact.totalAmountDonated}
            color={brand.primary[900]}
            label={t("cardImpactLabel")}
            title={impact.nonProfit.name}
            description={formattedImpactText(impact.formattedImpact)}
          />
        ))}
      </S.ImpactCardsContainer>
    </S.Container>
  );
}

export default ImpactSection;
