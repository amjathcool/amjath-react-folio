import { Game } from "./game";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef } from "ag-grid-community";

type GameListProps = {
  teamName: string;
  games: Game[];
};

const GameGrid = ({ teamName, games }: GameListProps) => {
  const colDefs: ColDef[] = [
    { field: "opponent" },
    { field: "tournament" },
    { field: "dateTime" },
    { field: "venue" },
    { field: "result" },
    { field: "scorecard" },
  ];

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <>
      <h1>{teamName} Games</h1>
      <div style={{ width: "100%", height: "200px" }}>
        <AgGridReact
          rowData={games}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  );
};

export default GameGrid;
