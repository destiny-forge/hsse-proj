export const domainTreeData = [
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
            title: 'Early childhood development servies',
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
        key: 'citizenship',
        children: [
          {
            title: 'Admissibility, security and visa services',
            key: 'citizenshipAdmissibility',
          },
          { title: 'Border services', key: 'citizenshipBorder' },
          { title: 'Refugee services', key: 'citizenshipRefugee' },
          {
            title: 'Temporary residence permits',
            key: 'citizenshipTemporaryResidence',
          },
          {
            title: 'Permanent residence permits',
            key: 'citizenshipPermanentResidence',
          },
          { title: 'Citizenship grants', key: 'citizenshipGrants' },
          {
            title: 'Settlement/re-settlement',
            key: 'citizenshipSettlement',
          },
          {
            title: 'Civic engagement/volunteering',
            key: 'citizenshipVolunteering',
          },
          {
            title: 'Civic/cultural integration',
            key: 'citizenshipCulturalIntegration',
          },
          {
            title: 'Undocumented individuals',
            key: 'citizenshipUndocumented',
          },
          { title: 'Migration', key: 'citizenshipMigration' },
          {
            title: 'Detention, deportation and extradition',
            key: 'citizenshipDetentionDeportation',
          },
          {
            title: 'Sub-national cooperation',
            key: 'citizenshipSubnational',
          },
          {
            title: 'International cooperation',
            key: 'citizenshipInternational',
          },
        ],
      },
      {
        title: 'Climate action',
        key: 'climate',
        children: [
          {
            title: 'Energy-use production',
            key: 'climateEnergy',
            children: [
              { title: 'Buildings', key: 'climateEnergyBuildings' },
              {
                title: 'Energy productions',
                key: 'climateEnergyProduction',
              },
              { title: 'Households', key: 'climateEnergyHouseholds' },
              { title: 'Industries', key: 'climateEnergyIndustries' },
              { title: 'Land use', key: 'climateEnergyLandUse' },
              { title: 'Tourism', key: 'climateEnergyTourism' },
              { title: 'Transport', key: 'climateEnergyTransport' },
            ],
          },
          {
            title: 'Low or zero-carbon electricity supply',
            key: 'climateZeroCarbon',
            children: [
              {
                title: 'Nuclear power',
                key: 'climateZeroCarbonNuclear',
              },
              {
                title: 'Renewable energy',
                key: 'climateZeroCarbonRenewable',
              },
            ],
          },
          {
            title: 'Electrification and other fuel switching',
            key: 'climateElectrification',
            children: [
              {
                title: 'Appliances',
                key: 'climateElectrificationAppliances',
              },
              {
                title: 'Supporting infrastructure',
                key: 'climateElectrificationSupportingInfra',
              },
              {
                title: 'Vehicles',
                key: 'climateElectrificationVehicles',
              },
            ],
          },
          {
            title: 'Non-energy emission solutions',
            key: 'climateNonEnergy',
            children: [
              {
                title: 'Bio-sequestration',
                key: 'climateNonEnergyBioSequestration',
              },
              {
                title: 'Carbon capture and storage',
                key: 'climateNonEnergyCarbonCapture',
              },
              {
                title: 'Fugitive-emission reduction',
                key: 'climateNonEnergyFugitiveEmissionReduction',
              },
              {
                title: 'Industrial-process improvements',
                key: 'climateNonEnergyIndustrialProcessImprovements',
              },
              {
                title: 'Reuse and recycling',
                key: 'climateNonEnergyReuseRecycling',
              },
            ],
          },
          {
            title: 'Climate-change risk management',
            key: 'climateChangeRisk',
            children: [
              { title: 'Financial', key: 'climateChangeRiskFinancial' },
              { title: 'Human', key: 'climateChangeRiskHuman' },
              { title: 'Property', key: 'climateChangeRiskProperty' },
              { title: 'Settlement', key: 'climateChangeRiskSettlement' },
            ],
          },
        ],
      },
      {
        title: 'Community and social services',
        key: 'community',
        children: [
          {
            title: 'Accessibility services',
            key: 'communityAccessibility',
          },
          { title: 'Disability services', key: 'communityDisability' },
          {
            title: 'Problem gambling services',
            key: 'communityGambling',
          },
          {
            title: 'Other social services',
            key: 'communitySocial',
          },
          { title: 'Community services', key: 'communityServices' },
          {
            title: 'Community development',
            key: 'communityDevelopment',
          },
          {
            title: 'Emergency response and preparedness',
            key: 'communityEmergencyResponse',
          },
        ],
      },
      {
        title: 'Consumer protection',
        key: 'consumer',
        children: [
          {
            title: 'Consumer awareness and education',
            key: 'consumerAwarenessEducation',
          },
          {
            title: 'Consumer advocacy and rights',
            key: 'consumerAdvocacy',
          },
          {
            title: 'Advertising and marketing standards',
            key: 'consumerAdvertising',
          },
          {
            title: 'Consumer promotion standards',
            key: 'consumerPromotion',
          },
          {
            title: 'Responsible consumption initiatives',
            key: 'consumerConsumption',
          },
          { title: 'Product safety', key: 'consumerProductSafety' },
          { title: 'Fraud', key: 'consumerFraud' },
          { title: 'Privacy', key: 'consumerPrivacy' },
          { title: 'Competition supports', key: 'consumerCompetition' },
          {
            title: 'E-commerce and the sharing economy',
            key: 'consumerEcommerce',
          },
        ],
      },
      {
        title: 'Culture and gender',
        key: 'culture',
        children: [
          { title: 'Arts', key: 'cultureArts' },
          { title: 'Heritage', key: 'cultureHeritage' },
          { title: 'Cultural industries', key: 'cultureIndustries' },
          {
            title: 'Cultural protectionism',
            key: 'cultureProtectionism',
          },
          {
            title: 'Cultural competency training',
            key: 'cultureTraining',
          },
          { title: 'Multiculturalism', key: 'cultureMulticulturalism' },
          {
            title: 'Gender mainstreaming',
            key: 'cultureGenderMainstreaming',
          },
          { title: 'Gender equality', key: 'cultureGenderEquality' },
          { title: 'Human rights', key: 'cultureHumanRights' },
        ],
      },
      {
        title: 'Economic development and growth',
        key: 'economic',
        children: [
          { title: 'Access to finance', key: 'economicAccessToFinance' },
          {
            title: 'Area-based initiatives',
            key: 'economicAreaBasedInitiatives',
          },
          { title: 'Broadband access', key: 'economicBroadbandAccess' },
          { title: 'Business advice', key: 'economicBusinessAdvice' },
          {
            title: 'Housing stock renewal',
            key: 'economicHousingStock',
          },
          {
            title: 'Human capital investments',
            key: 'economicHumanCapital',
          },
          { title: 'Innovation supports', key: 'economicInnovation' },
          {
            title: 'Public space improvements',
            key: 'economicPublicSpace',
          },
          {
            title: 'Sport/culture events and facilities',
            key: 'economicSportCulture',
          },
          {
            title: 'Transportation enhancements',
            key: 'economicTransportationEnhancements',
          },
          {
            title: 'General fiscal policy tools',
            key: 'economicFiscalPolicy',
          },
          {
            title: 'General monetary policy tools',
            key: 'economicMonetaryPolicy',
          },
          {
            title: 'General trade policy tools',
            key: 'economicTradePolicy',
          },
        ],
      },
      {
        title: 'Education',
        key: 'education',
        children: [
          {
            title: 'Pre-primary education',
            key: 'educationPrePrimary',
          },
          { title: 'Primary education', key: 'educationPrimary' },
          { title: 'Secondary education', key: 'educationSecondary' },
          {
            title: 'Tertiary/higher education',
            key: 'educationTertiary',
          },
          {
            title: 'Academic planning',
            key: 'educationAcademicPlanning',
          },
          { title: 'Revenue streams', key: 'educationRevenueStreams' },
          {
            title: 'Tuition setting and subsidy',
            key: 'educationTuitionSubsidy',
          },
          { title: 'Marketing', key: 'educationMarketing' },
          { title: 'Streaming', key: 'educationStreaming' },
          { title: 'Curriculum', key: 'educationCurriculum' },
          {
            title: 'Literacy training',
            key: 'educationLiteracyTraining',
          },
          { title: 'Apprenticeships', key: 'educationApprenticeships' },
          { title: 'Teaching', key: 'educationTeaching' },
          { title: 'Assessment', key: 'educationAssessment' },
          {
            title: 'Student engagement',
            key: 'educationStudentEngagement',
          },
          {
            title: 'Parent/legal guardian engagement',
            key: 'educationParentEngagement',
          },
          {
            title: 'Teacher/faculty engagement',
            key: 'educationTeacherEngagement',
          },
          {
            title: 'Community engagement',
            key: 'educationCommunityEngagement',
          },
          {
            title: 'Prospective employers engagement',
            key: 'educationEmployerEngagement',
          },
        ],
      },
      {
        title: 'Employment',
        key: 'employment',
        children: [
          {
            title: 'Job training/retraining',
            key: 'employmentTraining',
          },
          { title: 'Wages', key: 'employmentWages' },
          { title: 'Benefits', key: 'employmentBenefits' },
          {
            title: 'Employment conditions',
            key: 'employmentEmploymentConditions',
          },
          {
            title: 'Displaced workers',
            key: 'employmentDisplacedWorkers',
          },
          { title: 'Unemployment', key: 'employmentUnemployment' },
          { title: 'Unpaid labour', key: 'employmentUnpaidLabour' },
          {
            title: 'Workplace safety and prevention',
            key: 'employmentWorkplaceSafety',
          },
          {
            title: 'Workplace violence and harassment',
            key: 'employmentWorkplaceViolence',
          },
          {
            title: 'Unions and collective bargaining',
            key: 'employmentUnions',
          },
          {
            title: 'Labour-market interventions',
            key: 'employmentLabourMarket',
          },
          {
            title: 'Industry-level interventions',
            key: 'employmentIndustry',
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
                key: 'environmentalConservationBiodiversityStatusAssessment',
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
                title: 'Fires',
                key: 'environmentalConservationThreatsFires',
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
                title: 'Centralization/decentralization of policy authority',
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
                title: 'Social savings accounts (Third party contributions)',
                key: 'incentivizingCitizenSavingsThirdPartyContributions',
              },
              {
                title: 'Targeted payments/penalties (Incentivizing citizens)',
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
                title: 'System - Need, demand & supply',
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
                title: 'Availability of services',
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
                key: 'serviceProviderWorkplaceConditionsProviderSatisfaction',
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
                title: 'SserviceProviderStaffWorkloadWorkflowIntensity',
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
                key: 'serviceSupportICTThatSupportIndividualsWhoReceiveCare',
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
            key: 'implementationCitizenTargetedInformationOrEducationProvision',
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
            title: 'Reminders and prompts',
            key: 'implementationProviderTargetedRemindersAndPrompts',
          },
          {
            title: 'Tailored intervention',
            key: 'implementationProviderTargetedTailoredIntervention',
          },
          {
            title: 'Citizen-mediated intervention',
            key: 'implementationProviderTargetedCitizenMediatedIntervention',
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
        title: 'Provider-targeted strategy',
        key: 'perspectivesProvider',
        children: [
          { title: 'Economic', key: 'perspectivesProviderEconomic' },
          { title: 'Education', key: 'perspectivesProviderEducation' },
          { title: 'Employment', key: 'perspectivesProviderEmployment' },
          { title: 'Health', key: 'perspectivesProviderHealth' },
          { title: 'Housing', key: 'perspectivesProviderHousing' },
          {
            title: 'Peer review',
            key: 'perspectivesProviderPeerReview',
          },
          {
            title: 'Social inclusion',
            key: 'perspectivesProviderSocialInclusion',
          },
          { title: 'Well-being', key: 'perspectivesProviderWellBeing' },
          {
            title: 'Citizen-mediated intervention',
            key: 'perspectivesProviderCitizenIntervention',
          },
          {
            title: 'Other sector/area-specific outcomes',
            key: 'perspectivesProviderOther',
          },
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
];

export const limicFocusTreeData = [
  { title: 'Target of document', key: 'lmicTargetOfDocument' },
  {
    title: 'At least oen LMIC study included',
    key: 'lmicAtLeastOneStudy',
  },
];

export const themeTreeData = [
  { title: 'Optimal aging', key: 'themeOptimalAging' },
];

export const ageTreeData = [
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
];

export const targetTreeData = [
  { title: 'Individual', key: 'targetIndividual' },
  { title: 'Family/household', key: 'targetFamily' },
  { title: 'Community', key: 'targetCommunity' },
  { title: 'System', key: 'targetSystem' },
];
