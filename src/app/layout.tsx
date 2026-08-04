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
  title: "Ginny Dembek Ph.D. | Education Consulting & Literacy Support",
  description:
    "Ginny Dembek Ph.D., special education faculty at Brooklyn College, offering literacy tutoring and education support for students with learning differences.",
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
