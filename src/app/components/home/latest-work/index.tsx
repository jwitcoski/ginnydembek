"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "publications", title: "Publications" },
  { id: "presentations", title: "Conference Presentations" },
  { id: "courses", title: "Courses" },
  { id: "programs", title: "New Program Development" },
  { id: "consulting", title: "Consulting & Research" },
  { id: "tutoring", title: "Tutoring" },
  { id: "news", title: "News & Current Events" },
];

const LatestWork = () => {
  const [openSection, setOpenSection] = useState<string | null>("publications");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      if (hash && sections.some((s) => s.id === hash)) {
        setOpenSection(hash);
      }
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Publications & More</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>

            <div className="space-y-4">
              {sections.map(({ id, title }) => (
                <div key={id} id={id} className="border border-softGray rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenSection(openSection === id ? null : id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-softGray/50 transition-colors"
                  >
                    <h3 className="text-lg font-bold">{title}</h3>
                    <span className="text-2xl">{openSection === id ? "−" : "+"}</span>
                  </button>
                  {openSection === id && (
                    <div className="px-6 pb-6 pt-2 border-t border-softGray">
                      {id === "publications" && <PublicationsContent />}
                      {id === "presentations" && <PresentationsContent />}
                      {id === "courses" && <CoursesContent />}
                      {id === "programs" && <ProgramsContent />}
                      {id === "consulting" && <ConsultingContent />}
                      {id === "tutoring" && <TutoringContent />}
                      {id === "news" && <NewsContent />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PublicationsContent = () => (
  <div className="space-y-6 text-base">
    <div>
      <h4 className="font-bold mb-3">Peer-Reviewed Journal Articles</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dembek, G. A., Lauterbach, M. D., & Datchuk, S. M. (2023). Creating an adaptable literacy tutoring system for elementary-aged students in New York City foster care. <em>Journal of Research in Childhood Education</em>, 37(3), 463-475.</li>
        <li>Dembek, G. A. & Kubina, R. M. (2018). Talk aloud problem solving and frequency building to a performance criterion improves science reasoning. <em>Journal of Evidence-Based Practices for Schools</em>, 16(2), 147-170.</li>
        <li>Dembek, G. A. & Kubina, R. M. (2018). The effect of talk aloud problem solving with a student at-risk for reading disabilities: A case study. <em>Reading Improvement</em>, 55(3), 93-105.</li>
        <li>Datchuk, S. M. & Dembek, G. A. (2018). Adapting a sentence intervention with spelling and handwriting support for elementary students with writing difficulties: A preliminary investigation. <em>Insights into Learning Disabilities</em>, 15(1), 7-27.</li>
        <li>Miles, K. P., Lauterbach, M., Murano, D., & Dembek, G. A. (2018). Reading Rescue: A follow-up on the effectiveness of an intervention for Language Minority Children. <em>Journal of Educational Research</em>, 112(2), 255-269. DOI: 10.1080/00220671.2018.1514358</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-3">Other Publications</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lauterbach M. D., & Dembek, G. A. (2023). Gaining Insights into the Education of Vulnerable Students: Services in Schools and Beyond, <em>Journal of Research in Childhood Education</em>, 37(3), 363-365, DOI: 10.1080/02568543.2023.2214501</li>
      </ul>
    </div>
  </div>
);

const PresentationsContent = () => (
  <div className="space-y-6 text-base">
    <div>
      <h4 className="font-bold mb-3">Invited Presentations</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dembek, G. A. (2019) Webinar: Talk alouds: Incorporating instruction and systematic practice routines for students with special needs during problem solving <Link href="https://courses.precisionteachinguniversity.com/courses/talk-alouds-incorporating-instruction-and-systematic-practice-routines-for-students-with-special-needs-during-problem-solving" className="text-primary hover:underline">Link</Link></li>
        <li>Fall 2017 Guest Lecturer: Differentiation for Diverse Learners with Disabilities (SPCED 2051). New York University.</li>
        <li>Dembek, G.A. (2015, July). An examination of fluent thinking skills: Developing research in academic content. Northeastern Federation for Precision Teaching Conference, Pittsburgh, PA.</li>
        <li>Dembek, G.A. (2013, April). The effect of talk aloud instruction on problem solving skills. Science Education for Students with Disabilities (SESD) Annual Conference, San Antonio, TX.</li>
        <li>Spring 2013 Guest Lecturer: Co-teaching panel presentation (SPLED 404). Penn State University.</li>
        <li>Spring 2013 Guest Lecturer: Behavioral Fluency for Reading (SPLED 409A). Penn State University.</li>
        <li>Fall 2012 – Fall 2009: Multiple guest lectures at Penn State University (SPLED 411, SPLED 395W).</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-3">Conference Presentations</h4>
      <ul className="list-disc pl-6 space-y-2 max-h-96 overflow-y-auto">
        <li>Dembek, G. A., Lee, Y. J, & Kyprianou, S. (November, 2024). Building an evidence-based special education program to fit the needs of New York City schools and students. Teacher Education Division Conference of Council for Exceptional Children, Pittsburgh, PA.</li>
        <li>Dembek, G. A., Lee, Y. J, & Kyprianou, S. (2024). Creating an Undergraduate Special Education Program for Students in New York City. NYSATE/NYACTE, Saratoga Springs, NY.</li>
        <li>Lauterbach, M.D., & Dembek, G. A. (2024). Implementation of a dynamic home-based reading intervention for students in the foster care system. American Education Research Association, Philadelphia, PA.</li>
        <li>Dembek, G. A., Lee, Y. J, & Kyprianou, S. (2024). Building an evidence-based, innovative, special education program. CUNY Education Conference.</li>
        <li>Dembek, G. A., & Lauterbach, M. D. (2023). Development and changes in a literacy tutoring program for system-involved youth: Year four. Society of Scientific Studies of Reading, Port Douglas, Australia.</li>
        <li>Lauterbach, M. D., & Dembek, G. A. (2022). A sustainable literacy tutoring program for children in foster care: Year three. Society of Scientific Studies of Reading, Newport Beach, CA.</li>
        <li>Lauterbach, M. D., & Dembek, G. A. (2022). Incorporating fluency and practice routines for students in foster care. New England Educational Research Organization, Portsmouth, NH.</li>
        <li>Dembek, G. A., & Lauterbach, M. D. (2021). Creating a dynamic literacy tutoring system for students in foster care. International Dyslexia Association Virtual Conference.</li>
        <li>Lauterbach, M. D., & Dembek, G. A. (2021). Transforming a data-based Tutoring Program in Literacy to a virtual environment. Society of Scientific Studies of Reading Virtual Conference.</li>
        <li>Lauterbach, M. D., Miles, K. P., Dembek, G. A., Murano, D., & Tabone, F. (2019). Beyond the IEP: Using Machine learning to identify groupings of special needs learners. Society for the Scientific Studies of Reading, Toronto, Canada.</li>
        <li>Pace Miles, K., Lauterbach, M., Murano, D., & Dembek, G.A. (2018). Reading Rescue: A follow up on the effectiveness of an intervention program. Society for the Scientific Study of Reading, Brighton, UK.</li>
        <li>Datchuk, S.M., Dembek, G.A. (2018). Tertiary levels of support: Improving the sentence-level writing skills of students with learning disabilities. Council for Exceptional Children Convention & Expo, Tampa, Florida.</li>
        <li>Dembek, G.A. (2017). The effects of the talk aloud problem-solving instructional package on statement and problem solving fluency. Association for Applied Behavior Analysts International Conference, Denver, CO.</li>
        <li>Dembek, G.A. (2016). Think aloud problem solving: Research in reading and content area skills. Association for Applied Behavior Analysts International Conference, Chicago, IL.</li>
        <li>Dembek, G.A. (2015). Fluent thinking skills: Research in reading and content area skills. International Precision Teaching Conference, St. Pete Beach, FL.</li>
        <li>Dembek, G.A., & Kubina, R.M. (2014). Talk aloud problem solving: An exploration of acquisition and frequency building for students with learning disabilities. International Precision Teaching Conference, St. Pete Beach, FL.</li>
        <li>Dembek, G.A. (2013). Effect of talk aloud problem solving using science text. Association for Applied Behavior Analysts International Conference, Minneapolis, MN.</li>
      </ul>
    </div>
  </div>
);

const CoursesContent = () => (
  <div className="space-y-6 text-base">
    <div>
      <h4 className="font-bold mb-3">Graduate Courses Taught at Brooklyn College</h4>
      <ul className="space-y-4">
        <li><strong>CBSE 7677:</strong> Curriculum Modifications for Teaching Students with Special Needs (Instructor and Course Convenor) — Adapting general education curriculum for inclusive classrooms.</li>
        <li><strong>CBSE 7680:</strong> Research Methods in Special Education — Qualitative and quantitative research methodologies.</li>
        <li><strong>CBSE 7657T:</strong> Seminar in Applied Theory and Research — Independent research project in special education.</li>
        <li><strong>CBSE 7678:</strong> Literacy Instruction for Students with Special Needs (Instructor and Course Convener) — Evidence-based literacy instruction.</li>
        <li><strong>CBSE 7681:</strong> Special Education Student Teaching Seminar — Support during student teaching experiences.</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-3">Undergraduate Courses Taught at Brooklyn College</h4>
      <ul className="space-y-4">
        <li><strong>CBSE 3456/7674:</strong> Inclusive Education and Teaching Students with Special Needs — Foundational knowledge about inclusive education.</li>
        <li><strong>SPCL 3200:</strong> Assistive Technology for Students with Disabilities (Instructor and Course Convener) — AAC, AT, and Universal Design for Learning.</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-3">Professional Development Workshops</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Universal Design for Learning in Practice</li>
        <li>Evidence-Based Literacy Interventions</li>
        <li>Technology Integration for Inclusive Classrooms</li>
        <li>Collaborative Teaching Models for Inclusion</li>
      </ul>
    </div>
  </div>
);

const ProgramsContent = () => (
  <div className="space-y-6 text-base">
    <div>
      <h4 className="font-bold mb-3">Special Education Undergraduate Program (2022-Present)</h4>
      <p>Led the development of a new 30 credit program for undergraduate teachers to gain certification in special education. The program focuses on evidence-based practices, inclusive education, and technology integration for students with disabilities.</p>
      <Link href="https://www.brooklyn.edu/academics/programs/childhood-education-teacher-special-education-bs/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary hover:underline font-medium">View Program Details →</Link>
    </div>
    <div>
      <h4 className="font-bold mb-3">Literacy Tutoring Program for Foster Youth (2019-2024)</h4>
      <p>Established a collaborative program between Brooklyn College and the New York Foundling to provide evidence-based literacy tutoring for youth in foster care. The program served as both a service initiative and a research site.</p>
    </div>
  </div>
);

const ConsultingContent = () => (
  <div className="space-y-6 text-base">
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <div className="text-center">
        <Image src="/images/researchfoundationcunylogo.png" alt="Research Foundation CUNY" width={120} height={80} className="mx-auto object-contain" />
        <p className="mt-2 text-sm">Research Foundation CUNY</p>
      </div>
      <div className="text-center">
        <Image src="/images/robinhoodfoundationlogo.png" alt="Robin Hood Foundation" width={120} height={80} className="mx-auto object-contain" />
        <p className="mt-2 text-sm">Robin Hood Foundation</p>
      </div>
      <div className="text-center">
        <Image src="/images/brooklyncollegeshoolofeducationlogo.png" alt="Brooklyn College" width={120} height={80} className="mx-auto object-contain" />
        <p className="mt-2 text-sm">Brooklyn College</p>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-3">Areas of Expertise</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div><strong>Educational Program Evaluation</strong> — Comprehensive evaluation services for special education interventions.</div>
        <div><strong>Inclusive Education Implementation</strong> — Developing inclusive education models and co-teaching support.</div>
        <div><strong>Curriculum Development and Modification</strong> — Accessibility reviews and UDL integration.</div>
        <div><strong>Professional Development Design</strong> — Customized workshops and multi-year learning initiatives.</div>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-3">Recent Projects</h4>
      <ul className="space-y-4">
        <li><strong>New York Foundling Literacy Tutoring Program (2019-2025):</strong> Developed literacy tutoring for youth in foster care, funded by Robin Hood Foundation.</li>
        <li><strong>Research Foundation CUNY Grant (2021-2023):</strong> Virtual tutoring interventions during COVID-19; identified best practices for remote instruction.</li>
        <li><strong>Brooklyn College Collaborative (2020-Present):</strong> Interdisciplinary research collaborative for students with disabilities in urban settings.</li>
      </ul>
    </div>
  </div>
);

const TutoringContent = () => (
  <div className="space-y-6 text-base">
    <div>
      <h4 className="font-bold mb-3">Specialized Services</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div><strong>Specialized Literacy Tutoring</strong> — Dyslexia, dysgraphia, language-based learning disabilities; evidence-based structured literacy.</div>
        <div><strong>Academic Support for Learning Disabilities</strong> — Explicit instruction, compensatory strategies, study techniques, self-advocacy.</div>
        <div><strong>Executive Function Coaching</strong> — Time management, organization, planning, task initiation, self-monitoring.</div>
        <div><strong>College Preparation for Students with Disabilities</strong> — Self-advocacy training, accommodations guidance, college applications.</div>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-3">Tutoring Approach</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Assessment-Based Planning</strong> — Comprehensive assessment informing individualized goals</li>
        <li><strong>Evidence-Based Methods</strong> — Research-supported instructional approaches</li>
        <li><strong>Progress Monitoring</strong> — Regular data collection aligned with learning goals</li>
        <li><strong>Collaboration with Schools and Families</strong> — Consistency across learning environments</li>
        <li><strong>Focus on Independence</strong> — Metacognitive strategies and gradual release of responsibility</li>
      </ul>
    </div>
  </div>
);

const NewsContent = () => (
  <div className="text-base">
    <p className="text-secondary">TBD</p>
  </div>
);

export default LatestWork;
