import type { Metadata } from "next";

export const metadata: Metadata = { title: "O nama" };

export default function AboutPage() {
  return (
    <>
      <h1>O nama</h1>
      <p>Ovdje ide priča o firmi, iskustvu, području rada i vrijednostima.</p>
    </>
  );
}
