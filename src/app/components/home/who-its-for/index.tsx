import Link from "next/link";
import { whoItsFor } from "@/data/page-data";
import { consultingPath } from "@/lib/routes";

const WhoItsFor = () => {
  const { heading, intro, items } = whoItsFor.tutoring;

  return (
    <section id="who" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Who I work with</h2>
          <p>
            Tutoring is individualized educational support for students and families. It complements school services; it does not replace them.
            Schools and organizations looking for training or program support can{" "}
            <Link href={consultingPath} className="text-ink underline hover:text-primary">
              learn about consulting separately
            </Link>
            .
          </p>
        </div>

        <div id="tutoring">
          <div className="max-w-2xl mb-8 md:mb-10">
            <h3 className="text-ink mb-3 text-2xl md:text-3xl">{heading}</h3>
            <p className="m-0">{intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {items.map((item) => (
              <div key={item.title} className="border-t border-mistGray pt-6">
                <h4 className="text-ink mb-3 text-lg md:text-xl font-semibold">{item.title}</h4>
                <p className="m-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 border-t border-mistGray pt-10 md:pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-ink mb-2 text-xl md:text-2xl">Consulting for schools and organizations</h3>
            <p className="m-0">
              Organizational structure, teacher and tutor training, and literacy intervention guidance. Available across NYC and nearby areas, including virtual appointments.
            </p>
          </div>
          <Link href={consultingPath} className="btn-primary shrink-0">
            Read about consulting
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
