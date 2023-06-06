import { useTranslation } from "react-i18next";
import Card from "components/moleculars/Card";
import Data from "components/moleculars/Data";
import ProgressBar from "components/atomics/ProgressBar";
import { theme } from "@ribon.io/shared/styles";
import Title from "components/moleculars/Title";

function GiftStatusSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions",
  });

  return (
    <Card border={false} backgroundColor={theme.colors.neutral[25]}>
      <Title
        title={t("giftStatus.title")}
        icon={{ name: "alarm", color: theme.colors.brand.primary[600] }}
        secondaryColor={theme.colors.brand.primary[50]}
      />
      <Data
        label={t("giftStatus.gift")}
        data="0"
        color={theme.colors.brand.primary[800]}
      />
      <Data
        label={t("giftStatus.already_used")}
        data="0"
        color={theme.colors.brand.primary[600]}
      />
      <Data
        label={t("giftStatus.yet_to_be_used")}
        data="0"
        color={theme.colors.neutral[800]}
      />
      <ProgressBar label="60%" value={60} max={100} />
    </Card>
  );
}

export default GiftStatusSection;
