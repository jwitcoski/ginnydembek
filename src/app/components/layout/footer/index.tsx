import Link from "next/link";
import { consultingPath, resumePath } from "@/lib/routes";

const Footer = () => {
  return (
    <footer className="bg-ink text-white/80 py-10 md:py-14">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl text-white mb-1">Ginny Dembek Ph.D.</p>
          <p className="text-sm text-white/60 m-0">
            Literacy tutoring in Brooklyn and education consulting across NYC and surrounding areas
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <Link href="/#tutoring" className="hover:text-white">
            Tutoring
          </Link>
          <Link href={consultingPath} className="hover:text-white">
            Consulting
          </Link>
          <Link href="/#how" className="hover:text-white">
            How It Works
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
          <Link href={resumePath} className="hover:text-white">
            Academic Resume
          </Link>
          <Link href="mailto:ginny.dembek@gmail.com" className="hover:text-white">
            ginny.dembek@gmail.com
          </Link>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-white/10">
        <p className="text-sm text-white/50 m-0">
          &copy; {new Date().getFullYear()} Ginny Dembek Ph.D. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
