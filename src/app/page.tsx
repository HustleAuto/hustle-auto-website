import BeholdWidget from '@behold/react';

import HustleAutoLogo from '@/components/images/HustleAutoLogo';
import PageSection from '@/components/PageSection';
import { Button } from '@/components/ui/button';
import { getHustleSettings } from '@/hustleSettings';

export default function Home() {
  const hustleSettings = getHustleSettings();

  return (
    <main className="">
      <PageSection className="space-y-6">
        <div>
          <HustleAutoLogo className="mx-auto w-60" />
        </div>
        <div className="text-center">
          <h1 className="typography-h1">Hustle for Superior Detailing</h1>
        </div>
        <div>
          <p className="text-balance text-center typography-lead">
            Revved up by dedication. Driven by passion. Fine-tuning every inch
            of your ride to perfection.
          </p>
        </div>
        <div className="text-center">
          <Button size="lg" variant="shine">
            View Services & Prices
          </Button>
        </div>
      </PageSection>

      <PageSection className="bg-secondary py-16">
        <BeholdWidget feedId={hustleSettings.BEHOLD.FEED_ID} />
      </PageSection>
    </main>
  );
}
