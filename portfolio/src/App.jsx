import { HashRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal/Principal";
import "./style.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
