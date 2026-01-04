import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.markanovic.hr";

  const staticRoutes = ["", "/o-nama", "/projekti", "/kontakt"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projekti/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
