import React, { useState } from "react";
import styles from "./GameList.module.css";
import classNames from "classnames";
import { Game } from "./game";

type GameListProps = {
  teamName: string;
  games: Game[];
};

const formatDate = (dateTimeStr: string): string =>
  new Date(dateTimeStr).toLocaleDateString();

const formatTime = (dateTimeStr: string): string =>
  new Date(dateTimeStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const GameList: React.FC<GameListProps> = ({ games, teamName }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [displayGames, setDisplayGames] = useState<Game[]>(games);
  const [sortKey, setSortKey] = useState<keyof Game>("dateTime");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [darkMode, setDarkMode] = useState(false);

  const toggleSort = (key: keyof Game) => {
    const order = key === sortKey && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...displayGames].sort((a, b) => {
      const aVal = a[key].toString();
      const bVal = b[key].toString();
      return order === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });

    setSortKey(key);
    setSortOrder(order);
    setDisplayGames(sorted);
  };

  const handleScorecardClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent row click
    window.open(url, "_blank"); // Open in new tab
  };

  // Find game with the nearest future dateTime
  const now = new Date();
  const nextGame = games
    .filter((game) => new Date(game.dateTime) > now)
    .sort(
      (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
    )[0];

  return (
    <div className={classNames(styles.container, { [styles.dark]: darkMode })}>
      <div className={styles.header}>
        <h1 className={styles.title}>{teamName} Games</h1>
        <div className={styles.darkModeToggle}>
          <label htmlFor="darkModeToggle">Dark Mode</label>
          <label className={styles.switch}>
            <input
              id="darkModeToggle"
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode((prev) => !prev)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.headerRow}>
          <div onClick={() => toggleSort("opponent")}>Opponent</div>
          <div onClick={() => toggleSort("tournament")}>Tournament</div>
          <div onClick={() => toggleSort("dateTime")}>Date</div>
          <div>Time</div>
          <div onClick={() => toggleSort("venue")}>Venue</div>
          <div onClick={() => toggleSort("result")}>Result</div>
          <div>Scorecard</div>
        </div>

        {displayGames.map((game) => (
          <div
            key={game.id}
            className={classNames(styles.row, {
              [styles.nextGame]: nextGame && nextGame.id === game.id,
            })}
            onClick={() => setSelectedGame(game)}
          >
            <div>{game.opponent}</div>
            <div>{game.tournament}</div>
            <div>{formatDate(game.dateTime)}</div>
            <div>{formatTime(game.dateTime)}</div>
            <div>{game.venue}</div>
            <div>{game.result}</div>
            <div
              onClick={(e) => handleScorecardClick(e, game.scorecard)}
              className={styles.scorecardLink}
            >
              {game.scorecard && "View"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
