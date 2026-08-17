import Link from "next/link";
import { resumePath } from "@/lib/routes";

const ConsultingTrust = () => {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-white mb-5">About the consulting practice</h2>
          <p className="text-white/80 mb-4">
            I am faculty in the School of Education at Brooklyn College. My research and teacher-preparation work inform consulting on organizational structure, teacher and tutor training, and literacy intervention for schools and organizations.
          </p>
          <p className="text-white/80 mb-8">
            That includes collaborative literacy tutoring work with New York Foundling, alongside ongoing research in literacy intervention and writing instruction for students with disabilities.
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
