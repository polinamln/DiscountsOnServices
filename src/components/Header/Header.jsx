import css from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <nav className={css.header}>
      <img className={css.logo} src="/logo.png" alt="logo"></img>
      <RxHamburgerMenu className={css.burger} />
    </nav>
  );
}
