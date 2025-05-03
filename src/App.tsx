import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import GameListRouterWrapper from "./cricket/GameListRouterWrapper";
import GameGrid from "./cricket/GameGrid";
import { swlegendGames } from "./cricket/data/swlegend-games";
import { Analytics } from "@vercel/analytics/react";
import Tryout from "./cricket/Tryout";
import SwLandingPage from "./cricket/SwLandingPage";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SwLandingPage />} />
          <Route path="/:teamId" element={<GameListRouterWrapper />} />
          <Route
            path="/ag"
            element={<GameGrid teamName="Amjath" games={swlegendGames} />}
          />
          <Route
            path="/try"
            element={<Tryout teamName="SW Legends" games={swlegendGames} />}
          />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;
