import { useContext } from 'react';
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
import { useContentfulContext } from '@/hooks/useContentfulContext';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { ServiceLocation } from '@/models/ServiceLocation';

export default function ServiceLocationField() {
  const contentfulContext = useContentfulContext();
  const price = contentfulContext.prices;

  const form = useFormContext<QuoteFormSchema>();

  if (contentfulContext == null) {
    return null;
  }

  const selectOptions = Object.values(ServiceLocation).map(
    (serviceLocation) => ({
      value: serviceLocation,
      label: `${serviceLocation} (${formatPrice(price.ServiceLocation[serviceLocation])})`,
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
