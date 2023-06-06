import { useApi } from "hooks/useApi";
import { Contribution } from "@ribon.io/shared/types";
import contributionsApi from "services/api/contributionsApi";

export function useContributions() {
  const {
    data: contributions,
    isLoading,
    refetch,
  } = useApi<Contribution[]>({
    key: "contributions",
    fetchMethod: contributionsApi.getContributions,
  });

  return { contributions, isLoading, refetch };
}
