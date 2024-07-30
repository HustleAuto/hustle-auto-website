import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
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
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function InteriorPackageField() {
  const form = useFormContext<QuoteFormSchema>();

  const carType = form.watch('carType');

  const selectOptions = Object.values(Service.InteriorPackageID)
    // Don't show the price for the "None" option
    .filter(
      (interiorPackage) => interiorPackage !== Service.InteriorPackageID.None,
    )
    .map((interiorPackage) => ({
      value: interiorPackage,
      label: `${interiorPackage} (${carType}) (${formatPrice(Price.Interior[interiorPackage][carType])})`,
    }));

  return (
    <>
      <FormField
        control={form.control}
        name="interiorPackage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Interior Package</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Interior Package..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value={Service.InteriorPackageID.None}>
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
                  View Details on Interior Services
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
