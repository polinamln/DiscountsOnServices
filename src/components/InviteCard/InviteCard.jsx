import Icon from "../Icon";
import css from "./InviteCard.module.css";

export default function InviteCard() {
  return (
    <div className="container">
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
            <Icon name="icon-link" h="15.35px" w="13.81px" color="#171717" />
          </a>
        </div>
      </div>
    </div>
  );
}
