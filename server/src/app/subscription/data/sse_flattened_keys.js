const filters = [
  {
    title: "Programs and services",
    key: "programsServices",
    name: "checkedDomain",
  },
  {
    title: "Children and youth services",
    key: "programsServicesChildren",
    name: "checkedDomain",
  },
  {
    title: "Adoption services",
    key: "programsServicesChildrenAdoption",
    name: "checkedDomain",
  },
  {
    title: "Caregiver support",
    key: "programsServicesChildrenCaregiver",
    name: "checkedDomain",
  },
  {
    title: "Early childhood development services",
    key: "programsServicesChildrenEarlyChildhood",
    name: "checkedDomain",
  },
  {
    title: "Special needs services",
    key: "programsServicesChildrenSpecialNeeds",
    name: "checkedDomain",
  },
  {
    title: "Student support services",
    key: "programsServicesChildrenStudentSupport",
    name: "checkedDomain",
  },
  {
    title: "Parent/legal guardian support services",
    key: "programsServicesChildrenParentGuardian",
    name: "checkedDomain",
  },
  {
    title: "Child protection",
    key: "programsServicesChildrenChildProtection",
    name: "checkedDomain",
  },
  {
    title: "Citizenship",
    key: "programsServicesCitizenship",
    name: "checkedDomain",
  },
  {
    title: "Admissibility, security and visa services",
    key: "programsServicesCitizenshipAdmissibility",
    name: "checkedDomain",
  },
  { title: "Border services", key: "citizenshipBorder", name: "checkedDomain" },
  {
    title: "Refugee services",
    key: "citizenshipRefugee",
    name: "checkedDomain",
  },
  {
    title: "Temporary residence permits",
    key: "programsServicesCitizenshipTemporaryResidence",
    name: "checkedDomain",
  },
  {
    title: "Permanent residence permits",
    key: "programsServicesCitizenshipPermanentResidence",
    name: "checkedDomain",
  },
  {
    title: "Citizenship grants",
    key: "citizenshipGrants",
    name: "checkedDomain",
  },
  {
    title: "Settlement/re-settlement",
    key: "programsServicesCitizenshipSettlement",
    name: "checkedDomain",
  },
  {
    title: "Civic engagement/volunteering",
    key: "programsServicesCitizenshipVolunteering",
    name: "checkedDomain",
  },
  {
    title: "Civic/cultural integration",
    key: "programsServicesCitizenshipCulturalIntegration",
    name: "checkedDomain",
  },
  {
    title: "Undocumented individuals",
    key: "programsServicesCitizenshipUndocumented",
    name: "checkedDomain",
  },
  { title: "Migration", key: "citizenshipMigration", name: "checkedDomain" },
  {
    title: "Detention, deportation and extradition",
    key: "programsServicesCitizenshipDetentionDeportation",
    name: "checkedDomain",
  },
  {
    title: "Sub-national cooperation",
    key: "programsServicesCitizenshipSubnational",
    name: "checkedDomain",
  },
  {
    title: "International cooperation",
    key: "programsServicesCitizenshipInternational",
    name: "checkedDomain",
  },
  {
    title: "Climate action",
    key: "programsServicesClimate",
    name: "checkedDomain",
  },
  {
    title: "Energy-use production",
    key: "programsServicesClimateEnergy",
    name: "checkedDomain",
  },
  {
    title: "Buildings",
    key: "programsServicesClimateEnergyBuildings",
    name: "checkedDomain",
  },
  {
    title: "Energy production",
    key: "programsServicesClimateEnergyProduction",
    name: "checkedDomain",
  },
  {
    title: "Households",
    key: "programsServicesClimateEnergyHouseholds",
    name: "checkedDomain",
  },
  {
    title: "Industries",
    key: "programsServicesClimateEnergyIndustries",
    name: "checkedDomain",
  },
  {
    title: "Land use",
    key: "programsServicesClimateEnergyLandUse",
    name: "checkedDomain",
  },
  {
    title: "Tourism",
    key: "programsServicesClimateEnergyTourism",
    name: "checkedDomain",
  },
  {
    title: "Transport",
    key: "programsServicesClimateEnergyTransport",
    name: "checkedDomain",
  },
  {
    title: "Low or zero-carbon electricity supply",
    key: "programsServicesClimateZeroCarbon",
    name: "checkedDomain",
  },
  {
    title: "Nuclear power",
    key: "programsServicesClimateZeroCarbonNuclear",
    name: "checkedDomain",
  },
  {
    title: "Renewable energy",
    key: "programsServicesClimateZeroCarbonRenewable",
    name: "checkedDomain",
  },
  {
    title: "Electrification and other fuel switching",
    key: "programsServicesClimateElectrification",
    name: "checkedDomain",
  },
  {
    title: "Appliances",
    key: "programsServicesClimateElectrificationAppliances",
    name: "checkedDomain",
  },
  {
    title: "Supporting infrastructure",
    key: "programsServicesClimateElectrificationSupportingInfra",
    name: "checkedDomain",
  },
  {
    title: "Vehicles",
    key: "programsServicesClimateElectrificationVehicles",
    name: "checkedDomain",
  },
  {
    title: "Non-energy emission solutions",
    key: "programsServicesClimateNonEnergy",
    name: "checkedDomain",
  },
  {
    title: "Bio-sequestration",
    key: "programsServicesClimateNonEnergyBioSequestration",
    name: "checkedDomain",
  },
  {
    title: "Carbon capture and storage",
    key: "programsServicesClimateNonEnergyCarbonCapture",
    name: "checkedDomain",
  },
  {
    title: "Fugitive-emission reduction",
    key: "programsServicesClimateNonEnergyFugitiveEmissionReduction",
    name: "checkedDomain",
  },
  {
    title: "Industrial-process improvements",
    key: "programsServicesClimateNonEnergyIndustrialProcessImprovements",
    name: "checkedDomain",
  },
  {
    title: "Reuse and recycling",
    key: "programsServicesClimateNonEnergyReuseRecycling",
    name: "checkedDomain",
  },
  {
    title: "Climate-change risk management",
    key: "programsServicesClimateChangeRisk",
    name: "checkedDomain",
  },
  {
    title: "Financial",
    key: "programsServicesClimateChangeRiskFinancial",
    name: "checkedDomain",
  },
  {
    title: "Human",
    key: "programsServicesClimateChangeRiskHuman",
    name: "checkedDomain",
  },
  {
    title: "Property",
    key: "programsServicesClimateChangeRiskProperty",
    name: "checkedDomain",
  },
  {
    title: "Settlement",
    key: "programsServicesClimateChangeRiskSettlement",
    name: "checkedDomain",
  },
  {
    title: "Community and social services",
    key: "programsServicesCommunity",
    name: "checkedDomain",
  },
  {
    title: "Accessibility services",
    key: "programsServicesCommunityAccessibility",
    name: "checkedDomain",
  },
  {
    title: "Disability services",
    key: "programsServicesCommunityDisability",
    name: "checkedDomain",
  },
  {
    title: "Problem gambling services",
    key: "programsServicesCommunityGambling",
    name: "checkedDomain",
  },
  {
    title: "Other social services",
    key: "programsServicesCommunitySocial",
    name: "checkedDomain",
  },
  {
    title: "Community services",
    key: "programsServicesCommunityServices",
    name: "checkedDomain",
  },
  {
    title: "Community development",
    key: "programsServicesCommunityDevelopment",
    name: "checkedDomain",
  },
  {
    title: "Emergency response and preparedness",
    key: "programsServicesCommunityEmergencyResponse",
    name: "checkedDomain",
  },
  {
    title: "Consumer protection",
    key: "programsServicesConsumer",
    name: "checkedDomain",
  },
  {
    title: "Consumer awareness and education",
    key: "programsServicesConsumerAwarenessEducation",
    name: "checkedDomain",
  },
  {
    title: "Consumer advocacy and rights",
    key: "programsServicesConsumerAdvocacy",
    name: "checkedDomain",
  },
  {
    title: "Advertising and marketing standards",
    key: "programsServicesConsumerAdvertising",
    name: "checkedDomain",
  },
  {
    title: "Consumer promotion standards",
    key: "programsServicesConsumerPromotion",
    name: "checkedDomain",
  },
  {
    title: "Responsible consumption initiatives",
    key: "programsServicesConsumerConsumption",
    name: "checkedDomain",
  },
  {
    title: "Product safety",
    key: "programsServicesConsumerProductSafety",
    name: "checkedDomain",
  },
  {
    title: "Fraud",
    key: "programsServicesConsumerFraud",
    name: "checkedDomain",
  },
  {
    title: "Privacy",
    key: "programsServicesConsumerPrivacy",
    name: "checkedDomain",
  },
  {
    title: "Competition supports",
    key: "programsServicesConsumerCompetition",
    name: "checkedDomain",
  },
  {
    title: "E-commerce and the sharing economy",
    key: "programsServicesConsumerEcommerce",
    name: "checkedDomain",
  },
  {
    title: "Culture and gender",
    key: "programsServicesCulture",
    name: "checkedDomain",
  },
  { title: "Arts", key: "programsServicesCultureArts", name: "checkedDomain" },
  {
    title: "Heritage",
    key: "programsServicesCultureHeritage",
    name: "checkedDomain",
  },
  {
    title: "Cultural industries",
    key: "programsServicesCultureIndustries",
    name: "checkedDomain",
  },
  {
    title: "Cultural protectionism",
    key: "programsServicesCultureProtectionism",
    name: "checkedDomain",
  },
  {
    title: "Cultural competency training",
    key: "programsServicesCultureTraining",
    name: "checkedDomain",
  },
  {
    title: "Multiculturalism",
    key: "programsServicesCultureMulticulturalism",
    name: "checkedDomain",
  },
  {
    title: "Gender mainstreaming",
    key: "programsServicesCultureGenderMainstreaming",
    name: "checkedDomain",
  },
  {
    title: "Gender equality",
    key: "programsServicesCultureGenderEquality",
    name: "checkedDomain",
  },
  {
    title: "Human rights",
    key: "programsServicesCultureHumanRights",
    name: "checkedDomain",
  },
  {
    title: "Economic development and growth",
    key: "programsServicesEconomic",
    name: "checkedDomain",
  },
  {
    title: "Access to finance",
    key: "programsServicesEconomicAccessToFinance",
    name: "checkedDomain",
  },
  {
    title: "Area-based initiatives",
    key: "programsServicesEconomicAreaBasedInitiatives",
    name: "checkedDomain",
  },
  {
    title: "Broadband access",
    key: "programsServicesEconomicBroadbandAccess",
    name: "checkedDomain",
  },
  {
    title: "Business advice",
    key: "programsServicesEconomicBusinessAdvice",
    name: "checkedDomain",
  },
  {
    title: "Housing stock renewal",
    key: "programsServicesEconomicHousingStock",
    name: "checkedDomain",
  },
  {
    title: "Human capital investments",
    key: "programsServicesEconomicHumanCapital",
    name: "checkedDomain",
  },
  {
    title: "Innovation supports",
    key: "programsServicesEconomicInnovation",
    name: "checkedDomain",
  },
  {
    title: "Public space improvements",
    key: "programsServicesEconomicPublicSpace",
    name: "checkedDomain",
  },
  {
    title: "Sport/culture events and facilities",
    key: "programsServicesEconomicSportCulture",
    name: "checkedDomain",
  },
  {
    title: "Transportation enhancements",
    key: "programsServicesEconomicTransportationEnhancements",
    name: "checkedDomain",
  },
  {
    title: "General fiscal policy tools",
    key: "programsServicesEconomicFiscalPolicy",
    name: "checkedDomain",
  },
  {
    title: "General monetary policy tools",
    key: "programsServicesEconomicMonetaryPolicy",
    name: "checkedDomain",
  },
  {
    title: "General trade policy tools",
    key: "programsServicesEconomicTradePolicy",
    name: "checkedDomain",
  },
  {
    title: "Education",
    key: "programsServicesEducation",
    name: "checkedDomain",
  },
  {
    title: "Pre-primary education",
    key: "programsServicesEducationPrePrimary",
    name: "checkedDomain",
  },
  {
    title: "Primary education",
    key: "programsServicesEducationPrimary",
    name: "checkedDomain",
  },
  {
    title: "Secondary education",
    key: "programsServicesEducationSecondary",
    name: "checkedDomain",
  },
  {
    title: "Tertiary/higher education",
    key: "programsServicesEducationTertiary",
    name: "checkedDomain",
  },
  {
    title: "Academic planning",
    key: "programsServicesEducationAcademicPlanning",
    name: "checkedDomain",
  },
  {
    title: "Revenue streams",
    key: "programsServicesEducationRevenueStreams",
    name: "checkedDomain",
  },
  {
    title: "Tuition setting and subsidy",
    key: "programsServicesEducationTuitionSubsidy",
    name: "checkedDomain",
  },
  {
    title: "Marketing",
    key: "programsServicesEducationMarketing",
    name: "checkedDomain",
  },
  {
    title: "Admission and recruitment",
    key: "programsServicesEducationAdmissionRecruitment",
    name: "checkedDomain",
  },
  {
    title: "Streaming",
    key: "programsServicesEducationStreaming",
    name: "checkedDomain",
  },
  {
    title: "Curriculum",
    key: "programsServicesEducationCurriculum",
    name: "checkedDomain",
  },
  {
    title: "Literacy training",
    key: "programsServicesEducationLiteracyTraining",
    name: "checkedDomain",
  },
  {
    title: "Apprenticeships",
    key: "programsServicesEducationApprenticeships",
    name: "checkedDomain",
  },
  {
    title: "Teaching",
    key: "programsServicesEducationTeaching",
    name: "checkedDomain",
  },
  {
    title: "Assessment",
    key: "programsServicesEducationAssessment",
    name: "checkedDomain",
  },
  {
    title: "Student engagement",
    key: "programsServicesEducationStudentEngagement",
    name: "checkedDomain",
  },
  {
    title: "Parent/legal guardian engagement",
    key: "educationParentEngagement",
    name: "checkedDomain",
  },
  {
    title: "Teacher/faculty engagement",
    key: "programsServicesEducationTeacherEngagement",
    name: "checkedDomain",
  },
  {
    title: "Community engagement",
    key: "programsServicesEducationCommunityEngagement",
    name: "checkedDomain",
  },
  {
    title: "Prospective employers engagement",
    key: "programsServicesEducationEmployerEngagement",
    name: "checkedDomain",
  },
  {
    title: "Employment",
    key: "programsServicesEmployment",
    name: "checkedDomain",
  },
  {
    title: "Job training/retraining",
    key: "programsServicesEmploymentTraining",
    name: "checkedDomain",
  },
  {
    title: "Wages",
    key: "programsServicesEmploymentWages",
    name: "checkedDomain",
  },
  {
    title: "Benefits",
    key: "programsServicesEmploymentBenefits",
    name: "checkedDomain",
  },
  {
    title: "Employment conditions",
    key: "programsServicesEmploymentConditions",
    name: "checkedDomain",
  },
  {
    title: "Displaced workers",
    key: "programsServicesEmploymentDisplacedWorkers",
    name: "checkedDomain",
  },
  {
    title: "Unemployment",
    key: "programsServicesEmploymentUnemployment",
    name: "checkedDomain",
  },
  {
    title: "Unpaid labour",
    key: "programsServicesEmploymentUnpaidLabour",
    name: "checkedDomain",
  },
  {
    title: "Workplace safety and prevention",
    key: "programsServicesEmploymentWorkplaceSafety",
    name: "checkedDomain",
  },
  {
    title: "Workplace violence and harassment",
    key: "programsServicesEmploymentWorkplaceViolence",
    name: "checkedDomain",
  },
  {
    title: "Unions and collective bargaining",
    key: "programsServicesEmploymentUnions",
    name: "checkedDomain",
  },
  {
    title: "Labour-market interventions",
    key: "programsServicesEmploymentLabourMarket",
    name: "checkedDomain",
  },
  {
    title: "Industry-level interventions",
    key: "programsServicesEmploymentIndustry",
    name: "checkedDomain",
  },
  {
    title: "Energy supply",
    key: "energySupply",
    name: "checkedDomain",
  },
  {
    title: "Biofuel",
    key: "energySupplyBiofuel",
    name: "checkedDomain",
  },
  {
    title: "First-generation biofuels",
    key: "energySupplyBiofuelFirstGeneration",
    name: "checkedDomain",
  },
  {
    title: "Second-generation biofuels",
    key: "energySupplyBiofuelSecondGeneration",
    name: "checkedDomain",
  },
  { title: "Coal", key: "energySupplyCoal", name: "checkedDomain" },
  {
    title: "Hydro-electricity",
    key: "energySupplyHydro",
    name: "checkedDomain",
  },
  {
    title: "Pumped storage",
    key: "energySupplyHydroPumpedStorage",
    name: "checkedDomain",
  },
  {
    title: "Reservoir",
    key: "energySupplyHydroResevoir",
    name: "checkedDomain",
  },
  {
    title: "Run-of-river",
    key: "energySupplyHydroRunOfRiver",
    name: "checkedDomain",
  },
  {
    title: "Tidal range",
    key: "energySupplyHydroTidalRange",
    name: "checkedDomain",
  },
  {
    title: "Tidal stream",
    key: "energySupplyHydroTidalStream",
    name: "checkedDomain",
  },
  {
    title: "Natural gas",
    key: "energySupplyNaturalGas",
    name: "checkedDomain",
  },
  {
    title: "Nuclear energy",
    key: "energySupplyNuclearEnergy",
    name: "checkedDomain",
  },
  {
    title: "Petroleum products",
    key: "energySupplyPetroleum",
    name: "checkedDomain",
  },
  {
    title: "Solar power",
    key: "energySupplySolarPower",
    name: "checkedDomain",
  },
  { title: "Wind power", key: "energySupplyWindPower", name: "checkedDomain" },
  {
    title: "Non-carbon fuel",
    key: "energySupplyNonCarbon",
    name: "checkedDomain",
  },
  {
    title: "Ammonia",
    key: "energySupplyNonCarbonAmonia",
    name: "checkedDomain",
  },
  {
    title: "Hydrogen",
    key: "energySupplyNonCarbonHydrogen",
    name: "checkedDomain",
  },
  {
    title: "Geothermal",
    key: "energySupplyGeothermal",
    name: "checkedDomain",
  },
  {
    title: "Electricity generation",
    key: "energySupplyGeothermalElectricity",
    name: "checkedDomain",
  },
  {
    title: "Heating and heating systems",
    key: "energySupplyGeothermalHeating",
    name: "checkedDomain",
  },
  {
    title: "Heat pump",
    key: "energySupplyGeothermalHeatPump",
    name: "checkedDomain",
  },
  {
    title: "Waste (to) energy",
    key: "energyWaste",
    name: "checkedDomain",
  },
  {
    title: "Biological treatment",
    key: "energyWasteBiological",
    name: "checkedDomain",
  },
  {
    title: "Thermochemical treatment",
    key: "energyWasteThermochemical",
    name: "checkedDomain",
  },
  {
    title: "Co-generation",
    key: "energyCoGen",
    name: "checkedDomain",
  },
  {
    title: "Power and heat",
    key: "energyCoGenPowerHeat",
    name: "checkedDomain",
  },
  {
    title: "Power, heat and cooling (trigeneration)",
    key: "energyCoGenPowerHeatCooling",
    name: "checkedDomain",
  },
  {
    title: "Power, heat, cooling and other products (polygeneration)",
    key: "energyCoGenPolygeneration",
    name: "checkedDomain",
  },
  {
    title: "Energy storage",
    key: "energyStorage",
    name: "checkedDomain",
  },
  { title: "Domestic", key: "energyStorageDomestic", name: "checkedDomain" },
  {
    title: "Industrial",
    key: "energyStorageIndustrial",
    name: "checkedDomain",
  },
  {
    title: "Energy systems",
    key: "energySystems",
    name: "checkedDomain",
  },
  { title: "Energy mix", key: "energySystemsMix", name: "checkedDomain" },
  {
    title: "Energy efficiency initiatives",
    key: "energySystemsEfficiency",
    name: "checkedDomain",
  },
  { title: "Grid design", key: "energySystemsGrid", name: "checkedDomain" },
  {
    title: "On-and off- grid source balancing",
    key: "energySystemsGridBalancing",
    name: "checkedDomain",
  },
  {
    title: "Supply security",
    key: "energySystemsSupplySecurity",
    name: "checkedDomain",
  },
  {
    title: "Environmental conservation",
    key: "environmentalConservation",
    name: "checkedDomain",
  },
  { title: "Air", key: "environmentalConservationAir", name: "checkedDomain" },
  {
    title: "Land",
    key: "environmentalConservationLand",
    name: "checkedDomain",
  },
  {
    title: "Land-use planning",
    key: "environmentalConservationLandPlanning",
    name: "checkedDomain",
  },
  {
    title: "Parks and other protected areas",
    key: "environmentalConservationLandParks",
    name: "checkedDomain",
  },
  {
    title: "Water",
    key: "environmentalConservationWater",
    name: "checkedDomain",
  },
  {
    title: "Freshwater (lakes & rivers)",
    key: "environmentalConservationWaterFreshwater",
    name: "checkedDomain",
  },
  {
    title:
      "Seas (marine & coasts, including coastal erosion) & their catchments",
    key: "environmentalConservationWaterSeas",
    name: "checkedDomain",
  },
  {
    title: "Biodiversity",
    key: "environmentalConservationBiodiversity",
    name: "checkedDomain",
  },
  {
    title: "Fauna protection",
    key: "environmentalConservationBiodiversityFauna",
    name: "checkedDomain",
  },
  {
    title: "Flora protection",
    key: "environmentalConservationBiodiversityFlora",
    name: "checkedDomain",
  },
  {
    title: "Conservation status assessment",
    key: "environmentalConservationBiodiversityStatusAssessment",
    name: "checkedDomain",
  },
  {
    title: "Sustainable harvesting",
    key: "environmentalConservationBiodiversitySustainableHarvesting",
    name: "checkedDomain",
  },
  {
    title: "Recycling",
    key: "environmentalConservationRecycling",
    name: "checkedDomain",
  },
  {
    title: "Personal",
    key: "environmentalConservationRecyclingPersonal",
    name: "checkedDomain",
  },
  {
    title: "Industrial",
    key: "environmentalConservationRecyclingIndustrial",
    name: "checkedDomain",
  },
  {
    title: "Restoration",
    key: "environmentalConservationRestoration",
    name: "checkedDomain",
  },
  {
    title: "Environmental remediation",
    key: "environmentalConservationRestorationRemediation",
    name: "checkedDomain",
  },
  {
    title: "Land restoration",
    key: "environmentalConservationRestorationLand",
    name: "checkedDomain",
  },
  {
    title: "Land rehabilitation",
    key: "environmentalConservationRehabilitationLand",
    name: "checkedDomain",
  },
  {
    title: "Waste",
    key: "environmentalConservationWaste",
    name: "checkedDomain",
  },
  {
    title: "Hazardous solid, liquid or other waste",
    key: "environmentalConservationWasteHazardous",
    name: "checkedDomain",
  },
  {
    title: "Non-hazardous solid, liquid or other waste",
    key: "environmentalConservationWasteNonHazardous",
    name: "checkedDomain",
  },
  {
    title: "Environmental resilience",
    key: "environmentalConservationResilience",
    name: "checkedDomain",
  },
  {
    title: "Social",
    key: "environmentalConservationResilienceSocial",
    name: "checkedDomain",
  },
  {
    title: "Economic",
    key: "environmentalConservationResilienceEconomic",
    name: "checkedDomain",
  },
  {
    title: "Institutional",
    key: "environmentalConservationResilienceInstitutional",
    name: "checkedDomain",
  },
  {
    title: "Physical",
    key: "environmentalConservationResiliencePhysical",
    name: "checkedDomain",
  },
  {
    title: "Natural",
    key: "environmentalConservationResilienceNatural",
    name: "checkedDomain",
  },
  {
    title: "Environmental-threats management",
    key: "environmentalConservationThreats",
    name: "checkedDomain",
  },
  {
    title: "Droughts",
    key: "environmentalConservationThreatsDroughts",
    name: "checkedDomain",
  },
  {
    title: "Fires",
    key: "environmentalConservationThreatsFires",
    name: "checkedDomain",
  },
  {
    title: "Floods",
    key: "environmentalConservationThreatsFloods",
    name: "checkedDomain",
  },
  {
    title: "Invasive species",
    key: "environmentalConservationThreatsInvasiveSpecies",
    name: "checkedDomain",
  },
  {
    title: "Light",
    key: "environmentalConservationThreatsLight",
    name: "checkedDomain",
  },
  {
    title: "Noise",
    key: "environmentalConservationThreatsNoise",
    name: "checkedDomain",
  },
  {
    title: "Severe storm events",
    key: "environmentalConservationThreatsSevereStormEvents",
    name: "checkedDomain",
  },
  {
    title: "Financial protection",
    key: "financial",
    name: "checkedDomain",
  },
  {
    title: "Social assistance",
    key: "financialSocialAssistance",
    name: "checkedDomain",
  },
  { title: "Minimum wage", key: "financialMinimumWage", name: "checkedDomain" },
  {
    title: "Wage disparity limitations",
    key: "financialWageDisparity",
    name: "checkedDomain",
  },
  {
    title: "Employment/unemployment insurance",
    key: "financialEmploymentInsurance",
    name: "checkedDomain",
  },
  {
    title: "Pensions and allowances",
    key: "financialPensionsAllowances",
    name: "checkedDomain",
  },
  {
    title: "Poverty reduction",
    key: "financialPovertyReduction",
    name: "checkedDomain",
  },
  {
    title: "Goods and services subsidy",
    key: "financialGoodServices",
    name: "checkedDomain",
  },
  {
    title: "Guaranteed minimum income",
    key: "financialGuaranteedIncome",
    name: "checkedDomain",
  },
  {
    title: "Other income re-distribution",
    key: "financialIncomeRedistribution",
    name: "checkedDomain",
  },
  {
    title: "Income reporting",
    key: "financialIncomeReporting",
    name: "checkedDomain",
  },
  {
    title: "Asset reporting",
    key: "financialAssetReporting",
    name: "checkedDomain",
  },
  {
    title: "Food safety and security",
    key: "foodSafety",
    name: "checkedDomain",
  },
  { title: "Food access", key: "foodSafetyAccess", name: "checkedDomain" },
  {
    title: "Nutritional awareness and education",
    key: "foodSafetyNutritionalAwareness",
    name: "checkedDomain",
  },
  { title: "Food aid", key: "foodSafetyAid", name: "checkedDomain" },
  {
    title: "Food standards",
    key: "foodSafetyStandards",
    name: "checkedDomain",
  },
  {
    title: "Food import/export",
    key: "foodSafetyImportExport",
    name: "checkedDomain",
  },
  {
    title: "International food relief",
    key: "foodSafetyInternationalRelief",
    name: "checkedDomain",
  },
  {
    title: "Government services",
    key: "government",
    name: "checkedDomain",
  },
  {
    title: "Identification, licensing and registration",
    key: "governmentIdLicensingRegistration",
    name: "checkedDomain",
  },
  {
    title: "Service awareness and education",
    key: "governmentServiceAwareness",
    name: "checkedDomain",
  },
  {
    title: "e-Government",
    key: "governmentEgovernment",
    name: "checkedDomain",
  },
  {
    title: "Service coordination",
    key: "governmentServiceCoordination",
    name: "checkedDomain",
  },
  {
    title: "Government corruption protections",
    key: "governmentCorruptionProtection",
    name: "checkedDomain",
  },
  {
    title: "Government inclusivity protections",
    key: "governmentInclusivityProtection",
    name: "checkedDomain",
  },
  {
    title: "Government accountability protections",
    key: "governmentAccountabilityProtection",
    name: "checkedDomain",
  },
  {
    title: "Elections administration",
    key: "governmentElectionAdministration",
    name: "checkedDomain",
  },
  {
    title: "Housing",
    key: "housing",
    name: "checkedDomain",
  },
  { title: "Access to housing", key: "housingAccess", name: "checkedDomain" },
  {
    title: "Temporary housing",
    key: "housingTemporary",
    name: "checkedDomain",
  },
  {
    title: "Public/social housing",
    key: "housingSocial",
    name: "checkedDomain",
  },
  {
    title: "Affordable housing",
    key: "housingAffordable",
    name: "checkedDomain",
  },
  {
    title: "Housing assistance",
    key: "housingAssistance",
    name: "checkedDomain",
  },
  { title: "Housing mix", key: "housingMix", name: "checkedDomain" },
  { title: "Housing safety", key: "housingSafety", name: "checkedDomain" },
  {
    title: "Property rights",
    key: "housingPropertyRights",
    name: "checkedDomain",
  },
  {
    title: "Infrastructure",
    key: "infrastructure",
    name: "checkedDomain",
  },
  {
    title: "Capital planning",
    key: "infrastructureCapitalPlanning",
    name: "checkedDomain",
  },
  {
    title: "Urban planning",
    key: "infrastructureUrbanPlanning",
    name: "checkedDomain",
  },
  {
    title: "Social infrastructure",
    key: "infrastructureSocial",
    name: "checkedDomain",
  },
  {
    title: "Broadband infrastructure",
    key: "infrastructureBroadband",
    name: "checkedDomain",
  },
  {
    title: "Transportation infrastructure",
    key: "infrastructureTransportation",
    name: "checkedDomain",
  },
  {
    title: "Waste management infrastructure",
    key: "infrastructureWasteManagement",
    name: "checkedDomain",
  },
  {
    title: "Water and sanitation infrastructure",
    key: "infrastructureWaterSanitation",
    name: "checkedDomain",
  },
  {
    title: "Sustainable development",
    key: "infrastructureSustainableDevelopment",
    name: "checkedDomain",
  },
  {
    title: "Capital spending",
    key: "infrastructureCapitalSpending",
    name: "checkedDomain",
  },
  {
    title: "Public financing",
    key: "infrastructurePublicFinancing",
    name: "checkedDomain",
  },
  {
    title: "Public/private partnerships",
    key: "infrastructurePublicPrivatePartnerships",
    name: "checkedDomain",
  },
  {
    title: "Private financing",
    key: "infrastructurePrivateFinancing",
    name: "checkedDomain",
  },
  {
    title: "Foreign investment",
    key: "infrastructureForeignInvestment",
    name: "checkedDomain",
  },
  {
    title: "Risk management",
    key: "infrastructureRiskManagement",
    name: "checkedDomain",
  },
  {
    title: "Natural resources",
    key: "naturalResources",
    name: "checkedDomain",
  },
  {
    title: "Aquatic life",
    key: "naturalResourcesAquatic",
    name: "checkedDomain",
  },
  {
    title: "Fishing and fisheries",
    key: "naturalResourcesAquaticFisheries",
    name: "checkedDomain",
  },
  {
    title: "Aquatic plants including coral",
    key: "naturalResourcesAquaticPlants",
    name: "checkedDomain",
  },
  { title: "Water", key: "naturalResourcesWater", name: "checkedDomain" },
  {
    title: "Forests",
    key: "naturalResourcesForests",
    name: "checkedDomain",
  },
  {
    title: "Timber industries",
    key: "naturalResourcesForestsTimber",
    name: "checkedDomain",
  },
  {
    title: "Ground-based resources",
    key: "naturalResourcesGround",
    name: "checkedDomain",
  },
  {
    title: "Metals",
    key: "naturalResourcesGroundMetals",
    name: "checkedDomain",
  },
  {
    title: "Minerals",
    key: "naturalResourcesGroundMinerals",
    name: "checkedDomain",
  },
  {
    title: "Petroleum",
    key: "naturalResourcesGroundPetroleum",
    name: "checkedDomain",
  },
  { title: "Gas", key: "naturalResourcesGroundGas", name: "checkedDomain" },
  { title: "Wildlife", key: "naturalResourcesWildlife", name: "checkedDomain" },
  {
    title: "Public safety and justice",
    key: "publicSafety",
    name: "checkedDomain",
  },
  {
    title: "Crime prevention",
    key: "publicSafetyCrimePrevention",
    name: "checkedDomain",
  },
  {
    title: "Crime reduction",
    key: "publicSafetyCrimeReduction",
    name: "checkedDomain",
  },
  {
    title: "Security services",
    key: "publicSafetySecurityServices",
    name: "checkedDomain",
  },
  {
    title: "National security",
    key: "publicSafetyNationalSecurity",
    name: "checkedDomain",
  },
  {
    title: "Counter-terrorism",
    key: "publicSafetyCounterTerrorism",
    name: "checkedDomain",
  },
  { title: "Military", key: "publicSafetyMilitary", name: "checkedDomain" },
  { title: "Policing", key: "publicSafetyPolicing", name: "checkedDomain" },
  {
    title: "Court system",
    key: "publicSafetyCourtSystem",
    name: "checkedDomain",
  },
  {
    title: "Restorative justice",
    key: "publicSafetyRestorativeJustice",
    name: "checkedDomain",
  },
  {
    title: "Youth justice",
    key: "publicSafetyYouthJustice",
    name: "checkedDomain",
  },
  {
    title: "Domestic violence support",
    key: "publicSafetyDomesticViolence",
    name: "checkedDomain",
  },
  {
    title: "Victim support",
    key: "publicSafetyVictimSupport",
    name: "checkedDomain",
  },
  {
    title: "Offender diversion and support",
    key: "publicSafetyOffenderDiversion",
    name: "checkedDomain",
  },
  { title: "Sentencing", key: "publicSafetySentencing", name: "checkedDomain" },
  {
    title: "Prison administration and management",
    key: "publicSafetyPrisonAdministration",
    name: "checkedDomain",
  },
  {
    title: "Probation and parole",
    key: "publicSafetyProbationParole",
    name: "checkedDomain",
  },
  {
    title: "Community corrections",
    key: "publicSafetyCommunityCorrections",
    name: "checkedDomain",
  },
  {
    title: "Reintegration",
    key: "publicSafetyReintegration",
    name: "checkedDomain",
  },
  {
    title: "Recreation",
    key: "recreation",
    name: "checkedDomain",
  },
  {
    title: "Promotion of recreation",
    key: "recreationPromotion",
    name: "checkedDomain",
  },
  {
    title: "Public spaces",
    key: "recreationPublicSpaces",
    name: "checkedDomain",
  },
  {
    title: "Community/recreation programs",
    key: "recreationCommunityRecreation",
    name: "checkedDomain",
  },
  {
    title: "Private recreation",
    key: "recreationPrivateRecreation",
    name: "checkedDomain",
  },
  {
    title: "Competitive sport",
    key: "recreationCompetitiveSport",
    name: "checkedDomain",
  },
  {
    title: "Transportation",
    key: "transportation",
    name: "checkedDomain",
  },
  {
    title: "Accessible transportation options",
    key: "transportationAccessibleOptions",
    name: "checkedDomain",
  },
  {
    title: "Congestion management",
    key: "transportationCongestionManagement",
    name: "checkedDomain",
  },
  {
    title: "Public transportation",
    key: "transportationPublic",
    name: "checkedDomain",
  },
  {
    title: "Safety - Pedestrian",
    key: "transportationPedestrianSafety",
    name: "checkedDomain",
  },
  {
    title: "Safety - Cycling",
    key: "transportationCyclingSafety",
    name: "checkedDomain",
  },
  {
    title: "Safety - Transportation",
    key: "transportationSafety",
    name: "checkedDomain",
  },
  {
    title: "Sustainable transportation options",
    key: "transportationSustainableOptions",
    name: "checkedDomain",
  },
  {
    title: "Transportation subsidies",
    key: "transportationSubsidies",
    name: "checkedDomain",
  },
  {
    title: "Road tolls",
    key: "transportationRoadTolls",
    name: "checkedDomain",
  },
  {
    title: "System arrangements",
    key: "system",
    name: "checkedDomain",
  },
  {
    title: "Governance arrangements",
    key: "systemGovernance",
    name: "checkedDomain",
  },
  {
    title: "Policy authority",
    key: "systemGovernancePolicy",
    name: "checkedDomain",
  },
  {
    title: "Centralization/decentralization of policy authority",
    key: "systemGovernancePolicyCentralization",
    name: "checkedDomain",
  },
  {
    title: "Accountability of the state sector's role in financing & delivery",
    key: "systemGovernancePolicyAccountability",
    name: "checkedDomain",
  },
  {
    title: "Stewardship of the non-state sector's role in financing & delivery",
    key: "systemGovernancePolicyStewardship",
    name: "checkedDomain",
  },
  {
    title:
      "Decision-making authority about who is covered and what can or must be provided to them",
    key: "systemGovernancePolicyDecisionMaking",
    name: "checkedDomain",
  },
  {
    title: "Corruption protections",
    key: "systemGovernancePolicyCorruptionProtections",
    name: "checkedDomain",
  },
  {
    title: "Organizational authority",
    key: "systemOrganizational",
    name: "checkedDomain",
  },
  {
    title: "Ownership",
    key: "systemOrganizationalOwnership",
    name: "checkedDomain",
  },
  {
    title: "Management approaches",
    key: "systemOrganizationalManagement",
    name: "checkedDomain",
  },
  {
    title: "Accreditation",
    key: "systemOrganizationalAccreditation",
    name: "checkedDomain",
  },
  {
    title: "Networks/multi-institutional arrangements",
    key: "systemOrganizationalNetworks",
    name: "checkedDomain",
  },
  {
    title: "Commercial authority",
    key: "systemCommercial",
    name: "checkedDomain",
  },
  {
    title: "Licensure & registration requirements",
    key: "systemCommercialLicensure",
    name: "checkedDomain",
  },
  {
    title: "Patents & profits",
    key: "systemCommercialPatentsProfits",
    name: "checkedDomain",
  },
  {
    title: "Pricing & purchasing",
    key: "systemCommercialPricingPurchasing",
    name: "checkedDomain",
  },
  {
    title: "Marketing",
    key: "systemCommercialMarketing",
    name: "checkedDomain",
  },
  { title: "Sales", key: "systemCommercialSales", name: "checkedDomain" },
  {
    title: "Commercial liability",
    key: "systemCommercialLiability",
    name: "checkedDomain",
  },
  {
    title: "Professional authority",
    key: "systemProfessional",
    name: "checkedDomain",
  },
  {
    title: "Training & licensure requirements",
    key: "systemProfessionalTrainingLicensure",
    name: "checkedDomain",
  },
  {
    title: "Scope of practice",
    key: "systemProfessionalScopePractice",
    name: "checkedDomain",
  },
  {
    title: "Setting of practice",
    key: "systemProfessionalSettingPractice",
    name: "checkedDomain",
  },
  {
    title: "Continuing competence",
    key: "systemProfessionalContinuingCompetence",
    name: "checkedDomain",
  },
  {
    title: "Quality & safety",
    key: "systemProfessionalQualitySafety",
    name: "checkedDomain",
  },
  {
    title: "Professional liability",
    key: "systemProfessionalLiability",
    name: "checkedDomain",
  },
  {
    title: "Strike/job action",
    key: "systemProfessionalStrikeJobAction",
    name: "checkedDomain",
  },
  {
    title: "Citizen & stakeholder involvement",
    key: "systemCitizen",
    name: "checkedDomain",
  },
  {
    title: "Citizen participation in policy & organizational decisions",
    key: "systemCitizenPolicy",
    name: "checkedDomain",
  },
  {
    title: "Citizen participation in system monitoring",
    key: "systemCitizenSystemMonitoring",
    name: "checkedDomain",
  },
  {
    title: "Citizen participation in service delivery",
    key: "systemCitizenServiceDelivery",
    name: "checkedDomain",
  },
  {
    title: "Citizen complaints management",
    key: "systemCitizenComplaintsManagement",
    name: "checkedDomain",
  },
  {
    title:
      "Stakeholder participation in policy & organizational decisions (or monitoring)",
    key: "systemCitizenStakeholderPolicy",
    name: "checkedDomain",
  },
  {
    title: "Financial arrangements",
    key: "financial",
    name: "checkedDomain",
  },
  {
    title: "Financing systems",
    key: "financingSystems",
    name: "checkedDomain",
  },
  { title: "Taxation", key: "financialTaxation", name: "checkedDomain" },
  {
    title: "Social insurance",
    key: "financialSocialHealthInsurance",
    name: "checkedDomain",
  },
  {
    title: "Community-based insurance",
    key: "financialCommunityBasedHealthInsurance",
    name: "checkedDomain",
  },
  {
    title: "Community loan funds",
    key: "financialCommunityLoanFunds",
    name: "checkedDomain",
  },
  {
    title: "Private insurance",
    key: "financialPrivateInsurance",
    name: "checkedDomain",
  },
  {
    title: "Social savings accounts (Individually financed)",
    key: "financialHealthSavingsAccountsIndividuallyFinanced",
    name: "checkedDomain",
  },
  { title: "User fees", key: "financialUserFees", name: "checkedDomain" },
  {
    title: "Donor contributions",
    key: "financialDonorContributions",
    name: "checkedDomain",
  },
  { title: "Fundraising", key: "financialFundraising", name: "checkedDomain" },
  {
    title: "Funding organizations",
    key: "fundingOrganization",
    name: "checkedDomain",
  },
  {
    title: "Fee-for-service (Funding)",
    key: "fundingOrganizationServiceFees",
    name: "checkedDomain",
  },
  {
    title: "Capitation (Funding)",
    key: "fundingOrganizationCapitation",
    name: "checkedDomain",
  },
  {
    title: "Global budget",
    key: "fundingOrganizationGlobalBudget",
    name: "checkedDomain",
  },
  {
    title: "Case-mix funding",
    key: "fundingOrganizationCaseMixFunding",
    name: "checkedDomain",
  },
  {
    title: "Targeted payments/penalties (Funding)",
    key: "fundingOrganizationPaymentsPenalties",
    name: "checkedDomain",
  },
  {
    title: "Remunerating providers",
    key: "remuneratingProvider",
    name: "checkedDomain",
  },
  {
    title: "Fee-for-service (Remuneration)",
    key: "remuneratingProviderServiceFees",
    name: "checkedDomain",
  },
  {
    title: "Capitation (Remuneration)",
    key: "remuneratingProviderCapitation",
    name: "checkedDomain",
  },
  { title: "Salary", key: "remuneratingProviderSalary", name: "checkedDomain" },
  {
    title: "Episode-based payment",
    key: "remuneratingProviderEpisodePayment",
    name: "checkedDomain",
  },
  {
    title: "Fundholding",
    key: "remuneratingProviderFundholding",
    name: "checkedDomain",
  },
  {
    title: "Targeted payments/penalties (Remuneration)",
    key: "remuneratingProviderPaymentPenalties",
    name: "checkedDomain",
  },
  {
    title: "Purchasing products & services",
    key: "purchasing",
    name: "checkedDomain",
  },
  {
    title: "Scope & nature of insurance plans",
    key: "purchasingScope",
    name: "checkedDomain",
  },
  {
    title:
      "Lists of covered/reimbursed organizations, providers, services & products",
    key: "purchasingCoveredReimbursedOrganizations",
    name: "checkedDomain",
  },
  {
    title:
      "Restrictions in coverage/reimbursement rates for organizations, providers, services & products",
    key: "purchasingRestrictions",
    name: "checkedDomain",
  },
  {
    title:
      "Caps on coverage/reimbursement for organizations, providers, services & products",
    key: "purchasingCaps",
    name: "checkedDomain",
  },
  {
    title:
      "Prior approval requirements for organizations, providers, services & products",
    key: "purchasingApprovalRequirements",
    name: "checkedDomain",
  },
  {
    title: "Lists of substitutable services & products",
    key: "purchasingSubstitutes",
    name: "checkedDomain",
  },
  {
    title: "Incentivizing citizens",
    key: "incentivizingCitizen",
    name: "checkedDomain",
  },
  {
    title: "Premium (level & features)",
    key: "incentivizingCitizenPremium",
    name: "checkedDomain",
  },
  {
    title: "Cost sharing",
    key: "incentivizingCitizenCostSharing",
    name: "checkedDomain",
  },
  {
    title: "Social savings accounts (Third party contributions)",
    key: "incentivizingCitizenSavingsThirdPartyContributions",
    name: "checkedDomain",
  },
  {
    title: "Targeted payments/penalties (Incentivizing citizens)",
    key: "incentivizingCitizenSavingsTargetedPaymentsPenalties",
    name: "checkedDomain",
  },
  {
    title: "Delivery arrangements",
    key: "deliveryArrangement",
    name: "checkedDomain",
  },
  {
    title: "How services are designed to meet citizens’ needs",
    key: "deliveryArrangementDesign",
    name: "checkedDomain",
  },
  {
    title: "Availability of services",
    key: "deliveryArrangementDesignAvailability",
    name: "checkedDomain",
  },
  {
    title: "Timely access to services",
    key: "deliveryArrangementDesignTimelyAcess",
    name: "checkedDomain",
  },
  {
    title: "Culturally appropriate services",
    key: "deliveryArrangementDesignCulturallyAppropriate",
    name: "checkedDomain",
  },
  {
    title: "Case management",
    key: "deliveryArrangementDesignCaseManagement",
    name: "checkedDomain",
  },
  {
    title: "Package of services/service pathways",
    key: "deliveryArrangementDesignServicesPackage",
    name: "checkedDomain",
  },
  {
    title: "Group services",
    key: "deliveryArrangementDesignGroup",
    name: "checkedDomain",
  },
  {
    title: "By whom services are provided",
    key: "serviceProvider",
    name: "checkedDomain",
  },
  {
    title: "System - Need, demand & supply",
    key: "serviceProviderAvailability",
    name: "checkedDomain",
  },
  {
    title: "System - Recruitment, retention & transitions",
    key: "serviceProviderRecruitmentRetention",
    name: "checkedDomain",
  },
  {
    title: "System - Performance management",
    key: "serviceProviderPerformanceManagement",
    name: "checkedDomain",
  },
  {
    title: "Workplace conditions - Provider satisfaction",
    key: "serviceProviderWorkplaceConditionsProviderSatisfaction",
    name: "checkedDomain",
  },
  {
    title: "Workplace conditions - Health & safety",
    key: "serviceProviderWorkplaceConditionsHealthSafety",
    name: "checkedDomain",
  },
  {
    title: "Skill mix - Role performance",
    key: "serviceProviderSkillMixRolePerformance",
    name: "checkedDomain",
  },
  {
    title: "Skill mix - Role expansion or extension",
    key: "serviceProviderSkillMixRoleExpansionOrExtension",
    name: "checkedDomain",
  },
  {
    title: "Skill mix - Task shifting / substitution",
    key: "serviceProviderSkillMixTaskShiftingSubstitution",
    name: "checkedDomain",
  },
  {
    title: "Skill mix - Multidisciplinary teams",
    key: "serviceProviderSkillMixMultidisciplinaryTeams",
    name: "checkedDomain",
  },
  {
    title: "Skill mix - Volunteers or caregivers",
    key: "serviceProviderSkillMixVolunteersOrInformalFamilyCaregivers",
    name: "checkedDomain",
  },
  {
    title:
      "Skill mix – Communication & case discussion between distant professionals",
    key: "serviceProviderSkillMixCommunicationDistantHealthProfessionals",
    name: "checkedDomain",
  },
  {
    title: "Staff - Training",
    key: "serviceProviderStaffTraining",
    name: "checkedDomain",
  },
  {
    title: "Staff - Support",
    key: "serviceProviderStaffSupport",
    name: "checkedDomain",
  },
  {
    title: "Staff - Workload/workflow/intensity",
    key: "serviceProviderStaffWorkloadWorkflowIntensity",
    name: "checkedDomain",
  },
  {
    title: "Staff - Continuity of services",
    key: "serviceProviderStaffContinuityOfCare",
    name: "checkedDomain",
  },
  {
    title: "Staff/self - Shared decision-making",
    key: "serviceProviderStaffSelfSharedDecisionMaking",
    name: "checkedDomain",
  },
  {
    title: "Self-management",
    key: "serviceProviderSelfManagement",
    name: "checkedDomain",
  },
  {
    title: "Where services are provided",
    key: "serviceLocation",
    name: "checkedDomain",
  },
  {
    title: "Site of service delivery",
    key: "serviceLocationSite",
    name: "checkedDomain",
  },
  {
    title: "Physical structure, facilities & equipment",
    key: "serviceLocationPhysicalStructure",
    name: "checkedDomain",
  },
  {
    title: "Organizational scale",
    key: "serviceLocationOrganizationalScale",
    name: "checkedDomain",
  },
  {
    title: "Organizational structure",
    key: "serviceLocationOrganizationalStructure",
    name: "checkedDomain",
  },
  {
    title: "Integration of services",
    key: "serviceLocationServiceIntegration",
    name: "checkedDomain",
  },
  {
    title: "Continuity of services",
    key: "serviceLocationServiceContinuity",
    name: "checkedDomain",
  },
  { title: "Outreach", key: "serviceLocationOutreach", name: "checkedDomain" },
  {
    title: "With what supports are services provided",
    key: "serviceSupport",
    name: "checkedDomain",
  },
  {
    title: "Record systems",
    key: "serviceSupportHealthRecordSystems",
    name: "checkedDomain",
  },
  {
    title: "Electronic records",
    key: "serviceSupportElectronicHealthRecord",
    name: "checkedDomain",
  },
  {
    title: "Other ICT that support individuals who provide services",
    key: "serviceSupportOtherICTThatSupportIndividuals",
    name: "checkedDomain",
  },
  {
    title: "ICT that support individuals who receive services",
    key: "serviceSupportICTThatSupportIndividualsWhoReceiveCare",
    name: "checkedDomain",
  },
  {
    title: "Financial monitoring and improvement systems",
    key: "serviceSupportFinancialMonitoring",
    name: "checkedDomain",
  },
  {
    title: "Quality monitoring and improvement systems",
    key: "serviceSupportQualityMonitoringAndImprovementSystems",
    name: "checkedDomain",
  },
  {
    title: "Safety monitoring and improvement systems",
    key: "serviceSupportSafetyMonitoringAndImprovementSystems",
    name: "checkedDomain",
  },
  {
    title: "Implementation strategies",
    key: "implementationStrategies",
    name: "checkedDomain",
  },
  {
    title: "Citizen-targeted strategy",
    key: "implementationCitizenTargeted",
    name: "checkedDomain",
  },
  {
    title: "Information or education provision",
    key: "implementationCitizenTargetedInformationOrEducationProvision",
    name: "checkedDomain",
  },
  {
    title: "Behaviour change support",
    key: "implementationCitizenTargetedBehaviourChangeSupport",
    name: "checkedDomain",
  },
  {
    title: "Skills and competencies development",
    key: "implementationCitizenTargetedSkillsAndCompetenciesDevelopment",
    name: "checkedDomain",
  },
  {
    title: "(Personal) Support",
    key: "implementationCitizenTargetedPersonalSupport",
    name: "checkedDomain",
  },
  {
    title: "Communication and decision-making facilitation",
    key:
      "implementationCitizenTargetedCommunicationAndDecisionMakingFacilitation",
    name: "checkedDomain",
  },
  {
    title: "System participation",
    key: "implementationCitizenTargetedSystemParticipation",
    name: "checkedDomain",
  },
  {
    title: "Provider-targeted strategy",
    key: "implementationProviderTargeted",
    name: "checkedDomain",
  },
  {
    title: "Educational material",
    key: "implementationProviderTargetedEducationalMaterial",
    name: "checkedDomain",
  },
  {
    title: "Educational meeting",
    key: "implementationProviderTargetedEducationalMeeting",
    name: "checkedDomain",
  },
  {
    title: "Educational outreach visit",
    key: "implementationProviderTargetedEducationalOutreachVisit",
    name: "checkedDomain",
  },
  {
    title: "Local opinion leader",
    key: "implementationProviderTargetedLocalOpinionLeader",
    name: "checkedDomain",
  },
  {
    title: "Local consensus process",
    key: "implementationProviderTargetedLocalConsensusProcess",
    name: "checkedDomain",
  },
  {
    title: "Peer review",
    key: "implementationProviderTargetedPeerReview",
    name: "checkedDomain",
  },
  {
    title: "Audit and feedback",
    key: "implementationProviderTargetedAuditFeedback",
    name: "checkedDomain",
  },
  {
    title: "Reminders and prompts",
    key: "implementationProviderTargetedRemindersAndPrompts",
    name: "checkedDomain",
  },
  {
    title: "Tailored intervention",
    key: "implementationProviderTargetedTailoredIntervention",
    name: "checkedDomain",
  },
  {
    title: "Citizen-mediated intervention",
    key: "implementationProviderTargetedCitizenMediatedIntervention",
    name: "checkedDomain",
  },
  {
    title: "Multi-faceted intervention",
    key: "implementationProviderTargetedMultiFacetedIntervention",
    name: "checkedDomain",
  },
  {
    title: "Organization-targeted strategy",
    key: "implementationOrganizationTargeted",
    name: "checkedDomain",
  },
  {
    title: "Sustainable Development Goals",
    key: "sustainableDevelopmentGoals",
    name: "checkedDomain",
  },
  {
    title: "1. No poverty",
    key: "sustainableDevelopmentGoalsNoPoverty",
    name: "checkedDomain",
  },
  {
    title: "2. Zero hunger",
    key: "sustainableDevelopmentGoalsZeroHunger",
    name: "checkedDomain",
  },
  {
    title: "3. Good health and well-being (partially covered)",
    key: "sustainableDevelopmentGoalsGoodHealth",
    name: "checkedDomain",
  },
  {
    title: "4. Quality education",
    key: "sustainableDevelopmentGoalsQualityEducation",
    name: "checkedDomain",
  },
  {
    title: "5. Gender equality",
    key: "sustainableDevelopmentGoalsGenderEquality",
    name: "checkedDomain",
  },
  {
    title: "6. Clean water and sanitation",
    key: "sustainableDevelopmentGoalsCleanWater",
    name: "checkedDomain",
  },
  {
    title: "7. Affordable and clean energy",
    key: "sustainableDevelopmentGoalsAffordableCleanEnergy",
    name: "checkedDomain",
  },
  {
    title: "8. Decent work and economic growth",
    key: "sustainableDevelopmentGoalsDecentWorkEconomicGrowth",
    name: "checkedDomain",
  },
  {
    title: "9. Industry, innovation and infrastructure",
    key: "sustainableDevelopmentGoalsIndustryInnovationInfrastructure",
    name: "checkedDomain",
  },
  {
    title: "10. Reduced inequalities",
    key: "sustainableDevelopmentGoalsReducedInequalities",
    name: "checkedDomain",
  },
  {
    title: "11. Sustainable cities and communities",
    key: "sustainableDevelopmentGoalsSustainableCitiesCommunities",
    name: "checkedDomain",
  },
  {
    title: "12. Responsible consumption and production",
    key: "sustainableDevelopmentGoalsResponsibleConsumptionProduction",
    name: "checkedDomain",
  },
  {
    title: "13. Climate action",
    key: "sustainableDevelopmentGoalsClimateAction",
    name: "checkedDomain",
  },
  {
    title: "14. Life below water",
    key: "sustainableDevelopmentGoalsLifeBelowWater",
    name: "checkedDomain",
  },
  {
    title: "15. Life on land",
    key: "sustainableDevelopmentGoalsLifeOnLand",
    name: "checkedDomain",
  },
  {
    title: "16. Peace, justice and strong institutions",
    key: "sustainableDevelopmentGoalsPeaceJusticeStrongInstitutions",
    name: "checkedDomain",
  },
  {
    title: "17. Partnerships for the goals",
    key: "sustainableDevelopmentGoalsPartnerships",
    name: "checkedDomain",
  },
  {
    title: "Perspectives",
    key: "perspectives",
    name: "checkedDomain",
  },
  {
    title: "Populations",
    key: "perspectivesPopulations",
    name: "checkedDomain",
  },
  {
    title: "Children and youth",
    key: "perspectivesPopulationChildrenYouth",
    name: "checkedDomain",
  },
  {
    title: "Ethnocultural minorities",
    key: "perspectivesPopulationEthnoculturalMinorities",
    name: "checkedDomain",
  },
  {
    title: "Linguistic minorities",
    key: "perspectivesPopulationLinguisticMinorities",
    name: "checkedDomain",
  },
  {
    title: "Immigrants and refugees",
    key: "perspectivesPopulationImigrantsRefugees",
    name: "checkedDomain",
  },
  {
    title: "Indigenous peoples",
    key: "perspectivesPopulationIndigenousPeoples",
    name: "checkedDomain",
  },
  {
    title: "Individuals who are homeless or marginally housed",
    key: "perspectivesPopulationHomeless",
    name: "checkedDomain",
  },
  { title: "LGBTQ", key: "perspectivesPopulationLGBTQ", name: "checkedDomain" },
  {
    title: "Older adults",
    key: "perspectivesPopulationOlderAdults",
    name: "checkedDomain",
  },
  {
    title: "People living in rural and remote communities",
    key: "perspectivesPopulationRuralRemote",
    name: "checkedDomain",
  },
  {
    title: "People with disabilities",
    key: "perspectivesPopulationDisabilities",
    name: "checkedDomain",
  },
  {
    title: "Outcomes",
    key: "outcomesProvider",
    name: "checkedDomain",
  },
  { title: "Economic", key: "outcomesProviderEconomic", name: "checkedDomain" },
  {
    title: "Education",
    key: "outcomesProviderEducation",
    name: "checkedDomain",
  },
  {
    title: "Employment",
    key: "outcomesProviderEmployment",
    name: "checkedDomain",
  },
  { title: "Health", key: "outcomesProviderHealth", name: "checkedDomain" },
  { title: "Housing", key: "outcomesProviderHousing", name: "checkedDomain" },
  {
    title: "Other sector/area-specific outcomes",
    key: "outcomesProviderOther",
    name: "checkedDomain",
  },
  {
    title: "Social inclusion",
    key: "outcomesProviderSocialInclusion",
    name: "checkedDomain",
  },
  {
    title: "Well-being",
    key: "outcomesProviderWellBeing",
    name: "checkedDomain",
  },
  {
    title: "Disciplines",
    key: "perspectivesDisciplines",
    name: "checkedDomain",
  },
  {
    title: "Anthropology",
    key: "perspectivesDisciplineAnthropology",
    name: "checkedDomain",
  },
  { title: "Arts", key: "perspectivesDisciplineArts", name: "checkedDomain" },
  {
    title: "Business administration",
    key: "perspectivesDisciplineBusinessAdministration",
    name: "checkedDomain",
  },
  {
    title: "Communications",
    key: "perspectivesDisciplineCommunication",
    name: "checkedDomain",
  },
  {
    title: "Criminology",
    key: "perspectivesDisciplineCriminology",
    name: "checkedDomain",
  },
  {
    title: "Economics",
    key: "perspectivesDisciplineEconomics",
    name: "checkedDomain",
  },
  {
    title: "Engineering",
    key: "perspectivesDisciplineEngineering",
    name: "checkedDomain",
  },
  {
    title: "Geography",
    key: "perspectivesDisciplineGeography",
    name: "checkedDomain",
  },
  {
    title: "Gerontology",
    key: "perspectivesDisciplineGerontology",
    name: "checkedDomain",
  },
  {
    title: "History",
    key: "perspectivesDisciplineHistory",
    name: "checkedDomain",
  },
  { title: "Law", key: "perspectivesDisciplineLaw", name: "checkedDomain" },
  {
    title: "Philosophy",
    key: "perspectivesDisciplinePhilosophy",
    name: "checkedDomain",
  },
  {
    title: "Political science",
    key: "perspectivesDisciplinePoliticalScience",
    name: "checkedDomain",
  },
  {
    title: "Psychology",
    key: "perspectivesDisciplinePsychology",
    name: "checkedDomain",
  },
  {
    title: "Public administration",
    key: "perspectivesDisciplinePublicAdministration",
    name: "checkedDomain",
  },
  {
    title: "Social work",
    key: "perspectivesDisciplineSocialWork",
    name: "checkedDomain",
  },
  {
    title: "Sociology",
    key: "perspectivesDisciplineSociology",
    name: "checkedDomain",
  },
  {
    title: "Target of document",
    key: "lmicTargetOfDocument",
    name: "checkedLMIC",
  },
  {
    title: "At least one LMIC study included",
    key: "lmicAtLeastOneStudy",
    name: "checkedLMIC",
  },
  { title: "Optimal aging", key: "themeOptimalAging", name: "checkedTheme" },
];

module.exports = filters;
