import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSessionStorage } from 'usehooks-ts';
import { z } from 'zod';

import { CarType } from '@/models/CarType';
import { Service } from '@/models/Service';
import { ServiceLocation } from '@/models/ServiceLocation';

const orderFormSchema = z.object({
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

type OrderFormSchema = z.infer<typeof orderFormSchema>;

const initialValues: OrderFormSchema = {
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

function useOrderForm() {
  const [storedUserInput, setStoredUserInput] =
    useSessionStorage<OrderFormSchema>('userInput', initialValues);

  const form = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: orderFormSchema.safeParse(storedUserInput).success
      ? storedUserInput
      : initialValues,
  });

  useEffect(() => {
    const subscription = form.watch((value) =>
      setStoredUserInput(value as OrderFormSchema),
    );
    return () => subscription.unsubscribe();
  }, [form, form.watch, setStoredUserInput]);

  return form;
}

export default useOrderForm;

export { initialValues, type OrderFormSchema };
