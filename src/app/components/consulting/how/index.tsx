import { consultingHowItWorks } from "@/data/consulting-data";

const ConsultingHow = () => {
  return (
    <section id="how" className="section-pad bg-surface">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">How consulting works</h2>
          <p>
            Partnerships are planned around your setting and goals, using methods drawn from special education research and classroom practice. The aim is stronger systems and training—not guaranteed student outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {consultingHowItWorks.map((item) => (
            <div key={item.title} className="border-t border-softGray pt-6">
              <h3 className="text-ink mb-3">{item.title}</h3>
              <p className="m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingHow;
