import css from "./BlueCard.module.css";

export default function BlueCard({ setModalSub }) {
  return (
    <div className="container">
      <div className={css.cardBlue}>
        <h3 className={css.cardBlueTitle}>
          Request for an additional subscription that was not found here
        </h3>
        <p className={css.cardBlueText}>
          Disney, Amazon Prime, Microsoft Office, Microsoft Windows
        </p>
        <button onClick={() => setModalSub(true)} className={css.cardBlueBtn}>
          Request
        </button>
      </div>
    </div>
  );
}
