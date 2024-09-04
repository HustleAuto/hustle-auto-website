import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeServiceLocationPriceFields {
  serviceLocationId: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Number;
}

export type TypeServiceLocationPriceSkeleton = EntrySkeletonType<
  TypeServiceLocationPriceFields,
  'serviceLocationPrice'
>;
export type TypeServiceLocationPrice<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServiceLocationPriceSkeleton, Modifiers, Locales>;
