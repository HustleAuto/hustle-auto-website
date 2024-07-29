import { useFormContext } from 'react-hook-form';

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
import { OrderFormSchema } from '@/hooks/useOrderForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function ExteriorPackageField() {
  const form = useFormContext<OrderFormSchema>();

  const carType = form.watch('carType');

  const selectOptions = Object.values(Service.ExteriorPackageID)
    // Don't show the price for the "None" option
    .filter(
      (exteriorPackage) => exteriorPackage !== Service.ExteriorPackageID.None,
    )
    .map((exteriorPackage) => ({
      value: exteriorPackage,
      label: `${exteriorPackage} (${formatPrice(Price.Exterior[exteriorPackage][carType])})`,
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
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
