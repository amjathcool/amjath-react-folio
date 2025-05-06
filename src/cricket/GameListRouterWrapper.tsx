import { useParams } from "react-router-dom";
import GameList from "./GameList";
import teamDataMap from "./maps/team-data-map";

const GameListRouterWrapper = () => {
  const { teamId } = useParams<{ teamId: string }>();

  const team = teamId ? teamDataMap[teamId] : undefined;

  if (!team) {
    return <div>Team not found</div>;
  }

  return <GameList teamName={team.name} games={team.games} />;
};

export default GameListRouterWrapper;
