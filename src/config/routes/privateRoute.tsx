import { getCookiesItem } from "lib/cookies";
import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "utils/constants";

function PrivateRoute({ children }: any) {
  const accessToken = getCookiesItem(TOKEN_KEY);

  return accessToken ? children : <Navigate to="/auth" />;
}

export default PrivateRoute;
