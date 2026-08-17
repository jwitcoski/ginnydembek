import Link from "next/link";
import { consultingHero } from "@/data/consulting-data";

const ConsultingHero = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="container pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          <p className="animate-fade-up font-display text-2xl md:text-3xl text-white mb-3 md:mb-5">
            Ginny Dembek Ph.D.
          </p>
          <h1 className="animate-fade-up-delay text-white text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl xl:text-[3.25rem] xl:leading-[1.12] mb-4 md:mb-6">
            {consultingHero.title}
          </h1>
          <p className="animate-fade-up-delay-2 text-white/85 text-base md:text-lg xl:text-xl mb-7 md:mb-10 max-w-2xl">
            {consultingHero.subtitle}
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <Link href="#contact" className="btn-primary justify-center sm:justify-start">
              Schedule a conversation
            </Link>
            <Link href="#who" className="btn-secondary justify-center sm:justify-start">
              See who consulting is for
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingHero;
