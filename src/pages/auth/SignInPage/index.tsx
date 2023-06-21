import { useEffect } from "react";
import extractUrlValue from "lib/extractUrlValue";
import { useLocation } from "react-router";
import authApi from "services/api/authApi";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "utils/constants";
import { useNavigate } from "react-router-dom";
import { useCurrentPatron } from "contexts/currentPatronContext";
import Loader from "components/atomics/Loader";
import * as S from "./styles";

function SignInPage(): JSX.Element {
  const { search } = useLocation();
  const navigateTo = useNavigate();
  const { setCurrentPatron } = useCurrentPatron();

  useEffect(() => {
    async function authenticate() {
      const authToken = extractUrlValue("authToken", search);
      const id = extractUrlValue("id", search);
      if (id && authToken) {
        try {
          const response = await authApi.postAuthorizeFromAuthToken(
            authToken,
            id,
          );
          const token = response.headers["access-token"];
          const refreshToken = response.headers["refresh-token"];
          setCurrentPatron(response.data);
          localStorage.setItem(TOKEN_KEY, token);
          localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

          navigateTo("/contributions");
        } catch (error: any) {
          navigateTo("/");
        }
      }
    }

    authenticate();
  }, []);
  return (
    <S.Container>
      <Loader />
    </S.Container>
  );
}

export default SignInPage;
