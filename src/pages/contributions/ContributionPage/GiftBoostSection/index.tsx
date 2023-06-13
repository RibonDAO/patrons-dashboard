import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import ModalDialog from "components/moleculars/modals/ModalDialog";
import { useState } from "react";

function GiftBoostSection(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.giftBoostSection",
  });
  const [ribonFeeTooltipVisible, setRibonFeeTooltipVisible] = useState(false);

  return (
    <ModalDialog
      title={t("modalFee.title")}
      description={parse(t("modalFee.description"))}
      type="info"
      visible={ribonFeeTooltipVisible}
      setVisible={setRibonFeeTooltipVisible}
    />
  );
}

export default GiftBoostSection;
