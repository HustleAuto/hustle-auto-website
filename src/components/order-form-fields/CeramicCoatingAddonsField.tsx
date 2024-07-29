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

  const Addon = Service.CeramicCoatingAddonID;

  const label = {
    [Addon.GlassCoating]: `${Addon.GlassCoating} (${formatPrice(Price.CeramicCoatingAddon[Addon.GlassCoating])})`,
    [Addon.WheelCoating]: `${Addon.WheelCoating} (${formatPrice(Price.CeramicCoatingAddon[Addon.WheelCoating])})`,
  };

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
