import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import indirectImpactImage from "assets/images/indirect-impact.svg";
import Data from "components/moleculars/Data";
import { theme } from "@ribon.io/shared/styles";
import Subtitle from "components/moleculars/Subtitle";
import * as S from "./styles";

type Props = {
  boost: string;
  newContributors: number;
  newPatrons: number;
};
function IndirectImpactSection({
  boost,
  newContributors,
  newPatrons,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.impactSection.indirect",
  });
  const { brand, neutral } = theme.colors;

  return (
    <>
      <S.IndirectImpactSectionTitle>{t("title")}</S.IndirectImpactSectionTitle>
      <S.IndirectImpactSectionSubtitle>
        {parse(t("subtitle"))}
      </S.IndirectImpactSectionSubtitle>
      <S.Card>
        <S.IndirectImpactContainer>
          <S.TextContainer>
            <S.Title>{parse(t("card.title", { boost }))}</S.Title>
            <S.DataContainer>
              <Data
                data={newContributors?.toString()}
                label={t("card.newContributors")}
                color={brand.primary[800]}
              />
              <Data
                data={newPatrons?.toString()}
                label={t("card.patrons")}
                color={brand.primary[800]}
              />
            </S.DataContainer>
            <S.ActionsTextContainer>
              <S.Subtitle>{t("card.ribonActions.subtitle")}</S.Subtitle>
              <S.Description>
                {t("card.ribonActions.description", { boost })}
              </S.Description>
            </S.ActionsTextContainer>
            <S.ActionsContainer>
              <Subtitle
                text={t("card.ribonActions.action1")}
                color={neutral[800]}
                icon={{ name: "alarm", color: brand.primary[600] }}
                secondaryColor={brand.primary[50]}
                position="center"
              />
              <Subtitle
                text={t("card.ribonActions.action2")}
                color={neutral[800]}
                icon={{ name: "diversity_1", color: brand.primary[600] }}
                secondaryColor={brand.primary[50]}
                position="center"
              />
              <Subtitle
                text={t("card.ribonActions.action3")}
                color={neutral[800]}
                icon={{ name: "volunteer_activism", color: brand.primary[600] }}
                secondaryColor={brand.primary[50]}
                position="center"
              />
            </S.ActionsContainer>
            <S.SpamWeb>{t("card.finalMessage")}</S.SpamWeb>
          </S.TextContainer>
          <img src={indirectImpactImage} alt="indirect-impact" />
          <S.SpamMobile>{t("card.finalMessage")}</S.SpamMobile>
        </S.IndirectImpactContainer>
      </S.Card>
    </>
  );
}

export default IndirectImpactSection;
