import css from "./SubscriptionsCards.module.css";

import { MdOutlineDone } from "react-icons/md";

export default function SubscriptionsCards({ subscription, setModalPay }) {
  return (
    <div className={css.card}>
      <h3 className={css.title}>{subscription.name}</h3>
      <ul className={css.list}>
        {subscription.features.map((feature, index) => (
          <li className={css.item} key={index}>
            <div className={css.icon}>
              <MdOutlineDone className={css.iconDone} />
            </div>
            <p className={css.feature}>{feature}</p>
          </li>
        ))}
      </ul>
      <p className={css.price}>
        <span>$</span>
        {subscription.price}
      </p>
      <button
        onClick={() => setModalPay(true)}
        className={css.btn}
        type="button"
      >
        {subscription.buttonText}
      </button>
    </div>
  );
}
