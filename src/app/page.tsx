import BeholdWidget from '@behold/react';

import HustleAutoLogo from '@/components/images/HustleAutoLogo';
import { Button } from '@/components/ui/button';

export default function Home() {
  // cSpell: disable-next-line
  const feedId = 'cepmVJtea9vfXrBkAPhR';

  return (
    <main className="">
      <section className="space-y-6 my-20">
        <div>
          <HustleAutoLogo className="w-60 mx-auto" />
        </div>
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hustle for Superior Detailing
          </h1>
        </div>
        <div>
          <p className="text-balance text-center leading-7 [&:not(:first-child)]:mt-6">
            Revved up by dedication. Driven by passion. Fine-tuning every inch
            of your ride to perfection.
          </p>
        </div>
        <div className="text-center">
          <Button size={'lg'}>View Services & Prices</Button>
        </div>
      </section>

      <section className="my-20 py-16 bg-secondary">
        <div className="px-3">
          <BeholdWidget feedId={feedId} />
        </div>
      </section>
    </main>
  );
}
