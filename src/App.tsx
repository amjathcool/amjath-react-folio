import "./App.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./AppRouter";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <Analytics />
      </QueryClientProvider>
    </>
  );
};

export default App;
