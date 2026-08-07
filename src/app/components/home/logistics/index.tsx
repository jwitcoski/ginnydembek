import Link from "next/link";
import { logisticsItems } from "@/data/page-data";
import { consultingPath } from "@/lib/routes";

const Logistics = () => {
  return (
    <section id="logistics" className="section-pad bg-surface">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Practical details</h2>
          <p>
            Confirmed details for tutoring. Fees and session structure are discussed during a free consultation.
            For school and organization consulting details, see the{" "}
            <Link href={consultingPath} className="text-ink underline hover:text-primary">
              consulting page
            </Link>
            .
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {logisticsItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-ink mb-3">{item.title}</h3>
              {"email" in item && item.email ? (
                <p className="m-0">
                  Reach out by email at{" "}
                  <Link
                    href={`mailto:${item.email}`}
                    className="text-ink underline hover:text-primary"
                  >
                    {item.email}
                  </Link>{" "}
                  or use the form below.
                </p>
              ) : (
                <p className="m-0">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logistics;
