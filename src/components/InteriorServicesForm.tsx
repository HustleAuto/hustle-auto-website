'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';

import QuoteFormField from '@/components/quote-form-fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useQuoteForm, { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { Service } from '@/models/Service';

export default function InteriorServicesForm() {
  const form = useQuoteForm();

  function onSubmit(values: QuoteFormSchema) {
    console.log(values);
  }

  function onReset() {
    form.setValue('interiorPackage', Service.InteriorPackageID.None);
  }

  return (
    <section className="container mx-auto">
      <Form {...form}>
        <form onReset={onReset} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <section>
              <QuoteFormField.InteriorPackageExpanded />
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
                Submit
              </Button>
            </section>
          </div>
        </form>
      </Form>
    </section>
  );
}
