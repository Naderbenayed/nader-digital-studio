import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nader Digital Studio",
  description:
    "Studio digital premium pour sites web, landing pages, contenu, vidéos courtes, social media et identité digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#050914] text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
