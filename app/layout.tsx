import type { Metadata } from "next";
import { Elms_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const elmsSans = Elms_Sans({
  subsets: ["latin"],
  variable: "--font-elms",
});

export const metadata: Metadata = {
  title: "Portafolio Juan",
  description: "Mi portafolio de desarrollo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main className="flex-1 pt-28">
          {children}
        </main>

      </body>
    </html>
  );
}