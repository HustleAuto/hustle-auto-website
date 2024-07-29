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

export default function InteriorAddonsField() {
  const form = useFormContext<OrderFormSchema>();
  const { fields } = useFieldArray({
    control: form.control,
    name: 'interiorAddons',
  });

  const Addon = Service.InteriorAddonID;

  const label = {
    [Addon.OdorRemoval]: `${Addon.OdorRemoval} (${formatPrice(Price.InteriorAddon[Addon.OdorRemoval])})`,
    [Addon.PetHairRemoval]: `${Addon.PetHairRemoval} (${formatPrice(Price.InteriorAddon[Addon.PetHairRemoval])})`,
  };

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
