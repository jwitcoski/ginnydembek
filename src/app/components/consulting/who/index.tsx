import { consultingAudiences } from "@/data/consulting-data";

const ConsultingWho = () => {
  const { heading, intro, items } = consultingAudiences;

  return (
    <section id="who" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">{heading}</h2>
          <p>{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border-t border-mistGray pt-6">
              <h3 className="text-ink mb-3 text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingWho;
