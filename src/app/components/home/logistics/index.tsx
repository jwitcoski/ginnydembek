import Link from "next/link";

const Logistics = () => {
  return (
    <section id="logistics" className="section-pad bg-surface">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Practical details</h2>
          <p>
            If you are considering support for your child, here is what is confirmed. Details such as schedule, format, and fit are discussed during a consultation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-ink mb-3">Location</h3>
            <p className="m-0">Based in Brooklyn, New York.</p>
          </div>
          <div>
            <h3 className="text-ink mb-3">Contact</h3>
            <p className="m-0">
              Reach out by email at{" "}
              <Link href="mailto:dembek@brooklyn.edu" className="text-ink underline hover:text-primary">
                dembek@brooklyn.edu
              </Link>{" "}
              or use the form below.
            </p>
          </div>
          <div>
            <h3 className="text-ink mb-3">Next step</h3>
            <p className="m-0">
              Send a short note about your child and what you are looking for. Dr. Dembek will follow up to discuss whether the services are a fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
