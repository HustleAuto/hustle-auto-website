import { z } from 'zod';

const hustleClientSettingsSchema = z
  .object({
    GOOGLE_TAG_MANAGER: z
      .object({
        CONTAINER_ID: z.string().startsWith('GTM-'),
      })
      .strict(),
    BEHOLD: z.object({
      FEED_ID: z.string().min(1),
    }),
    TIDIO: z.object({
      SCRIPT_ID: z.string().min(1),
    }),
    ELFSIGHT: z.object({
      WIDGET_ID: z.string().min(1),
    }),
  })
  .strict();

type HustleClientSettings = z.infer<typeof hustleClientSettingsSchema>;

const getHustleSettings = (): HustleClientSettings => {
  return hustleClientSettingsSchema.parse({
    GOOGLE_TAG_MANAGER: {
      CONTAINER_ID: process.env['NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID'],
    },
    BEHOLD: {
      FEED_ID: process.env['NEXT_PUBLIC_BEHOLD_FEED_ID'],
    },
    TIDIO: {
      SCRIPT_ID: process.env['NEXT_PUBLIC_TIDIO_SCRIPT_ID'],
    },
    ELFSIGHT: {
      WIDGET_ID: process.env['NEXT_PUBLIC_ELFSIGHT_WIDGET_ID'],
    },
  });
};

export {
  getHustleSettings as getHustleClientSettings,
  type HustleClientSettings,
};
