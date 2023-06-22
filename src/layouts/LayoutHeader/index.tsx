import Header from "components/moleculars/Header";
import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import { useAuthentication } from "contexts/authenticationContext";
import { useState } from "react";
import ModalDialog from "components/moleculars/modals/ModalDialog";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type Props = {
  title: string;
};
function LayoutHeader({ title }: Props) {
  const { t } = useTranslation("translation", { keyPrefix: "layoutHeader" });
  const [signOutModalVisible, setSignOutModalVisible] = useState(false);
  const { signOut } = useAuthentication();
  const navigateTo = useNavigate();

  const handleSignOutClick = () => {
    setSignOutModalVisible(true);
  };

  const primaryButtonProps = {
    backgroundColor: theme.colors.brand.quaternary[300],
    text: t("signOutButtonText"),
    onClick: () => {
      setSignOutModalVisible(false);
      signOut();
      navigateTo("/auth");
    },
  };

  const secondaryButtonProps = {
    backgroundColor: theme.colors.neutral[600],
    text: t("stayButtonText"),
    onClick: () => {
      setSignOutModalVisible(false);
    },
  };

  return (
    <S.Container>
      <ModalDialog
        visible={signOutModalVisible}
        setVisible={setSignOutModalVisible}
        title={t("signOutTitle")}
        description={t("signOutDescription")}
        primaryButton={primaryButtonProps}
        secondaryButton={secondaryButtonProps}
      />
      <Header
        title={title}
        rightComponent={
          <S.SignOutButton
            text={t("signOutButtonText")}
            onClick={handleSignOutClick}
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
    </S.Container>
  );
}

export default LayoutHeader;
