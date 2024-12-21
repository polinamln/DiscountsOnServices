import css from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div id="about" className="container">
      <h2 className={css.title}>About us</h2>
      <img className={css.img} src="/aboutimg.jpg" alt="woman"></img>
      <div className={css.card}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <p className={css.text}>
          We offer you a subscription to various media services at the best
          price.
        </p>
        <p className={css.text}>
          We have partnered with several companies to help you find the best
          prices for your media subscriptions and provide you with the best
          prices for the Premium subscriptions you want.
        </p>
        <p className={css.textBold}>It`s simple, fast and economical.</p>
      </div>
    </div>
  );
}
