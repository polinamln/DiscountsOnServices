import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";

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
    <div className="container">
      <p>YouTube</p>
      {subscriptions.map((subscription, index) => {
        return <SubscriptionsCards key={index} subscription={subscription} />;
      })}
    </div>
  );
}
