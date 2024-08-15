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
import { formatPrice } from '@/lib/utils';
import { ServiceLocation } from '@/models/ServiceLocation';
import { Price } from '@/Price';

export default function ServiceLocationFieldExpanded() {
  const form = useFormContext<QuoteFormSchema>();

  const labels = {
    [ServiceLocation.HustleAutoHome]: `${ServiceLocation.HustleAutoHome} (${formatPrice(Price.ServiceLocation[ServiceLocation.HustleAutoHome])})`,
    [ServiceLocation.Airdrie]: `${ServiceLocation.Airdrie} (${formatPrice(Price.ServiceLocation[ServiceLocation.Airdrie])})`,
    [ServiceLocation.CalgaryNorth]: `${ServiceLocation.CalgaryNorth} (${formatPrice(Price.ServiceLocation[ServiceLocation.CalgaryNorth])})`,
    [ServiceLocation.CalgarySouth]: `${ServiceLocation.CalgarySouth} (${formatPrice(Price.ServiceLocation[ServiceLocation.CalgarySouth])})`,
  };
  const descriptions = {
    [ServiceLocation.HustleAutoHome]: "At Hustle Auto's Home in Airdrie",
    [ServiceLocation.Airdrie]: 'At your home in Airdrie',
    [ServiceLocation.CalgaryNorth]: 'At your home in Calgary NE/NW',
    [ServiceLocation.CalgarySouth]: 'At your home in Calgary SE/SW',
  };

  return (
    <FormField
      control={form.control}
      name="serviceLocation"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select Your Service Location</FormLabel>
          <FormControl>
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {Object.values(ServiceLocation).map((serviceLocation) => (
                  <RadioCardGroupItem
                    key={serviceLocation}
                    value={serviceLocation}
                  >
                    <CardHeader>
                      <CardTitle>{labels[serviceLocation]}</CardTitle>
                    </CardHeader>
                    <CardContent>{descriptions[serviceLocation]}</CardContent>
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
