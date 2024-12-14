import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Spotify from "./pages/Spotify";
import Netflix from "./pages/Netflix";
import YouTube from "./pages/YouTube";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <Router>
      <Header setModal={setModal}></Header>

      {modal && <Modal setModal={setModal}></Modal>}

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
