import { CarType } from './models/CarType';
import { Service } from './models/Service';
import { ServiceLocation } from './models/ServiceLocation';

const Price = {
  Interior: {
    [Service.InteriorPackageID.None]: {
      [CarType.Sedan]: 0,
      [CarType.MidSized]: 0,
      [CarType.FullSized]: 0,
    },
    [Service.InteriorPackageID.Regular]: {
      [CarType.Sedan]: 90,
      [CarType.MidSized]: 90,
      [CarType.FullSized]: 110,
    },
    [Service.InteriorPackageID.Deep]: {
      [CarType.Sedan]: 180,
      [CarType.MidSized]: 180,
      [CarType.FullSized]: 220,
    },
  },
  InteriorAddon: {
    [Service.InteriorAddonID.OdorRemoval]: 40,
    [Service.InteriorAddonID.PetHairRemoval]: 100,
  },
  Exterior: {
    [Service.ExteriorPackageID.None]: {
      [CarType.Sedan]: 0,
      [CarType.MidSized]: 0,
      [CarType.FullSized]: 0,
    },
    [Service.ExteriorPackageID.Regular]: {
      [CarType.Sedan]: 90,
      [CarType.MidSized]: 120,
      [CarType.FullSized]: 180,
    },
    [Service.ExteriorPackageID.Enhanced]: {
      [CarType.Sedan]: 200,
      [CarType.MidSized]: 260,
      [CarType.FullSized]: 300,
    },
    [Service.ExteriorPackageID.Elite]: {
      [CarType.Sedan]: 320,
      [CarType.MidSized]: 390,
      [CarType.FullSized]: 450,
    },
  },
  CeramicCoating: {
    [Service.CeramicCoatingPackageID.None]: {
      [CarType.Sedan]: 0,
      [CarType.MidSized]: 0,
      [CarType.FullSized]: 0,
    },
    [Service.CeramicCoatingPackageID.FiveYear]: {
      [CarType.Sedan]: 0,
      [CarType.MidSized]: 0,
      [CarType.FullSized]: 0,
    },
    [Service.CeramicCoatingPackageID.SevenYear]: {
      [CarType.Sedan]: 799,
      [CarType.MidSized]: 899,
      [CarType.FullSized]: 999,
    },
  },
  CeramicCoatingAddon: {
    [Service.CeramicCoatingAddonID.GlassCoating]: 200,
    [Service.CeramicCoatingAddonID.WheelCoating]: 300,
  },
  ServiceLocation: {
    [ServiceLocation.HustleAutoHome]: 0,
    [ServiceLocation.Airdrie]: 10,
    [ServiceLocation.CalgaryNorth]: 25,
    [ServiceLocation.CalgarySouth]: 35,
  },
};

export { Price };
