const types = [
  { value: 'Evidence briefs for policy', label: 'Evidence briefs for policy' },
  {
    value: 'Overviews of systematic reviews',
    label: 'Overviews of systematic reviews',
  },
  {
    label: 'Systematic reviews of effects',
    value: 'Systematic reviews of effects',
  },
  {
    value: 'Systematic reviews addressing other questions',
    label: 'Systematic reviews addressing other questions',
  },
  {
    value: 'Systematic reviews in progress',
    label: 'Systematic reviews in progress',
  },
  {
    value: 'Systematic reviews being planned',
    label: 'Systematic reviews being planned',
  },
  {
    value: 'Economic evaluations and costing studies',
    label: 'Economic evaluations and costing studies',
  },
  {
    value:
      'No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in SSE.',
    label:
      'No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in SSE.',
  },
];

const questionTypes = [
  {
    label: 'Many',
    value: 'Many',
  },
  {
    label: 'Effectiveness',
    value: 'Effectiveness',
  },
  {
    label: 'Not effectiveness',
    value: 'Not effectiveness',
  },
  {
    label:
      'Cost-effectiveness/benefit/utility analysis or description of costs',
    value:
      'Cost-effectiveness/benefit/utility analysis or description of costs',
  },
  {
    label: 'Description',
    value: 'Description',
  },
];

const tree = {
  checkedDomain: {
    title: 'Domains',
    items: [
      {
        title: 'Programs and services',
        key: 'programsServices',
        children: [
          {
            title: 'Children and youth services',
            key: 'programsServicesChildren',
            children: [
              {
                title: 'Adoption services',
                key: 'programsServicesChildrenAdoption',
              },
              {
                title: 'Caregiver support',
                key: 'programsServicesChildrenCaregiver',
              },
              {
                title: 'Early childhood development services',
                key: 'programsServicesChildrenEarlyChildhood',
              },
              {
                title: 'Special needs services',
                key: 'programsServicesChildrenSpecialNeeds',
              },
              {
                title: 'Student support services',
                key: 'programsServicesChildrenStudentSupport',
              },
              {
                title: 'Parent/legal guardian support services',
                key: 'programsServicesChildrenParentGuardian',
              },
              {
                title: 'Child protection',
                key: 'programsServicesChildrenChildProtection',
              },
            ],
          },
          {
            title: 'Citizenship',
            key: 'programsServicesCitizenship',
            children: [
              {
                title: 'Admissibility, security and visa services',
                key: 'programsServicesCitizenshipAdmissibility',
              },
              { title: 'Border services', key: 'citizenshipBorder' },
              { title: 'Refugee services', key: 'citizenshipRefugee' },
              {
                title: 'Temporary residence permits',
                key: 'programsServicesCitizenshipTemporaryResidence',
              },
              {
                title: 'Permanent residence permits',
                key: 'programsServicesCitizenshipPermanentResidence',
              },
              { title: 'Citizenship grants', key: 'citizenshipGrants' },
              {
                title: 'Settlement/re-settlement',
                key: 'programsServicesCitizenshipSettlement',
              },
              {
                title: 'Civic engagement/volunteering',
                key: 'programsServicesCitizenshipVolunteering',
              },
              {
                title: 'Civic/cultural integration',
                key: 'programsServicesCitizenshipCulturalIntegration',
              },
              {
                title: 'Undocumented individuals',
                key: 'programsServicesCitizenshipUndocumented',
              },
              { title: 'Migration', key: 'citizenshipMigration' },
              {
                title: 'Detention, deportation and extradition',
                key: 'programsServicesCitizenshipDetentionDeportation',
              },
              {
                title: 'Sub-national cooperation',
                key: 'programsServicesCitizenshipSubnational',
              },
              {
                title: 'International cooperation',
                key: 'programsServicesCitizenshipInternational',
              },
            ],
          },
          {
            title: 'Climate action',
            key: 'programsServicesClimate',
            children: [
              {
                title: 'Energy-use production',
                key: 'programsServicesClimateEnergy',
                children: [
                  {
                    title: 'Buildings',
                    key: 'programsServicesClimateEnergyBuildings',
                  },
                  {
                    title: 'Energy production',
                    key: 'programsServicesClimateEnergyProduction',
                  },
                  {
                    title: 'Households',
                    key: 'programsServicesClimateEnergyHouseholds',
                  },
                  {
                    title: 'Industries',
                    key: 'programsServicesClimateEnergyIndustries',
                  },
                  {
                    title: 'Land use',
                    key: 'programsServicesClimateEnergyLandUse',
                  },
                  {
                    title: 'Tourism',
                    key: 'programsServicesClimateEnergyTourism',
                  },
                  {
                    title: 'Transport',
                    key: 'programsServicesClimateEnergyTransport',
                  },
                ],
              },
              {
                title: 'Low or zero-carbon electricity supply',
                key: 'programsServicesClimateZeroCarbon',
                children: [
                  {
                    title: 'Nuclear power',
                    key: 'programsServicesClimateZeroCarbonNuclear',
                  },
                  {
                    title: 'Renewable energy',
                    key: 'programsServicesClimateZeroCarbonRenewable',
                  },
                ],
              },
              {
                title: 'Electrification and other fuel switching',
                key: 'programsServicesClimateElectrification',
                children: [
                  {
                    title: 'Appliances',
                    key: 'programsServicesClimateElectrificationAppliances',
                  },
                  {
                    title: 'Supporting infrastructure',
                    key:
                      'programsServicesClimateElectrificationSupportingInfra',
                  },
                  {
                    title: 'Vehicles',
                    key: 'programsServicesClimateElectrificationVehicles',
                  },
                ],
              },
              {
                title: 'Non-energy emission solutions',
                key: 'programsServicesClimateNonEnergy',
                children: [
                  {
                    title: 'Bio-sequestration',
                    key: 'programsServicesClimateNonEnergyBioSequestration',
                  },
                  {
                    title: 'Carbon capture and storage',
                    key: 'programsServicesClimateNonEnergyCarbonCapture',
                  },
                  {
                    title: 'Fugitive-emission reduction',
                    key:
                      'programsServicesClimateNonEnergyFugitiveEmissionReduction',
                  },
                  {
                    title: 'Industrial-process improvements',
                    key:
                      'programsServicesClimateNonEnergyIndustrialProcessImprovements',
                  },
                  {
                    title: 'Reuse and recycling',
                    key: 'programsServicesClimateNonEnergyReuseRecycling',
                  },
                ],
              },
              {
                title: 'Climate-change risk management',
                key: 'programsServicesClimateChangeRisk',
                children: [
                  {
                    title: 'Financial',
                    key: 'programsServicesClimateChangeRiskFinancial',
                  },
                  {
                    title: 'Human',
                    key: 'programsServicesClimateChangeRiskHuman',
                  },
                  {
                    title: 'Property',
                    key: 'programsServicesClimateChangeRiskProperty',
                  },
                  {
                    title: 'Settlement',
                    key: 'programsServicesClimateChangeRiskSettlement',
                  },
                ],
              },
            ],
          },
          {
            title: 'Community and social services',
            key: 'programsServicesCommunity',
            children: [
              {
                title: 'Accessibility services',
                key: 'programsServicesCommunityAccessibility',
              },
              {
                title: 'Disability services',
                key: 'programsServicesCommunityDisability',
              },
              {
                title: 'Problem gambling services',
                key: 'programsServicesCommunityGambling',
              },
              {
                title: 'Other social services',
                key: 'programsServicesCommunitySocial',
              },
              {
                title: 'Community services',
                key: 'programsServicesCommunityServices',
              },
              {
                title: 'Community development',
                key: 'programsServicesCommunityDevelopment',
              },
              {
                title: 'Emergency response and preparedness',
                key: 'programsServicesCommunityEmergencyResponse',
              },
            ],
          },
          {
            title: 'Consumer protection',
            key: 'programsServicesConsumer',
            children: [
              {
                title: 'Consumer awareness and education',
                key: 'programsServicesConsumerAwarenessEducation',
              },
              {
                title: 'Consumer advocacy and rights',
                key: 'programsServicesConsumerAdvocacy',
              },
              {
                title: 'Advertising and marketing standards',
                key: 'programsServicesConsumerAdvertising',
              },
              {
                title: 'Consumer promotion standards',
                key: 'programsServicesConsumerPromotion',
              },
              {
                title: 'Responsible consumption initiatives',
                key: 'programsServicesConsumerConsumption',
              },
              {
                title: 'Product safety',
                key: 'programsServicesConsumerProductSafety',
              },
              { title: 'Fraud', key: 'programsServicesConsumerFraud' },
              { title: 'Privacy', key: 'programsServicesConsumerPrivacy' },
              {
                title: 'Competition supports',
                key: 'programsServicesConsumerCompetition',
              },
              {
                title: 'E-commerce and the sharing economy',
                key: 'programsServicesConsumerEcommerce',
              },
            ],
          },
          {
            title: 'Culture and gender',
            key: 'programsServicesCulture',
            children: [
              { title: 'Arts', key: 'programsServicesCultureArts' },
              { title: 'Heritage', key: 'programsServicesCultureHeritage' },
              {
                title: 'Cultural industries',
                key: 'programsServicesCultureIndustries',
              },
              {
                title: 'Cultural protectionism',
                key: 'programsServicesCultureProtectionism',
              },
              {
                title: 'Cultural competency training',
                key: 'programsServicesCultureTraining',
              },
              {
                title: 'Multiculturalism',
                key: 'programsServicesCultureMulticulturalism',
              },
              {
                title: 'Gender mainstreaming',
                key: 'programsServicesCultureGenderMainstreaming',
              },
              {
                title: 'Gender equality',
                key: 'programsServicesCultureGenderEquality',
              },
              {
                title: 'Human rights',
                key: 'programsServicesCultureHumanRights',
              },
            ],
          },
          {
            title: 'Economic development and growth',
            key: 'programsServicesEconomic',
            children: [
              {
                title: 'Access to finance',
                key: 'programsServicesEconomicAccessToFinance',
              },
              {
                title: 'Area-based initiatives',
                key: 'programsServicesEconomicAreaBasedInitiatives',
              },
              {
                title: 'Broadband access',
                key: 'programsServicesEconomicBroadbandAccess',
              },
              {
                title: 'Business advice',
                key: 'programsServicesEconomicBusinessAdvice',
              },
              {
                title: 'Housing stock renewal',
                key: 'programsServicesEconomicHousingStock',
              },
              {
                title: 'Human capital investments',
                key: 'programsServicesEconomicHumanCapital',
              },
              {
                title: 'Innovation supports',
                key: 'programsServicesEconomicInnovation',
              },
              {
                title: 'Public space improvements',
                key: 'programsServicesEconomicPublicSpace',
              },
              {
                title: 'Sport/culture events and facilities',
                key: 'programsServicesEconomicSportCulture',
              },
              {
                title: 'Transportation enhancements',
                key: 'programsServicesEconomicTransportationEnhancements',
              },
              {
                title: 'General fiscal policy tools',
                key: 'programsServicesEconomicFiscalPolicy',
              },
              {
                title: 'General monetary policy tools',
                key: 'programsServicesEconomicMonetaryPolicy',
              },
              {
                title: 'General trade policy tools',
                key: 'programsServicesEconomicTradePolicy',
              },
            ],
          },
          {
            title: 'Education',
            key: 'programsServicesEducation',
            children: [
              {
                title: 'Pre-primary education',
                key: 'programsServicesEducationPrePrimary',
              },
              {
                title: 'Primary education',
                key: 'programsServicesEducationPrimary',
              },
              {
                title: 'Secondary education',
                key: 'programsServicesEducationSecondary',
              },
              {
                title: 'Tertiary/higher education',
                key: 'programsServicesEducationTertiary',
              },
              {
                title: 'Academic planning',
                key: 'programsServicesEducationAcademicPlanning',
              },
              {
                title: 'Revenue streams',
                key: 'programsServicesEducationRevenueStreams',
              },
              {
                title: 'Tuition setting and subsidy',
                key: 'programsServicesEducationTuitionSubsidy',
              },
              { title: 'Marketing', key: 'programsServicesEducationMarketing' },
              {
                title: 'Admission and recruitment',
                key: 'programsServicesEducationAdmissionRecruitment',
              },
              { title: 'Streaming', key: 'programsServicesEducationStreaming' },
              {
                title: 'Curriculum',
                key: 'programsServicesEducationCurriculum',
              },
              {
                title: 'Literacy training',
                key: 'programsServicesEducationLiteracyTraining',
              },
              {
                title: 'Apprenticeships',
                key: 'programsServicesEducationApprenticeships',
              },
              { title: 'Teaching', key: 'programsServicesEducationTeaching' },
              {
                title: 'Assessment',
                key: 'programsServicesEducationAssessment',
              },
              {
                title: 'Student engagement',
                key: 'programsServicesEducationStudentEngagement',
              },
              {
                title: 'Parent/legal guardian engagement',
                key: 'educationParentEngagement',
              },
              {
                title: 'Teacher/faculty engagement',
                key: 'programsServicesEducationTeacherEngagement',
              },
              {
                title: 'Community engagement',
                key: 'programsServicesEducationCommunityEngagement',
              },
              {
                title: 'Prospective employers engagement',
                key: 'programsServicesEducationEmployerEngagement',
              },
            ],
          },
          {
            title: 'Employment',
            key: 'programsServicesEmployment',
            children: [
              {
                title: 'Job training/retraining',
                key: 'programsServicesEmploymentTraining',
              },
              { title: 'Wages', key: 'programsServicesEmploymentWages' },
              { title: 'Benefits', key: 'programsServicesEmploymentBenefits' },
              {
                title: 'Employment conditions',
                key: 'programsServicesEmploymentConditions',
              },
              {
                title: 'Displaced workers',
                key: 'programsServicesEmploymentDisplacedWorkers',
              },
              {
                title: 'Unemployment',
                key: 'programsServicesEmploymentUnemployment',
              },
              {
                title: 'Unpaid labour',
                key: 'programsServicesEmploymentUnpaidLabour',
              },
              {
                title: 'Workplace safety and prevention',
                key: 'programsServicesEmploymentWorkplaceSafety',
              },
              {
                title: 'Workplace violence and harassment',
                key: 'programsServicesEmploymentWorkplaceViolence',
              },
              {
                title: 'Unions and collective bargaining',
                key: 'programsServicesEmploymentUnions',
              },
              {
                title: 'Labour-market interventions',
                key: 'programsServicesEmploymentLabourMarket',
              },
              {
                title: 'Industry-level interventions',
                key: 'programsServicesEmploymentIndustry',
              },
            ],
          },
          {
            title: 'Energy supply',
            key: 'energySupply',
            children: [
              {
                title: 'Biofuel',
                key: 'energySupplyBiofuel',
                children: [
                  {
                    title: 'First-generation biofuels',
                    key: 'energySupplyBiofuelFirstGeneration',
                  },
                  {
                    title: 'Second-generation biofuels',
                    key: 'energySupplyBiofuelSecondGeneration',
                  },
                ],
              },
              { title: 'Coal', key: 'energySupplyCoal' },
              {
                title: 'Hydro-electricity',
                key: 'energySupplyHydro',
                children: [
                  {
                    title: 'Pumped storage',
                    key: 'energySupplyHydroPumpedStorage',
                  },
                  { title: 'Reservoir', key: 'energySupplyHydroResevoir' },
                  {
                    title: 'Run-of-river',
                    key: 'energySupplyHydroRunOfRiver',
                  },
                  {
                    title: 'Tidal range',
                    key: 'energySupplyHydroTidalRange',
                  },
                  {
                    title: 'Tidal stream',
                    key: 'energySupplyHydroTidalStream',
                  },
                ],
              },
              { title: 'Natural gas', key: 'energySupplyNaturalGas' },
              { title: 'Nuclear energy', key: 'energySupplyNuclearEnergy' },
              { title: 'Petroleum products', key: 'energySupplyPetroleum' },
              { title: 'Solar power', key: 'energySupplySolarPower' },
              { title: 'Wind power', key: 'energySupplyWindPower' },
              {
                title: 'Non-carbon fuel',
                key: 'energySupplyNonCarbon',
                children: [
                  { title: 'Ammonia', key: 'energySupplyNonCarbonAmonia' },
                  { title: 'Hydrogen', key: 'energySupplyNonCarbonHydrogen' },
                ],
              },
              {
                title: 'Geothermal',
                key: 'energySupplyGeothermal',
                children: [
                  {
                    title: 'Electricity generation',
                    key: 'energySupplyGeothermalElectricity',
                  },
                  {
                    title: 'Heating and heating systems',
                    key: 'energySupplyGeothermalHeating',
                  },
                  {
                    title: 'Heat pump',
                    key: 'energySupplyGeothermalHeatPump',
                  },
                ],
              },
              {
                title: 'Waste (to) energy',
                key: 'energyWaste',
                children: [
                  {
                    title: 'Biological treatment',
                    key: 'energyWasteBiological',
                  },
                  {
                    title: 'Thermochemical treatment',
                    key: 'energyWasteThermochemical',
                  },
                ],
              },
              {
                title: 'Co-generation',
                key: 'energyCoGen',
                children: [
                  { title: 'Power and heat', key: 'energyCoGenPowerHeat' },
                  {
                    title: 'Power, heat and cooling (trigeneration)',
                    key: 'energyCoGenPowerHeatCooling',
                  },
                  {
                    title:
                      'Power, heat, cooling and other products (polygeneration)',
                    key: 'energyCoGenPolygeneration',
                  },
                ],
              },
              {
                title: 'Energy storage',
                key: 'energyStorage',
                children: [
                  { title: 'Domestic', key: 'energyStorageDomestic' },
                  { title: 'Industrial', key: 'energyStorageIndustrial' },
                ],
              },
              {
                title: 'Energy systems',
                key: 'energySystems',
                children: [
                  { title: 'Energy mix', key: 'energySystemsMix' },
                  {
                    title: 'Energy efficiency initiatives',
                    key: 'energySystemsEfficiency',
                  },
                  { title: 'Grid design', key: 'energySystemsGrid' },
                  {
                    title: 'On-and off- grid source balancing',
                    key: 'energySystemsGridBalancing',
                  },
                  {
                    title: 'Supply security',
                    key: 'energySystemsSupplySecurity',
                  },
                ],
              },
            ],
          },
          {
            title: 'Environmental conservation',
            key: 'environmentalConservation',
            children: [
              { title: 'Air', key: 'environmentalConservationAir' },
              {
                title: 'Land',
                key: 'environmentalConservationLand',
                children: [
                  {
                    title: 'Land-use planning',
                    key: 'environmentalConservationLandPlanning',
                  },
                  {
                    title: 'Parks and other protected areas',
                    key: 'environmentalConservationLandParks',
                  },
                ],
              },
              {
                title: 'Water',
                key: 'environmentalConservationWater',
                children: [
                  {
                    title: 'Freshwater (lakes & rivers)',
                    key: 'environmentalConservationWaterFreshwater',
                  },
                  {
                    title:
                      'Seas (marine & coasts, including coastal erosion) & their catchments',
                    key: 'environmentalConservationWaterSeas',
                  },
                ],
              },
              {
                title: 'Biodiversity',
                key: 'environmentalConservationBiodiversity',
                children: [
                  {
                    title: 'Fauna protection',
                    key: 'environmentalConservationBiodiversityFauna',
                  },
                  {
                    title: 'Flora protection',
                    key: 'environmentalConservationBiodiversityFlora',
                  },
                  {
                    title: 'Conservation status assessment',
                    key:
                      'environmentalConservationBiodiversityStatusAssessment',
                  },
                  {
                    title: 'Sustainable harvesting',
                    key:
                      'environmentalConservationBiodiversitySustainableHarvesting',
                  },
                ],
              },
              {
                title: 'Recycling',
                key: 'environmentalConservationRecycling',
                children: [
                  {
                    title: 'Personal',
                    key: 'environmentalConservationRecyclingPersonal',
                  },
                  {
                    title: 'Industrial',
                    key: 'environmentalConservationRecyclingIndustrial',
                  },
                ],
              },
              {
                title: 'Restoration',
                key: 'environmentalConservationRestoration',
                children: [
                  {
                    title: 'Environmental remediation',
                    key: 'environmentalConservationRestorationRemediation',
                  },
                  {
                    title: 'Land restoration',
                    key: 'environmentalConservationRestorationLand',
                  },
                  {
                    title: 'Land rehabilitation',
                    key: 'environmentalConservationRehabilitationLand',
                  },
                ],
              },
              {
                title: 'Waste',
                key: 'environmentalConservationWaste',
                children: [
                  {
                    title: 'Hazardous solid, liquid or other waste',
                    key: 'environmentalConservationWasteHazardous',
                  },
                  {
                    title: 'Non-hazardous solid, liquid or other waste',
                    key: 'environmentalConservationWasteNonHazardous',
                  },
                ],
              },
              {
                title: 'Environmental resilience',
                key: 'environmentalConservationResilience',
                children: [
                  {
                    title: 'Social',
                    key: 'environmentalConservationResilienceSocial',
                  },
                  {
                    title: 'Economic',
                    key: 'environmentalConservationResilienceEconomic',
                  },
                  {
                    title: 'Institutional',
                    key: 'environmentalConservationResilienceInstitutional',
                  },
                  {
                    title: 'Physical',
                    key: 'environmentalConservationResiliencePhysical',
                  },
                  {
                    title: 'Natural',
                    key: 'environmentalConservationResilienceNatural',
                  },
                ],
              },
              {
                title: 'Environmental-threats management',
                key: 'environmentalConservationThreats',
                children: [
                  {
                    title: 'Droughts',
                    key: 'environmentalConservationThreatsDroughts',
                  },
                  {
                    title: 'Fires',
                    key: 'environmentalConservationThreatsFires',
                  },
                  {
                    title: 'Floods',
                    key: 'environmentalConservationThreatsFloods',
                  },
                  {
                    title: 'Invasive species',
                    key: 'environmentalConservationThreatsInvasiveSpecies',
                  },
                  {
                    title: 'Light',
                    key: 'environmentalConservationThreatsLight',
                  },
                  {
                    title: 'Noise',
                    key: 'environmentalConservationThreatsNoise',
                  },
                  {
                    title: 'Severe storm events',
                    key: 'environmentalConservationThreatsSevereStormEvents',
                  },
                ],
              },
            ],
          },
          {
            title: 'Financial protection',
            key: 'financial',
            children: [
              {
                title: 'Social assistance',
                key: 'financialSocialAssistance',
              },
              { title: 'Minimum wage', key: 'financialMinimumWage' },
              {
                title: 'Wage disparity limitations',
                key: 'financialWageDisparity',
              },
              {
                title: 'Employment/unemployment insurance',
                key: 'financialEmploymentInsurance',
              },
              {
                title: 'Pensions and allowances',
                key: 'financialPensionsAllowances',
              },
              {
                title: 'Poverty reduction',
                key: 'financialPovertyReduction',
              },
              {
                title: 'Goods and services subsidy',
                key: 'financialGoodServices',
              },
              {
                title: 'Guaranteed minimum income',
                key: 'financialGuaranteedIncome',
              },
              {
                title: 'Other income re-distribution',
                key: 'financialIncomeRedistribution',
              },
              { title: 'Income reporting', key: 'financialIncomeReporting' },
              { title: 'Asset reporting', key: 'financialAssetReporting' },
            ],
          },
          {
            title: 'Food safety and security',
            key: 'foodSafety',
            children: [
              { title: 'Food access', key: 'foodSafetyAccess' },
              {
                title: 'Nutritional awareness and education',
                key: 'foodSafetyNutritionalAwareness',
              },
              { title: 'Food aid', key: 'foodSafetyAid' },
              { title: 'Food standards', key: 'foodSafetyStandards' },
              { title: 'Food import/export', key: 'foodSafetyImportExport' },
              {
                title: 'International food relief',
                key: 'foodSafetyInternationalRelief',
              },
            ],
          },
          {
            title: 'Government services',
            key: 'government',
            children: [
              {
                title: 'Identification, licensing and registration',
                key: 'governmentIdLicensingRegistration',
              },
              {
                title: 'Service awareness and education',
                key: 'governmentServiceAwareness',
              },
              { title: 'e-Government', key: 'governmentEgovernment' },
              {
                title: 'Service coordination',
                key: 'governmentServiceCoordination',
              },
              {
                title: 'Government corruption protections',
                key: 'governmentCorruptionProtection',
              },
              {
                title: 'Government inclusivity protections',
                key: 'governmentInclusivityProtection',
              },
              {
                title: 'Government accountability protections',
                key: 'governmentAccountabilityProtection',
              },
              {
                title: 'Elections administration',
                key: 'governmentElectionAdministration',
              },
            ],
          },
          {
            title: 'Housing',
            key: 'housing',
            children: [
              { title: 'Access to housing', key: 'housingAccess' },
              { title: 'Temporary housing', key: 'housingTemporary' },
              {
                title: 'Public/social housing',
                key: 'housingSocial',
              },
              { title: 'Affordable housing', key: 'housingAffordable' },
              { title: 'Housing assistance', key: 'housingAssistance' },
              { title: 'Housing mix', key: 'housingMix' },
              { title: 'Housing safety', key: 'housingSafety' },
              { title: 'Property rights', key: 'housingPropertyRights' },
            ],
          },
          {
            title: 'Infrastructure',
            key: 'infrastructure',
            children: [
              {
                title: 'Capital planning',
                key: 'infrastructureCapitalPlanning',
              },
              {
                title: 'Urban planning',
                key: 'infrastructureUrbanPlanning',
              },
              {
                title: 'Social infrastructure',
                key: 'infrastructureSocial',
              },
              {
                title: 'Broadband infrastructure',
                key: 'infrastructureBroadband',
              },
              {
                title: 'Transportation infrastructure',
                key: 'infrastructureTransportation',
              },
              {
                title: 'Waste management infrastructure',
                key: 'infrastructureWasteManagement',
              },
              {
                title: 'Water and sanitation infrastructure',
                key: 'infrastructureWaterSanitation',
              },
              {
                title: 'Sustainable development',
                key: 'infrastructureSustainableDevelopment',
              },
              {
                title: 'Capital spending',
                key: 'infrastructureCapitalSpending',
              },
              {
                title: 'Public financing',
                key: 'infrastructurePublicFinancing',
              },
              {
                title: 'Public/private partnerships',
                key: 'infrastructurePublicPrivatePartnerships',
              },
              {
                title: 'Private financing',
                key: 'infrastructurePrivateFinancing',
              },
              {
                title: 'Foreign investment',
                key: 'infrastructureForeignInvestment',
              },
              {
                title: 'Risk management',
                key: 'infrastructureRiskManagement',
              },
            ],
          },
          {
            title: 'Natural resources',
            key: 'naturalResources',
            children: [
              {
                title: 'Aquatic life',
                key: 'naturalResourcesAquatic',
                children: [
                  {
                    title: 'Fishing and fisheries',
                    key: 'naturalResourcesAquaticFisheries',
                  },
                  {
                    title: 'Aquatic plants including coral',
                    key: 'naturalResourcesAquaticPlants',
                  },
                ],
              },
              { title: 'Water', key: 'naturalResourcesWater' },
              {
                title: 'Forests',
                key: 'naturalResourcesForests',
                children: [
                  {
                    title: 'Timber industries',
                    key: 'naturalResourcesForestsTimber',
                  },
                ],
              },
              {
                title: 'Ground-based resources',
                key: 'naturalResourcesGround',
                children: [
                  { title: 'Metals', key: 'naturalResourcesGroundMetals' },
                  {
                    title: 'Minerals',
                    key: 'naturalResourcesGroundMinerals',
                  },
                  {
                    title: 'Petroleum',
                    key: 'naturalResourcesGroundPetroleum',
                  },
                  { title: 'Gas', key: 'naturalResourcesGroundGas' },
                ],
              },
              { title: 'Wildlife', key: 'naturalResourcesWildlife' },
            ],
          },
          {
            title: 'Public safety and justice',
            key: 'publicSafety',
            children: [
              {
                title: 'Crime prevention',
                key: 'publicSafetyCrimePrevention',
              },
              {
                title: 'Crime reduction',
                key: 'publicSafetyCrimeReduction',
              },
              {
                title: 'Security services',
                key: 'publicSafetySecurityServices',
              },
              {
                title: 'National security',
                key: 'publicSafetyNationalSecurity',
              },
              {
                title: 'Counter-terrorism',
                key: 'publicSafetyCounterTerrorism',
              },
              { title: 'Military', key: 'publicSafetyMilitary' },
              { title: 'Policing', key: 'publicSafetyPolicing' },
              { title: 'Court system', key: 'publicSafetyCourtSystem' },
              {
                title: 'Restorative justice',
                key: 'publicSafetyRestorativeJustice',
              },
              { title: 'Youth justice', key: 'publicSafetyYouthJustice' },
              {
                title: 'Domestic violence support',
                key: 'publicSafetyDomesticViolence',
              },
              { title: 'Victim support', key: 'publicSafetyVictimSupport' },
              {
                title: 'Offender diversion and support',
                key: 'publicSafetyOffenderDiversion',
              },
              { title: 'Sentencing', key: 'publicSafetySentencing' },
              {
                title: 'Prison administration and management',
                key: 'publicSafetyPrisonAdministration',
              },
              {
                title: 'Probation and parole',
                key: 'publicSafetyProbationParole',
              },
              {
                title: 'Community corrections',
                key: 'publicSafetyCommunityCorrections',
              },
              { title: 'Reintegration', key: 'publicSafetyReintegration' },
            ],
          },
          {
            title: 'Recreation',
            key: 'recreation',
            children: [
              {
                title: 'Promotion of recreation',
                key: 'recreationPromotion',
              },
              { title: 'Public spaces', key: 'recreationPublicSpaces' },
              {
                title: 'Community/recreation programs',
                key: 'recreationCommunityRecreation',
              },
              {
                title: 'Private recreation',
                key: 'recreationPrivateRecreation',
              },
              {
                title: 'Competitive sport',
                key: 'recreationCompetitiveSport',
              },
            ],
          },
          {
            title: 'Transportation',
            key: 'transportation',
            children: [
              {
                title: 'Accessible transportation options',
                key: 'transportationAccessibleOptions',
              },
              {
                title: 'Congestion management',
                key: 'transportationCongestionManagement',
              },
              {
                title: 'Public transportation',
                key: 'transportationPublic',
              },
              {
                title: 'Safety - Pedestrian',
                key: 'transportationPedestrianSafety',
              },
              {
                title: 'Safety - Cycling',
                key: 'transportationCyclingSafety',
              },
              {
                title: 'Safety - Transportation',
                key: 'transportationSafety',
              },
              {
                title: 'Sustainable transportation options',
                key: 'transportationSustainableOptions',
              },
              {
                title: 'Transportation subsidies',
                key: 'transportationSubsidies',
              },
              { title: 'Road tolls', key: 'transportationRoadTolls' },
            ],
          },
        ],
      },
      {
        title: 'System arrangements',
        key: 'system',
        children: [
          {
            title: 'Governance arrangements',
            key: 'systemGovernance',
            children: [
              {
                title: 'Policy authority',
                key: 'systemGovernancePolicy',
                children: [
                  {
                    title:
                      'Centralization/decentralization of policy authority',
                    key: 'systemGovernancePolicyCentralization',
                  },
                  {
                    title:
                      "Accountability of the state sector's role in financing & delivery",
                    key: 'systemGovernancePolicyAccountability',
                  },
                  {
                    title:
                      "Stewardship of the non-state sector's role in financing & delivery",
                    key: 'systemGovernancePolicyStewardship',
                  },
                  {
                    title:
                      'Decision-making authority about who is covered and what can or must be provided to them',
                    key: 'systemGovernancePolicyDecisionMaking',
                  },
                  {
                    title: 'Corruption protections',
                    key: 'systemGovernancePolicyCorruptionProtections',
                  },
                ],
              },
              {
                title: 'Organizational authority',
                key: 'systemOrganizational',
                children: [
                  {
                    title: 'Ownership',
                    key: 'systemOrganizationalOwnership',
                  },
                  {
                    title: 'Management approaches',
                    key: 'systemOrganizationalManagement',
                  },
                  {
                    title: 'Accreditation',
                    key: 'systemOrganizationalAccreditation',
                  },
                  {
                    title: 'Networks/multi-institutional arrangements',
                    key: 'systemOrganizationalNetworks',
                  },
                ],
              },
              {
                title: 'Commercial authority',
                key: 'systemCommercial',
                children: [
                  {
                    title: 'Licensure & registration requirements',
                    key: 'systemCommercialLicensure',
                  },
                  {
                    title: 'Patents & profits',
                    key: 'systemCommercialPatentsProfits',
                  },
                  {
                    title: 'Pricing & purchasing',
                    key: 'systemCommercialPricingPurchasing',
                  },
                  { title: 'Marketing', key: 'systemCommercialMarketing' },
                  { title: 'Sales', key: 'systemCommercialSales' },
                  {
                    title: 'Commercial liability',
                    key: 'systemCommercialLiability',
                  },
                ],
              },
              {
                title: 'Professional authority',
                key: 'systemProfessional',
                children: [
                  {
                    title: 'Training & licensure requirements',
                    key: 'systemProfessionalTrainingLicensure',
                  },
                  {
                    title: 'Scope of practice',
                    key: 'systemProfessionalScopePractice',
                  },
                  {
                    title: 'Setting of practice',
                    key: 'systemProfessionalSettingPractice',
                  },
                  {
                    title: 'Continuing competence',
                    key: 'systemProfessionalContinuingCompetence',
                  },
                  {
                    title: 'Quality & safety',
                    key: 'systemProfessionalQualitySafety',
                  },
                  {
                    title: 'Professional liability',
                    key: 'systemProfessionalLiability',
                  },
                  {
                    title: 'Strike/job action',
                    key: 'systemProfessionalStrikeJobAction',
                  },
                ],
              },
              {
                title: 'Citizen & stakeholder involvement',
                key: 'systemCitizen',
                children: [
                  {
                    title:
                      'Citizen participation in policy & organizational decisions',
                    key: 'systemCitizenPolicy',
                  },
                  {
                    title: 'Citizen participation in system monitoring',
                    key: 'systemCitizenSystemMonitoring',
                  },
                  {
                    title: 'Citizen participation in service delivery',
                    key: 'systemCitizenServiceDelivery',
                  },
                  {
                    title: 'Citizen complaints management',
                    key: 'systemCitizenComplaintsManagement',
                  },
                  {
                    title:
                      'Stakeholder participation in policy & organizational decisions (or monitoring)',
                    key: 'systemCitizenStakeholderPolicy',
                  },
                ],
              },
            ],
          },
          {
            title: 'Financial arrangements',
            key: 'financial',
            children: [
              {
                title: 'Financing systems',
                key: 'financingSystems',
                children: [
                  { title: 'Taxation', key: 'financialTaxation' },
                  {
                    title: 'Social insurance',
                    key: 'financialSocialHealthInsurance',
                  },
                  {
                    title: 'Community-based insurance',
                    key: 'financialCommunityBasedHealthInsurance',
                  },
                  {
                    title: 'Community loan funds',
                    key: 'financialCommunityLoanFunds',
                  },
                  {
                    title: 'Private insurance',
                    key: 'financialPrivateInsurance',
                  },
                  {
                    title: 'Social savings accounts (Individually financed)',
                    key: 'financialHealthSavingsAccountsIndividuallyFinanced',
                  },
                  { title: 'User fees', key: 'financialUserFees' },
                  {
                    title: 'Donor contributions',
                    key: 'financialDonorContributions',
                  },
                  { title: 'Fundraising', key: 'financialFundraising' },
                ],
              },
              {
                title: 'Funding organizations',
                key: 'fundingOrganization',
                children: [
                  {
                    title: 'Fee-for-service (Funding)',
                    key: 'fundingOrganizationServiceFees',
                  },
                  {
                    title: 'Capitation (Funding)',
                    key: 'fundingOrganizationCapitation',
                  },
                  {
                    title: 'Global budget',
                    key: 'fundingOrganizationGlobalBudget',
                  },
                  {
                    title: 'Case-mix funding',
                    key: 'fundingOrganizationCaseMixFunding',
                  },
                  {
                    title: 'Targeted payments/penalties (Funding)',
                    key: 'fundingOrganizationPaymentsPenalties',
                  },
                ],
              },
              {
                title: 'Remunerating providers',
                key: 'remuneratingProvider',
                children: [
                  {
                    title: 'Fee-for-service (Remuneration)',
                    key: 'remuneratingProviderServiceFees',
                  },
                  {
                    title: 'Capitation (Remuneration)',
                    key: 'remuneratingProviderCapitation',
                  },
                  { title: 'Salary', key: 'remuneratingProviderSalary' },
                  {
                    title: 'Episode-based payment',
                    key: 'remuneratingProviderEpisodePayment',
                  },
                  {
                    title: 'Fundholding',
                    key: 'remuneratingProviderFundholding',
                  },
                  {
                    title: 'Targeted payments/penalties (Remuneration)',
                    key: 'remuneratingProviderPaymentPenalties',
                  },
                ],
              },
              {
                title: 'Purchasing products & services',
                key: 'purchasing',
                children: [
                  {
                    title: 'Scope & nature of insurance plans',
                    key: 'purchasingScope',
                  },
                  {
                    title:
                      'Lists of covered/reimbursed organizations, providers, services & products',
                    key: 'purchasingCoveredReimbursedOrganizations',
                  },
                  {
                    title:
                      'Restrictions in coverage/reimbursement rates for organizations, providers, services & products',
                    key: 'purchasingRestrictions',
                  },
                  {
                    title:
                      'Caps on coverage/reimbursement for organizations, providers, services & products',
                    key: 'purchasingCaps',
                  },
                  {
                    title:
                      'Prior approval requirements for organizations, providers, services & products',
                    key: 'purchasingApprovalRequirements',
                  },
                  {
                    title: 'Lists of substitutable services & products',
                    key: 'purchasingSubstitutes',
                  },
                ],
              },
              {
                title: 'Incentivizing citizens',
                key: 'incentivizingCitizen',
                children: [
                  {
                    title: 'Premium (level & features)',
                    key: 'incentivizingCitizenPremium',
                  },
                  {
                    title: 'Cost sharing',
                    key: 'incentivizingCitizenCostSharing',
                  },
                  {
                    title:
                      'Social savings accounts (Third party contributions)',
                    key: 'incentivizingCitizenSavingsThirdPartyContributions',
                  },
                  {
                    title:
                      'Targeted payments/penalties (Incentivizing citizens)',
                    key: 'incentivizingCitizenSavingsTargetedPaymentsPenalties',
                  },
                ],
              },
            ],
          },
          {
            title: 'Delivery arrangements',
            key: 'deliveryArrangement',
            children: [
              {
                title: 'How services are designed to meet citizens’ needs',
                key: 'deliveryArrangementDesign',
                children: [
                  {
                    title: 'Availability of services',
                    key: 'deliveryArrangementDesignAvailability',
                  },
                  {
                    title: 'Timely access to services',
                    key: 'deliveryArrangementDesignTimelyAcess',
                  },
                  {
                    title: 'Culturally appropriate services',
                    key: 'deliveryArrangementDesignCulturallyAppropriate',
                  },
                  {
                    title: 'Case management',
                    key: 'deliveryArrangementDesignCaseManagement',
                  },
                  {
                    title: 'Package of services/service pathways',
                    key: 'deliveryArrangementDesignServicesPackage',
                  },
                  {
                    title: 'Group services',
                    key: 'deliveryArrangementDesignGroup',
                  },
                ],
              },
              {
                title: 'By whom services are provided',
                key: 'serviceProvider',
                children: [
                  {
                    title: 'System - Need, demand & supply',
                    key: 'serviceProviderAvailability',
                  },
                  {
                    title: 'System - Recruitment, retention & transitions',
                    key: 'serviceProviderRecruitmentRetention',
                  },
                  {
                    title: 'System - Performance management',
                    key: 'serviceProviderPerformanceManagement',
                  },
                  {
                    title: 'Workplace conditions - Provider satisfaction',
                    key:
                      'serviceProviderWorkplaceConditionsProviderSatisfaction',
                  },
                  {
                    title: 'Workplace conditions - Health & safety',
                    key: 'serviceProviderWorkplaceConditionsHealthSafety',
                  },
                  {
                    title: 'Skill mix - Role performance',
                    key: 'serviceProviderSkillMixRolePerformance',
                  },
                  {
                    title: 'Skill mix - Role expansion or extension',
                    key: 'serviceProviderSkillMixRoleExpansionOrExtension',
                  },
                  {
                    title: 'Skill mix - Task shifting / substitution',
                    key: 'serviceProviderSkillMixTaskShiftingSubstitution',
                  },
                  {
                    title: 'Skill mix - Multidisciplinary teams',
                    key: 'serviceProviderSkillMixMultidisciplinaryTeams',
                  },
                  {
                    title: 'Skill mix - Volunteers or caregivers',
                    key:
                      'serviceProviderSkillMixVolunteersOrInformalFamilyCaregivers',
                  },
                  {
                    title:
                      'Skill mix – Communication & case discussion between distant professionals',
                    key:
                      'serviceProviderSkillMixCommunicationDistantHealthProfessionals',
                  },
                  {
                    title: 'Staff - Training',
                    key: 'serviceProviderStaffTraining',
                  },
                  {
                    title: 'Staff - Support',
                    key: 'serviceProviderStaffSupport',
                  },
                  {
                    title: 'Staff - Workload/workflow/intensity',
                    key: 'serviceProviderStaffWorkloadWorkflowIntensity',
                  },
                  {
                    title: 'Staff - Continuity of services',
                    key: 'serviceProviderStaffContinuityOfCare',
                  },
                  {
                    title: 'Staff/self - Shared decision-making',
                    key: 'serviceProviderStaffSelfSharedDecisionMaking',
                  },
                  {
                    title: 'Self-management',
                    key: 'serviceProviderSelfManagement',
                  },
                ],
              },
              {
                title: 'Where services are provided',
                key: 'serviceLocation',
                children: [
                  {
                    title: 'Site of service delivery',
                    key: 'serviceLocationSite',
                  },
                  {
                    title: 'Physical structure, facilities & equipment',
                    key: 'serviceLocationPhysicalStructure',
                  },
                  {
                    title: 'Organizational scale',
                    key: 'serviceLocationOrganizationalScale',
                  },
                  {
                    title: 'Organizational structure',
                    key: 'serviceLocationOrganizationalStructure',
                  },
                  {
                    title: 'Integration of services',
                    key: 'serviceLocationServiceIntegration',
                  },
                  {
                    title: 'Continuity of services',
                    key: 'serviceLocationServiceContinuity',
                  },
                  { title: 'Outreach', key: 'serviceLocationOutreach' },
                ],
              },
              {
                title: 'With what supports are services provided',
                key: 'serviceSupport',
                children: [
                  {
                    title: 'Record systems',
                    key: 'serviceSupportHealthRecordSystems',
                  },
                  {
                    title: 'Electronic records',
                    key: 'serviceSupportElectronicHealthRecord',
                  },
                  {
                    title:
                      'Other ICT that support individuals who provide services',
                    key: 'serviceSupportOtherICTThatSupportIndividuals',
                  },
                  {
                    title: 'ICT that support individuals who receive services',
                    key:
                      'serviceSupportICTThatSupportIndividualsWhoReceiveCare',
                  },
                  {
                    title: 'Financial monitoring and improvement systems',
                    key: 'serviceSupportFinancialMonitoring',
                  },
                  {
                    title: 'Quality monitoring and improvement systems',
                    key: 'serviceSupportQualityMonitoringAndImprovementSystems',
                  },
                  {
                    title: 'Safety monitoring and improvement systems',
                    key: 'serviceSupportSafetyMonitoringAndImprovementSystems',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Implementation strategies',
        key: 'implementationStrategies',
        children: [
          {
            title: 'Citizen-targeted strategy',
            key: 'implementationCitizenTargeted',
            children: [
              {
                title: 'Information or education provision',
                key:
                  'implementationCitizenTargetedInformationOrEducationProvision',
              },
              {
                title: 'Behaviour change support',
                key: 'implementationCitizenTargetedBehaviourChangeSupport',
              },
              {
                title: 'Skills and competencies development',
                key:
                  'implementationCitizenTargetedSkillsAndCompetenciesDevelopment',
              },
              {
                title: '(Personal) Support',
                key: 'implementationCitizenTargetedPersonalSupport',
              },
              {
                title: 'Communication and decision-making facilitation',
                key:
                  'implementationCitizenTargetedCommunicationAndDecisionMakingFacilitation',
              },
              {
                title: 'System participation',
                key: 'implementationCitizenTargetedSystemParticipation',
              },
            ],
          },
          {
            title: 'Provider-targeted strategy',
            key: 'implementationProviderTargeted',
            children: [
              {
                title: 'Educational material',
                key: 'implementationProviderTargetedEducationalMaterial',
              },
              {
                title: 'Educational meeting',
                key: 'implementationProviderTargetedEducationalMeeting',
              },
              {
                title: 'Educational outreach visit',
                key: 'implementationProviderTargetedEducationalOutreachVisit',
              },
              {
                title: 'Local opinion leader',
                key: 'implementationProviderTargetedLocalOpinionLeader',
              },
              {
                title: 'Local consensus process',
                key: 'implementationProviderTargetedLocalConsensusProcess',
              },
              {
                title: 'Peer review',
                key: 'implementationProviderTargetedPeerReview',
              },
              {
                title: 'Audit and feedback',
                key: 'implementationProviderTargetedAuditFeedback',
              },
              {
                title: 'Reminders and prompts',
                key: 'implementationProviderTargetedRemindersAndPrompts',
              },
              {
                title: 'Tailored intervention',
                key: 'implementationProviderTargetedTailoredIntervention',
              },
              {
                title: 'Citizen-mediated intervention',
                key:
                  'implementationProviderTargetedCitizenMediatedIntervention',
              },
              {
                title: 'Multi-faceted intervention',
                key: 'implementationProviderTargetedMultiFacetedIntervention',
              },
            ],
          },
          {
            title: 'Organization-targeted strategy',
            key: 'implementationOrganizationTargeted',
          },
        ],
      },
      {
        title: 'Sustainable Development Goals',
        key: 'sustainableDevelopmentGoals',
        children: [
          {
            title: '1. No poverty',
            key: 'sustainableDevelopmentGoalsNoPoverty',
          },
          {
            title: '2. Zero hunger',
            key: 'sustainableDevelopmentGoalsZeroHunger',
          },
          {
            title: '3. Good health and well-being (partially covered)',
            key: 'sustainableDevelopmentGoalsGoodHealth',
          },
          {
            title: '4. Quality education',
            key: 'sustainableDevelopmentGoalsQualityEducation',
          },
          {
            title: '5. Gender equality',
            key: 'sustainableDevelopmentGoalsGenderEquality',
          },
          {
            title: '6. Clean water and sanitation',
            key: 'sustainableDevelopmentGoalsCleanWater',
          },
          {
            title: '7. Affordable and clean energy',
            key: 'sustainableDevelopmentGoalsAffordableCleanEnergy',
          },
          {
            title: '8. Decent work and economic growth',
            key: 'sustainableDevelopmentGoalsDecentWorkEconomicGrowth',
          },
          {
            title: '9. Industry, innovation and infrastructure',
            key: 'sustainableDevelopmentGoalsIndustryInnovationInfrastructure',
          },
          {
            title: '10. Reduced inequalities',
            key: 'sustainableDevelopmentGoalsReducedInequalities',
          },
          {
            title: '11. Sustainable cities and communities',
            key: 'sustainableDevelopmentGoalsSustainableCitiesCommunities',
          },
          {
            title: '12. Responsible consumption and production',
            key: 'sustainableDevelopmentGoalsResponsibleConsumptionProduction',
          },
          {
            title: '13. Climate action',
            key: 'sustainableDevelopmentGoalsClimateAction',
          },
          {
            title: '14. Life below water',
            key: 'sustainableDevelopmentGoalsLifeBelowWater',
          },
          {
            title: '15. Life on land',
            key: 'sustainableDevelopmentGoalsLifeOnLand',
          },
          {
            title: '16. Peace, justice and strong institutions',
            key: 'sustainableDevelopmentGoalsPeaceJusticeStrongInstitutions',
          },
          {
            title: '17. Partnerships for the goals',
            key: 'sustainableDevelopmentGoalsPartnerships',
          },
        ],
      },
      {
        title: 'Perspectives',
        key: 'perspectives',
        children: [
          {
            title: 'Populations',
            key: 'perspectivesPopulations',
            children: [
              {
                title: 'Children and youth',
                key: 'perspectivesPopulationChildrenYouth',
              },
              {
                title: 'Ethnocultural minorities',
                key: 'perspectivesPopulationEthnoculturalMinorities',
              },
              {
                title: 'Linguistic minorities',
                key: 'perspectivesPopulationLinguisticMinorities',
              },
              {
                title: 'Immigrants and refugees',
                key: 'perspectivesPopulationImigrantsRefugees',
              },
              {
                title: 'Indigenous peoples',
                key: 'perspectivesPopulationIndigenousPeoples',
              },
              {
                title: 'Individuals who are homeless or marginally housed',
                key: 'perspectivesPopulationHomeless',
              },
              { title: 'LGBTQ', key: 'perspectivesPopulationLGBTQ' },
              {
                title: 'Older adults',
                key: 'perspectivesPopulationOlderAdults',
              },
              {
                title: 'People living in rural and remote communities',
                key: 'perspectivesPopulationRuralRemote',
              },
              {
                title: 'People with disabilities',
                key: 'perspectivesPopulationDisabilities',
              },
            ],
          },
          {
            title: 'Outcomes',
            key: 'outcomesProvider',
            children: [
              { title: 'Economic', key: 'outcomesProviderEconomic' },
              { title: 'Education', key: 'outcomesProviderEducation' },
              { title: 'Employment', key: 'outcomesProviderEmployment' },
              { title: 'Health', key: 'outcomesProviderHealth' },
              { title: 'Housing', key: 'outcomesProviderHousing' },
              {
                title: 'Other sector/area-specific outcomes',
                key: 'outcomesProviderOther',
              },
              {
                title: 'Social inclusion',
                key: 'outcomesProviderSocialInclusion',
              },
              { title: 'Well-being', key: 'outcomesProviderWellBeing' },
            ],
          },
          {
            title: 'Disciplines',
            key: 'perspectivesDisciplines',
            children: [
              {
                title: 'Anthropology',
                key: 'perspectivesDisciplineAnthropology',
              },
              { title: 'Arts', key: 'perspectivesDisciplineArts' },
              {
                title: 'Business administration',
                key: 'perspectivesDisciplineBusinessAdministration',
              },
              {
                title: 'Communications',
                key: 'perspectivesDisciplineCommunication',
              },
              {
                title: 'Criminology',
                key: 'perspectivesDisciplineCriminology',
              },
              { title: 'Economics', key: 'perspectivesDisciplineEconomics' },
              {
                title: 'Engineering',
                key: 'perspectivesDisciplineEngineering',
              },
              { title: 'Geography', key: 'perspectivesDisciplineGeography' },
              {
                title: 'Gerontology',
                key: 'perspectivesDisciplineGerontology',
              },
              { title: 'History', key: 'perspectivesDisciplineHistory' },
              { title: 'Law', key: 'perspectivesDisciplineLaw' },
              {
                title: 'Philosophy',
                key: 'perspectivesDisciplinePhilosophy',
              },
              {
                title: 'Political science',
                key: 'perspectivesDisciplinePoliticalScience',
              },
              {
                title: 'Psychology',
                key: 'perspectivesDisciplinePsychology',
              },
              {
                title: 'Public administration',
                key: 'perspectivesDisciplinePublicAdministration',
              },
              {
                title: 'Social work',
                key: 'perspectivesDisciplineSocialWork',
              },
              { title: 'Sociology', key: 'perspectivesDisciplineSociology' },
            ],
          },
        ],
      },
    ],
  },
  checkedLMIC: {
    title: 'LMIC Focus',
    items: [
      { title: 'Target of document', key: 'lmicTargetOfDocument' },
      {
        title: 'At least one LMIC study included',
        key: 'lmicAtLeastOneStudy',
      },
    ],
  },
  checkedTheme: {
    title: 'Theme',
    items: [{ title: 'Optimal aging', key: 'themeOptimalAging' }],
  } /*
  checkedAge: {
    title: 'Age',
    items: [
      { title: 'Neonates (birth to 1 month)', key: 'ageNeonates' },
      {
        title: 'Pediatrics (>1 month to <13 years)',
        key: 'agePediatrics',
      },
      {
        title: 'Adolescents (13 years to <19 years)',
        key: 'ageAdolescents',
      },
      {
        title: 'Adults (19 years to <60 years)',
        key: 'ageAdults',
      },
      { title: 'Geriatrics (>=60 years)', key: 'ageGeriatrics' },
    ],
  },
  checkedTarget: {
    title: 'Target',
    items: [
      { title: 'Individual', key: 'targetIndividual' },
      { title: 'Family/household', key: 'targetFamily' },
      { title: 'Community', key: 'targetCommunity' },
      { title: 'System', key: 'targetSystem' },
    ],
  },*/,
};

export default {
  types,
  questionTypes,
  tree,
};
