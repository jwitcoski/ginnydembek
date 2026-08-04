import WhoItsFor from "./components/home/who-its-for";
import HowItWorks from "./components/home/how-it-works";
import WhatChanges from "./components/home/what-changes";
import Logistics from "./components/home/logistics";
import Trust from "./components/home/trust";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero-section";

const page = () => {
  return (
    <main>
      <HeroSection />
      <WhoItsFor />
      <HowItWorks />
      <WhatChanges />
      <Logistics />
      <Trust />
      <Contact />
    </main>
  );
};

export default page;
