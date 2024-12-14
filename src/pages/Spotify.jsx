import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";

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
    <div className="container">
      <p>Spotify</p>
      {subscriptions.map((subscription, index) => {
        return <SubscriptionsCards key={index} subscription={subscription} />;
      })}
    </div>
  );
}
