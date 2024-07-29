import { useFormContext } from 'react-hook-form';

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

export default function InteriorPackageField() {
  const form = useFormContext<OrderFormSchema>();

  const carType = form.watch('carType');

  const selectOptions = Object.values(Service.InteriorPackageID)
    // Don't show the price for the "None" option
    .filter(
      (interiorPackage) => interiorPackage !== Service.InteriorPackageID.None,
    )
    .map((interiorPackage) => ({
      value: interiorPackage,
      label: `${interiorPackage} (${formatPrice(Price.Interior[interiorPackage][carType])})`,
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
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
