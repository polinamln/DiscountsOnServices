import { Link } from "react-router-dom";
import css from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";
import Icon from "../Icon";
import { useEffect, useState } from "react";

export default function Modal({ setModal, setModalLogin, setModalRegister }) {
  const [activeUser, setActiveUser] = useState(false);

  const checkActiveUser = () => {
    const user = localStorage.getItem("user");
    console.log("Stored user:", user);
    if (user) {
      setActiveUser(true);
    }
  };

  useEffect(() => {
    checkActiveUser();
  }, []);

  const handleAction = (action) => {
    if (action === "login") {
      setModalLogin(true);
    } else if (action === "register") {
      setModalRegister(true);
    }
    setModal(false);

    document.body.style.overflow = "hidden";
  };

  return (
    <div className={css.modal}>
      <div className={css.box}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <div className={css.cross} onClick={() => setModal(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
      </div>
      <div className={css.linksBox}>
        <div className={css.cardsBox}>
          <ul className={css.listNav}>
            <li>
              <Link className={css.link} to="/" onClick={() => setModal(false)}>
                <Icon
                  name="icon-home"
                  h="20px"
                  w="18px"
                  className={css.customIcon}
                />
                <p className={css.linkText}>Home</p>
              </Link>
            </li>
            <li>
              <a
                className={css.link}
                href="/#about"
                onClick={() => setModal(false)}
              >
                <Icon
                  name="icon-about"
                  h="16px"
                  w="16px"
                  color="#9c99ad"
                  className={css.customIcon}
                />
                <p className={css.linkText}>About</p>
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="/#faq"
                onClick={() => setModal(false)}
              >
                <Icon
                  name="icon-faq"
                  h="20px"
                  w="20px"
                  color="#9c99ad"
                  className={css.customIcon}
                />
                <p className={css.linkText}>FAQ</p>
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="/#faq"
                onClick={() => setModal(false)}
              >
                <Icon
                  name="icon-sup"
                  h="18px"
                  w="20px"
                  color="#9c99ad"
                  className={css.customIcon}
                />
                <p className={css.linkText}>Support</p>
              </a>
            </li>
          </ul>

          <ul className={css.listNav}>
            <li>
              <Link
                to="/netflix"
                className={css.link}
                onClick={() => setModal(false)}
              >
                <p className={css.linkText}>Netflix</p>
              </Link>
            </li>
            <li>
              <Link
                to="/youtube"
                className={css.link}
                onClick={() => setModal(false)}
              >
                <p className={css.linkText}>YouTube</p>
              </Link>
            </li>
            <li>
              <Link
                to="/spotify"
                className={css.link}
                onClick={() => setModal(false)}
              >
                <p className={css.linkText}>Spotify</p>
              </Link>
            </li>
          </ul>
        </div>

        {activeUser ? (
          <p style={{ marginBottom: "100px" }}>logout</p>
        ) : (
          <div className={css.btns}>
            <button
              onClick={() => handleAction("login")}
              className={css.btnLogin}
              type="submit"
            >
              Login
            </button>
            <button
              onClick={() => handleAction("register")}
              className={css.btnSign}
              type="submit"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
