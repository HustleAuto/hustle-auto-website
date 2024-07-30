'use client';

import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useQuoteForm from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

import { Button } from './ui/button';

const sum = (numbers: number[]) => {
  let total = 0;
  numbers.forEach((currNumber) => {
    total += currNumber;
  });

  return total;
};

export default function QuoteSummary() {
  const { watch } = useQuoteForm();

  const field = watch();

  const summary = {
    carType: {
      label: field.carType,
    },
    interiorPackage: field.interiorPackage !==
      Service.InteriorPackageID.None && {
      label: `${field.interiorPackage} (${field.carType})`,
      price: formatPrice(Price.Interior[field.interiorPackage][field.carType]),
    },
    interiorAddons: field.interiorAddons
      .filter((addon) => addon.selected)
      .map((addon) => ({
        label: addon.addonId,
        price: formatPrice(Price.InteriorAddon[addon.addonId]),
      })),
    exteriorPackage: field.exteriorPackage !==
      Service.ExteriorPackageID.None && {
      label: `${field.exteriorPackage} (${field.carType})`,
      price: formatPrice(Price.Exterior[field.exteriorPackage][field.carType]),
    },
    ceramicCoatingPackage: field.ceramicCoatingPackage !==
      Service.CeramicCoatingPackageID.None && {
      label: `${field.ceramicCoatingPackage} (${field.carType})`,
      price: formatPrice(
        Price.CeramicCoating[field.ceramicCoatingPackage][field.carType],
      ),
    },
    ceramicCoatingAddons: field.ceramicCoatingAddons
      .filter((addon) => addon.selected)
      .map((addon) => ({
        label: addon.addonId,
        price: formatPrice(Price.CeramicCoatingAddon[addon.addonId]),
      })),
    serviceLocation: {
      label: field.serviceLocation,
      price: formatPrice(Price.ServiceLocation[field.serviceLocation]),
    },
  };

  const total = formatPrice(
    Price.Interior[field.interiorPackage][field.carType] +
      Price.Exterior[field.exteriorPackage][field.carType] +
      Price.CeramicCoating[field.ceramicCoatingPackage][field.carType] +
      Price.ServiceLocation[field.serviceLocation] +
      sum(
        field.interiorAddons
          .filter((addon) => addon.selected)
          .map((addon) => Price.InteriorAddon[addon.addonId]),
      ) +
      sum(
        field.ceramicCoatingAddons
          .filter((addon) => addon.selected)
          .map((addon) => Price.CeramicCoatingAddon[addon.addonId]),
      ),
  );

  // show message when no services are selected
  if (
    field.interiorPackage === Service.InteriorPackageID.None &&
    field.exteriorPackage === Service.ExteriorPackageID.None &&
    field.ceramicCoatingPackage === Service.CeramicCoatingPackageID.None
  ) {
    return (
      <>
        <Card>
          <CardHeader className="bg-secondary">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Quote Summary</CardTitle>
              </div>
              <div>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/quote">
                    <Pencil2Icon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <p className="text-muted-foreground">No services selected</p>
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <div>
      <Card>
        <CardHeader className="bg-secondary">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Quote Summary</CardTitle>
            </div>
            <div>
              <Button variant="outline" size="icon" asChild>
                <Link href="/quote">
                  <Pencil2Icon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <section className="space-y-3">
            <p className="font-semibold">Car Type</p>
            <p className="text-muted-foreground">{summary.carType.label}</p>
          </section>
          <Separator />
          <section className="space-y-3">
            <p className="font-semibold">Services</p>

            {summary.interiorPackage && (
              <article className="space-y-3">
                <h5 className="font-semibold text-sm">Interior Detailing</h5>
                <ul>
                  <li className="flex justify-between">
                    <p className="text-muted-foreground">
                      {summary.interiorPackage.label}
                    </p>
                    <p>{summary.interiorPackage.price}</p>
                  </li>
                  {summary.interiorAddons.map((addon) => (
                    <li className="flex justify-between" key={addon.label}>
                      <p className="text-muted-foreground">
                        <Bullet />
                        {addon.label}
                      </p>
                      <p>{addon.price}</p>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {summary.exteriorPackage && (
              <article className="space-y-3">
                <h5 className="font-semibold text-sm">Exterior Detailing</h5>
                <ul>
                  <li className="flex justify-between">
                    <p className="text-muted-foreground">
                      {summary.exteriorPackage.label}
                    </p>
                    <p>{summary.exteriorPackage.price}</p>
                  </li>
                </ul>
              </article>
            )}

            {summary.ceramicCoatingPackage && (
              <article className="space-y-3">
                <h5 className="font-semibold text-sm">Ceramic Coating</h5>
                <ul>
                  <li className="flex justify-between">
                    <p className="text-muted-foreground">
                      {summary.ceramicCoatingPackage.label}
                    </p>
                    <p>{summary.ceramicCoatingPackage.price}</p>
                  </li>
                  {summary.ceramicCoatingAddons.map((addon) => (
                    <li className="flex justify-between" key={addon.label}>
                      <p className="text-muted-foreground">
                        <Bullet />
                        {addon.label}
                      </p>
                      <p>{addon.price}</p>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </section>
          <Separator />
          <section className="space-y-3">
            <p className="font-semibold">Service Location</p>
            <ul>
              <li className="flex justify-between">
                <p className="text-muted-foreground">
                  {summary.serviceLocation.label}
                </p>
                <p>{summary.serviceLocation.price}</p>
              </li>
            </ul>
          </section>
        </CardContent>
        <CardFooter className="bg-secondary p-6 block">
          <div className="justify-between flex">
            <p className="flex flex-col">
              <span className="font-semibold text-xl">Estimated Total</span>
            </p>
            <p className="font-bold text-xl">{total}</p>
          </div>
          <span className="text-sm text-muted-foreground">
            Estimated total is only an estimate and is not guaranteed.
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}

function Bullet() {
  return <span className="inline mx-2 font-bold">&bull;</span>;
}
