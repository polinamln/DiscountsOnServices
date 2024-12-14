// import css from ""

import ChooseASubscription from "../components/ChooseASubscription/ChooseASubscription";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <ChooseASubscription></ChooseASubscription>
    </div>
  );
}
