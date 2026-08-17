import type { Metadata } from "next";
import ResumeHero from "../components/resume/hero";
import ContactBar from "../components/resume/contact-bar";
import AboutMe from "../components/resume/about-me";
import Experience from "../components/resume/experience";
import EducationSkills from "../components/resume/education-skills";
import Publications from "../components/resume/publications";
import Link from "next/link";
import { consultingPath } from "@/lib/routes";

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
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-ink mb-2 text-3xl md:text-4xl">Looking for tutoring?</h2>
              <p className="m-0">
                In-person literacy tutoring and academic support for students and families in Brooklyn. The first consultation is free.
              </p>
            </div>
            <Link href="/#contact" className="btn-primary shrink-0">
              Schedule a conversation
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-mistGray pt-8">
            <div>
              <h2 className="text-ink mb-2 text-3xl md:text-4xl">Looking for consulting?</h2>
              <p className="m-0">
                Broader educational consulting for schools and organizations across NYC and surrounding areas, including virtual appointments.
              </p>
            </div>
            <Link href={consultingPath} className="btn-primary shrink-0">
              Read about consulting
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResumePage;
