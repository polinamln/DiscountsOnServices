import { useState } from "react";
import Faq from "../components/Faq/Faq";
import InviteCard from "../components/InviteCard/InviteCard";
import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";

import css from "./YouTube.module.css";

export default function YouTube({ setModalPay }) {
  const [activeCard, setActiveCard] = useState("F");

  const handleCardClick = (cardType) => {
    setActiveCard(cardType);
  };
  const subscriptions = [
    {
      name: "Basic",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 47,
      priceTwo: 90,
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
      priceTwo: 110,
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
      priceTwo: 135,
      buttonText: "Get started",
    },
  ];
  return (
    <div>
      <div className="container" style={{ marginBottom: "0" }}>
        <h2 className={css.title}>Choose a YouTube Plan</h2>
        <p className={css.text}>
          Select the subscription type for a period of
          {activeCard === "F" ? (
            <span className={css.span}> 6 months:</span>
          ) : (
            <span className={css.span}> 12 months:</span>
          )}
        </p>
        <div className={css.card}>
          <div
            onClick={() => handleCardClick("F")}
            className={`${css.cardF} ${activeCard === "F" ? css.activeF : ""}`}
          >
            <p
              className={`${css.cardText} ${
                activeCard === "F" ? css.cardTextActive : ""
              }`}
            >
              6 months
            </p>
          </div>
          <div
            onClick={() => handleCardClick("S")}
            className={`${css.cardS} ${activeCard === "S" ? css.activeS : ""}`}
          >
            <p
              className={`${css.cardText} ${
                activeCard === "S" ? css.cardTextActive : ""
              }`}
            >
              12 months
            </p>
          </div>
        </div>

        {subscriptions.map((subscription, index) => {
          return (
            <SubscriptionsCards
              setModalPay={setModalPay}
              key={index}
              subscription={subscription}
              activeCard={activeCard}
            />
          );
        })}
      </div>
      <InviteCard></InviteCard>
      <Faq></Faq>
    </div>
  );
}
