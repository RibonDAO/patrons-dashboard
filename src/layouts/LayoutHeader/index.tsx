import Header from "components/moleculars/Header";
import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import * as S from "./styles";

type Props = {
  title: string;
};
function LayoutHeader({ title }: Props) {
  const { t } = useTranslation("translation", { keyPrefix: "layoutHeader" });
  return (
    <Header
      title={title}
      rightComponent={
        <S.SignOutButton
          text={t("signOut")}
          onClick={() => {}}
          outline
          color={theme.colors.brand.primary[600]}
          borderColor={theme.colors.brand.primary[600]}
          textColor={theme.colors.brand.primary[600]}
          leftIcon={{
            name: "logout",
            size: "16px",
            color: theme.colors.brand.primary[600],
          }}
          size="small"
        />
      }
    />
  );
}

export default LayoutHeader;
