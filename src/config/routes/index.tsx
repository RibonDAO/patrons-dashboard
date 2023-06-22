import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ContributionPage from "pages/contributions/ContributionPage";
import SignInPage from "pages/auth/SignInPage";
import PrivateRoute from "config/routes/privateRoute";
import { Suspense } from "react";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/contributions"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <ContributionPage />
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/auth"
        element={
          <Suspense fallback={<div />}>
            <SignInPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
