import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeServiceAddonPriceFields {
  serviceAddonId: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Number;
}

export type TypeServiceAddonPriceSkeleton = EntrySkeletonType<
  TypeServiceAddonPriceFields,
  'serviceAddonPrice'
>;
export type TypeServiceAddonPrice<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServiceAddonPriceSkeleton, Modifiers, Locales>;
