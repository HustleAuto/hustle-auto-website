import dynamic from 'next/dynamic';

import PageSection from '@/components/PageSection';
import { Separator } from '@/components/ui/separator';

const InteriorServicesForm = dynamic(
  () => import('@/components/InteriorServicesForm'),
  {
    ssr: false,
  },
);

const ExteriorServicesForm = dynamic(
  () => import('@/components/ExteriorServicesForm'),
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <>
      <PageSection>
        <h1 className="mb-16 text-center typography-h1">Services</h1>
        <ExteriorServicesForm />
        {/* <Separator /> */}
        {/* <InteriorServicesForm /> */}
      </PageSection>
    </>
  );
}
