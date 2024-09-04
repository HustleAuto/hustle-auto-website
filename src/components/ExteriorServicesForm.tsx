'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

import QuoteFormField from '@/components/quote-form-fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useQuoteForm, { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { Service } from '@/models/Service';

export default function ExteriorServicesForm() {
  const form = useQuoteForm();
  const router = useRouter();

  function onSubmit(values: QuoteFormSchema) {
    console.log(values);
    router.push('/contact-us');
  }

  function onReset() {
    form.setValue('exteriorPackage', Service.ExteriorPackageID.None);
  }

  return (
    <section className="container mx-auto">
      <Form {...form}>
        <form onReset={onReset} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <section className="space-y-8">
              <QuoteFormField.CarTypeExpanded />
              <QuoteFormField.ExteriorPackageExpanded />
              <QuoteFormField.ServiceLocationExpanded />
            </section>

            <section className="flex justify-between">
              <Button type="reset" variant="secondary">
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
          </div>
        </form>
      </Form>
    </section>
  );
}
