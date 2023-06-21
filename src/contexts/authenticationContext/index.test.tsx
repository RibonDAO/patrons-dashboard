import { renderComponent, renderHook, waitForPromises } from "config/testUtils";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "utils/constants";
import { act } from "@testing-library/react";
import authApi from "services/api/authApi";
import { expectCookieToHaveBeenSet } from "config/testUtils/expects";
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

  describe("signInByAuthToken", () => {
    beforeEach(async () => {
      const { hook } = renderHook(() => useAuthentication());
      current = hook.result.current;
      await waitForPromises();
    });

    describe("when the api returns ok", () => {
      beforeEach(() => {
        jest.spyOn(authApi, "postAuthorizeFromAuthToken").mockResolvedValue({
          status: 200,
          statusText: "ok",
          config: {},
          data: {},
          headers: {
            "access-token": "token",
            "refresh-token": "refresh-token",
          },
        });
      });

      it("sets the tokens on cookies", async () => {
        await act(async () => {
          await current.signInByAuthToken({ authToken: "authToken", id: "id" });
        });

        expectCookieToHaveBeenSet(TOKEN_KEY, "token");
        expectCookieToHaveBeenSet(REFRESH_TOKEN_KEY, "refresh-token");
      });
    });
  });
});
