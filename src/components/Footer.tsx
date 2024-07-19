import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import FacebookLogo from '@/components/images/FacebookLogo';
import GoogleLogo from '@/components/images/GoogleLogo';
import { Button } from '@/components/ui/button';
import hustleConstants from '@/hustleConstants';
import { getHustleSettings } from '@/hustleSettings';

import { Separator } from './ui/separator';

export default function Footer() {
  const { COMPANY } = hustleConstants;

  return (
    <div className="px-3 py-16 mt-20 space-y-10 text-center bg-primary text-primary-foreground">
      <section className="container grid space-y-10 md:space-y-0 md:grid-cols-3">
        <article className="">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight scroll-m-20">
            HUSTLE AUTOMOTIVE
          </h3>

          <ul className="flex justify-center space-x-3">
            <li>
              <Button size="icon" className="dark">
                <LinkedInLogoIcon className="w-6 h-6" />
              </Button>
            </li>
            <li>
              <Button size="icon" className="dark">
                <InstagramLogoIcon className="w-6 h-6" />
              </Button>
            </li>
            <li>
              <Button size="icon" className="dark">
                <FacebookLogo className="w-6 h-6 invert" />
              </Button>
            </li>
            <li>
              <Button size="icon" className="dark">
                <GoogleLogo className="w-6 h-6 filter" />
              </Button>
            </li>
          </ul>
        </article>
        <article>
          <h4 className="mb-3 text-lg font-semibold tracking-tight scroll-m-20">
            Contact Us
          </h4>
          <ul>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="#">{COMPANY.PHONE_NUMBER} </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="#">{COMPANY.EMAIL} </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="dark" asChild>
                <div className="my-2 text-wrap">
                  <Link href="#">{COMPANY.ADDRESS}</Link>
                </div>
              </Button>
            </li>
            <li className="pt-4">
              <Button variant="outline" className="dark" asChild>
                <Link href="#">Contact Us Form</Link>
              </Button>
            </li>
          </ul>
        </article>

        <article>
          <h4 className="mb-3 text-lg font-semibold tracking-tight scroll-m-20">
            Legal
          </h4>
          <ul>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="/legal/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="/legal/cookie-policy">Cookie Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="dark" asChild>
                <Link href="/legal/disclaimer">Disclaimer</Link>
              </Button>
            </li>
          </ul>
        </article>
        <article></article>
      </section>
      <article>
        <Separator />
      </article>

      <article className="pt-3">
        <p className="text-sm leading-7">
          Copyright 2024, Hustle Automotive. All rights reserved.
        </p>
      </article>
    </div>
  );
}
