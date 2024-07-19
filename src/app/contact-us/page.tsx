import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import ContactUsForm from '@/components/ContactUsForm';
import FacebookLogo from '@/components/images/FacebookLogo';
import GoogleLogo from '@/components/images/GoogleLogo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import hustleConstants from '@/hustleConstants';

export default function Page() {
  const { COMPANY } = hustleConstants;

  return (
    <main className="my-20">
      <h1 className="typography-h1 text-center mb-10">Contact Us</h1>
      {/* make this section aside when the page is greater than md */}
      <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <article className="max-w-md mx-auto w-full">
          <Card>
            <CardHeader>
              <CardTitle>Hustle Auto Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="typography-small">{COMPANY.EMAIL}</p>
                <p className="typography-small">{COMPANY.PHONE_NUMBER}</p>
                <p className="typography-muted">Calgary, Alberta, Canada</p>
              </div>
            </CardContent>
            <CardFooter>
              <ul className="flex justify-center space-x-3">
                <li>
                  <Button size="icon" variant={'outline'}>
                    <LinkedInLogoIcon className="w-5 h-5" />
                  </Button>
                </li>
                <li>
                  <Button size="icon" variant={'outline'}>
                    <InstagramLogoIcon className="w-5 h-5" />
                  </Button>
                </li>
                <li>
                  <Button size="icon" variant={'outline'}>
                    <FacebookLogo className="w-5 h-5 invert" />
                  </Button>
                </li>
                <li>
                  <Button size="icon" variant={'outline'}>
                    <GoogleLogo className="w-5 h-5" />
                  </Button>
                </li>
              </ul>
            </CardFooter>
          </Card>
        </article>
        <article className="max-w-md mx-auto w-full">
          <ContactUsForm />
        </article>
      </section>
    </main>
  );
}
