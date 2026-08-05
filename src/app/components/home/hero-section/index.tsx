import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/headshot1.jpeg"
          alt="Ginny Dembek Ph.D."
          fill
          priority
          className="object-cover object-[center_20%] hero-image-motion"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 container pb-16 md:pb-24 pt-36 md:pt-44 w-full">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-display text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-5">
            Ginny Dembek Ph.D.
          </p>
          <h1 className="animate-fade-up-delay text-white mb-5 md:mb-6">
            Education consulting and literacy tutoring grounded in special education research
          </h1>
          <p className="animate-fade-up-delay-2 text-white/85 text-lg md:text-xl max-w-xl mb-8 md:mb-10">
            Special education faculty at Brooklyn College. In-person tutoring for families in Brooklyn, and consulting for schools, organizations, and nonprofits.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 md:gap-4">
            <Link href="/#contact" className="btn-primary">
              Request a Free Consultation
            </Link>
            <Link href="/#who" className="btn-secondary">
              See who this is for
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
