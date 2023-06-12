import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { ContributionStats } from "@ribon.io/shared";
import ModalDialog from "components/moleculars/Modal/ModalDialog";

function GiftBoostSection({ ...stats }: ContributionStats): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.giftBoostSection",
  });

  return (
    <ModalDialog
      title={t("modalFee.title")}
      description={parse(t("modalFee.description"))}
      type="info"
      visible
    />
  );
}

export default GiftBoostSection;
