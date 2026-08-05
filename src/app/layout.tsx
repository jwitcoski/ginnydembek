import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ginny Dembek Ph.D. | Education Consulting & Literacy Tutoring",
  description:
    "Ginny Dembek Ph.D., special education faculty at Brooklyn College. In-person literacy tutoring in Brooklyn and education consulting for schools, organizations, and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} ${fraunces.variable} font-body antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
