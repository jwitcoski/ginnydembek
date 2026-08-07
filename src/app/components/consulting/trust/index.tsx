import Link from "next/link";
import { resumePath } from "@/lib/routes";

const ConsultingTrust = () => {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-white mb-5">Faculty expertise for organizational work</h2>
          <p className="text-white/80 mb-4">
            Ginny Dembek Ph.D. is faculty in the School of Education at Brooklyn College and a third-generation special educator. Her research focuses on literacy intervention, writing instruction, and evidence-based supports for students with disabilities, including collaborative literacy tutoring work with New York Foundling.
          </p>
          <p className="text-white/80 mb-8">
            That research and teacher-preparation background informs consulting on organizational structure, teacher and tutor training, and literacy intervention for schools and organizations.
          </p>
          <Link
            href={resumePath}
            className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white"
          >
            View academic resume and publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultingTrust;
