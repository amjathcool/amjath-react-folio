import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { swlegendGames } from "./cricket/data/swlegend-games";

// Lazy load route components
const SwLandingPage = lazy(() => import("./cricket/SwLandingPage"));
const GameListRouterWrapper = lazy(
  () => import("./cricket/GameListRouterWrapper")
);
const GameGrid = lazy(() => import("./cricket/GameGrid"));
const Tryout = lazy(() => import("./cricket/Tryout"));

const Loading: React.FC = () => <div>Loading page...</div>;

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SwLandingPage />} />
          <Route path="/:teamId" element={<GameListRouterWrapper />} />
          {/* Below routes ag and try added for exploring upcoming features */}
          <Route
            path="/ag"
            element={<GameGrid teamName="Amjath" games={swlegendGames} />}
          />
          <Route
            path="/try"
            element={<Tryout teamName="SW Legends" games={swlegendGames} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
