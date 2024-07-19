import BeholdWidget from '@behold/react';

import HustleAutoLogo from '@/components/images/HustleAutoLogo';
import { Button } from '@/components/ui/button';
import { getHustleSettings } from '@/hustleSettings';

export default function Home() {
  const hustleSettings = getHustleSettings();

  return (
    <main className="">
      <section className="my-20 space-y-6">
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
      </section>

      <section className="py-16 my-20 bg-secondary">
        <div className="px-3">
          <BeholdWidget feedId={hustleSettings.BEHOLD.FEED_ID} />
        </div>
      </section>
    </main>
  );
}
