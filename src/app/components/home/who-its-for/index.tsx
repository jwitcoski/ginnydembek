import { whoItsFor } from "@/data/page-data";

const WhoItsFor = () => {
  return (
    <section id="who" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Who this is for</h2>
          <p>
            This practice is for families whose children need specialized support beyond general tutoring. Services focus on the areas below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {whoItsFor.map((item) => (
            <div key={item.title} className="border-t border-mistGray pt-6">
              <h3 className="text-ink mb-3">{item.title}</h3>
              <p className="m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
