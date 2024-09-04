import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeServicePriceFields {
  serviceId: EntryFieldTypes.Symbol;
  sedanPrice: EntryFieldTypes.Number;
  midsizePrice: EntryFieldTypes.Number;
  fullsizePrice: EntryFieldTypes.Number;
}

export type TypeServicePriceSkeleton = EntrySkeletonType<
  TypeServicePriceFields,
  'servicePrice'
>;
export type TypeServicePrice<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeServicePriceSkeleton, Modifiers, Locales>;
