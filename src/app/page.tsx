import WhyHire from "./components/home/why-hire";
import Contact from "./components/home/contact";
import Credentials from "./components/home/credentials";
import About from "./components/home/about";
import HeroSection from "./components/home/hero-section";
import Services from "./components/home/services";

const page = () => {
  return (
    <main>
      <HeroSection />
      <WhyHire />
      <Services />
      <Credentials />
      <About />
      <Contact />
    </main>
  );
};

export default page;
