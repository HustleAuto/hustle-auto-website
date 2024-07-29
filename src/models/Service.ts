enum InteriorPackageID {
  None = 'None',
  Regular = 'Regular Interior Detail',
  Deep = 'Deep Interior Detail',
}

enum InteriorAddonID {
  OdorRemoval = 'Foul Odor Removal',
  PetHairRemoval = 'Pet Hair Removal',
}

enum ExteriorPackageID {
  None = 'None',
  Regular = 'Regular Exterior Detail',
  Enhanced = 'Enhanced Exterior Detail',
  Elite = 'Elite Exterior Detail',
}

enum CeramicCoatingPackageID {
  None = 'None',
  FiveYear = '5-Year Ceramic Coating',
  SevenYear = '7-Year Ceramic Coating',
}

enum CeramicCoatingAddonID {
  GlassCoating = 'Glass Ceramic Coating',
  WheelCoating = 'Wheel Ceramic Coating',
}

const Service = {
  InteriorPackageID,
  InteriorAddonID,
  ExteriorPackageID,
  CeramicCoatingPackageID,
  CeramicCoatingAddonID,
};

export { Service };
