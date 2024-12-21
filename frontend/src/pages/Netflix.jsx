import css from "./Netflix.module.css";

import Faq from "../components/Faq/Faq";

import InviteCard from "../components/InviteCard/InviteCard";
import SubscriptionsCards from "../components/SubscriptionsCards/SubscriptionsCards";
import { useState } from "react";

export default function Netflix({ setModalPay }) {
  const [activeCard, setActiveCard] = useState("F");

  const handleCardClick = (cardType) => {
    setActiveCard(cardType);
  };

  const subscriptions = [
    {
      name: "Premium",
      features: [
        "Ad-free music listening",
        "Play anywhere - even offline",
        "On-demand playback",
      ],
      price: 80,
      priceTwo: 150,
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
      priceTwo: 190,
      buttonText: "Get started",
    },
  ];

  return (
    <div>
      <div className="container" style={{ marginBottom: "0" }}>
        <h2 className={css.title}>Choose a Netflix Plan</h2>
        <p className={css.text}>Watch without limits at a bargain price</p>

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
              activeCard={activeCard}
              setModalPay={setModalPay}
              key={index}
              subscription={subscription}
            />
          );
        })}
      </div>
      <InviteCard></InviteCard>
      <Faq></Faq>
    </div>
  );
}
