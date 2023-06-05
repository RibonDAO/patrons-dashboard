import {
  api,
  initializeApi as initializeSharedApi,
  emptyRequest,
} from "@ribon.io/shared/services";
import { initializeHooks } from "@ribon.io/shared/hooks";
import { RIBON_API } from "utils/constants";
import { currentPatronFromStorage } from "lib/currentPatron";
import { AxiosRequestConfig } from "axios";

const API_SCOPE = "/patrons/v1";
export const baseURL = RIBON_API;
export function initializeApi() {
  const patron = currentPatronFromStorage();
  const authHeaders = { Email: patron?.email || "" };

  initializeSharedApi({ url: baseURL, headers: authHeaders });

  initializeHooks({
    initializeApiOptions: { url: baseURL, headers: authHeaders },
  });
}

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
