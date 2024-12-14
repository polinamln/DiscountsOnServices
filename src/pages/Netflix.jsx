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
    <div className="container">
      <p>Netflix</p>
      {subscriptions.map((subscription, index) => {
        return <SubscriptionsCards key={index} subscription={subscription} />;
      })}
    </div>
  );
}
