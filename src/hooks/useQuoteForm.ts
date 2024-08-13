import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSessionStorage } from 'usehooks-ts';
import { z } from 'zod';

import { CarType } from '@/models/CarType';
import { Service } from '@/models/Service';
import { ServiceLocation } from '@/models/ServiceLocation';

const quoteFormSchema = z.object({
  carType: z.nativeEnum(CarType),
  interiorPackage: z.nativeEnum(Service.InteriorPackageID),
  interiorAddons: z.array(
    z.object({
      addonId: z.nativeEnum(Service.InteriorAddonID),
      selected: z.boolean(),
    }),
  ),
  exteriorPackage: z.nativeEnum(Service.ExteriorPackageID),
  ceramicCoatingPackage: z.nativeEnum(Service.CeramicCoatingPackageID),
  ceramicCoatingAddons: z.array(
    z.object({
      addonId: z.nativeEnum(Service.CeramicCoatingAddonID),
      selected: z.boolean(),
    }),
  ),
  serviceLocation: z.nativeEnum(ServiceLocation),
});

type QuoteFormSchema = z.infer<typeof quoteFormSchema>;

const initialValues: QuoteFormSchema = {
  carType: CarType.Sedan,
  interiorPackage: Service.InteriorPackageID.None,
  interiorAddons: Object.values(Service.InteriorAddonID).map((addonId) => ({
    addonId,
    selected: false,
  })),
  exteriorPackage: Service.ExteriorPackageID.None,
  ceramicCoatingPackage: Service.CeramicCoatingPackageID.None,
  ceramicCoatingAddons: Object.values(Service.CeramicCoatingAddonID).map(
    (addonId) => ({
      addonId,
      selected: false,
    }),
  ),
  serviceLocation: ServiceLocation.HustleAutoHome,
};

function useQuoteForm() {
  const [storedUserInput, setStoredUserInput] =
    useSessionStorage<QuoteFormSchema>('userInput', initialValues);

  const form = useForm<QuoteFormSchema>({
    resolver: zodResolver(quoteFormSchema),
    // Default value is the stored user input
    // If stored user input is invalid, default value is the initial value
    defaultValues: quoteFormSchema.safeParse(storedUserInput).success
      ? storedUserInput
      : initialValues,
  });

  // Store user input every time it changes
  useEffect(() => {
    const subscription = form.watch((value) =>
      setStoredUserInput(value as QuoteFormSchema),
    );
    return () => subscription.unsubscribe();
  }, [form, form.watch, setStoredUserInput]);

  // Business logic for form
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      // When the interior package is set to "none", deselect all interior addons.
      if (
        name === 'interiorPackage' &&
        value.interiorPackage === Service.InteriorPackageID.None
      ) {
        value.interiorAddons?.forEach((addon, index) => {
          form.setValue(`interiorAddons.${index}.selected`, false);
        });
      }

      // When the ceramic coating package is set to "none", deselect all ceramic coating addons.
      if (
        name === 'ceramicCoatingPackage' &&
        value.ceramicCoatingPackage === Service.CeramicCoatingPackageID.None
      ) {
        value.ceramicCoatingAddons?.forEach((addon, index) => {
          form.setValue(`ceramicCoatingAddons.${index}.selected`, false);
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [form, form.watch, form.setValue]);

  return form;
}

export default useQuoteForm;

export { initialValues, type QuoteFormSchema };
