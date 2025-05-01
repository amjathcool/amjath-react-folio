import { useParams } from "react-router-dom";
import GameList from "./GameList";
import { swlegendGames } from "./data/swlegend-games";

const teamDataMap: Record<string, { name: string; games: any[] }> = {
  legends: { name: "SW Legends", games: swlegendGames },
  kakatiya: { name: "Kakatiya", games: [] },
};

const GameListRouterWrapper = () => {
  const { teamId } = useParams<{ teamId: string }>();

  const team = teamId ? teamDataMap[teamId] : undefined;

  if (!team) {
    return <div>Team not found</div>;
  }

  return <GameList teamName={team.name} games={team.games} />;
};

export default GameListRouterWrapper;
