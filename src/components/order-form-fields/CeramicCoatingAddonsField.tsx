import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { OrderFormSchema } from '@/hooks/useOrderForm';
import { formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function CeramicCoatingAddonsField() {
  const form = useFormContext<OrderFormSchema>();
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

  // business logic - set all addons to false when the ceramic coating package is none
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      // only watch for changes to the ceramic coating package
      if (name !== 'ceramicCoatingPackage') return;

      // set all addons to false when the ceramic coating package is none
      if (
        value.ceramicCoatingPackage === Service.CeramicCoatingPackageID.None
      ) {
        value.ceramicCoatingAddons?.forEach((addon, index) => {
          form.setValue(`ceramicCoatingAddons.${index}.selected`, false);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch, form.setValue]);

  // disable addon field when the ceramic package is none
  const isDisabled =
    form.watch('ceramicCoatingPackage') ===
    Service.CeramicCoatingPackageID.None;

  // don't render addon field if it is disabled
  if (isDisabled) {
    return <></>;
  }

  return (
    <div className="space-y-2">
      <Label className="block">Select Ceramic Coating Add-ons</Label>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            <FormField
              control={form.control}
              name={`ceramicCoatingAddons.${index}.selected`}
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
