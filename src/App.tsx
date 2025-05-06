import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import GameListRouterWrapper from "./cricket/GameListRouterWrapper";
import GameGrid from "./cricket/GameGrid";
import { swlegendGames } from "./cricket/data/swlegend-games";
import { Analytics } from "@vercel/analytics/react";
import Tryout from "./cricket/Tryout";
import SwLandingPage from "./cricket/SwLandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default App;
