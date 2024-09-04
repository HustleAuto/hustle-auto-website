import { useContext } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Card, CardHeader } from '@/components/ui/card';
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

export default function InteriorAddonsFieldExpanded() {
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

  const Addon = Service.InteriorAddonID;
  const labels = {
    [Addon.OdorRemoval]: `${Addon.OdorRemoval} (${formatPrice(price.InteriorAddon[Addon.OdorRemoval])})`,
    [Addon.PetHairRemoval]: `${Addon.PetHairRemoval} (${formatPrice(price.InteriorAddon[Addon.PetHairRemoval])})`,
  };
  const descriptions = {
    [Addon.OdorRemoval]:
      'We utilize an ozone machine to effectively eliminate all unpleasant odors, leaving your vehicle with a fresh and clean scent',
    [Addon.PetHairRemoval]:
      'We utilize a machine to effectively remove pet hair from your car',
  };

  return (
    <div className="space-y-5">
      <Label className="block">Select Interior Add-ons</Label>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={form.control}
            name={`interiorAddons.${index}.selected`}
            render={({ field: checkboxField }) => (
              <FormItem className="relative">
                <FormControl>
                  <Checkbox
                    checked={checkboxField.value}
                    onCheckedChange={checkboxField.onChange}
                    className="absolute top-6 left-6"
                  />
                </FormControl>
                <FormLabel className="*:border peer-data-[state=checked]:*:border-primary">
                  <Card className="transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="pl-6">
                      <CardHeader>
                        <p>{labels[field.addonId]}</p>
                        <p className="typography-muted">
                          {descriptions[field.addonId]}
                        </p>
                        <p>
                          <FormMessage />
                        </p>
                      </CardHeader>
                    </div>
                  </Card>
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
