"use client";

import Logo from "../logo";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#presentations", label: "Presentations" },
  { href: "#courses", label: "Courses" },
  { href: "#programs", label: "Programs" },
  { href: "#consulting", label: "Consulting" },
  { href: "#tutoring", label: "Tutoring" },
  { href: "#news", label: "News" },
];

const Header = () => {
    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute bg-white/95 backdrop-blur-sm">
            <div className="container">
                <nav className="py-7 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <Logo />
                        <div className="hidden lg:flex flex-wrap gap-4 text-sm">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
