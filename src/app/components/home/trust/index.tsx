import Link from "next/link";
import { consultingPath, resumePath } from "@/lib/routes";

const Trust = () => {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-white mb-5">Faculty expertise, applied in practice</h2>
          <p className="text-white/80 mb-4">
            Ginny Dembek Ph.D. is faculty in the School of Education at Brooklyn College and a third-generation special educator. Her research focuses on literacy intervention, writing instruction, and evidence-based supports for students with disabilities, including collaborative literacy tutoring work with New York Foundling.
          </p>
          <p className="text-white/80 mb-4">
            She holds a Ph.D. in Special Education from Penn State University and has been on the Brooklyn College faculty since 2013, preparing teacher candidates in special education, inclusive education, and literacy instruction.
          </p>
          <p className="text-white/80 mb-8">
            That faculty and research background informs tutoring for families and broader consulting for schools and organizations—including organizational structure and teacher or tutor training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link
              href={resumePath}
              className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white"
            >
              View academic resume and publications
            </Link>
            <Link
              href={consultingPath}
              className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white"
            >
              Read about consulting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
