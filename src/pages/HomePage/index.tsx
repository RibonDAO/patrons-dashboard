import { useTranslation } from "react-i18next";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { useEffect } from "react";
import { TEST_PATRON, useCurrentPatron } from "contexts/currentPatronContext";
import * as S from "./styles";

function HomePage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "login",
  });
  const { setCurrentPatron } = useCurrentPatron();

  useEffect(() => {
    // TODO: Update this to get the patron from api
    async function getPatronFromApi() {
      setCurrentPatron(TEST_PATRON);
    }

    getPatronFromApi();
  }, []);

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>{t("title")}</S.Title>
    </S.Container>
  );
}
export default HomePage;
