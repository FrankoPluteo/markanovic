// lib/projects.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Project = {
  slug: string;
  title: string;
  date?: string;
  location?: string;
  excerpt?: string;
  images?: string[];   // ✅ new
  contentHtml?: string;
};

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDir)) return [];
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function normalizeImages(value: unknown): string[] | undefined {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  return undefined;
}

export function getAllProjects(): Project[] {
  const slugs = getAllProjectSlugs();

  const projects = slugs.map((slug) => {
    const fullPath = path.join(projectsDir, `${slug}.md`);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(file);

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: data.date as string | undefined,
      location: data.location as string | undefined,
      excerpt: data.excerpt as string | undefined,
      images: normalizeImages((data as any).images), // ✅ new
      contentHtml: content, // not used on list
    };
  });

  projects.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: data.date as string | undefined,
    location: data.location as string | undefined,
    excerpt: data.excerpt as string | undefined,
    images: normalizeImages((data as any).images), // ✅ new
    contentHtml,
  };
}
