import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Spotify from "./pages/Spotify";
import Netflix from "./pages/Netflix";
import YouTube from "./pages/YouTube";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
    </Router>
  );
}

export default App;
