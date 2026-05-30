import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    publish_date: z.date().optional(),
    cover: z.string().optional(),
    photos: z.array(z.object({ image: z.string() })).optional(),
    sample_pages: z.array(z.object({ image: z.string() })).optional(),
    buy_link: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    published: z.boolean().optional(),
  }),
});

export const collections = { issues };