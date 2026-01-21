import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import styles from "./slug.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: "Projekt" };

  const og = project.images?.[0];

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: og ? [{ url: og }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
    <div className={styles.slugbox}>
      
      <div className={styles.projectinfo}>
        <h1 style={{ 
          color:"#3F84E5", 
          fontFamily: "var(--font-oswald)", 
          textTransform: "uppercase", 
          letterSpacing: "0.03em",
          fontSize: "clamp(1.8em, 5vw, 2.5em)",
          textAlign: "center",
          wordBreak: "break-word",
          hyphens: "auto"
        }}>
          {project.title}
        </h1>

        <div style={{ 
          opacity: 0.75, 
          marginTop: 6, 
          marginBottom: 18, 
          fontSize: "clamp(12px, 2.5vw, 14px)",
          textAlign: "center",
          padding: "0 10px"
        }}>
          {project.location ? <span>{project.location}</span> : null}
          {project.date ? <span>{project.location ? " • " : ""}{project.date}</span> : null}
        </div>

        <article 
          dangerouslySetInnerHTML={{ __html: project.contentHtml ?? "" }} 
          style={{
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordWrap: "break-word"
          }}
        />

      </div>

        {project.images?.length ? (
          <ProjectGallery images={project.images} title={project.title} />
        ) : null}


      </div>
    </>
  );
}