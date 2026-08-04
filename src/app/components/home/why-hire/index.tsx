import { whyHireReasons } from "@/data/page-data";

const WhyHire = () => {
  return (
    <section id="why-hire" className="section-pad bg-canvas">
      <div className="container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-ink mb-4">Why hire Ginny for your child</h2>
          <p>
            When your child is falling behind—or working harder than they should just to keep up—you need more than generic tutoring. You need someone who understands how students with learning differences learn, and how to teach them effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
          {whyHireReasons.map((reason, index) => (
            <div key={reason.title} className="border-t border-mistGray pt-6">
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 m-0">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-ink mb-3">{reason.title}</h3>
              <p className="m-0">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
