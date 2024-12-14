// import css from ""

import { useEffect, useState } from "react";
import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";

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
    </div>
  );
}
