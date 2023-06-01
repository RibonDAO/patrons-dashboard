import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ContributionPage from "pages/contributions/ContributionPage";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contributions" element={<ContributionPage />} />
    </Routes>
  );
}

export default RoutesComponent;
