import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexus-cosmos.vercel.app";
  const routes = [
    "",
    "/iss-tracker",
    "/solar-system",
    "/nasa-gallery",
    "/ai-assistant",
    "/space-weather",
    "/launches",
    "/astronauts",
    "/timeline",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/license",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
