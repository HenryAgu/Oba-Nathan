import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sorts_Mill_Goudy, Calligraffitti } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const vogue = localFont({
  src: "./fonts/Vogue.ttf",
  variable: "--font-vogue",
  weight: "100 900",
})

const sortsMillyGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-sorts-milly-goudy',
});

const calligraffitti = Calligraffitti({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-calligraffitti',
});

export const metadata: Metadata = {
  title: "Oba Nathan | Capturing Moments",
  description: "Explore the portfolio of Oba Nathan, a professional photographer specializing in capturing stunning landscapes, portraits, and event photography. Book your session today!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sortsMillyGoudy.variable} ${vogue.variable} ${calligraffitti.variable} bg-white antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
