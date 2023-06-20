import { AxiosResponse } from "axios";
import { apiPost } from "..";

const authApi = {
  postAuthorizeFromAuthToken: (authToken: string, id: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/authorize_from_auth_token", { authToken, id }),
  postRefreshToken: (refreshToken: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/refresh_token", { refreshToken }),
};

export default authApi;
