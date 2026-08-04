import { whatChanges } from "@/data/page-data";

const WhatChanges = () => {
  return (
    <section id="results" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">What this work focuses on for your child</h2>
          <p>
            The aim is practical progress in school-related skills, with instruction that is individualized and monitored over time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {whatChanges.map((item) => (
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

export default WhatChanges;
