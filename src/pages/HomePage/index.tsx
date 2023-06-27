import { useTranslation } from "react-i18next";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentPatron } from "contexts/currentPatronContext";
import * as S from "./styles";

function HomePage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "login",
  });
  const navigateTo = useNavigate();
  const { currentPatron } = useCurrentPatron();

  useEffect(() => {
    if (currentPatron) {
      navigateTo("/contributions");
    } else {
      navigateTo("/auth");
    }
  }, []);

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>{t("title")}</S.Title>
    </S.Container>
  );
}
export default HomePage;
