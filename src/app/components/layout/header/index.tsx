"use client";

import Logo from "../logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const homeLinks = [
  { href: "/#who", label: "Who It's For" },
  { href: "/#how", label: "How It Works" },
  { href: "/#results", label: "Focus" },
  { href: "/#logistics", label: "Details" },
  { href: "/#contact", label: "Contact" },
];

const resumeLinks = [
  { href: "/", label: "Home" },
  { href: "/resume#about", label: "About" },
  { href: "/resume#research", label: "Research" },
  { href: "/resume#publications", label: "Publications" },
  { href: "/resume#consulting", label: "Consulting" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isResume = pathname?.startsWith("/resume");
  const navLinks = isResume ? resumeLinks : homeLinks;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-ink/90 backdrop-blur-md border-b border-white/10">
      <div className="container">
        <nav className="py-4 md:py-5 flex items-center justify-between gap-4">
          <Logo />
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 hover:text-white tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary text-sm md:text-base px-5 py-2.5">
              Request a Consultation
            </Link>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-10 flex flex-col justify-center gap-1.5 w-10 h-10 border border-white/30 rounded-sm bg-transparent"
          >
            <span className={`block mx-auto w-5 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block mx-auto w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block mx-auto w-5 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>
        {open && (
          <div className="lg:hidden pb-5 flex flex-col gap-3 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/90 py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit text-sm mt-2"
            >
              Request a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
