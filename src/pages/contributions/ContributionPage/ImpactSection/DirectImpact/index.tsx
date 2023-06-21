import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import CardImpact from "components/moleculars/cards/CardImpact";
import { ContributionDirectImpact } from "@ribon.io/shared/types";
import parse from "html-react-parser";
import { formattedImpactText } from "lib/formatText";
import * as S from "./styles";

type Props = {
  directImpact: ContributionDirectImpact[];
};
function DirectImpactSection({ directImpact }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.impactSection.direct",
  });
  const { brand } = theme.colors;

  return (
    <>
      <S.DirectImpactSectionTitle>{t("title")}</S.DirectImpactSectionTitle>
      <S.DirectImpactSectionSubtitle>
        {parse(t("subtitle"))}
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
    </>
  );
}

export default DirectImpactSection;
