import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import ModalDialog from "components/moleculars/modals/ModalDialog";
import { useState } from "react";
import Card from "components/moleculars/Card";
import Title from "components/moleculars/Title";
import Data from "components/moleculars/Data";
import { theme } from "@ribon.io/shared/styles";
import Icon from "components/atomics/Icon";
import AmountToCauseTable from "pages/contributions/ContributionPage/GiftBoostSection/AmountToCauseTable";
import * as S from "./styles";

type Props = {
  contributionsInspiredByYou: string;
  increaseAmount: string;
  amountToCause: string;
  ribonFee: string;
  initialGift: string;
};
function GiftBoostSection({
  contributionsInspiredByYou,
  increaseAmount,
  amountToCause,
  ribonFee,
  initialGift,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.giftBoostSection",
  });
  const [ribonFeeTooltipVisible, setRibonFeeTooltipVisible] = useState(false);
  const [amountToCauseTooltipVisible, setAmountToCauseTooltipVisible] =
    useState(false);
  const { brand, neutral, feedback } = theme.colors;
  const icon = {
    name: "trending_up",
    color: brand.secondary[600],
    size: "24px",
  };

  return (
    <Card border backgroundColor="transparent">
      <ModalDialog
        title={t("modalFee.title")}
        description={parse(t("modalFee.description"))}
        type="info"
        visible={ribonFeeTooltipVisible}
        setVisible={setRibonFeeTooltipVisible}
      />
      <ModalDialog
        type="info"
        iconColor={feedback.success[200]}
        visible={amountToCauseTooltipVisible}
        setVisible={setAmountToCauseTooltipVisible}
      >
        <AmountToCauseTable
          contributionsInspiredByYou={contributionsInspiredByYou}
          initialGift={initialGift}
          amountToCause={amountToCause}
          ribonFee={ribonFee}
        />
      </ModalDialog>
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
            data={contributionsInspiredByYou}
            label={t("contributionsInspiredByYou")}
            color={brand.tertiary[800]}
          />
        </S.DataContainer>
        <S.DataContainer>
          <Data
            data={increaseAmount}
            label={t("increaseAmount")}
            color={brand.secondary[600]}
          />
        </S.DataContainer>
        <S.DataContainer>
          <Data
            data={amountToCause}
            label={t("amountToCause")}
            color={brand.secondary[600]}
          />
          <S.IconContainer
            onClick={() => {
              setAmountToCauseTooltipVisible(true);
            }}
            aria-label="tooltip values transparency"
          >
            <Icon name="info" size="16px" color={neutral[600]} />
          </S.IconContainer>
        </S.DataContainer>
        <S.DataContainerSmallText>
          <Data
            data={parse(
              `${ribonFee} <span class="fee-percentage">(≈10%)</span>`,
            )}
            label={t("ribonFee")}
            color={neutral[700]}
          />
          <S.IconContainer
            onClick={() => {
              setRibonFeeTooltipVisible(true);
            }}
            aria-label="tooltip ribon fees transparency"
          >
            <Icon name="info" size="16px" color={neutral[600]} />
          </S.IconContainer>
        </S.DataContainerSmallText>
      </S.Container>
    </Card>
  );
}

export default GiftBoostSection;
