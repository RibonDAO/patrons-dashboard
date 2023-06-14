import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import Title from "components/moleculars/Title";
import parse from "html-react-parser";
import CardImpact from "components/moleculars/cards/CardImpact";
import * as S from "./styles";

type Props = {
  impacts?: any[];
};
function ImpactSection({ impacts }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.impactSection",
  });
  const { brand } = theme.colors;

  const icon = {
    name: "group",
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
        {impacts?.map((impact) => (
          <CardImpact
            logo={impact.nonProfit.logo}
            image={impact.nonProfit.supportImage}
            data={impact.totalAmount}
            label={t("cardImpactLabel")}
            title={impact.nonProfit.name}
            description={impact.text}
          />
        ))}
      </S.ImpactCardsContainer>
    </S.Container>
  );
}

export default ImpactSection;
