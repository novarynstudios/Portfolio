import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { absoluteUrl } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Farid Rahman | Minecraft Plugin Developer",
    template: "%s | Farid Rahman"
  },
  description:
    "Portfolio of Farid Rahman, a Minecraft plugin developer and full-stack web developer building Paper, Velocity, licensing, and Next.js systems at Novaryn Studios.",
  keywords: [
    "Farid Rahman",
    "Novaryn Studios",
    "Minecraft plugin developer",
    "Paper plugin",
    "Velocity proxy",
    "Next.js developer",
    "Minecraft server tools"
  ],
  openGraph: {
    title: "Farid Rahman | Novaryn Studios",
    description: "Minecraft plugin development, licensing platforms, modern web experiences, and reliable infrastructure.",
    url: absoluteUrl("/"),
    siteName: "Farid Rahman Portfolio",
    images: [{ url: "/og/farid-og.svg", width: 1200, height: 630, alt: "Farid Rahman portfolio preview" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farid Rahman | Novaryn Studios",
    description: "Minecraft plugin development, licensing platforms, modern web experiences, and reliable infrastructure.",
    images: ["/og/farid-og.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/branding/favicon.webp",
    shortcut: "/branding/favicon.webp",
    apple: "/branding/favicon.webp"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-poppins`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
