import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function CeramicCoatingAddonsField() {
  const form = useFormContext<QuoteFormSchema>();
  const { fields } = useFieldArray({
    control: form.control,
    name: 'ceramicCoatingAddons',
  });

  // extract Addon type for readability of label
  const Addon = Service.CeramicCoatingAddonID;

  const label = {
    [Addon.GlassCoating]: `${Addon.GlassCoating} (${formatPrice(Price.CeramicCoatingAddon[Addon.GlassCoating])})`,
    [Addon.WheelCoating]: `${Addon.WheelCoating} (${formatPrice(Price.CeramicCoatingAddon[Addon.WheelCoating])})`,
  };

  return (
    <div className="space-y-3">
      <Label className="block">Select Ceramic Coating Add-ons</Label>
      <ul className="space-y-1">
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={form.control}
              name={`ceramicCoatingAddons.${index}.selected`}
              render={({ field: checkboxField }) => (
                <FormItem>
                  <div className="space-x-2 flex items-start">
                    <FormControl>
                      <Checkbox
                        checked={checkboxField.value}
                        onCheckedChange={checkboxField.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      <p>{label[field.addonId]}</p>
                      <p className="my-2">
                        <FormMessage />
                      </p>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
