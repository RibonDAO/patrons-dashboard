import { renderComponent, renderHook, waitForPromises } from "config/testUtils";
import { useAuthentication } from ".";

function AuthenticationTestPage() {
  useAuthentication();
  return <div>Authentication</div>;
}

describe("useAuthentication", () => {
  let current: ReturnType<typeof useAuthentication>;

  it("renders without error", async () => {
    renderComponent(<AuthenticationTestPage />);
    await waitForPromises();
  });
  describe("isAuthorized", () => {
    beforeEach(async () => {
      const { hook } = renderHook(() => useAuthentication());
      current = hook.result.current;
      await waitForPromises();
    });
    it("should return true when email domain is @ribon.io", async () => {
      const allowed = current.accessToken;
      await waitForPromises();
      expect(allowed).toBe(true);
    });
  });
});
