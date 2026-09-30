import { defineCollection } from 'astro:content';
import { createRequire } from 'node:module';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.mdx',
    generateId: ({ entry }) => entry.replace(/\.mdx$/i, ''),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: image().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
