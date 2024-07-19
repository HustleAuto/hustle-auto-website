import { z } from 'zod';

const contactUsFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Name must be at least 1 characters.',
    })
    .max(500, {
      message: 'Name must be less than 500 characters.',
    }),
  contactInfo: z
    .string()
    .min(1, {
      message: 'Contact info must be at least 1 characters',
    })
    .max(500, {
      message: 'Contact info must be less than 500 characters.',
    }),
  message: z
    .string()
    .min(1, {
      message: 'Message must be at least 1 characters long',
    })
    .max(5000, {
      message: 'Message must be less than 5000 characters',
    }),
});

type ContactUsFormSchema = z.infer<typeof contactUsFormSchema>;

export { contactUsFormSchema, type ContactUsFormSchema };
