import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import FacebookLogo from '@/components/images/FacebookLogo';
import GoogleLogo from '@/components/images/GoogleLogo';
import { Button } from '@/components/ui/button';
import { getHustleSettings } from '@/hustleSettings';

import { Separator } from './ui/separator';

export default function Footer() {
  const { COMPANY } = getHustleSettings();
  return (
    <div className="px-3 py-16 mt-20 space-y-10 text-center bg-primary text-primary-foreground">
      <section className="container grid space-y-10 md:space-y-0 md:grid-cols-3">
        <article className="">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight scroll-m-20">
            HUSTLE AUTOMOTIVE
          </h3>

          <ul className="flex justify-center space-x-3">
            <li>
              <Button variant="inverted" size="icon">
                <LinkedInLogoIcon className="w-6 h-6" />
              </Button>
            </li>
            <li>
              <Button variant="inverted" size="icon">
                <InstagramLogoIcon className="w-6 h-6" />
              </Button>
            </li>
            <li>
              <Button variant="inverted" size="icon">
                <FacebookLogo className="w-6 h-6 invert" />
              </Button>
            </li>
            <li>
              <Button variant="inverted" size="icon">
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
              <Button variant="link-inverted" asChild>
                <Link href="#">{COMPANY.PHONE_NUMBER} </Link>
              </Button>
            </li>
            <li>
              <Button variant="link-inverted" asChild>
                <Link href="#">{COMPANY.EMAIL} </Link>
              </Button>
            </li>
            <li>
              <Button variant="link-inverted" asChild>
                <div className="my-2 text-wrap">
                  <Link href="#">{COMPANY.ADDRESS}</Link>
                </div>
              </Button>
            </li>
            <li className="pt-4">
              <Button variant="outline-inverted" asChild>
                <Link href="#">Contact Us Form</Link>
              </Button>
            </li>
          </ul>
        </article>

        <article className="">
          <h4 className="mb-3 text-lg font-semibold tracking-tight scroll-m-20">
            Legal
          </h4>
          <ul className="">
            <li>
              <Button variant="link-inverted" asChild>
                <Link href="#">Terms & Conditions</Link>
              </Button>
            </li>
            <li>
              <Button variant="link-inverted" asChild>
                <Link href="#">Privacy Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant="link-inverted" asChild>
                <Link href="#">Cookie Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant="link-inverted" asChild>
                <Link href="#">Disclaimer</Link>
              </Button>
            </li>
          </ul>
        </article>
        <article className=""></article>
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
