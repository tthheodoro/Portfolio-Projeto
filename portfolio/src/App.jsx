import { HashRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal/Principaal";

import "./style.css";
import "./_variables.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Principaal />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
