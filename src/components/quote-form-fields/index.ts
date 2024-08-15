import CarTypeField from './CarTypeField';
import CarTypeFieldExpanded from './CarTypeFieldExpanded';
import CeramicCoatingAddonsField from './CeramicCoatingAddonsField';
import CeramicCoatingPackageField from './CeramicCoatingPackageField';
import ExteriorPackageField from './ExteriorPackageField';
import InteriorAddonsField from './InteriorAddonsField';
import InteriorAddonsFieldExpanded from './InteriorAddonsFieldExpanded';
import InteriorPackageField from './InteriorPackageField';
import InteriorPackageFieldExpanded from './InteriorPackageFieldExpanded';
import ServiceLocationField from './ServiceLocationField';

const QuoteFormField = {
  CarType: CarTypeField,
  CarTypeExpanded: CarTypeFieldExpanded,
  InteriorPackage: InteriorPackageField,
  InteriorPackageExpanded: InteriorPackageFieldExpanded,
  InteriorAddons: InteriorAddonsField,
  InteriorAddonsExpanded: InteriorAddonsFieldExpanded,
  ExteriorPackage: ExteriorPackageField,
  CeramicCoatingPackage: CeramicCoatingPackageField,
  CeramicCoatingAddons: CeramicCoatingAddonsField,
  ServiceLocation: ServiceLocationField,
};

export default QuoteFormField;
