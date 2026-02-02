import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microtarget",
  description: "Better location based decisions with micro territory indicators.",
  metadataBase: new URL("https://www.microtarget.es"),
  openGraph: {
    title: "Microtarget",
    description: "Better location based decisions with micro territory indicators.",
    type: "website",
  },
};

const themeScript = `(() => {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-background text-foreground antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}
