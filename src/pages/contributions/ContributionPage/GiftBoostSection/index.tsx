import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import ModalDialog from "components/moleculars/Modal/ModalDialog";

function GiftBoostSection(): JSX.Element {
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
