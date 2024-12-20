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
import PaidModal from "./components/PaidModal/PaidModal";
import SupModal from "./components/SupModal/SupModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [modal, setModal] = useState(false);
  const [modalSub, setModalSub] = useState(false);
  const [modalPay, setModalPay] = useState(false);
  const [modalPaid, setModalPaid] = useState(false);
  const [modalSup, setModalSup] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  // const [user, setUser] = useState(false);

  useEffect(() => {
    const isModalActive = modal || modalLogin || modalRegister;
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal, modalLogin, modalRegister]);

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

      {modalPay && (
        <PayModal setModalPay={setModalPay} setModalPaid={setModalPaid} />
      )}

      {modalSub && <StartModal setModalSub={setModalSub}></StartModal>}

      {modal && (
        <Modal
          setModal={setModal}
          setModalRegister={setModalRegister}
          setModalLogin={setModalLogin}
        ></Modal>
      )}

      {modalPaid && <PaidModal setModalPaid={setModalPaid}></PaidModal>}

      {modalSup && <SupModal setModalSup={setModalSup}></SupModal>}

      {/* USER */}

      {modalLogin && <Login setModalLogin={setModalLogin}></Login>}
      {modalRegister && (
        <Register
          setModalRegister={setModalRegister}
          setModalLogin={setModalLogin}
        ></Register>
      )}

      <Routes>
        <Route
          path="/"
          element={<Home setModalSub={setModalSub} setModalSup={setModalSup} />}
        />
        <Route
          path="/spotify"
          element={<Spotify setModalPay={setModalPay} />}
        />
        <Route
          path="/netflix"
          element={<Netflix setModalPay={setModalPay} />}
        />
        <Route
          path="/youtube"
          element={<YouTube setModalPay={setModalPay} />}
        />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
