import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extra velden voor een manual. Een pagina met "niveau" is een manual:
// die krijgt automatisch de infobalk bovenaan en de bronvermelding onderaan.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        niveau: z.enum(['beginner', 'gevorderd', 'expert']).optional(),
        duur: z.string().optional(),
        concepten: z.array(z.string()).default([]),
        watJeMaakt: z.string().optional(),
        // Link naar een voorbeeldproject of startproject op scratch.mit.edu.
        scratchProject: z.string().url().optional(),
        downloads: z
          .array(z.object({ label: z.string(), url: z.string() }))
          .default([]),
        bron: z
          .object({
            titel: z.string(),
            url: z.string().url(),
            door: z.string().default('CoderDojo Belgium'),
          })
          .optional(),
        // Pas op true zetten als iemand het project van begin tot einde
        // in Scratch 3 heeft nagebouwd met deze manual.
        nagekeken: z.boolean().default(false),
      }),
    }),
  }),
};
