import type { Metadata } from "next";
import ConsultingHero from "../components/consulting/hero";
import ConsultingWho from "../components/consulting/who";
import ConsultingHow from "../components/consulting/how";
import ConsultingLogistics from "../components/consulting/logistics";
import ConsultingTrust from "../components/consulting/trust";
import Contact from "../components/home/contact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Educational Consulting | Ginny Dembek Ph.D.",
  description:
    "Educational consulting for schools and organizations with Ginny Dembek Ph.D.—organizational structure, teacher and tutor training, and literacy intervention across NYC and surrounding areas, including virtual appointments.",
};

const ConsultingPage = () => {
  return (
    <main>
      <ConsultingHero />
      <ConsultingWho />
      <ConsultingHow />
      <ConsultingLogistics />
      <ConsultingTrust />
      <section className="section-pad bg-surface border-b border-softGray">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-ink mb-2 text-3xl md:text-4xl">Looking for tutoring instead?</h2>
            <p className="m-0 max-w-2xl">
              One-to-one literacy tutoring and academic support for students and families is offered separately, in person in Brooklyn.
            </p>
          </div>
          <Link href="/#tutoring" className="btn-primary shrink-0">
            See tutoring
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ConsultingPage;
