import { useFormContext } from 'react-hook-form';

import RadioCardGroupItem from '@/components/RadioCardGroupItem';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { RadioGroup } from '@/components/ui/radio-group';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { CarType } from '@/models/CarType';

export default function CarTypeFieldExpanded() {
  const form = useFormContext<QuoteFormSchema>();

  const descriptions = {
    [CarType.Sedan]: "Sedan's description",
    [CarType.MidSized]: "MidSized's description",
    [CarType.FullSized]: "FullSized's description",
  };

  return (
    <FormField
      control={form.control}
      name="carType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select Your Car Type</FormLabel>
          <FormControl>
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {Object.values(CarType).map((carType) => (
                  <RadioCardGroupItem key={carType} value={carType}>
                    <CardHeader>
                      <CardTitle>{carType}</CardTitle>
                    </CardHeader>
                    <CardContent>{descriptions[carType]}</CardContent>
                  </RadioCardGroupItem>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
