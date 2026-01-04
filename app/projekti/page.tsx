import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projekti" };

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <h1>Projekti</h1>
      <ul style={{ paddingLeft: 18 }}>
        {projects.map((p) => (
          <li key={p.slug} style={{ marginBottom: 12 }}>
            <Link href={`/projekti/${p.slug}`} style={{ fontWeight: 600 }}>
              {p.title}
            </Link>
            {p.location ? <div>{p.location}</div> : null}
            {p.excerpt ? <div>{p.excerpt}</div> : null}
          </li>
        ))}
      </ul>
    </>
  );
}
