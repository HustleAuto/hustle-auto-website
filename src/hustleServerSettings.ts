import { z } from 'zod';

const hustleServerSettingsSchema = z
  .object({
    CONTENTFUL: z.object({
      SPACE_ID: z.string().min(1),
      ACCESS_TOKEN: z.string().min(1),
      PREVIEW_ACCESS_TOKEN: z.string().default(''),
    }),
  })
  .strict();

type HustleServerSettings = z.infer<typeof hustleServerSettingsSchema>;

const getHustleServerSettings = (): HustleServerSettings => {
  return hustleServerSettingsSchema.parse({
    CONTENTFUL: {
      SPACE_ID: process.env['CONTENTFUL_SPACE_ID'],
      ACCESS_TOKEN: process.env['CONTENTFUL_ACCESS_TOKEN'],
      PREVIEW_ACCESS_TOKEN: process.env['CONTENTFUL_PREVIEW_ACCESS_TOKEN'],
    },
  });
};

export { getHustleServerSettings, type HustleServerSettings };
