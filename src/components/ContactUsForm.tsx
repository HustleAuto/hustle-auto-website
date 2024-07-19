'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ContactUsFormSchema,
  contactUsFormSchema,
} from '@/models/ContactUsFormSchema';

export default function ContactUsForm() {
  const searchParams = useSearchParams();

  const form = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: '',
      contactInfo: '',
      message: '',
    },
  });

  // for development purposes, prefill the form with hardcoded values
  // when there is a search param of "prefill=true" is present in the URL
  useEffect(() => {
    if (searchParams) {
      const fill = searchParams.get('prefill') === 'true';

      if (fill) {
        form.setValue('name', 'John Doe');
        form.setValue('contactInfo', 'john.doe@gmail.com or (403) 123 - 4567');
        form.setValue('message', 'Hello!');
      }
    }
  }, [searchParams, form]);

  function onSubmit(values: ContactUsFormSchema) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>What can we call you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Info</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@gmail.com or (403) 123 - 4567"
                    {...field}
                  />
                </FormControl>
                <FormDescription>How can we contact you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello Hustle! I want my 2024 Mercedes Benz to shine like new - contact me and let's talk prices!"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tell us how we can help you! Include the make/model/year of
                  your car!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="expandIcon"
            icon={PaperPlaneIcon}
            iconPlacement="right"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
