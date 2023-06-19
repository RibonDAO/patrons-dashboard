import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Card from "components/moleculars/cards/Card";
import indirectImpactImage from "assets/images/indirect-impact.svg";
import Data from "components/moleculars/Data";
import Title from "components/moleculars/Title";
import { theme } from "@ribon.io/shared";
import * as S from "./styles";

type Props = {
  amount: string;
  newContributors: string;
  patrons: string;
};
function IndirectImpactSection({
  amount,
  newContributors,
  patrons,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.impactSection.indirect",
  });
  const { brand } = theme.colors;
  return (
    <>
      <S.IndirectImpactSectionTitle>{t("title")}</S.IndirectImpactSectionTitle>
      <S.IndirectImpactSectionSubtitle>
        {parse(t("subtitle"))}
      </S.IndirectImpactSectionSubtitle>
      <Card border backgroundColor="transparent">
        <S.Container>
          <img src={indirectImpactImage} alt="indirect-impact" />
          <>
            <Data data={newContributors} label-={t("card.newContributors")} />
            <Data data={patrons} label-={t("card.patrons")} />
            <Title
              title={t("card.action1")}
              icon={{ name: "confirmation-number", color: brand.primary[600] }}
              secondaryColor={brand.primary[50]}
            />
          </>
        </S.Container>
      </Card>
    </>
  );
}

export default IndirectImpactSection;
