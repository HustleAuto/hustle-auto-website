import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useContentfulContext from '@/contexts/contentful-context';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';

export default function ExteriorPackageField() {
  const contentfulContext = useContentfulContext();
  const price = contentfulContext.prices;

  const form = useFormContext<QuoteFormSchema>();

  const carType = form.watch('carType');

  const selectOptions = Object.values(Service.ExteriorPackageID)
    // Don't show the price for the "None" option
    .filter(
      (exteriorPackage) => exteriorPackage !== Service.ExteriorPackageID.None,
    )
    .map((exteriorPackage) => ({
      value: exteriorPackage,
      label: `${exteriorPackage} (${carType}) (${formatPrice(price.ExteriorPackage[exteriorPackage][carType])})`,
    }));

  return (
    <>
      <FormField
        control={form.control}
        name="exteriorPackage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Exterior Package</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Exterior Package..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value={Service.ExteriorPackageID.None}>
                  None
                </SelectItem>
                {selectOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              <Button variant="link" className="p-0 text-muted-foreground">
                <Link href="#">
                  View Details on Exterior Services
                  <ExternalLinkIcon className="inline ml-1" />
                </Link>
              </Button>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
