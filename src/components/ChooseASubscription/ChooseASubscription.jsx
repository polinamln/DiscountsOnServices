import css from "./ChooseASubscription.module.css";

export default function ChooseASubscription() {
  return (
    <div className="container">
      <h2 className={css.title}></h2>
      <ul className={css.list}>
        <li className={css.item}>
          <img className={css.img} src="/netflix.jpg" alt=""></img>
          <div className={css.textBox}>
            <h4 className={css.titleItem}>Netflix subscription rates</h4>
            <p className={css.text}>
              The constant contributes to the task of the same and thus the
              intended features and the set relation to the check and set also.
            </p>
          </div>
        </li>
        <li className={css.item}>
          <img className={css.img} src="/sptify.jpg" alt=""></img>
          <div className={css.textBox}>
            <h4 className={css.titleItem}>Spotify Premium</h4>
            <p className={css.text}>
              The constant contributes to the task of the same and thus the
              intended features and the set relation to the check and set also.
            </p>
          </div>
        </li>
        <li className={css.item}>
          <img className={css.img} src="/youtube.png" alt=""></img>
          <div className={css.textBox}>
            <h4 className={css.titleItem}>YouTube Premium</h4>
            <p className={css.text}>
              The constant contributes to the task of the same and thus the
              intended features and the set relation to the check and set also.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
