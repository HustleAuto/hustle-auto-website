import dynamic from 'next/dynamic';

import PageSection from '@/components/PageSection';

const QuoteForm = dynamic(() => import('@/components/QuoteForm'), {
  ssr: false,
});

export default function Page() {
  return (
    <PageSection>
      <h1 className="typography-h1 text-center mb-16">Quote</h1>
      <QuoteForm />
    </PageSection>
  );
}
