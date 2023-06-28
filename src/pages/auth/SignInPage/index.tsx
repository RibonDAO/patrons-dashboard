import { ChangeEvent, useCallback, useEffect, useState } from "react";
import extractUrlValue from "lib/extractUrlValue";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "components/atomics/buttons/Button";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { isValidEmail } from "lib/validators";
import ModalDialog from "components/moleculars/modals/ModalDialog";
import { useAuthentication } from "contexts/authenticationContext";
import rightTopShape from "assets/images/shape-top-right.svg";
import leftBottomShape from "assets/images/shape-bottom-left.svg";
import Spinner from "components/atomics/Spinner";
import * as S from "./styles";

function SignInPage(): JSX.Element {
  const { search } = useLocation();
  const navigateTo = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
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
      onError: () => {
        setErrorModalVisible(true);
      },
    });
  };

  const invalidEmail = useCallback(() => !isValidEmail(email), [email]);

  return (
    <S.Container>
      {loading ? (
        <Spinner size="32px" />
      ) : (
        <S.ContentContainer>
          <S.RightTopShape src={rightTopShape} />
          <S.LeftBottomShape src={leftBottomShape} />
          <ModalDialog
            visible={modalVisible}
            setVisible={setModalVisible}
            title={t("emailSent")}
            type="success"
            description={t("emailSentDescription")}
          />
          <ModalDialog
            visible={errorModalVisible}
            setVisible={setErrorModalVisible}
            title={t("emailSentError")}
            type="error"
            description={t("emailSentErrorDescription")}
          />
          <S.RibonLogo src={RibonIcon} alt="Ribon" />
          <S.WelcomeText>{t("welcomeText")}</S.WelcomeText>
          <S.FormContainer>
            <S.Input
              key="email"
              name="email"
              id="email"
              type="email"
              placeholder="E-mail"
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
            <S.Link href={t("termsLink")} target="_blank" rel="noreferrer">
              {t("termsText")}
            </S.Link>
            {t("footerEndText")}{" "}
            <S.Link
              href={t("privacyPolicyLink")}
              target="_blank"
              rel="noreferrer"
            >
              {t("privacyPolicyText")}
            </S.Link>
          </S.FooterText>
        </S.ContentContainer>
      )}
    </S.Container>
  );
}

export default SignInPage;
