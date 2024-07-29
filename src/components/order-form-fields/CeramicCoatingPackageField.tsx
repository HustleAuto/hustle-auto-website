import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
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
import { OrderFormSchema } from '@/hooks/useOrderForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function CeramicCoatingPackage() {
  const form = useFormContext<OrderFormSchema>();

  const carType = form.watch('carType');

  const selectOptions = Object.values(Service.CeramicCoatingPackageID)
    // Don't show the price for the "None" option
    .filter(
      (ceramicCoatingPackage) =>
        ceramicCoatingPackage !== Service.CeramicCoatingPackageID.None,
    )
    .map((ceramicCoatingPackage) => ({
      value: ceramicCoatingPackage,
      label: `${ceramicCoatingPackage} (${formatPrice(Price.CeramicCoating[ceramicCoatingPackage][carType])})`,
    }));

  return (
    <>
      <FormField
        control={form.control}
        name="ceramicCoatingPackage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Ceramic Coating Package</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Ceramic Coating Package..." />
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
            <Button variant="link" className="p-0 text-muted-foreground">
              <Link href="#">
                View Details on Ceramic Coating Services
                <ExternalLinkIcon className="inline ml-1" />
              </Link>
            </Button>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
