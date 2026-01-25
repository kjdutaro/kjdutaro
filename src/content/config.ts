import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tech: z.array(z.string()),
    }),
    });

    const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
    }),
});

export const collections = { projects, blog };
