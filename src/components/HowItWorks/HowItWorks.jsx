import css from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <div className="container">
      <h2 className={css.title}>How it works?</h2>

      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.box}>
            <h3 className={css.boxTitle}>Step 1</h3>
            <img className={css.img} src="/Illustration1.png" alt="icon"></img>
          </div>

          <p className={css.boxText}>Enter your account information</p>
        </li>
        <li className={css.item}>
          <div className={css.box}>
            <h3 className={css.boxTitle}>Step 2</h3>
            <img className={css.img} src="/Illustration2.png" alt="icon"></img>
          </div>

          <p className={css.boxText}>
            Select the desired subscription and plan
          </p>
        </li>
        <li className={css.item}>
          <div className={css.box}>
            {" "}
            <h3 className={css.boxTitle}>Step 3</h3>
            <img className={css.img} src="/Illustration3.png" alt="icon"></img>
          </div>

          <p className={css.boxText}>Pay your bill with PayPal</p>
        </li>
      </ul>

      <div className={css.card}>
        <h3 className={css.cardTitle}>Invite friends</h3>
        <p className={css.cardText}>
          Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
          with a secure payment from PAYPAL
        </p>
        <div className={css.cardLinkBox}>
          <p className={css.cardLinkBoxTitle}>Click on the link</p>
          <a className={css.cardLink} href="#">
            Discounts On Services
            <p>SVG</p>
          </a>
        </div>
      </div>
    </div>
  );
}
