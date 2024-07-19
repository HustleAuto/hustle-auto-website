import { z } from 'zod';

const hustleSettingsSchema = z
  .object({
    GOOGLE_TAG_MANAGER: z
      .object({
        CONTAINER_ID: z.string().startsWith('GTM-'),
      })
      .strict(),
    BEHOLD: z.object({
      FEED_ID: z.string().min(1),
    }),
  })
  .strict();

type HustleSettings = z.infer<typeof hustleSettingsSchema>;

const getHustleSettings = (): HustleSettings => {
  return hustleSettingsSchema.parse({
    GOOGLE_TAG_MANAGER: {
      CONTAINER_ID: process.env['NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID'],
    },
    BEHOLD: {
      FEED_ID: process.env['NEXT_PUBLIC_BEHOLD_FEED_ID'],
    },
  });
};

export { getHustleSettings, type HustleSettings };
