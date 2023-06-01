import {
  apiGet,
  apiDelete,
  apiPut,
  apiPost,
  api,
  initializeApi as initializeSharedApi,
  emptyRequest,
} from "@ribon.io/shared/services";
import { initializeHooks } from "@ribon.io/shared/hooks";
import { RIBON_API } from "utils/constants";
import {currentPatronFromStorage} from "lib/currentPatron";

export const baseURL = RIBON_API;
export function initializeApi() {
  const patron = currentPatronFromStorage();
  const authHeaders = { Email: patron?.email || "" };

  initializeSharedApi({ url: baseURL, headers: authHeaders });

  initializeHooks({
    initializeApiOptions: { url: baseURL, headers: authHeaders },
  });
}

export { apiGet, apiDelete, apiPut, apiPost, emptyRequest };
export default api;
