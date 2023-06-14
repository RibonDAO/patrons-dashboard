import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import * as S from "./styles";

type Props = {
  initialGift: string;
  contributionsInspiredByYou: string;
  ribonFee: string;
  amountToCause: string;
};
function AmountToCauseTable({
  contributionsInspiredByYou,
  initialGift,
  amountToCause,
  ribonFee,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "contributions.giftBoostSection",
  });

  const { neutral, feedback } = theme.colors;
  return (
    <S.Table>
      <tr>
        <S.LeftLabel>{t("initialGift")}</S.LeftLabel>
        <S.RightLabel style={{ color: neutral[700] }}>
          {initialGift}
        </S.RightLabel>
      </tr>
      <tr>
        <S.LeftLabel>{t("contributionsInspiredByYou")}</S.LeftLabel>
        <S.RightLabel style={{ color: neutral[700] }}>
          {contributionsInspiredByYou}
        </S.RightLabel>
      </tr>
      <tr>
        <S.LeftLabel>{t("ribonFee")}</S.LeftLabel>
        <S.RightLabel style={{ color: feedback.error[600] }}>
          -{ribonFee}
        </S.RightLabel>
      </tr>
      <tr>
        <td colSpan={2}>
          <S.Divider />
        </td>
      </tr>
      <tr>
        <S.LeftLabel>{t("amountToCause")}</S.LeftLabel>
        <S.TotalLabel>{amountToCause}</S.TotalLabel>
      </tr>
    </S.Table>
  );
}

export default AmountToCauseTable;
