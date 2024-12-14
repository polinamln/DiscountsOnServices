import { Link } from "react-router-dom";
import css from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ setModal }) {
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
                <p>X</p>
                <p className={css.linkText}>Home</p>
              </Link>
            </li>
            <li>
              <a
                className={css.link}
                href="/#about"
                onClick={() => setModal(false)}
              >
                <p>X</p>
                <p className={css.linkText}>About</p>
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="/#faq"
                onClick={() => setModal(false)}
              >
                <p>X</p>
                <p className={css.linkText}>FAQ</p>
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="/#support"
                onClick={() => setModal(false)}
              >
                <p>X</p>
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
        <div className={css.btns}>
          <button className={css.btnLogin} type="submit">
            Login
          </button>
          <button className={css.btnSign} type="submit">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
