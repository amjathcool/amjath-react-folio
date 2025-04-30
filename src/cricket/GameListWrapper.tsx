import React from "react";
import GameList from "./GameList";
import { swlegendGames } from "./data/swlegend-games";

const GameListWrapper: React.FC = () => {
  return <GameList teamName="SW Legends" games={swlegendGames} />;
};

export default GameListWrapper;
