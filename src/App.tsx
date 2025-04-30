import "./App.css";
import GameList from "./cricket/GameList";
import { swlegendGames } from "./cricket/data/swlegend-games";

function App() {
  return <GameList teamName = "SW Legends" games={swlegendGames} />;
}

export default App;
