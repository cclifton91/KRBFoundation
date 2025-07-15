/*import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export const collections = {
  team: defineCollection({
    loader: file("src/data/team.json", {
      parser: (text) => JSON.parse(text),
    }),
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        role: z.string(),
        email: z.string().email(),
        cover: image(),
        coverAlt: z.string(),
        social: z.object({
          facebook: z.string().optional(),
          twitter: z.string().optional(),
          linkedin: z.string().optional(),
      }),
    }),
  }),
};*/