// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Oswald } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'], 
  style: ['normal', 'italic'],
  variable: '--font-montserrat', 
});

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: {
    default: "Markanović d.o.o. | Krovovi i limarija",
    template: "%s | Markanović d.o.o.",
  },
  description: "Izrada, adaptacija i sanacija krovišta. Građevinska limarija i montaža.",
  openGraph: {
    title: "Markanović d.o.o.",
    description: "Izrada, adaptacija i sanacija krovišta. Građevinska limarija i montaža.",
    url: "https://www.markanovic.hr",
    siteName: "Markanović",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "hr_HR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={`${montserrat.variable} ${oswald.variable}`}>
      <body style={{margin: 0, minHeight: "100vh", position: "relative"}}>
        <div style={{
          position: "fixed",
          left: "20%",
          top: 0,
          height: "100%",
          width: "1px",
          backgroundColor: "rgba(128, 128, 128, 0.548)",
          pointerEvents: "none",
          zIndex: 2
        }}></div>
        
        <div style={{
          position: "fixed",
          right: "20%",
          top: 0,
          height: "100%",
          width: "1px",
          backgroundColor: "rgba(128, 128, 128, 0.548)",
          pointerEvents: "none",
          zIndex: 2
        }}></div>
        
        <Header />
        <main style={{paddingTop: "100px", minHeight: "100vh"}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}