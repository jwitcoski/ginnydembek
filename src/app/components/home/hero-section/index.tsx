import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="lg:grid lg:grid-cols-2 lg:min-h-[100svh]">
        {/* Photo: top on mobile, right column on desktop — never under copy */}
        <div className="relative h-[46svh] min-h-[240px] max-h-[400px] overflow-hidden lg:h-auto lg:min-h-[100svh] lg:max-h-none lg:order-2">
          <Image
            src="/images/headshot1.jpeg"
            alt="Ginny Dembek Ph.D."
            fill
            priority
            className="object-cover object-[center_12%] lg:object-[center_18%] hero-image-motion"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink to-transparent" />
        </div>

        {/* Copy: below photo on mobile, left column on desktop */}
        <div className="relative z-10 flex items-end lg:order-1">
          <div className="container w-full pt-7 pb-12 lg:py-24 lg:pl-8 xl:pl-10">
            <div className="max-w-xl">
              <p className="animate-fade-up font-display text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-5">
                Ginny Dembek Ph.D.
              </p>
              <h1 className="animate-fade-up-delay text-white text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl xl:text-[3.25rem] xl:leading-[1.12] mb-4 md:mb-6">
                Education consulting and literacy tutoring grounded in special education research
              </h1>
              <p className="animate-fade-up-delay-2 text-white/85 text-base md:text-lg xl:text-xl mb-7 md:mb-10">
                Special education faculty at Brooklyn College. In-person tutoring for families in Brooklyn, and consulting for schools, organizations, and nonprofits.
              </p>
              <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <Link href="/#contact" className="btn-primary justify-center sm:justify-start">
                  Request a Free Consultation
                </Link>
                <Link href="/#who" className="btn-secondary justify-center sm:justify-start">
                  See who this is for
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
