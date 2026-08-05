import type { Metadata } from "next";
import ResumeHero from "../components/resume/hero";
import ContactBar from "../components/resume/contact-bar";
import AboutMe from "../components/resume/about-me";
import Experience from "../components/resume/experience";
import EducationSkills from "../components/resume/education-skills";
import Publications from "../components/resume/publications";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Resume | Ginny Dembek Ph.D.",
  description:
    "Academic resume for Ginny Dembek Ph.D., special education faculty at Brooklyn College. Research, teaching, publications, presentations, and consulting.",
};

const ResumePage = () => {
  return (
    <main>
      <ResumeHero />
      <ContactBar />
      <nav className="border-b border-softGray bg-canvas sticky top-[65px] z-40">
        <div className="container py-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {[
            { href: "#about", label: "About" },
            { href: "#research", label: "Research" },
            { href: "#education", label: "Education" },
            { href: "#publications", label: "Publications" },
            { href: "#presentations", label: "Presentations" },
            { href: "#courses", label: "Courses" },
            { href: "#programs", label: "Programs" },
            { href: "#consulting", label: "Consulting" },
            { href: "#tutoring", label: "Tutoring" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-secondary hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <AboutMe />
      <Experience />
      <div id="education">
        <EducationSkills />
      </div>
      <Publications />
      <section className="section-pad bg-softGray">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-ink mb-2 text-3xl md:text-4xl">Looking for consulting or tutoring?</h2>
            <p className="m-0">
              Visit the main site for in-person literacy tutoring in Brooklyn and education consulting for families, schools, and organizations. The first consultation is free.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary shrink-0">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ResumePage;
