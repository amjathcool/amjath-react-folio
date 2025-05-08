import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load route components
const SwLandingPage = lazy(() => import("./cricket/SwLandingPage"));
const GameListRouterWrapper = lazy(
  () => import("./cricket/GameListRouterWrapper")
);

const Loading: React.FC = () => <div>Loading page...</div>;

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SwLandingPage />} />
          <Route path="/:teamId" element={<GameListRouterWrapper />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
