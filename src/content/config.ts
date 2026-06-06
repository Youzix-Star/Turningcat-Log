import { defineCollection, z } from 'astro:content';

const logs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    source: z.string().optional(),
    channelName: z.string().optional(),
    channelUsername: z.string().optional(),
    channelAvatar: z.string().optional(),
    format: z.enum(['txt', 'md']).optional(),
    translated: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { logs };