import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="font-display text-lg md:text-xl font-semibold text-white tracking-tight hover:text-white/90">
      Ginny Dembek <span className="font-normal text-white/70">Ph.D.</span>
    </Link>
  );
};

export default Logo;
