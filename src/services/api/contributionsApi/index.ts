import { AxiosResponse } from "axios";
import { apiGet } from "..";

const contributionsApi = {
  getContributions: (): Promise<AxiosResponse<any>> => apiGet("contributions"),
  getContributionDirectImpact: (
    contributionId: number,
  ): Promise<AxiosResponse<any>> =>
    apiGet(`contributions/${contributionId}/impacts`),
};

export default contributionsApi;
