import OrderForm from '@/components/OrderForm';
import PageSection from '@/components/PageSection';

export default function Page() {
  return (
    <PageSection>
      <h1 className="typography-h1 text-center mb-16">Services</h1>
      <OrderForm />
    </PageSection>
  );
}
