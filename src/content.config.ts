import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    publish_date: z.date().optional(),
    cover: z.string().optional(),
    photos: z.array(z.string()).optional(),
    sample_pages: z.array(z.string()).optional(),
    buy_link: z.string().url().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    published: z.boolean().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    heading: z.string(),
    year: z.string(),
    month: z.string(),
    day: z.string().optional(),
    photos: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { issues, news };