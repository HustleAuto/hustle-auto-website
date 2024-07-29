import dynamic from 'next/dynamic';

import PageSection from '@/components/PageSection';

const OrderForm = dynamic(() => import('@/components/OrderForm'), {
  ssr: false,
});

export default function Page() {
  return (
    <PageSection>
      <h1 className="typography-h1 text-center mb-16">Services</h1>
      <OrderForm />
    </PageSection>
  );
}
