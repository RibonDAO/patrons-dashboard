import { AxiosResponse } from "axios";
import { apiGet } from "..";

const contributionsApi = {
  getContributions: (): Promise<AxiosResponse<any>> => apiGet("contributions"),
};

export default contributionsApi;
