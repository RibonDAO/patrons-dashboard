import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import RoutesComponent from "config/routes";
import CurrentPatronProvider from "contexts/currentPatronContext";
import { theme } from "@ribon.io/shared/styles";
import AuthenticationProvider from "contexts/authenticationContext";
import GlobalStyle from "./styles/globalStyle";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <CurrentPatronProvider>
            <AuthenticationProvider>
              <RoutesComponent />
            </AuthenticationProvider>
          </CurrentPatronProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
