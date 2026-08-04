import Link from "next/link";
import { services } from "@/data/page-data";

const Services = () => {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Services for your child</h2>
          <p>
            Each engagement starts with understanding your child—then building a plan grounded in assessment, evidence-based instruction, and partnership with your family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col gap-3">
              <h3 className="text-ink">{service.title}</h3>
              <p className="m-0">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-10 border-t border-softGray flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="m-0 max-w-xl text-ink">
            Ready to talk about what your child needs? Reach out to schedule a consultation.
          </p>
          <Link href="#contact" className="btn-outline shrink-0">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
