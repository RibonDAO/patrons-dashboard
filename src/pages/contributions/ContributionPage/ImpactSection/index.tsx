import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import Title from "components/moleculars/Title";
import { Contribution } from "@ribon.io/shared/types";
import { useContributionDirectImpact } from "hooks/apiHooks/useContributionDirectImpact";
import * as S from "./styles";
import DirectImpactSection from "./DirectImpact";
import IndirectImpactSection from "./IndirectImpact";

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
    <S.ImpactContainer>
      <Title
        title={t("title")}
        subtitle={t("subtitle")}
        icon={icon}
        secondaryColor={brand.primary[50]}
      />
      {directImpact && <DirectImpactSection directImpact={directImpact} />}
      <IndirectImpactSection
        boost={contribution.stats.boostAmount}
        newContributors={contribution.stats.boostNewContributors}
        newPatrons={contribution.stats.boostNewPatrons}
      />
    </S.ImpactContainer>
  );
}

export default ImpactSection;
