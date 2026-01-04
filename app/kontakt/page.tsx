import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <>
      <h1>Kontakt</h1>
      <p>Telefon, email, adresa…</p>
      {/* Formu ćemo ubaciti kasnije s /api/contact */}
    </>
  );
}
