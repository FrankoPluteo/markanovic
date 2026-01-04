// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="hr" style={{height: "100%"}}>
      <body style={{margin: 0, height: "100%"}}>
        <Header />
        <main style={{paddingTop: "100px", minHeight: "100vh"}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}