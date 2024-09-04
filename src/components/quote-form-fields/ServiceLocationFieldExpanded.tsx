import { useContext } from 'react';
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
import { useContentfulContext } from '@/hooks/useContentfulContext';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { ServiceLocation } from '@/models/ServiceLocation';

export default function ServiceLocationFieldExpanded() {
  const contentfulContext = useContentfulContext();
  const price = contentfulContext.prices;

  const form = useFormContext<QuoteFormSchema>();

  const labels = {
    [ServiceLocation.HustleAutoHome]: `${ServiceLocation.HustleAutoHome} (${formatPrice(price.ServiceLocation[ServiceLocation.HustleAutoHome])})`,
    [ServiceLocation.Airdrie]: `${ServiceLocation.Airdrie} (${formatPrice(price.ServiceLocation[ServiceLocation.Airdrie])})`,
    [ServiceLocation.CalgaryNorth]: `${ServiceLocation.CalgaryNorth} (${formatPrice(price.ServiceLocation[ServiceLocation.CalgaryNorth])})`,
    [ServiceLocation.CalgarySouth]: `${ServiceLocation.CalgarySouth} (${formatPrice(price.ServiceLocation[ServiceLocation.CalgarySouth])})`,
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
