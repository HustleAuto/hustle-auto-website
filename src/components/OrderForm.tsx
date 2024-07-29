'use client';

import OrderFormField from '@/components/order-form-fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useOrderForm, {
  OrderFormSchema,
  defaultValues as orderFormDefaultValues,
} from '@/hooks/useOrderForm';

export default function OrderForm() {
  const form = useOrderForm();

  function onSubmit(values: OrderFormSchema) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="max-w-screen-sm mx-auto order-form">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <section>
            <h2 className="order-form-section-heading">Car Type</h2>
            <OrderFormField.CarType />
          </section>

          <section className="space-y-6">
            <h2 className="order-form-section-heading">Services</h2>
            <article className="space-y-4">
              <OrderFormField.InteriorPackage />
              <OrderFormField.InteriorAddons />
            </article>
            <article>
              <OrderFormField.ExteriorPackage />
            </article>
          </section>

          <section className="flex justify-between">
            <Button
              type="button"
              variant="secondary"
              onClick={() => form.reset(orderFormDefaultValues)}
            >
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </section>
        </form>
      </Form>
    </main>
  );
}
