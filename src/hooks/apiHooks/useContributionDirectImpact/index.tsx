import { useApi } from "@ribon.io/shared/hooks";
import { Contribution, ContributionDirectImpact } from "@ribon.io/shared/types";
import contributionsApi from "services/api/contributionsApi";

export function useContributionDirectImpact(contribution: Contribution) {
  const {
    data: directImpact,
    isLoading,
    refetch,
  } = useApi<ContributionDirectImpact[]>({
    key: "contributionDirectImpact",
    fetchMethod: () =>
      contributionsApi.getContributionDirectImpact(contribution.id),
    options: {
      enabled: !!contribution,
    },
    criteria: contribution.id,
  });

  return { directImpact, isLoading, refetch };
}
