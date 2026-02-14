/**
 * Astro Content Collections configuration.
 *
 * Defines Zod schemas for every collection used across the site.
 * See docs/CONTENT.md for details on adding new entries.
 */
import { defineCollection, z } from "astro:content";

/* ---- Projects ---- */
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().optional(),
    liveLink: z.string().optional(),
    featured: z.boolean().default(false),
    category: z
      .enum(["client", "personal", "academic", "prototype"])
      .default("personal"),
  }),
});

/* ---- Blog ---- */
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

/* ---- Experience ---- */
const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string(),
    current: z.boolean().default(false),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

/* ---- Certifications ---- */
const certifications = defineCollection({
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.date(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().optional(),
  }),
});

export const collections = { projects, blog, experience, certifications };
