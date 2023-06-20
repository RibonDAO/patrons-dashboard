import {
  api,
  initializeApi as initializeSharedApi,
  emptyRequest,
} from "@ribon.io/shared/services";
import { initializeHooks } from "@ribon.io/shared/hooks";
import { REFRESH_TOKEN_KEY, RIBON_API, TOKEN_KEY } from "utils/constants";
import { currentPatronFromStorage } from "lib/currentPatron";
import { AxiosRequestConfig } from "axios";
import authApi from "services/api/authApi";

const API_SCOPE = "/patrons/v1";
export const baseURL = RIBON_API;
export function initializeApi() {
  const patron = currentPatronFromStorage();
  const authHeaders = {
    Email: patron?.email || "",
    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  };

  initializeSharedApi({ url: baseURL, headers: authHeaders });

  initializeHooks({
    initializeApiOptions: { url: baseURL, headers: authHeaders },
  });
}

async function requestNewToken() {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) return null;

    const res = await authApi.postRefreshToken(refreshToken);
    const newToken = res.headers["access-token"];
    const newRefreshToken = res.headers["refresh-token"];

    localStorage.setItem(TOKEN_KEY, newToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);

    return newToken;
  } catch (err) {
    console.log("er", err);
    return null;
  }
}

api.interceptors.response.use(
  (response) => ({
    ...response,
  }),
  async (error) => {
    const originalRequest = error.config;
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 403 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      const newToken = await requestNewToken();
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

function apiGet(url: string, config?: AxiosRequestConfig) {
  if (config) return api.get(`${API_SCOPE}/${url}`, config);

  return api.get(`${API_SCOPE}/${url}`);
}

function apiPost(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.post(`${API_SCOPE}/${url}`, data, config);

  return api.post(`${API_SCOPE}/${url}`, data);
}

function apiPut(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.put(`${API_SCOPE}/${url}`, data, config);

  return api.put(`${API_SCOPE}/${url}`, data);
}

function apiDelete(url: string, config?: AxiosRequestConfig) {
  if (config) return api.delete(`${API_SCOPE}/${url}`, config);

  return api.delete(`${API_SCOPE}/${url}`);
}

export { apiGet, apiDelete, apiPut, apiPost, emptyRequest };
export default api;
