import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ServiceLogo } from "@/components/service-logo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Am Anxious",
  description: "A private space where you can unburden your anxieties anonymously and safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative overflow-hidden overscroll-none">
          <div className="pt-20 min-h-[85vh]">
            <nav className="z-20 fixed top-0 bg-white/10 border border-t-0 border-white/20 w-full flex gap-7 px-10 py-5 backdrop-blur-xl drop-shadow-2xl shadow-2xl rounded-b-2xl">
              <Link href="/">
                <ServiceLogo />
              </Link>
              <div className="flex-1"></div>
            </nav>
            <div className="z-20 px-5 md:px-10 max-w-screen-2xl mx-auto">
              {children}
            </div>
          </div>
          <footer className="z-20 w-full mt-10 text-white/80 rounded-t-2xl bottom-0 bg-white/10 backdrop-blur-xl border border-white/20 border-b-0 drop-shadow-2xl shadow-2xl p-5 flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row flex-wrap max-w-screen-2xl gap-16 mx-auto w-full justify-between mt-5 px-5">
              <div className="flex flex-col gap-2">
                <ServiceLogo className="mb-5" />
                <p>
                  Designed by <strong>Alla Medvedieva</strong>
                </p>
                <p>
                  Developed by <strong>Max Kozachenko</strong>
                </p>
              </div>
              <div className="flex flex-col min-h-[100%] justify-center gap-8 text-white/70 font-semibold">
                <Link href="/about">About us →</Link>
                <Link href="/read">Others&apos; worries →</Link>
                <a href="https://war.ukraine.ua/" target="_blank" rel="noopener noreferrer">
                  Help 🇺🇦Ukraine
                </a>
              </div>
              <div className="flex flex-col gap-5 font-light text-white/40">
                <p>
                  Questions, suggestions, or wish to support our
                  <br />
                  hosting efforts:{" "}
                  <a
                    href="mailto:iamanxious@kozachenko.io"
                    className="underline font-semibold text-white/80"
                  >
                    iamanxious@kozachenko.io
                  </a>
                </p>
                <p>
                  Want to work with us?{" "}
                  <a
                    href="mailto:projects@kozachenko.io"
                    className="underline font-semibold text-white/80"
                  >
                    projects@kozachenko.io
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center font-light">
              <p>&copy; {currentYear} I Am Anxious</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
