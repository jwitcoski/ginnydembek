import { consultingLogistics } from "@/data/consulting-data";

const ConsultingLogistics = () => {
  return (
    <section id="logistics" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Practical details</h2>
          <p>
            Confirmed details for consulting. Scope and fees are discussed during a free consultation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {consultingLogistics.map((item) => (
            <div key={item.title}>
              <h3 className="text-ink mb-3">{item.title}</h3>
              <p className="m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingLogistics;
