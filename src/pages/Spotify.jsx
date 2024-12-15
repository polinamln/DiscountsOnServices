import Faq from "../components/Faq/Faq";
import InviteCard from "../components/InviteCard/InviteCard";
import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";
import css from "./YouTube.module.css";

export default function Spotify() {
  const subscriptions = [
    {
      name: "Music",
      features: ["Listen to music without ads, in the background and offline"],
      price: 45,
      buttonText: "Get started",
    },
    {
      name: "Premium",
      features: [
        "YouTube and YouTube Music without ads, in the background and offline",
      ],
      price: 80,
      buttonText: "Get started",
    },
  ];
  return (
    <div>
      <div className="container" style={{ marginBottom: "0" }}>
        <h2 className={css.title}>Choose a Spotify Plan</h2>
        <p className={css.text}>
          Select the subscription type for a period of{" "}
          <span className={css.span}>12 months:</span>{" "}
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
