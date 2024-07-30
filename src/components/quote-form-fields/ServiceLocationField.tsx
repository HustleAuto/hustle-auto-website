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
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { CarType } from '@/models/CarType';
import { ServiceLocation } from '@/models/ServiceLocation';
import { Price } from '@/Price';

export default function ServiceLocationField() {
  const form = useFormContext<QuoteFormSchema>();

  const selectOptions = Object.values(ServiceLocation).map(
    (serviceLocation) => ({
      value: serviceLocation,
      label: `${serviceLocation} (${formatPrice(Price.ServiceLocation[serviceLocation])})`,
    }),
  );
  return (
    <>
      <FormField
        control={form.control}
        name="serviceLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Your Service Location</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Service Location..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
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
