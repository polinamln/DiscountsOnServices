import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Spotify from "./pages/Spotify";
import Netflix from "./pages/Netflix";
import YouTube from "./pages/YouTube";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StartModal from "./components/StartModal/StartModal";
import PayModal from "./components/PayModal/PayModal";

function App() {
  const [modal, setModal] = useState(false);
  const [modalSub, setModalSub] = useState(false);
  const [modalPay, setModalPay] = useState(false);

  useEffect(() => {
    const isModalActive = modal || modalSub;
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal, modalSub]);

  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <Header setModal={setModal}></Header>

      {modalPay && <PayModal setModalPay={setModalPay} />}

      {modalSub && (
        <StartModal
          setModalPay={setModalPay}
          setModalSub={setModalSub}
        ></StartModal>
      )}

      {modal && <Modal setModal={setModal}></Modal>}

      <Routes>
        <Route path="/" element={<Home setModalSub={setModalSub} />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
