import dynamic from 'next/dynamic';

import PageSection from '@/components/PageSection';

const CeramicCoatingServicesForm = dynamic(
  () => import('@/components/CeramicCoatingServicesForm'),
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <>
      <PageSection>
        <h1 className="mb-16 text-center typography-h1">Services</h1>
        <CeramicCoatingServicesForm />
      </PageSection>
    </>
  );
}
