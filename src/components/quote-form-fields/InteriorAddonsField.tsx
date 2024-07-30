import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function InteriorAddonsField() {
  const form = useFormContext<QuoteFormSchema>();
  const { fields } = useFieldArray({
    control: form.control,
    name: 'interiorAddons',
  });

  // extract Addon type for readability of label
  const Addon = Service.InteriorAddonID;
  const label = {
    [Addon.OdorRemoval]: `${Addon.OdorRemoval} (${formatPrice(Price.InteriorAddon[Addon.OdorRemoval])})`,
    [Addon.PetHairRemoval]: `${Addon.PetHairRemoval} (${formatPrice(Price.InteriorAddon[Addon.PetHairRemoval])})`,
  };

  // business logic - set all addons to false when the interior package is none
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      // only watch for changes to the interior package
      if (name !== 'interiorPackage') return;

      // set all addons to false when the interior package is none
      if (value.interiorPackage === Service.InteriorPackageID.None) {
        value.interiorAddons?.forEach((addon, index) => {
          form.setValue(`interiorAddons.${index}.selected`, false);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch, form.setValue]);

  // disable addon field when the interior package is none
  const isDisabled =
    form.watch('interiorPackage') === Service.InteriorPackageID.None;

  // don't render addon field if it is disabled
  if (isDisabled) {
    return <></>;
  }

  return (
    <div className="space-y-2">
      <Label className="block">Select Interior Add-ons</Label>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={form.control}
              name={`interiorAddons.${index}.selected`}
              render={({ field: checkboxField }) => (
                <FormItem className="space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={checkboxField.value}
                      onCheckedChange={checkboxField.onChange}
                      disabled={isDisabled}
                    />
                  </FormControl>
                  <FormLabel>{label[field.addonId]}</FormLabel>
                </FormItem>
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
