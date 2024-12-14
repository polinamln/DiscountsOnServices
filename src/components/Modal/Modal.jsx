import css from "./Modal.module.css";

export default function Modal({ setModal }) {
  return (
    <div className={css.modal}>
      <div className={css.box}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <p onClick={() => setModal(false)}>X</p>
      </div>
      <div className={css.linksBox}>
        <div className={css.cardsBox}>
          <ul className={css.listNav}>
            <li>
              <a className={css.link} href="#">
                <p>X</p>
                <p className={css.linkText}>Home</p>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <p>X</p>
                <p className={css.linkText}>About</p>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <p>X</p>
                <p className={css.linkText}>FAQ</p>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <p>X</p>
                <p className={css.linkText}>Support</p>
              </a>
            </li>
          </ul>

          <ul className={css.listNav}>
            <li className={css.link}>
              <a className={css.linkText}>Netflix</a>
            </li>
            <li className={css.link}>
              <a className={css.linkText}>YouTube</a>
            </li>
            <li className={css.link}>
              <a className={css.linkText}>Spotify</a>
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
