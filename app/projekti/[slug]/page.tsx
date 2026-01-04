import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Projekt" };

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <h1>{project.title}</h1>
      <div style={{ opacity: 0.8, marginBottom: 16 }}>
        {project.location ? <span>{project.location}</span> : null}
        {project.date ? <span>{project.location ? " • " : ""}{project.date}</span> : null}
      </div>

      <article dangerouslySetInnerHTML={{ __html: project.contentHtml ?? "" }} />
    </>
  );
}
