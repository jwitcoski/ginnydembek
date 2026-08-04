import Link from "next/link";

const Trust = () => {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-white mb-5">About Dr. Dembek</h2>
          <p className="text-white/80 mb-4">
            Ginny Dembek Ph.D. is faculty in the School of Education at Brooklyn College and a third-generation special educator. Her work centers on literacy, writing, and intervention research for students with disabilities.
          </p>
          <p className="text-white/80 mb-8">
            She holds a Ph.D. in Special Education from Penn State University and has been on the Brooklyn College faculty since 2013.
          </p>
          <Link
            href="/resume"
            className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white"
          >
            View academic resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trust;
