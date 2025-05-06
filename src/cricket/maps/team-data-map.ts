import { swcricaholicsGames } from "../data/swcricaholics-games";
import { swfalconGames } from "../data/swfalcon-games";
import { swhittersGames } from "../data/swhitters-games";
import { swhustlersGames } from "../data/swhustlers-games";
import { swlegendGames } from "../data/swlegend-games";
import { swmavericksGames } from "../data/swmavericks-games";
import { swtigersGames } from "../data/swtigers-games";

const teamDataMap: Record<string, { name: string; games: any[] }> = {
    legends: { name: "SW Legends", games: swlegendGames },
    cricaholics: { name: "SW Cricaholics", games: swcricaholicsGames },
    falcons: { name: "SW Falcons", games: swfalconGames },
    hitters: { name: "SW Hitters", games: swhittersGames },
    hustlers: { name: "SW Hustlers", games: swhustlersGames },
    mavericks: { name: "SW Mavericks", games: swmavericksGames },
    tigers: { name: "SW Tigers", games: swtigersGames },
};

export default teamDataMap;