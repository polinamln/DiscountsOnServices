// import css from ""

import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AboutUs from "../components/AboutUs/AboutUs";
import Faq from "../components/Faq/Faq";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ChooseASubscription></ChooseASubscription>
      <HowItWorks></HowItWorks>
      <AboutUs id="about"></AboutUs>
      <Faq id="faq"></Faq>
    </div>
  );
}
