import { ChangeEvent, useCallback, useEffect, useState } from "react";
import extractUrlValue from "lib/extractUrlValue";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Loader from "components/atomics/Loader";
import { useTranslation } from "react-i18next";
import Button from "components/atomics/buttons/Button";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { isValidEmail } from "lib/validators";
import ModalDialog from "components/moleculars/modals/ModalDialog";
import { useAuthentication } from "contexts/authenticationContext";
import * as S from "./styles";

function SignInPage(): JSX.Element {
  const { search } = useLocation();
  const navigateTo = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "auth.signInPage",
  });
  const [email, setEmail] = useState("");
  const { signInByAuthToken, loading, sendAuthenticationLink } =
    useAuthentication();

  useEffect(() => {
    async function authenticate() {
      const authToken = extractUrlValue("authToken", search);
      const id = extractUrlValue("id", search);

      if (id && authToken) {
        signInByAuthToken({
          authToken,
          id,
          onSuccess: () => {
            navigateTo("/contributions");
          },
        });
      }
    }

    authenticate();
  }, []);

  const onEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    sendAuthenticationLink({
      email,
      onSuccess: () => {
        setModalVisible(true);
        setEmail("");
      },
    });
  };

  const invalidEmail = useCallback(() => !isValidEmail(email), [email]);

  return (
    <S.Container>
      {loading ? (
        <Loader />
      ) : (
        <S.ContentContainer>
          <ModalDialog
            visible={modalVisible}
            setVisible={setModalVisible}
            title={t("emailSent")}
            type="success"
            description={t("emailSentDescription")}
          />
          <S.RibonLogo src={RibonIcon} alt="Ribon" />
          <S.WelcomeText>{t("welcomeText")}</S.WelcomeText>
          <S.FormContainer>
            <S.Input
              key="email"
              name="email"
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={onEmailInputChange}
              required
            />

            <Button
              text={t("signInButton")}
              onClick={handleSubmit}
              disabled={invalidEmail()}
            />
          </S.FormContainer>

          <S.FooterText>
            {t("footerStartText")}{" "}
            <a href={t("termsLink")} target="_blank" rel="noreferrer">
              {t("termsText")}
            </a>
            {t("footerEndText")}{" "}
            <a href={t("privacyPolicyLink")} target="_blank" rel="noreferrer">
              {t("privacyPolicyText")}
            </a>
          </S.FooterText>
        </S.ContentContainer>
      )}
    </S.Container>
  );
}

export default SignInPage;
