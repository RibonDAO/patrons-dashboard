import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ContributionPage from "pages/contributions/ContributionPage";
import SignInPage from "pages/auth/SignInPage";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contributions" element={<ContributionPage />} />
      <Route path="/auth" element={<SignInPage />} />
    </Routes>
  );
}

export default RoutesComponent;
