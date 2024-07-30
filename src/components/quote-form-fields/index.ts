import CarTypeField from './CarTypeField';
import CeramicCoatingAddonsField from './CeramicCoatingAddonsField';
import CeramicCoatingPackageField from './CeramicCoatingPackageField';
import ExteriorPackageField from './ExteriorPackageField';
import InteriorAddonsField from './InteriorAddonsField';
import InteriorPackageField from './InteriorPackageField';
import ServiceLocationField from './ServiceLocationField';

const QuoteFormField = {
  CarType: CarTypeField,
  InteriorPackage: InteriorPackageField,
  InteriorAddons: InteriorAddonsField,
  ExteriorPackage: ExteriorPackageField,
  CeramicCoatingPackage: CeramicCoatingPackageField,
  CeramicCoatingAddons: CeramicCoatingAddonsField,
  ServiceLocation: ServiceLocationField,
};

export default QuoteFormField;
