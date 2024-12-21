import css from "./LearnBtn.module.css";

export default function LearnBtn() {
  return (
    <div>
      <a className={css.btn} href="#">
        Learn more
      </a>
    </div>
  );
}
