import css from "./Hero.module.css";
import classNames from "classnames";

export default function Hero({ setModalSub }) {
  return (
    <div className={classNames("container", css.hero)}>
      <img className={css.img} src="/heroimgmob.jpg" alt="woman"></img>

      <div className={css.box}>
        <h1 className={css.title}>Start enjoying a benefit of up to 50%</h1>
        <p className={css.text}>
          You have always wanted to get the same product at a special price for
          you, without haggling - and it is yours.
        </p>
        <button
          onClick={() => setModalSub(true)}
          className={css.btn}
          type="button"
        >
          Start using
        </button>
      </div>
    </div>
  );
}
