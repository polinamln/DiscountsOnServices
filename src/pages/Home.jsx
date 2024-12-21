// import css from ""

import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AboutUs from "../components/AboutUs/AboutUs";
import Faq from "../components/Faq/Faq";
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
