// import css from ""

import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HowItWorks from "../components/HowItWorks/HowItWorks.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Faq from "../components/Faq/Faq.jsx";
import CardAnotherSubs from "../components/BlueCard/CardAnotherSubs.jsx";

export default function Home({ setModalSub, setModalSup }) {
  return (
    <div>
      <Hero setModalSub={setModalSub}></Hero>
      <ChooseASubscription></ChooseASubscription>
      <HowItWorks></HowItWorks>
      <AboutUs id="about"></AboutUs>
      <Faq id="faq" setModalSup={setModalSup}></Faq>

      <CardAnotherSubs setModalSub={setModalSub}></CardAnotherSubs>
    </div>
  );
}
