import CarTypeField from './CarTypeField';
import CarTypeFieldExpanded from './CarTypeFieldExpanded';
import CeramicCoatingAddonsField from './CeramicCoatingAddonsField';
import CeramicCoatingAddonsFieldExpanded from './CeramicCoatingAddonsFieldExpanded';
import CeramicCoatingPackageField from './CeramicCoatingPackageField';
import CeramicCoatingPackageFieldExpanded from './CeramicCoatingPackageFieldExpanded';
import ExteriorPackageField from './ExteriorPackageField';
import ExteriorPackageFieldExpanded from './ExteriorPackageFieldExpanded';
import InteriorAddonsField from './InteriorAddonsField';
import InteriorAddonsFieldExpanded from './InteriorAddonsFieldExpanded';
import InteriorPackageField from './InteriorPackageField';
import InteriorPackageFieldExpanded from './InteriorPackageFieldExpanded';
import ServiceLocationField from './ServiceLocationField';
import ServiceLocationFieldExpanded from './ServiceLocationFieldExpanded';

const QuoteFormField = {
  CarType: CarTypeField,
  CarTypeExpanded: CarTypeFieldExpanded,
  InteriorPackage: InteriorPackageField,
  InteriorPackageExpanded: InteriorPackageFieldExpanded,
  InteriorAddons: InteriorAddonsField,
  InteriorAddonsExpanded: InteriorAddonsFieldExpanded,
  ExteriorPackage: ExteriorPackageField,
  ExteriorPackageExpanded: ExteriorPackageFieldExpanded,
  CeramicCoatingPackage: CeramicCoatingPackageField,
  CeramicCoatingPackageExpanded: CeramicCoatingPackageFieldExpanded,
  CeramicCoatingAddonsExpanded: CeramicCoatingAddonsFieldExpanded,
  CeramicCoatingAddons: CeramicCoatingAddonsField,
  ServiceLocation: ServiceLocationField,
  ServiceLocationExpanded: ServiceLocationFieldExpanded,
};

export default QuoteFormField;
