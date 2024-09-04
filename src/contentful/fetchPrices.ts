import { Entry } from 'contentful';

import { CarType } from '@/models/CarType';
import { Service } from '@/models/Service';
import { ServiceLocation } from '@/models/ServiceLocation';

import { contentfulClient } from './contentfulClient';
import {
  TypeServiceAddonPriceFields,
  TypeServiceAddonPriceSkeleton,
  TypeServiceLocationPriceFields,
  TypeServiceLocationPriceSkeleton,
  TypeServicePriceFields,
  TypeServicePriceSkeleton,
} from './types';

interface FetchPricesOptions {
  preview: boolean;
}

async function fetchPrices({ preview }: FetchPricesOptions) {
  const client = contentfulClient({ preview });

  const servicePricesPromise = client
    .getEntries<TypeServicePriceSkeleton>({
      content_type: 'servicePrice',
    })
    .then((res) => res.items)
    .then((items) => parseServicePrices(items));

  const serviceAddonPricesPromise = client
    .getEntries<TypeServiceAddonPriceSkeleton>({
      content_type: 'serviceAddonPrice',
    })
    .then((res) => res.items)
    .then((items) => parseServiceAddonPrices(items));

  const serviceLocationPricesPromise = client
    .getEntries<TypeServiceLocationPriceSkeleton>({
      content_type: 'serviceLocationPrice',
    })
    .then((res) => res.items)
    .then((items) => parseServiceLocationPrices(items));

  const [servicePrices, serviceAddonPrices, serviceLocationPrices] =
    await Promise.all([
      servicePricesPromise,
      serviceAddonPricesPromise,
      serviceLocationPricesPromise,
    ]);

  return {
    ...servicePrices,
    ...serviceAddonPrices,
    ...serviceLocationPrices,
  };
}

type ServicePriceEntries = Entry<TypeServicePriceSkeleton, undefined, string>[];

function parseServicePrices(servicePriceEntries?: ServicePriceEntries) {
  const findPrice = (
    serviceId: string,
    fieldName: Exclude<
      keyof TypeServicePriceFields,
      // Exclude the 'serviceId' field since it does not return a number
      // We want this function to return either a number of undefined
      // By using the Pick utility, we can be sure that the 'serviceId' field exists incase the type is changed in the future
      keyof Pick<TypeServicePriceFields, 'serviceId'>
    >,
  ) => {
    return (
      servicePriceEntries?.find((e) => e.fields.serviceId === serviceId)
        ?.fields[fieldName] ?? 0
    );
  };

  return {
    InteriorPackage: {
      [Service.InteriorPackageID.None]: {
        [CarType.Sedan]: 0,
        [CarType.MidSized]: 0,
        [CarType.FullSized]: 0,
      },
      [Service.InteriorPackageID.Regular]: {
        [CarType.Sedan]: findPrice('interiorServiceRegular', 'sedanPrice'),
        [CarType.MidSized]: findPrice('interiorServiceRegular', 'midsizePrice'),
        [CarType.FullSized]: findPrice(
          'interiorServiceRegular',
          'fullsizePrice',
        ),
      },
      [Service.InteriorPackageID.Deep]: {
        [CarType.Sedan]: findPrice('interiorServiceDeepCleaning', 'sedanPrice'),
        [CarType.MidSized]: findPrice(
          'interiorServiceDeepCleaning',
          'midsizePrice',
        ),
        [CarType.FullSized]: findPrice(
          'interiorServiceDeepCleaning',
          'fullsizePrice',
        ),
      },
    },

    ExteriorPackage: {
      [Service.ExteriorPackageID.None]: {
        [CarType.Sedan]: 0,
        [CarType.MidSized]: 0,
        [CarType.FullSized]: 0,
      },
      [Service.ExteriorPackageID.Regular]: {
        [CarType.Sedan]: findPrice('exteriorServiceRegular', 'sedanPrice'),
        [CarType.MidSized]: findPrice('exteriorServiceRegular', 'midsizePrice'),
        [CarType.FullSized]: findPrice(
          'exteriorServiceRegular',
          'fullsizePrice',
        ),
      },
      [Service.ExteriorPackageID.Enhanced]: {
        [CarType.Sedan]: findPrice('exteriorServiceEnhanced', 'sedanPrice'),
        [CarType.MidSized]: findPrice(
          'exteriorServiceEnhanced',
          'midsizePrice',
        ),
        [CarType.FullSized]: findPrice(
          'exteriorServiceEnhanced',
          'fullsizePrice',
        ),
      },
      [Service.ExteriorPackageID.Elite]: {
        [CarType.Sedan]: findPrice('exteriorServiceElite', 'sedanPrice'),
        [CarType.MidSized]: findPrice('exteriorServiceElite', 'midsizePrice'),
        [CarType.FullSized]: findPrice('exteriorServiceElite', 'fullsizePrice'),
      },
    },
    CeramicCoatingPackage: {
      [Service.CeramicCoatingPackageID.None]: {
        [CarType.Sedan]: 0,
        [CarType.MidSized]: 0,
        [CarType.FullSized]: 0,
      },
      [Service.CeramicCoatingPackageID.FiveYear]: {
        [CarType.Sedan]: findPrice(
          'ceramicCoatingServiceFiveYear',
          'sedanPrice',
        ),
        [CarType.MidSized]: findPrice(
          'ceramicCoatingServiceFiveYear',
          'midsizePrice',
        ),
        [CarType.FullSized]: findPrice(
          'ceramicCoatingServiceFiveYear',
          'fullsizePrice',
        ),
      },
      [Service.CeramicCoatingPackageID.SevenYear]: {
        [CarType.Sedan]: findPrice(
          'ceramicCoatingServiceSevenYear',
          'sedanPrice',
        ),
        [CarType.MidSized]: findPrice(
          'ceramicCoatingServiceSevenYear',
          'midsizePrice',
        ),
        [CarType.FullSized]: findPrice(
          'ceramicCoatingServiceSevenYear',
          'fullsizePrice',
        ),
      },
    },
  };
}

type ServiceAddonPriceEntries = Entry<
  TypeServiceAddonPriceSkeleton,
  undefined,
  string
>[];

function parseServiceAddonPrices(
  serviceAddonPriceEntries?: ServiceAddonPriceEntries,
) {
  const findPrice = (
    serviceAddonId: string,
    fieldName: Exclude<
      keyof TypeServiceAddonPriceFields,
      // Exclude the 'serviceAddonId' field since it does not return a number
      // We want this function to return either a number of undefined
      // By using the Pick utility, we can be sure that the 'serviceAddonId' field exists incase the type is changed in the future
      keyof Pick<TypeServiceAddonPriceFields, 'serviceAddonId'>
    >,
  ) => {
    return (
      serviceAddonPriceEntries?.find(
        (e) => e.fields.serviceAddonId === serviceAddonId,
      )?.fields[fieldName] ?? 0
    );
  };

  return {
    InteriorAddon: {
      [Service.InteriorAddonID.OdorRemoval]: findPrice(
        'interiorAddonOdorRemoval',
        'price',
      ),
      [Service.InteriorAddonID.PetHairRemoval]: findPrice(
        'interiorAddonPetHairRemoval',
        'price',
      ),
    },
    CeramicCoatingAddon: {
      [Service.CeramicCoatingAddonID.GlassCoating]: findPrice(
        'ceramicCoatingAddonGlassCoating',
        'price',
      ),
      [Service.CeramicCoatingAddonID.WheelCoating]: findPrice(
        'ceramicCoatingAddonWheelCoating',
        'price',
      ),
    },
  };
}

type ServiceLocationPriceEntries = Entry<
  TypeServiceLocationPriceSkeleton,
  undefined,
  string
>[];

function parseServiceLocationPrices(
  serviceLocationPriceEntries?: ServiceLocationPriceEntries,
) {
  const findPrice = (
    serviceLocationId: string,
    fieldName: Exclude<
      keyof TypeServiceLocationPriceFields,
      // Exclude the 'serviceLocationId' field since it does not return a number
      // We want this function to return either a number of undefined
      // By using the Pick utility, we can be sure that the 'serviceLocationId' field exists incase the type is changed in the future
      keyof Pick<TypeServiceLocationPriceFields, 'serviceLocationId'>
    >,
  ) => {
    return (
      serviceLocationPriceEntries?.find(
        (e) => e.fields.serviceLocationId === serviceLocationId,
      )?.fields[fieldName] ?? 0
    );
  };

  return {
    ServiceLocation: {
      [ServiceLocation.HustleAutoHome]: 0,
      [ServiceLocation.Airdrie]: findPrice('serviceLocationAirdrie', 'price'),
      [ServiceLocation.CalgaryNorth]: findPrice(
        'serviceLocationCalgarySouth',
        'price',
      ),
      [ServiceLocation.CalgarySouth]: findPrice(
        'serviceLocationCalgaryNorth',
        'price',
      ),
    },
  };
}

export { fetchPrices };
