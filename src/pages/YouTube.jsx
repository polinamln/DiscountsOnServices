import Faq from "../components/Faq/Faq";
import InviteCard from "../components/InviteCard/InviteCard";
import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";

import css from "./YouTube.module.css";

export default function YouTube() {
  const subscriptions = [
    {
      name: "Basic",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 47,
      buttonText: "Get started",
    },
    {
      name: "Standard",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 57,
      buttonText: "Get started",
    },
    {
      name: "Premium",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 77,
      buttonText: "Get started",
    },
  ];
  return (
    <div>
      <div className="container">
        <h2 className={css.title}>Choose a YouTube Plan</h2>
        <p className={css.text}>
          Select the subscription type for a period of
          <span className={css.span}>12 months:</span>
        </p>
        {subscriptions.map((subscription, index) => {
          return <SubscriptionsCards key={index} subscription={subscription} />;
        })}
      </div>
      <InviteCard></InviteCard>
      <Faq></Faq>
    </div>
  );
}
