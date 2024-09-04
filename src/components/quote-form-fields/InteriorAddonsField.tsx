import { useContext, useEffect, useState } from 'react';
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
import ContentfulContext from '@/contexts/contentful-context';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';

export default function InteriorAddonsField() {
  const contentfulContext = useContext(ContentfulContext);
  const form = useFormContext<QuoteFormSchema>();
  const { fields } = useFieldArray({
    control: form.control,
    name: 'interiorAddons',
  });

  if (contentfulContext == null) {
    return null;
  }

  const price = contentfulContext.prices;

  // extract Addon type for readability of label
  const Addon = Service.InteriorAddonID;
  const label = {
    [Addon.OdorRemoval]: `${Addon.OdorRemoval} (${formatPrice(price.InteriorAddon[Addon.OdorRemoval])})`,
    [Addon.PetHairRemoval]: `${Addon.PetHairRemoval} (${formatPrice(price.InteriorAddon[Addon.PetHairRemoval])})`,
  };

  return (
    <div className="space-y-3">
      <Label className="block">Select Interior Add-ons</Label>
      <ul className="space-y-1">
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={form.control}
              name={`interiorAddons.${index}.selected`}
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
