import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameListWrapper from "./cricket/GameListWrapper";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameListWrapper />} />
        <Route path="/legends" element={<GameListWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
