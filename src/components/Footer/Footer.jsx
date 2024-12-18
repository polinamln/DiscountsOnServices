import css from "./Footer.module.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.logoContainer}>
          <Link to="/">
            <img className={css.logo} src="/logo.png"></img>
          </Link>

          <p className={css.logoText}>DiscountsOnServices</p>
        </div>
        <p className={css.slogan}>It`s simple, fast and economical</p>

        <div className={css.sections}>
          <div className={css.section}>
            <p className={css.sectionTitle}>Subscriptions</p>
            <ul className={css.listNav}>
              <li>
                <Link to="/netflix" className={css.link}>
                  <p className={css.linkText}>Netflix</p>
                </Link>
              </li>
              <li>
                <Link to="/youtube" className={css.link}>
                  <p className={css.linkText}>YouTube</p>
                </Link>
              </li>
              <li>
                <Link to="/spotify" className={css.link}>
                  <p className={css.linkText}>Spotify</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className={css.section}>
            <p className={css.sectionTitle}>Site navigation</p>
            <ul className={css.listNav}>
              <li>
                <Link className={css.link} to="/">
                  <p className={css.linkText}>Home</p>
                </Link>
              </li>
              <li>
                <a className={css.link} href="/#about">
                  <p className={css.linkText}>About</p>
                </a>
              </li>
              <li>
                <a className={css.link} href="/#faq">
                  <p className={css.linkText}>FAQ</p>
                </a>
              </li>
              <li>
                <a className={css.link} href="/#faq">
                  <p className={css.linkText}>Support</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.box}>
          <p className={css.boxText}>Privacy Policy</p>
          <p className={css.boxText}>Copyright 2022 © All Rights Reserved</p>
          <p className={css.boxText}>Developed by Polina Arkhypenko</p>
        </div>
      </div>
    </div>
  );
}
