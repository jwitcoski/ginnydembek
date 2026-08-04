import Image from "next/image";
import { credentials } from "@/data/page-data";

const Credentials = () => {
  return (
    <section id="credentials" className="section-pad bg-ink text-white">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-white mb-4">Credentials that protect your investment</h2>
          <p className="text-white/75">
            You are trusting someone with your child&apos;s learning. Ginny brings academic rigor, classroom-tested methods, and a long record of work with students who need specialized support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-14 md:mb-20">
          <div className="space-y-8">
            {credentials.education.map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-5">
                <h3 className="text-white text-xl md:text-2xl mb-2">{item.title}</h3>
                <p className="text-white/70 m-0">{item.detail}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {credentials.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-3xl md:text-4xl text-white m-0 mb-1">{item.value}</p>
                  <p className="text-sm text-white/65 m-0">{item.label}</p>
                </div>
              ))}
            </div>
            <h4 className="text-white mb-4">Areas of expertise</h4>
            <div className="flex flex-wrap gap-2">
              {credentials.expertise.map((area) => (
                <span
                  key={area}
                  className="text-sm text-white/90 border border-white/25 px-3 py-1.5"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-white/50 mb-6 m-0">
            Research &amp; program partners
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <Image
              src="/images/brooklyncollegeshoolofeducationlogo.png"
              alt="Brooklyn College School of Education"
              width={120}
              height={64}
              className="object-contain brightness-0 invert opacity-80"
            />
            <Image
              src="/images/robinhoodfoundationlogo.png"
              alt="Robin Hood Foundation"
              width={120}
              height={64}
              className="object-contain brightness-0 invert opacity-80"
            />
            <Image
              src="/images/researchfoundationcunylogo.png"
              alt="Research Foundation CUNY"
              width={120}
              height={64}
              className="object-contain brightness-0 invert opacity-80"
            />
            <Image
              src="/images/nyf-logo-wp.webp"
              alt="New York Foundling"
              width={120}
              height={64}
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
