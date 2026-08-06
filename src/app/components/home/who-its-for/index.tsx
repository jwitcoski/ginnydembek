import { whoItsFor } from "@/data/page-data";

const AudienceGroup = ({
  id,
  heading,
  intro,
  items,
}: {
  id: string;
  heading: string;
  intro: string;
  items: { title: string; description: string }[];
}) => (
  <div id={id}>
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
);

const WhoItsFor = () => {
  return (
    <section id="who" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Who this is for</h2>
          <p>
            Tutoring and consulting are offered as separate services. Tutoring is individualized work with students and families.
            Consulting is broader partnership work with schools and organizations—including organizational structure and teacher or tutor training.
            Both are educational supports that complement, rather than replace, what schools provide.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          <AudienceGroup
            id="tutoring"
            heading={whoItsFor.tutoring.heading}
            intro={whoItsFor.tutoring.intro}
            items={whoItsFor.tutoring.items}
          />
          <AudienceGroup
            id="consulting"
            heading={whoItsFor.consulting.heading}
            intro={whoItsFor.consulting.intro}
            items={whoItsFor.consulting.items}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
