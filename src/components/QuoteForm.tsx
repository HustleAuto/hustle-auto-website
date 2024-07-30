'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

import QuoteFormField from '@/components/quote-form-fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useQuoteForm, {
  QuoteFormSchema,
  initialValues,
} from '@/hooks/useQuoteForm';

export default function QuoteForm() {
  const form = useQuoteForm();
  const router = useRouter();

  function onSubmit(values: QuoteFormSchema) {
    console.log(values);
    router.push('/contact-us');
  }

  return (
    <main className="max-w-screen-sm mx-auto order-form">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <section>
            <h2 className="order-form-section-heading">Car Type</h2>
            <QuoteFormField.CarType />
          </section>

          <section className="space-y-6">
            <h2 className="order-form-section-heading">Services</h2>
            <QuoteFormField.InteriorPackage />
            <QuoteFormField.InteriorAddons />
            <QuoteFormField.ExteriorPackage />
            <QuoteFormField.CeramicCoatingPackage />
            <QuoteFormField.CeramicCoatingAddons />
          </section>

          <section>
            <h2 className="order-form-section-heading">Service Location</h2>
            <QuoteFormField.ServiceLocation />
          </section>

          <section className="flex justify-between">
            <Button
              type="button"
              variant="secondary"
              onClick={() => form.reset(initialValues)}
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="expandIcon"
              icon={ChevronRightIcon}
              iconPlacement="right"
            >
              Continue
            </Button>
          </section>
        </form>
      </Form>
    </main>
  );
}
