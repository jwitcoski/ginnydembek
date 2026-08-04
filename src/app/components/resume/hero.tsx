import Image from "next/image";
import Link from "next/link";

const ResumeHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 lg:pb-24 bg-surface">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary font-medium m-0">
              Academic Resume
            </p>
            <div>
              <h1 className="text-ink mb-2">Ginny Dembek Ph.D.</h1>
              <p className="font-display text-xl md:text-2xl text-ink/80 m-0">
                Researcher, Educator, Consultant, Advocate
              </p>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl m-0">
              As a third-generation special educator, I am committed to improving the lives of students with disabilities and increasing their success and inclusion in the general education classroom.
            </p>
            <Link href="/" className="btn-outline w-fit text-sm md:text-base">
              Back to Consulting Site
            </Link>
          </div>
          <Image
            src="/images/headshot1.jpeg"
            alt="Ginny Dembek Ph.D."
            width={685}
            height={650}
            className="block lg:hidden object-cover w-full max-w-md"
            priority
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <Image
          src="/images/headshot1.jpeg"
          alt="Ginny Dembek Ph.D."
          width={685}
          height={650}
          className="absolute right-0 top-0 h-full w-full object-cover object-[center_20%]"
          priority
        />
      </div>
    </section>
  );
};

export default ResumeHero;
