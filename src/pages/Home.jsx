// import css from ""

import { useEffect, useState } from "react";
import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AboutUs from "../components/AboutUs/AboutUs";
import Faq from "../components/Faq/Faq";

export default function Home() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <div>
      <Header setModal={setModal}></Header>
      {modal && <Modal setModal={setModal}></Modal>}

      <Hero></Hero>
      <ChooseASubscription></ChooseASubscription>
      <HowItWorks></HowItWorks>
      <AboutUs></AboutUs>
      <Faq></Faq>
    </div>
  );
}
