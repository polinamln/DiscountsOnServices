import css from "./PaidModal.module.css";
import { RxCross2 } from "react-icons/rx";

export default function PaidModal({ setModalPaid }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setModalPaid(false);
    }
  };

  return (
    <div className={css.back} onClick={handleClose}>
      <div className={css.container}>
        <div className={css.cross} onClick={() => setModalPaid(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
        <img className={css.img} src="/Illustration3.png"></img>
        <h2 className={css.title}>Subscription paid</h2>
        <button
          type="submit"
          className={css.button}
          onClick={() => setModalPaid(false)}
        >
          Continue work
        </button>
      </div>
    </div>
  );
}
