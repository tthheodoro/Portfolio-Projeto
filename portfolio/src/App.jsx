import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Principal from "./components/Principal/Principal";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import './style.css';
import './_variables.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;