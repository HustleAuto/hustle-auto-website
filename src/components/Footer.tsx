import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import FacebookLogo from '@/components/images/FacebookLogo';
import GoogleLogo from '@/components/images/GoogleLogo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <section className="mt-20 py-16 bg-primary text-primary-foreground px-3 text-center space-y-6">
      <div className="">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          HUSTLE AUTOMOTIVE
        </h3>
      </div>
      <div>
        <ul>
          <li>
            <Button variant="link-inverted" asChild>
              <Link href="#">Terms And Conditions</Link>
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
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Button variant="link-inverted" asChild>
              <Link href="#">Disclaimer</Link>
            </Button>
          </li>
          <li>
            <Button variant="link-inverted" asChild>
              <Link href="#">Contact Us</Link>
            </Button>
          </li>
          <li>
            <Button variant="link-inverted" asChild>
              <Link href="#">Cookie Policy</Link>
            </Button>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex space-x-3 justify-center">
          <li>
            <Button variant="inverted" size="icon">
              <LinkedInLogoIcon className="h-6 w-6" />
            </Button>
          </li>
          <li>
            <Button variant="inverted" size="icon">
              <InstagramLogoIcon className="h-6 w-6" />
            </Button>
          </li>
          <li>
            <Button variant="inverted" size="icon">
              <FacebookLogo className="h-6 w-6 invert" />
            </Button>
          </li>
          <li>
            <Button variant="inverted" size="icon">
              <GoogleLogo className="h-6 w-6 filter" />
            </Button>
          </li>
        </ul>
      </div>
      <div className="pt-3">
        <p className="leading-7 text-sm">
          Copyright 2024, Hustle Automotive. All rights reserved.
        </p>
      </div>
    </section>
  );
}
