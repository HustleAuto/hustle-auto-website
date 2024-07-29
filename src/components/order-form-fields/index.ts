import CarTypeField from './CarTypeField';
import CeramicCoatingPackageField from './CeramicCoatingPackageField';
import ExteriorPackageField from './ExteriorPackageField';
import InteriorAddonsField from './InteriorAddonsField';
import InteriorPackageField from './InteriorPackageField';

const OrderFormField = {
  CarType: CarTypeField,
  InteriorPackage: InteriorPackageField,
  InteriorAddons: InteriorAddonsField,
  ExteriorPackage: ExteriorPackageField,
  CeramicCoatingPackage: CeramicCoatingPackageField,
};

export default OrderFormField;
