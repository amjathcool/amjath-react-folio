import React, { useEffect, useState } from "react";
import styles from "./Tryout.module.css";
import classNames from "classnames";
import { Game } from "./game";
import { track } from "@vercel/analytics";

type GameListProps = {
  teamName: string;
  games: Game[];
};

const formatDateTime = (dateTimeStr: string): string => {
  const dateStr = new Date(dateTimeStr).toLocaleDateString();
  const timeStr = new Date(dateTimeStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return dateStr + " " + timeStr;
};

const Tryout = ({ games, teamName }: GameListProps) => {
  const [displayGames, setDisplayGames] = useState<Game[]>(games);
  const [sortKey, setSortKey] = useState<keyof Game>("dateTime");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(styles.dark, darkMode);
  }, [darkMode]);

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
    track("Sort by " + key);
  };

  const handleScorecardClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent row click
    window.open(url, "_blank"); // Open in new tab
    track("View Scorecard");
  };

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
    track("Dark Mode");
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
              onChange={handleDarkMode}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.grid} role="table">
          <div className={styles.headerRow} role="row">
            <div
              role="columnheader"
              className={styles.opponent}
              onClick={() => toggleSort("opponent")}
            >
              Opponent
            </div>
            <div
              role="columnheader"
              className={styles.tournament}
              onClick={() => toggleSort("tournament")}
            >
              Tournament
            </div>
            <div
              role="columnheader"
              className={styles.dateTime}
              onClick={() => toggleSort("dateTime")}
            >
              Date Time
            </div>
            <div
              role="columnheader"
              className={styles.venue}
              onClick={() => toggleSort("venue")}
            >
              Venue
            </div>
            <div
              role="columnheader"
              className={styles.result}
              onClick={() => toggleSort("result")}
            >
              Result
            </div>
            <div role="columnheader" className={styles.scorecard}>
              Score Card
            </div>
          </div>

          {displayGames.map((game) => (
            <div
              key={game.id}
              role="row"
              className={classNames(styles.row, {
                [styles.nextGame]: nextGame && nextGame.id === game.id,
              })}
            >
              <div className={styles.opponent} role="cell">
                {game.opponent}
              </div>
              <div className={styles.tournament} role="cell">
                {game.tournament}
              </div>
              <div className={styles.dateTime} role="cell">
                {formatDateTime(game.dateTime)}
              </div>
              <div className={styles.venue} role="cell">
                {game.venue}
              </div>
              <div className={styles.result} role="cell">
                {game.result}
              </div>
              <div
                role="cell"
                onClick={(e) => handleScorecardClick(e, game.scorecard)}
                className={styles.scorecard}
              >
                {game.scorecard && "View"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tryout;
