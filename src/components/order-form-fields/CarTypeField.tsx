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
import { CarType } from '@/models/CarType';

export default function CarTypeField() {
  const form = useFormContext<OrderFormSchema>();

  const selectOptions = Object.values(CarType).map((carType) => ({
    value: carType,
    label: carType.toString(),
  }));

  return (
    <>
      <FormField
        control={form.control}
        name="carType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Your Car Type</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Car Type..." />
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
