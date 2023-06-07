import Card from "components/moleculars/Card";
import Title from "components/moleculars/Title";
import { useTranslation, Trans } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import Data from "components/moleculars/Data";
import Subtitle from "components/moleculars/Subtitle";
import Icon from "components/atomics/Icon";
import * as S from "./styles";

type Props = {
  donationsPerPerson: string;
  totalDonors: string;
  firstTimeDonors: string;
};
function EngagementSection({
  donationsPerPerson,
  firstTimeDonors,
  totalDonors,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.engagementSection",
  });
  const { brand, neutral } = theme.colors;

  const icon = {
    name: "group",
    color: brand.tertiary[800],
    size: "24px",
  };

  return (
    <Card border backgroundColor="transparent">
      <S.Container>
        <S.TitleContainer>
          <Title
            title={t("title")}
            icon={icon}
            secondaryColor={brand.tertiary[50]}
          />
        </S.TitleContainer>
        <S.DataContainer>
          <Data
            data={totalDonors}
            label={t("totalDonors")}
            color={brand.tertiary[800]}
          />
        </S.DataContainer>
        <S.DataContainer>
          <Data
            data={donationsPerPerson}
            label={t("donationsPerPerson")}
            color={brand.tertiary[800]}
          />
        </S.DataContainer>
        <S.TooltipCardContainer>
          <Card border={false} backgroundColor="transparent">
            <S.InnerCardContainer>
              <S.SubtitleContainer>
                <Subtitle
                  text={
                    <Trans
                      i18nKey="contributions.engagementSection.firstGiftText"
                      values={{ amount: firstTimeDonors }}
                    />
                  }
                  icon={{
                    name: "emoji_objects",
                    size: "20px",
                    color: brand.tertiary[800],
                  }}
                  secondaryColor={brand.tertiary[25]}
                />
              </S.SubtitleContainer>
              <Icon name="info" size="16px" color={neutral[600]} />
            </S.InnerCardContainer>
          </Card>
        </S.TooltipCardContainer>
      </S.Container>
    </Card>
  );
}

export default EngagementSection;
