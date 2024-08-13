namespace Service {
  export enum InteriorPackageID {
    None = 'None',
    Regular = 'Regular Interior Detail',
    Deep = 'Deep Interior Detail',
  }

  export enum InteriorAddonID {
    OdorRemoval = 'Foul Odor Removal',
    PetHairRemoval = 'Pet Hair Removal',
  }

  export enum ExteriorPackageID {
    None = 'None',
    Regular = 'Regular Exterior Detail',
    Enhanced = 'Enhanced Exterior Detail',
    Elite = 'Elite Exterior Detail',
  }

  export enum CeramicCoatingPackageID {
    None = 'None',
    FiveYear = '5-Year Ceramic Coating',
    SevenYear = '7-Year Ceramic Coating',
  }

  export enum CeramicCoatingAddonID {
    GlassCoating = 'Glass Ceramic Coating',
    WheelCoating = 'Wheel Ceramic Coating',
  }
}

export { Service };
