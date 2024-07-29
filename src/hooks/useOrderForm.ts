import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
  ServiceLocation: z.nativeEnum(ServiceLocation),
});

type OrderFormSchema = z.infer<typeof orderFormSchema>;

const defaultValues: OrderFormSchema = {
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
  ServiceLocation: ServiceLocation.HustleAutoHome,
};

function useOrderForm() {
  const form = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    defaultValues,
  });

  return form;
}

export default useOrderForm;

export { defaultValues, type OrderFormSchema };
