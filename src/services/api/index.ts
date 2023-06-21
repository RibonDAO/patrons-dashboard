import Axios, { AxiosRequestConfig } from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import { REFRESH_TOKEN_KEY, RIBON_API, TOKEN_KEY } from "utils/constants";
import authApi from "services/api/authApi";

export const baseURL = RIBON_API;
export const API_SCOPE = "/patrons/v1";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

api.interceptors.request.use((request) =>
  request?.data
    ? { ...request, data: snakeCaseKeys(request?.data, { deep: true }) }
    : request,
);

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
    return null;
  }
}
api.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
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

api.interceptors.request.use((config) => {
  const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  };
  // eslint-disable-next-line no-param-reassign
  config.headers = { ...authHeaders, ...config.headers };

  return config;
});

export function apiGet(url: string, config?: AxiosRequestConfig) {
  if (config) return api.get(`${API_SCOPE}/${url}`, config);

  return api.get(`${API_SCOPE}/${url}`);
}

export function apiGetWithParams(
  url: string,
  params: any,
  config?: AxiosRequestConfig,
) {
  if (config)
    return api.get(`${API_SCOPE}/${url}`, {
      ...config,
      params,
    });

  return api.get(`${API_SCOPE}/${url}`, {
    params,
  });
}

export function apiPost(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.post(`${API_SCOPE}/${url}`, data, config);

  return api.post(`${API_SCOPE}/${url}`, data);
}

export function apiPut(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.put(`${API_SCOPE}/${url}`, data, config);

  return api.put(`${API_SCOPE}/${url}`, data);
}

export function apiDelete(url: string, config?: AxiosRequestConfig) {
  if (config) return api.delete(`${API_SCOPE}/${url}`, config);

  return api.delete(`${API_SCOPE}/${url}`);
}

export default api;
