import css from "./Netflix.module.css";

import Faq from "../components/Faq/Faq";

import InviteCard from "../components/InviteCard/InviteCard";
import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";

export default function Netflix() {
  const subscriptions = [
    {
      name: "Premium",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 80,
      buttonText: "Get started",
    },
    {
      name: "Premium Plus",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "High-quality playback",
        "Exclusive content",
      ],
      price: 100,
      buttonText: "Get started",
    },
  ];

  return (
    <div>
      <div className="container" style={{ marginBottom: "0" }}>
        <h2 className={css.title}>Choose a Netflix Plan</h2>
        <p className={css.text}>Watch without limits at a bargain price</p>

        <div className={css.card}>
          <div className={css.cardF}>
            <p className={css.cardText}>6 months</p>
          </div>
          <div className={css.cardS}>
            <p className={css.cardTextS}>12 months</p>
          </div>
        </div>

        {subscriptions.map((subscription, index) => {
          return <SubscriptionsCards key={index} subscription={subscription} />;
        })}
      </div>
      <InviteCard></InviteCard>
      <Faq></Faq>
    </div>
  );
}
