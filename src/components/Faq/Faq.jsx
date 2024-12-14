import { useState } from "react";
import css from "./Faq.module.css";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      question: "What should I do if the invoice has not arrived?",
      answer: "Please contact support and provide your account details.",
    },
    {
      question: "Can I add a phone number for password recovery?",
      answer: "Yes, you can add a phone number in the account settings.",
    },
    {
      question:
        "Can I change my Netflix account email and password after purchase?",
      answer: "Yes, you can change it in the account settings.",
    },
    {
      question: "How soon will I receive the account information I ordered?",
      answer: "You will receive the information within 24 hours.",
    },
    {
      question: "How to pay?",
      answer: "Payment options we currently have: PayPal, Bitcoin.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log(index);
  };

  return (
    <div id="faq" className="container">
      <h2 className={css.title}>FAQ</h2>
      {/* <ul className={css.list}>
        <li className={css.card}>
          <p className={css.text}>
            The set time has passed, but the invoice has not yet arrived, what
            should I do?
          </p>
          <div className={css.btnArrow}>\/</div>
        </li>

        <li className={css.card}>
          <p className={css.text}>
            Can I add a phone number for password recovery?
          </p>
          <div className={css.btnArrow}>\/</div>
        </li>
        <li className={css.card}>
          <p className={css.text}>
            Can I change my Netflix account email and password after purchase?
          </p>
          <div className={css.btnArrow}>\/</div>
        </li>
        <li className={css.card}>
          <p className={css.text}>
            How soon will I receive the account information I ordered?
          </p>
          <div className={css.btnArrow}>\/</div>
        </li>
        <li className={css.card}>
          <p className={css.text}>How to pay?</p>
          <div className={css.btnArrow}>\/</div>
        </li>
      </ul> */}

      <ul className={css.list}>
        {items.map((item, index) => (
          <li key={index} className={css.card}>
            <div className={css.cardText}>
              <p className={css.text}>{item.question}</p>
              <div
                onClick={() => toggleAccordion(index)}
                className={css.btnArrow}
              >
                {activeIndex === index ? "▲" : "▼"}
              </div>
            </div>

            {activeIndex === index && (
              <p className={css.textLight}>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>

      <a className={css.btn} href="#">
        Support
      </a>

      <div className={css.cardBlue}>
        <h3 className={css.cardBlueTitle}>
          Request for an additional subscription that was not found here
        </h3>
        <p className={css.cardBlueText}>
          Disney, Amazon Prime, Microsoft Office, Microsoft Windows
        </p>
        <button className={css.cardBlueBtn}>Request</button>
      </div>
    </div>
  );
}
