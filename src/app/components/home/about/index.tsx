import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-pad bg-canvas">
      <div className="container">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full overflow-hidden">
            <Image
              src="/images/about-photo.png"
              alt="Ginny Dembek Ph.D."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </div>

          <div>
            <h2 className="text-ink mb-5">About Ginny</h2>
            <p className="mb-4">
              Ginny Dembek is a special education professor at Brooklyn College and a third-generation special educator. Her work is grounded in a simple conviction: students with disabilities deserve high expectations, skilled instruction, and adults who advocate for their success in general education classrooms.
            </p>
            <p className="mb-4">
              Her research focuses on literacy, writing, and problem-solving interventions that teachers and tutors can apply with fidelity. She has published peer-reviewed studies on literacy tutoring—including work supporting youth in foster care—and co-edited a special journal issue on education for vulnerable students.
            </p>
            <p className="m-0">
              Families hire her because she combines that research base with direct, individualized support for children who need more than a one-size-fits-all approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
