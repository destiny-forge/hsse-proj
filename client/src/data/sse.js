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
    legacyKey: '0_2',
    items: [
      {
        title: 'Programs and services',
        key: 'programsServices',
        legacyKey: '2_-1',
        children: [
          {
            title: 'Children and youth services',
            key: 'programsServicesChildren',
            legacyKey: '2_2022',
            children: [
              {
                title: 'Adoption services',
                key: 'programsServicesChildrenAdoption',
                legacyKey: '2_2209',
              },
              {
                title: 'Caregiver support',
                key: 'programsServicesChildrenCaregiver',
                legacyKey: '2_2210',
              },
              {
                title: 'Early childhood development services',
                key: 'programsServicesChildrenEarlyChildhood',
                legacyKey: '2_2211',
              },
              {
                title: 'Special needs services',
                key: 'programsServicesChildrenSpecialNeeds',
                legacyKey: '2_2213',
              },
              {
                title: 'Student support services',
                key: 'programsServicesChildrenStudentSupport',
                legacyKey: '2_2214',
              },
              {
                title: 'Parent/legal guardian support services',
                key: 'programsServicesChildrenParentGuardian',
                legacyKey: '2_2215',
              },
              {
                title: 'Child protection',
                key: 'programsServicesChildrenChildProtection',
                legacyKey: '2_2216',
              },
            ],
          },
          {
            title: 'Citizenship',
            key: 'programsServicesCitizenship',
            legacyKey: '2_2009',
            children: [
              {
                title: 'Admissibility, security and visa services',
                key: 'programsServicesCitizenshipAdmissibility',
                legacyKey: '2_2195',
              },
              {
                title: 'Border services',
                key: 'citizenshipBorder',
                legacyKey: '2_2196',
              },
              {
                title: 'Refugee services',
                key: 'citizenshipRefugee',
                legacyKey: '2_2197',
              },
              {
                title: 'Temporary residence permits',
                key: 'programsServicesCitizenshipTemporaryResidence',
                legacyKey: '2_2198',
              },
              {
                title: 'Permanent residence permits',
                key: 'programsServicesCitizenshipPermanentResidence',
                legacyKey: '2_2199',
              },
              {
                title: 'Citizenship grants',
                key: 'citizenshipGrants',
                legacyKey: '2_2200',
              },
              {
                title: 'Settlement/re-settlement',
                key: 'programsServicesCitizenshipSettlement',
                legacyKey: '2_2201',
              },
              {
                title: 'Civic engagement/volunteering',
                key: 'programsServicesCitizenshipVolunteering',
                legacyKey: '2_2202',
              },
              {
                title: 'Civic/cultural integration',
                key: 'programsServicesCitizenshipCulturalIntegration',
                legacyKey: '2_2203',
              },
              {
                title: 'Undocumented individuals',
                key: 'programsServicesCitizenshipUndocumented',
                legacyKey: '2_2204',
              },
              {
                title: 'Migration',
                key: 'citizenshipMigration',
                legacyKey: '2_2205',
              },
              {
                title: 'Detention, deportation and extradition',
                key: 'programsServicesCitizenshipDetentionDeportation',
                legacyKey: '2_2349',
              },
              {
                title: 'Sub-national cooperation',
                key: 'programsServicesCitizenshipSubnational',
                legacyKey: '2_2206',
              },
              {
                title: 'International cooperation',
                key: 'programsServicesCitizenshipInternational',
                legacyKey: '2_2208',
              },
            ],
          },
          {
            title: 'Climate action',
            key: 'programsServicesClimate',
            legacyKey: '2_2402',
            children: [
              {
                title: 'Energy-use production',
                key: 'programsServicesClimateEnergy',
                legacyKey: '2_2440',
                children: [
                  {
                    title: 'Buildings',
                    key: 'programsServicesClimateEnergyBuildings',
                    legacyKey: '2_2439',
                  },
                  {
                    title: 'Energy production',
                    key: 'programsServicesClimateEnergyProduction',
                    legacyKey: '2_2440',
                  },
                  {
                    title: 'Households',
                    key: 'programsServicesClimateEnergyHouseholds',
                    legacyKey: '2_2441',
                  },
                  {
                    title: 'Industries',
                    key: 'programsServicesClimateEnergyIndustries',
                    legacyKey: '2_2442',
                  },
                  {
                    title: 'Land use',
                    key: 'programsServicesClimateEnergyLandUse',
                    legacyKey: '2_2443',
                  },
                  {
                    title: 'Tourism',
                    key: 'programsServicesClimateEnergyTourism',
                    legacyKey: '2_2444',
                  },
                  {
                    title: 'Transport',
                    key: 'programsServicesClimateEnergyTransport',
                    legacyKey: '2_2445',
                  },
                ],
              },
              {
                title: 'Low or zero-carbon electricity supply',
                key: 'programsServicesClimateZeroCarbon',
                legacyKey: '2_2407',
                children: [
                  {
                    title: 'Nuclear power',
                    key: 'programsServicesClimateZeroCarbonNuclear',
                    legacyKey: '2_2446',
                  },
                  {
                    title: 'Renewable energy',
                    key: 'programsServicesClimateZeroCarbonRenewable',
                    legacyKey: '2_2447',
                  },
                ],
              },
              {
                title: 'Electrification and other fuel switching',
                key: 'programsServicesClimateElectrification',
                legacyKey: '2_2408',
                children: [
                  {
                    title: 'Appliances',
                    key: 'programsServicesClimateElectrificationAppliances',
                    legacyKey: '2_2448',
                  },
                  {
                    title: 'Supporting infrastructure',
                    key: 'programsServicesClimateElectrificationSupportingInfra',
                    legacyKey: '2_2449',
                  },
                  {
                    title: 'Vehicles',
                    key: 'programsServicesClimateElectrificationVehicles',
                    legacyKey: '2_2450',
                  },
                ],
              },
              {
                title: 'Non-energy emission solutions',
                key: 'programsServicesClimateNonEnergy',
                legacyKey: '2_2409',
                children: [
                  {
                    title: 'Bio-sequestration',
                    key: 'programsServicesClimateNonEnergyBioSequestration',
                    legacyKey: '2_2451',
                  },
                  {
                    title: 'Carbon capture and storage',
                    key: 'programsServicesClimateNonEnergyCarbonCapture',
                    legacyKey: '2_2452',
                  },
                  {
                    title: 'Fugitive-emission reduction',
                    key: 'programsServicesClimateNonEnergyFugitiveEmissionReduction',
                    legacyKey: '2_2453',
                  },
                  {
                    title: 'Industrial-process improvements',
                    key: 'programsServicesClimateNonEnergyIndustrialProcessImprovements',
                    legacyKey: '2_2454',
                  },
                  {
                    title: 'Reuse and recycling',
                    key: 'programsServicesClimateNonEnergyReuseRecycling',
                    legacyKey: '2_2455',
                  },
                ],
              },
              {
                title: 'Climate-change risk management',
                key: 'programsServicesClimateChangeRisk',
                legacyKey: '2_2410',
                children: [
                  {
                    title: 'Financial',
                    key: 'programsServicesClimateChangeRiskFinancial',
                    legacyKey: '2_2456',
                  },
                  {
                    title: 'Human',
                    key: 'programsServicesClimateChangeRiskHuman',
                    legacyKey: '2_2457',
                  },
                  {
                    title: 'Property',
                    key: 'programsServicesClimateChangeRiskProperty',
                    legacyKey: '2_2458',
                  },
                  {
                    title: 'Settlement',
                    key: 'programsServicesClimateChangeRiskSettlement',
                    legacyKey: '2_2459',
                  },
                ],
              },
            ],
          },
          {
            title: 'Community and social services',
            key: 'programsServicesCommunity',
            legacyKey: '2_2010',
            children: [
              {
                title: 'Accessibility services',
                key: 'programsServicesCommunityAccessibility',
                legacyKey: '2_2217',
              },
              {
                title: 'Disability services',
                key: 'programsServicesCommunityDisability',
                legacyKey: '2_2218',
              },
              {
                title: 'Problem gambling services',
                key: 'programsServicesCommunityGambling',
                legacyKey: '2_2219',
              },
              {
                title: 'Other social services',
                key: 'programsServicesCommunitySocial',
                legacyKey: '2_2220',
              },
              {
                title: 'Community services',
                key: 'programsServicesCommunityServices',
                legacyKey: '2_2221',
              },
              {
                title: 'Community development',
                key: 'programsServicesCommunityDevelopment',
                legacyKey: '2_2222',
              },
              {
                title: 'Emergency response and preparedness',
                key: 'programsServicesCommunityEmergencyResponse',
                legacyKey: '2_2223',
              },
            ],
          },
          {
            title: 'Consumer protection',
            key: 'programsServicesConsumer',
            legacyKey: '2_2011',
            children: [
              {
                title: 'Consumer awareness and education',
                key: 'programsServicesConsumerAwarenessEducation',
                legacyKey: '2_2224',
              },
              {
                title: 'Consumer advocacy and rights',
                key: 'programsServicesConsumerAdvocacy',
                legacyKey: '2_2225',
              },
              {
                title: 'Advertising and marketing standards',
                key: 'programsServicesConsumerAdvertising',
                legacyKey: '2_2227',
              },
              {
                title: 'Consumer promotion standards',
                key: 'programsServicesConsumerPromotion',
                legacyKey: '2_2228',
              },
              {
                title: 'Responsible consumption initiatives',
                key: 'programsServicesConsumerConsumption',
                legacyKey: '2_2350',
              },
              {
                title: 'Product safety',
                key: 'programsServicesConsumerProductSafety',
                legacyKey: '2_2229',
              },
              {
                title: 'Fraud',
                key: 'programsServicesConsumerFraud',
                legacyKey: '2_2230',
              },
              {
                title: 'Privacy',
                key: 'programsServicesConsumerPrivacy',
                legacyKey: '2_2231',
              },
              {
                title: 'Competition supports',
                key: 'programsServicesConsumerCompetition',
                legacyKey: '2_2232',
              },
              {
                title: 'E-commerce and the sharing economy',
                key: 'programsServicesConsumerEcommerce',
                legacyKey: '2_2233',
              },
            ],
          },
          {
            title: 'Culture and gender',
            key: 'programsServicesCulture',
            legacyKey: '2_2012',
            children: [
              {
                title: 'Arts',
                key: 'programsServicesCultureArts',
                legacyKey: '2_2234',
              },
              {
                title: 'Heritage',
                key: 'programsServicesCultureHeritage',
                legacyKey: '2_2235',
              },
              {
                title: 'Cultural industries',
                key: 'programsServicesCultureIndustries',
                legacyKey: '2_2236',
              },
              {
                title: 'Cultural protectionism',
                key: 'programsServicesCultureProtectionism',
                legacyKey: '2_2237',
              },
              {
                title: 'Cultural competency training',
                key: 'programsServicesCultureTraining',
                legacyKey: '2_2238',
              },
              {
                title: 'Multiculturalism',
                key: 'programsServicesCultureMulticulturalism',
                legacyKey: '2_2239',
              },
              {
                title: 'Gender mainstreaming',
                key: 'programsServicesCultureGenderMainstreaming',
                legacyKey: '2_2240',
              },
              {
                title: 'Gender equality',
                key: 'programsServicesCultureGenderEquality',
                legacyKey: '2_2241',
              },
              {
                title: 'Human rights',
                key: 'programsServicesCultureHumanRights',
                legacyKey: '2_2242',
              },
            ],
          },
          {
            title: 'Economic development and growth',
            key: 'programsServicesEconomic',
            legacyKey: '2_2352',
            children: [
              {
                title: 'Access to finance',
                key: 'programsServicesEconomicAccessToFinance',
                legacyKey: '2_2353',
              },
              {
                title: 'Area-based initiatives',
                key: 'programsServicesEconomicAreaBasedInitiatives',
                legacyKey: '2_2354',
              },
              {
                title: 'Broadband access',
                key: 'programsServicesEconomicBroadbandAccess',
                legacyKey: '2_2355',
              },
              {
                title: 'Business advice',
                key: 'programsServicesEconomicBusinessAdvice',
                legacyKey: '2_2356',
              },
              {
                title: 'Housing stock renewal',
                key: 'programsServicesEconomicHousingStock',
                legacyKey: '2_2357',
              },
              {
                title: 'Human capital investments',
                key: 'programsServicesEconomicHumanCapital',
                legacyKey: '2_2358',
              },
              {
                title: 'Innovation supports',
                key: 'programsServicesEconomicInnovation',
                legacyKey: '2_2359',
              },
              {
                title: 'Public space improvements',
                key: 'programsServicesEconomicPublicSpace',
                legacyKey: '2_2360',
              },
              {
                title: 'Sport/culture events and facilities',
                key: 'programsServicesEconomicSportCulture',
                legacyKey: '2_2361',
              },
              {
                title: 'Transportation enhancements',
                key: 'programsServicesEconomicTransportationEnhancements',
                legacyKey: '2_2362',
              },
              {
                title: 'General fiscal policy tools',
                key: 'programsServicesEconomicFiscalPolicy',
                legacyKey: '2_2363',
              },
              {
                title: 'General monetary policy tools',
                key: 'programsServicesEconomicMonetaryPolicy',
                legacyKey: '2_2364',
              },
              {
                title: 'General trade policy tools',
                key: 'programsServicesEconomicTradePolicy',
                legacyKey: '2_2365',
              },
            ],
          },
          {
            title: 'Education',
            key: 'programsServicesEducation',
            legacyKey: '31_343',
            children: [
              {
                title: 'Pre-primary education',
                key: 'programsServicesEducationPrePrimary',
                legacyKey: '2_2366',
              },
              {
                title: 'Primary education',
                key: 'programsServicesEducationPrimary',
                legacyKey: '2_2367',
              },
              {
                title: 'Secondary education',
                key: 'programsServicesEducationSecondary',
                legacyKey: '2_2368',
              },
              {
                title: 'Tertiary/higher education',
                key: 'programsServicesEducationTertiary',
                legacyKey: '2_2369',
              },
              {
                title: 'Academic planning',
                key: 'programsServicesEducationAcademicPlanning',
                legacyKey: '2_2370',
              },
              {
                title: 'Revenue streams',
                key: 'programsServicesEducationRevenueStreams',
                legacyKey: '2_2371',
              },
              {
                title: 'Tuition setting and subsidy',
                key: 'programsServicesEducationTuitionSubsidy',
                legacyKey: '2_2372',
              },
              {
                title: 'Marketing',
                key: 'programsServicesEducationMarketing',
                legacyKey: '2_2243',
              },
              {
                title: 'Admission and recruitment',
                key: 'programsServicesEducationAdmissionRecruitment',
                legacyKey: '2_2244',
              },
              {
                title: 'Streaming',
                key: 'programsServicesEducationStreaming',
                legacyKey: '2_2245',
              },
              {
                title: 'Curriculum',
                key: 'programsServicesEducationCurriculum',
                legacyKey: '2_2246',
              },
              {
                title: 'Literacy training',
                key: 'programsServicesEducationLiteracyTraining',
                legacyKey: '2_2247',
              },
              {
                title: 'Apprenticeships',
                key: 'programsServicesEducationApprenticeships',
                legacyKey: '2_2248',
              },
              {
                title: 'Teaching',
                key: 'programsServicesEducationTeaching',
                legacyKey: '2_2249',
              },
              {
                title: 'Assessment',
                key: 'programsServicesEducationAssessment',
                legacyKey: '2_2250',
              },
              {
                title: 'Student engagement',
                key: 'programsServicesEducationStudentEngagement',
                legacyKey: '2_2251',
              },
              {
                title: 'Parent/legal guardian engagement',
                key: 'educationParentEngagement',
                legacyKey: '2_2252',
              },
              {
                title: 'Teacher/faculty engagement',
                key: 'programsServicesEducationTeacherEngagement',
                legacyKey: '2_2253',
              },
              {
                title: 'Community engagement',
                key: 'programsServicesEducationCommunityEngagement',
                legacyKey: '2_2254',
              },
              {
                title: 'Prospective employers engagement',
                key: 'programsServicesEducationEmployerEngagement',
                legacyKey: '2_2255',
              },
            ],
          },
          {
            title: 'Employment',
            key: 'programsServicesEmployment',
            legacyKey: '31_344',
            children: [
              {
                title: 'Job training/retraining',
                key: 'programsServicesEmploymentTraining',
                legacyKey: '2_2299',
              },
              {
                title: 'Wages',
                key: 'programsServicesEmploymentWages',
                legacyKey: '2_2300',
              },
              {
                title: 'Benefits',
                key: 'programsServicesEmploymentBenefits',
                legacyKey: '2_2301',
              },
              {
                title: 'Employment conditions',
                key: 'programsServicesEmploymentConditions',
                legacyKey: '2_2302',
              },
              {
                title: 'Displaced workers',
                key: 'programsServicesEmploymentDisplacedWorkers',
                legacyKey: '2_2303',
              },
              {
                title: 'Unemployment',
                key: 'programsServicesEmploymentUnemployment',
                legacyKey: '2_2304',
              },
              {
                title: 'Unpaid labour',
                key: 'programsServicesEmploymentUnpaidLabour',
                legacyKey: '2_2305',
              },
              {
                title: 'Workplace safety and prevention',
                key: 'programsServicesEmploymentWorkplaceSafety',
                legacyKey: '2_2306',
              },
              {
                title: 'Workplace violence and harassment',
                key: 'programsServicesEmploymentWorkplaceViolence',
                legacyKey: '2_2307',
              },
              {
                title: 'Unions and collective bargaining',
                key: 'programsServicesEmploymentUnions',
                legacyKey: '2_2308',
              },
              {
                title: 'Labour-market interventions',
                key: 'programsServicesEmploymentLabourMarket',
                legacyKey: '2_2309',
              },
              {
                title: 'Industry-level interventions',
                key: 'programsServicesEmploymentIndustry',
                legacyKey: '2_2310',
              },
            ],
          },
          {
            title: 'Energy supply',
            key: 'energySupply',
            legacyKey: '2_2403',
            children: [
              {
                title: 'Biofuel',
                key: 'energySupplyBiofuel',
                legacyKey: '2_2411',
                children: [
                  {
                    title: 'First-generation biofuels',
                    key: 'energySupplyBiofuelFirstGeneration',
                    legacyKey: '2_2460',
                  },
                  {
                    title: 'Second-generation biofuels',
                    key: 'energySupplyBiofuelSecondGeneration',
                    legacyKey: '2_2461',
                  },
                ],
              },
              { title: 'Coal', key: 'energySupplyCoal', legacyKey: '2_2412' },
              {
                title: 'Hydro-electricity',
                key: 'energySupplyHydro',
                legacyKey: '2_2413',
                children: [
                  {
                    title: 'Pumped storage',
                    key: 'energySupplyHydroPumpedStorage',
                    legacyKey: '2_2462',
                  },
                  {
                    title: 'Reservoir',
                    key: 'energySupplyHydroResevoir',
                    legacyKey: '2_2463',
                  },
                  {
                    title: 'Run-of-river',
                    key: 'energySupplyHydroRunOfRiver',
                    legacyKey: '2_2464',
                  },
                  {
                    title: 'Tidal range',
                    key: 'energySupplyHydroTidalRange',
                    legacyKey: '2_2465',
                  },
                  {
                    title: 'Tidal stream',
                    key: 'energySupplyHydroTidalStream',
                    legacyKey: '2_2466',
                  },
                ],
              },
              {
                title: 'Natural gas',
                key: 'energySupplyNaturalGas',
                legacyKey: '2_2414',
              },
              {
                title: 'Nuclear energy',
                key: 'energySupplyNuclearEnergy',
                legacyKey: '2_2415',
              },
              {
                title: 'Petroleum products',
                key: 'energySupplyPetroleum',
                legacyKey: '2_2416',
              },
              {
                title: 'Solar power',
                key: 'energySupplySolarPower',
                legacyKey: '2_2417',
              },
              {
                title: 'Wind power',
                key: 'energySupplyWindPower',
                legacyKey: '2_2418',
              },
              {
                title: 'Non-carbon fuel',
                key: 'energySupplyNonCarbon',
                legacyKey: '2_2419',
                children: [
                  {
                    title: 'Ammonia',
                    key: 'energySupplyNonCarbonAmonia',
                    legacyKey: '2_2467',
                  },
                  {
                    title: 'Hydrogen',
                    key: 'energySupplyNonCarbonHydrogen',
                    legacyKey: '2_2468',
                  },
                ],
              },
              {
                title: 'Geothermal',
                key: 'energySupplyGeothermal',
                legacyKey: '2_2420',
                children: [
                  {
                    title: 'Electricity generation',
                    key: 'energySupplyGeothermalElectricity',
                    legacyKey: '2_2469',
                  },
                  {
                    title: 'Heating and heating systems',
                    key: 'energySupplyGeothermalHeating',
                    legacyKey: '2_2470',
                  },
                  {
                    title: 'Heat pump',
                    key: 'energySupplyGeothermalHeatPump',
                    legacyKey: '2_2471',
                  },
                ],
              },
              {
                title: 'Waste (to) energy',
                key: 'energyWaste',
                legacyKey: '2_2421',
                children: [
                  {
                    title: 'Biological treatment',
                    key: 'energyWasteBiological',
                    legacyKey: '2_2472',
                  },
                  {
                    title: 'Thermochemical treatment',
                    key: 'energyWasteThermochemical',
                    legacyKey: '2_2473',
                  },
                ],
              },
              {
                title: 'Co-generation',
                key: 'energyCoGen',
                legacyKey: '2_2422',
                children: [
                  {
                    title: 'Power and heat',
                    key: 'energyCoGenPowerHeat',
                    legacyKey: '2_2474',
                  },
                  {
                    title: 'Power, heat and cooling (trigeneration)',
                    key: 'energyCoGenPowerHeatCooling',
                    legacyKey: '2_2475',
                  },
                  {
                    title:
                      'Power, heat, cooling and other products (polygeneration)',
                    key: 'energyCoGenPolygeneration',
                    legacyKey: '2_2476',
                  },
                ],
              },
              {
                title: 'Energy storage',
                key: 'energyStorage',
                legacyKey: '2_2423',
                children: [
                  {
                    title: 'Domestic',
                    key: 'energyStorageDomestic',
                    legacyKey: '2_2477',
                  },
                  {
                    title: 'Industrial',
                    key: 'energyStorageIndustrial',
                    legacyKey: '2_2478',
                  },
                ],
              },
              {
                title: 'Energy systems',
                key: 'energySystems',
                legacyKey: '2_2424',
                children: [
                  {
                    title: 'Energy mix',
                    key: 'energySystemsMix',
                    legacyKey: '2_2479',
                  },
                  {
                    title: 'Energy efficiency initiatives',
                    key: 'energySystemsEfficiency',
                    legacyKey: '2_2514',
                  },
                  {
                    title: 'Grid design',
                    key: 'energySystemsGrid',
                    legacyKey: '2_2480',
                  },
                  {
                    title: 'On-and off- grid source balancing',
                    key: 'energySystemsGridBalancing',
                    legacyKey: '2_2481',
                  },
                  {
                    title: 'Supply security',
                    key: 'energySystemsSupplySecurity',
                    legacyKey: '2_2482',
                  },
                ],
              },
            ],
          },
          {
            title: 'Environmental conservation',
            key: 'environmentalConservation',
            legacyKey: '2_2404',
            children: [
              {
                title: 'Air',
                key: 'environmentalConservationAir',
                legacyKey: '2_2425',
              },
              {
                title: 'Land',
                key: 'environmentalConservationLand',
                legacyKey: '2_2426',
                children: [
                  {
                    title: 'Land-use planning',
                    key: 'environmentalConservationLandPlanning',
                    legacyKey: '2_2483',
                  },
                  {
                    title: 'Parks and other protected areas',
                    key: 'environmentalConservationLandParks',
                    legacyKey: '2_2484',
                  },
                ],
              },
              {
                title: 'Water',
                key: 'environmentalConservationWater',
                legacyKey: '2_2427',
                children: [
                  {
                    title: 'Freshwater (lakes & rivers)',
                    key: 'environmentalConservationWaterFreshwater',
                    legacyKey: '2_2485',
                  },
                  {
                    title:
                      'Seas (marine & coasts, including coastal erosion) & their catchments',
                    key: 'environmentalConservationWaterSeas',
                    legacyKey: '2_2486',
                  },
                ],
              },
              {
                title: 'Biodiversity',
                key: 'environmentalConservationBiodiversity',
                legacyKey: '2_2428',
                children: [
                  {
                    title: 'Fauna protection',
                    key: 'environmentalConservationBiodiversityFauna',
                    legacyKey: '2_2487',
                  },
                  {
                    title: 'Flora protection',
                    key: 'environmentalConservationBiodiversityFlora',
                    legacyKey: '2_2488',
                  },
                  {
                    title: 'Conservation status assessment',
                    key: 'environmentalConservationBiodiversityStatusAssessment',
                    legacyKey: '2_2489',
                  },
                  {
                    title: 'Sustainable harvesting',
                    key: 'environmentalConservationBiodiversitySustainableHarvesting',
                    legacyKey: '2_2490',
                  },
                ],
              },
              {
                title: 'Recycling',
                key: 'environmentalConservationRecycling',
                legacyKey: '2_2429',
                children: [
                  {
                    title: 'Personal',
                    key: 'environmentalConservationRecyclingPersonal',
                    legacyKey: '2_2491',
                  },
                  {
                    title: 'Industrial',
                    key: 'environmentalConservationRecyclingIndustrial',
                    legacyKey: '2_2492',
                  },
                ],
              },
              {
                title: 'Restoration',
                key: 'environmentalConservationRestoration',
                legacyKey: '2_2430',
                children: [
                  {
                    title: 'Environmental remediation',
                    key: 'environmentalConservationRestorationRemediation',
                    legacyKey: '2_2493',
                  },
                  {
                    title: 'Land restoration',
                    key: 'environmentalConservationRestorationLand',
                    legacyKey: '2_2494',
                  },
                  {
                    title: 'Land rehabilitation',
                    key: 'environmentalConservationRehabilitationLand',
                    legacyKey: '2_2495',
                  },
                ],
              },
              {
                title: 'Waste',
                key: 'environmentalConservationWaste',
                legacyKey: '2_2431',
                children: [
                  {
                    title: 'Hazardous solid, liquid or other waste',
                    key: 'environmentalConservationWasteHazardous',
                    legacyKey: '2_2496',
                  },
                  {
                    title: 'Non-hazardous solid, liquid or other waste',
                    key: 'environmentalConservationWasteNonHazardous',
                    legacyKey: '2_2497',
                  },
                ],
              },
              {
                title: 'Environmental resilience',
                key: 'environmentalConservationResilience',
                legacyKey: '2_2432',
                children: [
                  {
                    title: 'Social',
                    key: 'environmentalConservationResilienceSocial',
                    legacyKey: '2_2498',
                  },
                  {
                    title: 'Economic',
                    key: 'environmentalConservationResilienceEconomic',
                    legacyKey: '2_2499',
                  },
                  {
                    title: 'Institutional',
                    key: 'environmentalConservationResilienceInstitutional',
                    legacyKey: '2_2500',
                  },
                  {
                    title: 'Physical',
                    key: 'environmentalConservationResiliencePhysical',
                    legacyKey: '2_2501',
                  },
                  {
                    title: 'Natural',
                    key: 'environmentalConservationResilienceNatural',
                    legacyKey: '2_2502',
                  },
                ],
              },
              {
                title: 'Environmental-threats management',
                key: 'environmentalConservationThreats',
                legacyKey: '2_2433',
                children: [
                  {
                    title: 'Droughts',
                    key: 'environmentalConservationThreatsDroughts',
                    legacyKey: '2_2517',
                  },
                  {
                    title: 'Fires',
                    key: 'environmentalConservationThreatsFires',
                    legacyKey: '2_2503',
                  },
                  {
                    title: 'Floods',
                    key: 'environmentalConservationThreatsFloods',
                    legacyKey: '2_2515',
                  },
                  {
                    title: 'Invasive species',
                    key: 'environmentalConservationThreatsInvasiveSpecies',
                    legacyKey: '2_2504',
                  },
                  {
                    title: 'Light',
                    key: 'environmentalConservationThreatsLight',
                    legacyKey: '2_2505',
                  },
                  {
                    title: 'Noise',
                    key: 'environmentalConservationThreatsNoise',
                    legacyKey: '2_2506',
                  },
                  {
                    title: 'Severe storm events',
                    key: 'environmentalConservationThreatsSevereStormEvents',
                    legacyKey: '2_2516',
                  },
                ],
              },
            ],
          },
          {
            title: 'Financial protection',
            key: 'financial',
            legacyKey: '2_2256',
            children: [
              {
                title: 'Social assistance',
                key: 'financialSocialAssistance',
                legacyKey: '2_2257',
              },
              {
                title: 'Minimum wage',
                key: 'financialMinimumWage',
                legacyKey: '2_2258',
              },
              {
                title: 'Wage disparity limitations',
                key: 'financialWageDisparity',
                legacyKey: '2_2259',
              },
              {
                title: 'Employment/unemployment insurance',
                key: 'financialEmploymentInsurance',
                legacyKey: '2_2260',
              },
              {
                title: 'Pensions and allowances',
                key: 'financialPensionsAllowances',
                legacyKey: '2_2261',
              },
              {
                title: 'Poverty reduction',
                key: 'financialPovertyReduction',
                legacyKey: '2_2262',
              },
              {
                title: 'Goods and services subsidy',
                key: 'financialGoodServices',
                legacyKey: '2_2373',
              },
              {
                title: 'Guaranteed minimum income',
                key: 'financialGuaranteedIncome',
                legacyKey: '2_2263',
              },
              {
                title: 'Other income re-distribution',
                key: 'financialIncomeRedistribution',
                legacyKey: '2_2264',
              },
              {
                title: 'Income reporting',
                key: 'financialIncomeReporting',
                legacyKey: '2_2265',
              },
              {
                title: 'Asset reporting',
                key: 'financialAssetReporting',
                legacyKey: '2_2266',
              },
            ],
          },
          {
            title: 'Food safety and security',
            key: 'foodSafety',
            legacyKey: '2_2013',
            children: [
              {
                title: 'Food access',
                key: 'foodSafetyAccess',
                legacyKey: '2_2267',
              },
              {
                title: 'Nutritional awareness and education',
                key: 'foodSafetyNutritionalAwareness',
                legacyKey: '2_2268',
              },
              { title: 'Food aid', key: 'foodSafetyAid', legacyKey: '2_2269' },
              {
                title: 'Food standards',
                key: 'foodSafetyStandards',
                legacyKey: '2_2270',
              },
              {
                title: 'Food import/export',
                key: 'foodSafetyImportExport',
                legacyKey: '2_2271',
              },
              {
                title: 'International food relief',
                key: 'foodSafetyInternationalRelief',
                legacyKey: '2_2272',
              },
            ],
          },
          {
            title: 'Government services',
            key: 'government',
            legacyKey: '2_2014',
            children: [
              {
                title: 'Identification, licensing and registration',
                key: 'governmentIdLicensingRegistration',
                legacyKey: '2_2273',
              },
              {
                title: 'Service awareness and education',
                key: 'governmentServiceAwareness',
                legacyKey: '2_2274',
              },
              {
                title: 'e-Government',
                key: 'governmentEgovernment',
                legacyKey: '2_2275',
              },
              {
                title: 'Service coordination',
                key: 'governmentServiceCoordination',
                legacyKey: '2_2276',
              },
              {
                title: 'Government corruption protections',
                key: 'governmentCorruptionProtection',
                legacyKey: '2_2277',
              },
              {
                title: 'Government inclusivity protections',
                key: 'governmentInclusivityProtection',
                legacyKey: '2_2374',
              },
              {
                title: 'Government accountability protections',
                key: 'governmentAccountabilityProtection',
                legacyKey: '2_2375',
              },
              {
                title: 'Elections administration',
                key: 'governmentElectionAdministration',
                legacyKey: '2_2376',
              },
            ],
          },
          {
            title: 'Housing',
            key: 'housing',
            legacyKey: '2_2015',
            children: [
              {
                title: 'Access to housing',
                key: 'housingAccess',
                legacyKey: '2_2278',
              },
              {
                title: 'Temporary housing',
                key: 'housingTemporary',
                legacyKey: '2_2279',
              },
              {
                title: 'Public/social housing',
                key: 'housingSocial',
                legacyKey: '2_2280',
              },
              {
                title: 'Affordable housing',
                key: 'housingAffordable',
                legacyKey: '2_2281',
              },
              {
                title: 'Housing assistance',
                key: 'housingAssistance',
                legacyKey: '2_2282',
              },
              { title: 'Housing mix', key: 'housingMix', legacyKey: '2_2283' },
              {
                title: 'Housing safety',
                key: 'housingSafety',
                legacyKey: '2_2284',
              },
              {
                title: 'Property rights',
                key: 'housingPropertyRights',
                legacyKey: '2_2285',
              },
            ],
          },
          {
            title: 'Infrastructure',
            key: 'infrastructure',
            legacyKey: '2_2017',
            children: [
              {
                title: 'Capital planning',
                key: 'infrastructureCapitalPlanning',
                legacyKey: '2_2286',
              },
              {
                title: 'Urban planning',
                key: 'infrastructureUrbanPlanning',
                legacyKey: '2_2287',
              },
              {
                title: 'Social infrastructure',
                key: 'infrastructureSocial',
                legacyKey: '2_2288',
              },
              {
                title: 'Broadband infrastructure',
                key: 'infrastructureBroadband',
                legacyKey: '2_2289',
              },
              {
                title: 'Transportation infrastructure',
                key: 'infrastructureTransportation',
                legacyKey: '2_2377',
              },
              {
                title: 'Waste management infrastructure',
                key: 'infrastructureWasteManagement',
                legacyKey: '2_2291',
              },
              {
                title: 'Water and sanitation infrastructure',
                key: 'infrastructureWaterSanitation',
                legacyKey: '2_2290',
              },
              {
                title: 'Sustainable development',
                key: 'infrastructureSustainableDevelopment',
                legacyKey: '2_2292',
              },
              {
                title: 'Capital spending',
                key: 'infrastructureCapitalSpending',
                legacyKey: '2_2293',
              },
              {
                title: 'Public financing',
                key: 'infrastructurePublicFinancing',
                legacyKey: '2_2294',
              },
              {
                title: 'Public/private partnerships',
                key: 'infrastructurePublicPrivatePartnerships',
                legacyKey: '2_2295',
              },
              {
                title: 'Private financing',
                key: 'infrastructurePrivateFinancing',
                legacyKey: '2_2296',
              },
              {
                title: 'Foreign investment',
                key: 'infrastructureForeignInvestment',
                legacyKey: '2_2297',
              },
              {
                title: 'Risk management',
                key: 'infrastructureRiskManagement',
                legacyKey: '2_2298',
              },
            ],
          },
          {
            title: 'Natural resources',
            key: 'naturalResources',
            legacyKey: '2_2405',
            children: [
              {
                title: 'Aquatic life',
                key: 'naturalResourcesAquatic',
                legacyKey: '2_2434',
                children: [
                  {
                    title: 'Fishing and fisheries',
                    key: 'naturalResourcesAquaticFisheries',
                    legacyKey: '2_2434',
                  },
                  {
                    title: 'Aquatic plants including coral',
                    key: 'naturalResourcesAquaticPlants',
                    legacyKey: '2_2434',
                  },
                ],
              },
              {
                title: 'Water',
                key: 'naturalResourcesWater',
                legacyKey: '2_2435',
              },
              {
                title: 'Forests',
                key: 'naturalResourcesForests',
                legacyKey: '2_2436',
                children: [
                  {
                    title: 'Timber industries',
                    key: 'naturalResourcesForestsTimber',
                    legacyKey: '2_2509',
                  },
                ],
              },
              {
                title: 'Ground-based resources',
                key: 'naturalResourcesGround',
                legacyKey: '2_2437',
                children: [
                  {
                    title: 'Metals',
                    key: 'naturalResourcesGroundMetals',
                    legacyKey: '2_2510',
                  },
                  {
                    title: 'Minerals',
                    key: 'naturalResourcesGroundMinerals',
                    legacyKey: '2_2511',
                  },
                  {
                    title: 'Petroleum',
                    key: 'naturalResourcesGroundPetroleum',
                    legacyKey: '2_2512',
                  },
                  {
                    title: 'Gas',
                    key: 'naturalResourcesGroundGas',
                    legacyKey: '2_2513',
                  },
                ],
              },
              {
                title: 'Wildlife',
                key: 'naturalResourcesWildlife',
                legacyKey: '2_2438',
              },
            ],
          },
          {
            title: 'Public safety and justice',
            key: 'publicSafety',
            legacyKey: '2_2019',
            children: [
              {
                title: 'Crime prevention',
                key: 'publicSafetyCrimePrevention',
                legacyKey: '2_2311',
              },
              {
                title: 'Crime reduction',
                key: 'publicSafetyCrimeReduction',
                legacyKey: '2_2312',
              },
              {
                title: 'Security services',
                key: 'publicSafetySecurityServices',
                legacyKey: '2_2313',
              },
              {
                title: 'National security',
                key: 'publicSafetyNationalSecurity',
                legacyKey: '2_2314',
              },
              {
                title: 'Counter-terrorism',
                key: 'publicSafetyCounterTerrorism',
                legacyKey: '2_2378',
              },
              {
                title: 'Military',
                key: 'publicSafetyMilitary',
                legacyKey: '2_2315',
              },
              {
                title: 'Policing',
                key: 'publicSafetyPolicing',
                legacyKey: '2_2316',
              },
              {
                title: 'Court system',
                key: 'publicSafetyCourtSystem',
                legacyKey: '2_2317',
              },
              {
                title: 'Restorative justice',
                key: 'publicSafetyRestorativeJustice',
                legacyKey: '2_2318',
              },
              {
                title: 'Youth justice',
                key: 'publicSafetyYouthJustice',
                legacyKey: '2_2319',
              },
              {
                title: 'Domestic violence support',
                key: 'publicSafetyDomesticViolence',
                legacyKey: '2_2320',
              },
              {
                title: 'Victim support',
                key: 'publicSafetyVictimSupport',
                legacyKey: '2_2321',
              },
              {
                title: 'Offender diversion and support',
                key: 'publicSafetyOffenderDiversion',
                legacyKey: '2_2322',
              },
              {
                title: 'Sentencing',
                key: 'publicSafetySentencing',
                legacyKey: '2_2323',
              },
              {
                title: 'Prison administration and management',
                key: 'publicSafetyPrisonAdministration',
                legacyKey: '2_2324',
              },
              {
                title: 'Probation and parole',
                key: 'publicSafetyProbationParole',
                legacyKey: '2_2325',
              },
              {
                title: 'Community corrections',
                key: 'publicSafetyCommunityCorrections',
                legacyKey: '2_2326',
              },
              {
                title: 'Reintegration',
                key: 'publicSafetyReintegration',
                legacyKey: '2_2327',
              },
            ],
          },
          {
            title: 'Recreation',
            key: 'recreation',
            legacyKey: '2_2328',
            children: [
              {
                title: 'Promotion of recreation',
                key: 'recreationPromotion',
                legacyKey: '2_2329',
              },
              {
                title: 'Public spaces',
                key: 'recreationPublicSpaces',
                legacyKey: '2_2330',
              },
              {
                title: 'Community/recreation programs',
                key: 'recreationCommunityRecreation',
                legacyKey: '2_2331',
              },
              {
                title: 'Private recreation',
                key: 'recreationPrivateRecreation',
                legacyKey: '2_2332',
              },
              {
                title: 'Competitive sport',
                key: 'recreationCompetitiveSport',
                legacyKey: '2_2333',
              },
            ],
          },
          {
            title: 'Transportation',
            key: 'transportation',
            legacyKey: '2_2021',
            children: [
              {
                title: 'Accessible transportation options',
                key: 'transportationAccessibleOptions',
                legacyKey: '2_2334',
              },
              {
                title: 'Congestion management',
                key: 'transportationCongestionManagement',
                legacyKey: '2_2335',
              },
              {
                title: 'Public transportation',
                key: 'transportationPublic',
                legacyKey: '2_2336',
              },
              {
                title: 'Safety - Pedestrian',
                key: 'transportationPedestrianSafety',
                legacyKey: '2_2337',
              },
              {
                title: 'Safety - Cycling',
                key: 'transportationCyclingSafety',
                legacyKey: '2_2338',
              },
              {
                title: 'Safety - Transportation',
                key: 'transportationSafety',
                legacyKey: '2_2339',
              },
              {
                title: 'Sustainable transportation options',
                key: 'transportationSustainableOptions',
                legacyKey: '2_2340',
              },
              {
                title: 'Transportation subsidies',
                key: 'transportationSubsidies',
                legacyKey: '2_2341',
              },
              {
                title: 'Road tolls',
                key: 'transportationRoadTolls',
                legacyKey: '2_2342',
              },
            ],
          },
        ],
      },
      {
        title: 'System arrangements',
        key: 'system',
        legacyKey: '2_2002',
        children: [
          {
            title: 'Governance arrangements',
            key: 'systemGovernance',
            legacyKey: '2_2024',
            children: [
              {
                title: 'Policy authority',
                key: 'systemGovernancePolicy',
                legacyKey: '2_2024',
                children: [
                  {
                    title:
                      'Centralization/decentralization of policy authority',
                    key: 'systemGovernancePolicyCentralization',
                    legacyKey: '2_2041',
                  },
                  {
                    title:
                      "Accountability of the state sector's role in financing & delivery",
                    key: 'systemGovernancePolicyAccountability',
                    legacyKey: '2_2042',
                  },
                  {
                    title:
                      "Stewardship of the non-state sector's role in financing & delivery",
                    key: 'systemGovernancePolicyStewardship',
                    legacyKey: '2_2043',
                  },
                  {
                    title:
                      'Decision-making authority about who is covered and what can or must be provided to them',
                    key: 'systemGovernancePolicyDecisionMaking',
                    legacyKey: '2_2044',
                  },
                  {
                    title: 'Corruption protections',
                    key: 'systemGovernancePolicyCorruptionProtections',
                    legacyKey: '2_2045',
                  },
                ],
              },
              {
                title: 'Organizational authority',
                key: 'systemOrganizational',
                legacyKey: '2_2028',
                children: [
                  {
                    title: 'Ownership',
                    key: 'systemOrganizationalOwnership',
                    legacyKey: '2_2046',
                  },
                  {
                    title: 'Management approaches',
                    key: 'systemOrganizationalManagement',
                    legacyKey: '2_2047',
                  },
                  {
                    title: 'Accreditation',
                    key: 'systemOrganizationalAccreditation',
                    legacyKey: '2_2048',
                  },
                  {
                    title: 'Networks/multi-institutional arrangements',
                    key: 'systemOrganizationalNetworks',
                    legacyKey: '2_2049',
                  },
                ],
              },
              {
                title: 'Commercial authority',
                key: 'systemCommercial',
                legacyKey: '2_2029',
                children: [
                  {
                    title: 'Licensure & registration requirements',
                    key: 'systemCommercialLicensure',
                    legacyKey: '2_2050',
                  },
                  {
                    title: 'Patents & profits',
                    key: 'systemCommercialPatentsProfits',
                    legacyKey: '2_2051',
                  },
                  {
                    title: 'Pricing & purchasing',
                    key: 'systemCommercialPricingPurchasing',
                    legacyKey: '2_2052',
                  },
                  {
                    title: 'Marketing',
                    key: 'systemCommercialMarketing',
                    legacyKey: '2_2053',
                  },
                  {
                    title: 'Sales',
                    key: 'systemCommercialSales',
                    legacyKey: '2_2054',
                  },
                  {
                    title: 'Commercial liability',
                    key: 'systemCommercialLiability',
                    legacyKey: '2_2055',
                  },
                ],
              },
              {
                title: 'Professional authority',
                key: 'systemProfessional',
                legacyKey: '2_2030',
                children: [
                  {
                    title: 'Training & licensure requirements',
                    key: 'systemProfessionalTrainingLicensure',
                    legacyKey: '2_2056',
                  },
                  {
                    title: 'Scope of practice',
                    key: 'systemProfessionalScopePractice',
                    legacyKey: '2_2057',
                  },
                  {
                    title: 'Setting of practice',
                    key: 'systemProfessionalSettingPractice',
                    legacyKey: '2_2058',
                  },
                  {
                    title: 'Continuing competence',
                    key: 'systemProfessionalContinuingCompetence',
                    legacyKey: '2_2059',
                  },
                  {
                    title: 'Quality & safety',
                    key: 'systemProfessionalQualitySafety',
                    legacyKey: '2_2060',
                  },
                  {
                    title: 'Professional liability',
                    key: 'systemProfessionalLiability',
                    legacyKey: '2_2061',
                  },
                  {
                    title: 'Strike/job action',
                    key: 'systemProfessionalStrikeJobAction',
                    legacyKey: '2_2062',
                  },
                ],
              },
              {
                title: 'Citizen & stakeholder involvement',
                key: 'systemCitizen',
                legacyKey: '2_2031',
                children: [
                  {
                    title:
                      'Citizen participation in policy & organizational decisions',
                    key: 'systemCitizenPolicy',
                    legacyKey: '2_2063',
                  },
                  {
                    title: 'Citizen participation in system monitoring',
                    key: 'systemCitizenSystemMonitoring',
                    legacyKey: '2_2064',
                  },
                  {
                    title: 'Citizen participation in service delivery',
                    key: 'systemCitizenServiceDelivery',
                    legacyKey: '2_2065',
                  },
                  {
                    title: 'Citizen complaints management',
                    key: 'systemCitizenComplaintsManagement',
                    legacyKey: '2_2066',
                  },
                  {
                    title:
                      'Stakeholder participation in policy & organizational decisions (or monitoring)',
                    key: 'systemCitizenStakeholderPolicy',
                    legacyKey: '2_2067',
                  },
                ],
              },
            ],
          },
          {
            title: 'Financial arrangements',
            key: 'financial',
            legacyKey: '2_2025',
            children: [
              {
                title: 'Financing systems',
                key: 'financingSystems',
                legacyKey: '2_2032',
                children: [
                  {
                    title: 'Taxation',
                    key: 'financialTaxation',
                    legacyKey: '2_2068',
                  },
                  {
                    title: 'Social insurance',
                    key: 'financialSocialHealthInsurance',
                    legacyKey: '2_2069',
                  },
                  {
                    title: 'Community-based insurance',
                    key: 'financialCommunityBasedHealthInsurance',
                    legacyKey: '2_2070',
                  },
                  {
                    title: 'Community loan funds',
                    key: 'financialCommunityLoanFunds',
                    legacyKey: '2_2071',
                  },
                  {
                    title: 'Private insurance',
                    key: 'financialPrivateInsurance',
                    legacyKey: '2_2072',
                  },
                  {
                    title: 'Social savings accounts (Individually financed)',
                    key: 'financialHealthSavingsAccountsIndividuallyFinanced',
                    legacyKey: '2_2073',
                  },
                  {
                    title: 'User fees',
                    key: 'financialUserFees',
                    legacyKey: '2_2074',
                  },
                  {
                    title: 'Donor contributions',
                    key: 'financialDonorContributions',
                    legacyKey: '2_2075',
                  },
                  {
                    title: 'Fundraising',
                    key: 'financialFundraising',
                    legacyKey: '2_2076',
                  },
                ],
              },
              {
                title: 'Funding organizations',
                key: 'fundingOrganization',
                legacyKey: '2_2033',
                children: [
                  {
                    title: 'Fee-for-service (Funding)',
                    key: 'fundingOrganizationServiceFees',
                    legacyKey: '2_2077',
                  },
                  {
                    title: 'Capitation (Funding)',
                    key: 'fundingOrganizationCapitation',
                    legacyKey: '2_2078',
                  },
                  {
                    title: 'Global budget',
                    key: 'fundingOrganizationGlobalBudget',
                    legacyKey: '2_2079',
                  },
                  {
                    title: 'Case-mix funding',
                    key: 'fundingOrganizationCaseMixFunding',
                    legacyKey: '2_2080',
                  },
                  {
                    title: 'Targeted payments/penalties (Funding)',
                    key: 'fundingOrganizationPaymentsPenalties',
                    legacyKey: '2_2082',
                  },
                ],
              },
              {
                title: 'Remunerating providers',
                key: 'remuneratingProvider',
                legacyKey: '2_2034',
                children: [
                  {
                    title: 'Fee-for-service (Remuneration)',
                    key: 'remuneratingProviderServiceFees',
                    legacyKey: '2_2083',
                  },
                  {
                    title: 'Capitation (Remuneration)',
                    key: 'remuneratingProviderCapitation',
                    legacyKey: '2_2084',
                  },
                  {
                    title: 'Salary',
                    key: 'remuneratingProviderSalary',
                    legacyKey: '2_2085',
                  },
                  {
                    title: 'Episode-based payment',
                    key: 'remuneratingProviderEpisodePayment',
                    legacyKey: '2_2086',
                  },
                  {
                    title: 'Fundholding',
                    key: 'remuneratingProviderFundholding',
                    legacyKey: '2_2087',
                  },
                  {
                    title: 'Targeted payments/penalties (Remuneration)',
                    key: 'remuneratingProviderPaymentPenalties',
                    legacyKey: '2_2089',
                  },
                ],
              },
              {
                title: 'Purchasing products & services',
                key: 'purchasing',
                legacyKey: '2_2035',
                children: [
                  {
                    title: 'Scope & nature of insurance plans',
                    key: 'purchasingScope',
                    legacyKey: '2_2090',
                  },
                  {
                    title:
                      'Lists of covered/reimbursed organizations, providers, services & products',
                    key: 'purchasingCoveredReimbursedOrganizations',
                    legacyKey: '2_2091',
                  },
                  {
                    title:
                      'Restrictions in coverage/reimbursement rates for organizations, providers, services & products',
                    key: 'purchasingRestrictions',
                    legacyKey: '2_2092',
                  },
                  {
                    title:
                      'Caps on coverage/reimbursement for organizations, providers, services & products',
                    key: 'purchasingCaps',
                    legacyKey: '2_2093',
                  },
                  {
                    title:
                      'Prior approval requirements for organizations, providers, services & products',
                    key: 'purchasingApprovalRequirements',
                    legacyKey: '2_2094',
                  },
                  {
                    title: 'Lists of substitutable services & products',
                    key: 'purchasingSubstitutes',
                    legacyKey: '2_2095',
                  },
                ],
              },
              {
                title: 'Incentivizing citizens',
                key: 'incentivizingCitizen',
                legacyKey: '2_2036',
                children: [
                  {
                    title: 'Premium (level & features)',
                    key: 'incentivizingCitizenPremium',
                    legacyKey: '2_2096',
                  },
                  {
                    title: 'Cost sharing',
                    key: 'incentivizingCitizenCostSharing',
                    legacyKey: '2_2097',
                  },
                  {
                    title:
                      'Social savings accounts (Third party contributions)',
                    key: 'incentivizingCitizenSavingsThirdPartyContributions',
                    legacyKey: '2_2098',
                  },
                  {
                    title:
                      'Targeted payments/penalties (Incentivizing citizens)',
                    key: 'incentivizingCitizenSavingsTargetedPaymentsPenalties',
                    legacyKey: '2_2099',
                  },
                ],
              },
            ],
          },
          {
            title: 'Delivery arrangements',
            key: 'deliveryArrangement',
            legacyKey: '2_2026',
            children: [
              {
                title: 'How services are designed to meet citizens’ needs',
                key: 'deliveryArrangementDesign',
                legacyKey: '2_2037',
                children: [
                  {
                    title: 'Availability of services',
                    key: 'deliveryArrangementDesignAvailability',
                    legacyKey: '2_2100',
                  },
                  {
                    title: 'Timely access to services',
                    key: 'deliveryArrangementDesignTimelyAcess',
                    legacyKey: '2_2101',
                  },
                  {
                    title: 'Culturally appropriate services',
                    key: 'deliveryArrangementDesignCulturallyAppropriate',
                    legacyKey: '2_2102',
                  },
                  {
                    title: 'Case management',
                    key: 'deliveryArrangementDesignCaseManagement',
                    legacyKey: '2_2103',
                  },
                  {
                    title: 'Package of services/service pathways',
                    key: 'deliveryArrangementDesignServicesPackage',
                    legacyKey: '2_2104',
                  },
                  {
                    title: 'Group services',
                    key: 'deliveryArrangementDesignGroup',
                    legacyKey: '2_2105',
                  },
                ],
              },
              {
                title: 'By whom services are provided',
                key: 'serviceProvider',
                legacyKey: '2_2038',
                children: [
                  {
                    title: 'System - Need, demand & supply',
                    key: 'serviceProviderAvailability',
                    legacyKey: '2_2106',
                  },
                  {
                    title: 'System - Recruitment, retention & transitions',
                    key: 'serviceProviderRecruitmentRetention',
                    legacyKey: '2_2107',
                  },
                  {
                    title: 'System - Performance management',
                    key: 'serviceProviderPerformanceManagement',
                    legacyKey: '2_2108',
                  },
                  {
                    title: 'Workplace conditions - Provider satisfaction',
                    key: 'serviceProviderWorkplaceConditionsProviderSatisfaction',
                    legacyKey: '2_2109',
                  },
                  {
                    title: 'Workplace conditions - Health & safety',
                    key: 'serviceProviderWorkplaceConditionsHealthSafety',
                    legacyKey: '2_2110',
                  },
                  {
                    title: 'Skill mix - Role performance',
                    key: 'serviceProviderSkillMixRolePerformance',
                    legacyKey: '2_2038',
                  },
                  {
                    title: 'Skill mix - Role expansion or extension',
                    key: 'serviceProviderSkillMixRoleExpansionOrExtension',
                    legacyKey: '2_2111',
                  },
                  {
                    title: 'Skill mix - Task shifting / substitution',
                    key: 'serviceProviderSkillMixTaskShiftingSubstitution',
                    legacyKey: '2_2113',
                  },
                  {
                    title: 'Skill mix - Multidisciplinary teams',
                    key: 'serviceProviderSkillMixMultidisciplinaryTeams',
                    legacyKey: '2_2114',
                  },
                  {
                    title: 'Skill mix - Volunteers or caregivers',
                    key: 'serviceProviderSkillMixVolunteersOrInformalFamilyCaregivers',
                    legacyKey: '2_2115',
                  },
                  {
                    title:
                      'Skill mix – Communication & case discussion between distant professionals',
                    key: 'serviceProviderSkillMixCommunicationDistantHealthProfessionals',
                    legacyKey: '2_2116',
                  },
                  {
                    title: 'Staff - Training',
                    key: 'serviceProviderStaffTraining',
                    legacyKey: '2_2117',
                  },
                  {
                    title: 'Staff - Support',
                    key: 'serviceProviderStaffSupport',
                    legacyKey: '2_2118',
                  },
                  {
                    title: 'Staff - Workload/workflow/intensity',
                    key: 'serviceProviderStaffWorkloadWorkflowIntensity',
                    legacyKey: '2_2119',
                  },
                  {
                    title: 'Staff - Continuity of services',
                    key: 'serviceProviderStaffContinuityOfCare',
                    legacyKey: '2_2120',
                  },
                  {
                    title: 'Staff/self - Shared decision-making',
                    key: 'serviceProviderStaffSelfSharedDecisionMaking',
                    legacyKey: '2_2121',
                  },
                  {
                    title: 'Self-management',
                    key: 'serviceProviderSelfManagement',
                    legacyKey: '2_2122',
                  },
                ],
              },
              {
                title: 'Where services are provided',
                key: 'serviceLocation',
                legacyKey: '2_2039',
                children: [
                  {
                    title: 'Site of service delivery',
                    key: 'serviceLocationSite',
                    legacyKey: '2_2123',
                  },
                  {
                    title: 'Physical structure, facilities & equipment',
                    key: 'serviceLocationPhysicalStructure',
                    legacyKey: '2_2124',
                  },
                  {
                    title: 'Organizational scale',
                    key: 'serviceLocationOrganizationalScale',
                    legacyKey: '2_2125',
                  },
                  {
                    title: 'Organizational structure',
                    key: 'serviceLocationOrganizationalStructure',
                    legacyKey: '2_2379',
                  },
                  {
                    title: 'Integration of services',
                    key: 'serviceLocationServiceIntegration',
                    legacyKey: '2_2126',
                  },
                  {
                    title: 'Continuity of services',
                    key: 'serviceLocationServiceContinuity',
                    legacyKey: '2_2127',
                  },
                  {
                    title: 'Outreach',
                    key: 'serviceLocationOutreach',
                    legacyKey: '2_2128',
                  },
                ],
              },
              {
                title: 'With what supports are services provided',
                key: 'serviceSupport',
                legacyKey: '2_2040',
                children: [
                  {
                    title: 'Record systems',
                    key: 'serviceSupportHealthRecordSystems',
                    legacyKey: '2_2129',
                  },
                  {
                    title: 'Electronic records',
                    key: 'serviceSupportElectronicHealthRecord',
                    legacyKey: '2_2130',
                  },
                  {
                    title:
                      'Other ICT that support individuals who provide services',
                    key: 'serviceSupportOtherICTThatSupportIndividuals',
                    legacyKey: '2_2131',
                  },
                  {
                    title: 'ICT that support individuals who receive services',
                    key: 'serviceSupportICTThatSupportIndividualsWhoReceiveCare',
                    legacyKey: '2_2132',
                  },
                  {
                    title: 'Financial monitoring and improvement systems',
                    key: 'serviceSupportFinancialMonitoring',
                    legacyKey: '2_2401',
                  },
                  {
                    title: 'Quality monitoring and improvement systems',
                    key: 'serviceSupportQualityMonitoringAndImprovementSystems',
                    legacyKey: '2_2134',
                  },
                  {
                    title: 'Safety monitoring and improvement systems',
                    key: 'serviceSupportSafetyMonitoringAndImprovementSystems',
                    legacyKey: '2_2348',
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
        legacyKey: '2_2003',
        children: [
          {
            title: 'Citizen-targeted strategy',
            key: 'implementationCitizenTargeted',
            legacyKey: '2_2135',
            children: [
              {
                title: 'Information or education provision',
                key: 'implementationCitizenTargetedInformationOrEducationProvision',
                legacyKey: '2_2138',
              },
              {
                title: 'Behaviour change support',
                key: 'implementationCitizenTargetedBehaviourChangeSupport',
                legacyKey: '2_2139',
              },
              {
                title: 'Skills and competencies development',
                key: 'implementationCitizenTargetedSkillsAndCompetenciesDevelopment',
                legacyKey: '2_2140',
              },
              {
                title: '(Personal) Support',
                key: 'implementationCitizenTargetedPersonalSupport',
                legacyKey: '2_2141',
              },
              {
                title: 'Communication and decision-making facilitation',
                key: 'implementationCitizenTargetedCommunicationAndDecisionMakingFacilitation',
                legacyKey: '2_2142',
              },
              {
                title: 'System participation',
                key: 'implementationCitizenTargetedSystemParticipation',
                legacyKey: '2_2143',
              },
            ],
          },
          {
            title: 'Provider-targeted strategy',
            key: 'implementationProviderTargeted',
            legacyKey: '2_2136',
            children: [
              {
                title: 'Educational material',
                key: 'implementationProviderTargetedEducationalMaterial',
                legacyKey: '2_2144',
              },
              {
                title: 'Educational meeting',
                key: 'implementationProviderTargetedEducationalMeeting',
                legacyKey: '2_2145',
              },
              {
                title: 'Educational outreach visit',
                key: 'implementationProviderTargetedEducationalOutreachVisit',
                legacyKey: '2_2146',
              },
              {
                title: 'Local opinion leader',
                key: 'implementationProviderTargetedLocalOpinionLeader',
                legacyKey: '2_2147',
              },
              {
                title: 'Local consensus process',
                key: 'implementationProviderTargetedLocalConsensusProcess',
                legacyKey: '2_2148',
              },
              {
                title: 'Peer review',
                key: 'implementationProviderTargetedPeerReview',
                legacyKey: '2_2149',
              },
              {
                title: 'Audit and feedback',
                key: 'implementationProviderTargetedAuditFeedback',
                legacyKey: '2_2150',
              },
              {
                title: 'Reminders and prompts',
                key: 'implementationProviderTargetedRemindersAndPrompts',
                legacyKey: '2_2151',
              },
              {
                title: 'Tailored intervention',
                key: 'implementationProviderTargetedTailoredIntervention',
                legacyKey: '2_2152',
              },
              {
                title: 'Citizen-mediated intervention',
                key: 'implementationProviderTargetedCitizenMediatedIntervention',
                legacyKey: '2_2380',
              },
              {
                title: 'Multi-faceted intervention',
                key: 'implementationProviderTargetedMultiFacetedIntervention',
                legacyKey: '2_2154',
              },
            ],
          },
          {
            title: 'Organization-targeted strategy',
            key: 'implementationOrganizationTargeted',
            legacyKey: '2_2137',
          },
        ],
      },
      {
        title: 'Sustainable Development Goals',
        key: 'sustainableDevelopmentGoals',
        legacyKey: '2_2382',
        children: [
          {
            title: '1. No poverty',
            key: 'sustainableDevelopmentGoalsNoPoverty',
            legacyKey: '2_2383',
          },
          {
            title: '2. Zero hunger',
            key: 'sustainableDevelopmentGoalsZeroHunger',
            legacyKey: '2_2384',
          },
          {
            title: '3. Good health and well-being (partially covered)',
            key: 'sustainableDevelopmentGoalsGoodHealth',
            legacyKey: '2_2385',
          },
          {
            title: '4. Quality education',
            key: 'sustainableDevelopmentGoalsQualityEducation',
            legacyKey: '2_2386',
          },
          {
            title: '5. Gender equality',
            key: 'sustainableDevelopmentGoalsGenderEquality',
            legacyKey: '2_2387',
          },
          {
            title: '6. Clean water and sanitation',
            key: 'sustainableDevelopmentGoalsCleanWater',
            legacyKey: '2_2388',
          },
          {
            title: '7. Affordable and clean energy',
            key: 'sustainableDevelopmentGoalsAffordableCleanEnergy',
            legacyKey: '2_2389',
          },
          {
            title: '8. Decent work and economic growth',
            key: 'sustainableDevelopmentGoalsDecentWorkEconomicGrowth',
            legacyKey: '2_2390',
          },
          {
            title: '9. Industry, innovation and infrastructure',
            key: 'sustainableDevelopmentGoalsIndustryInnovationInfrastructure',
            legacyKey: '2_2391',
          },
          {
            title: '10. Reduced inequalities',
            key: 'sustainableDevelopmentGoalsReducedInequalities',
            legacyKey: '2_2392',
          },
          {
            title: '11. Sustainable cities and communities',
            key: 'sustainableDevelopmentGoalsSustainableCitiesCommunities',
            legacyKey: '2_2393',
          },
          {
            title: '12. Responsible consumption and production',
            key: 'sustainableDevelopmentGoalsResponsibleConsumptionProduction',
            legacyKey: '2_2394',
          },
          {
            title: '13. Climate action',
            key: 'sustainableDevelopmentGoalsClimateAction',
            legacyKey: '2_2398',
          },
          {
            title: '14. Life below water',
            key: 'sustainableDevelopmentGoalsLifeBelowWater',
            legacyKey: '2_2399',
          },
          {
            title: '15. Life on land',
            key: 'sustainableDevelopmentGoalsLifeOnLand',
            legacyKey: '2_2400',
          },
          {
            title: '16. Peace, justice and strong institutions',
            key: 'sustainableDevelopmentGoalsPeaceJusticeStrongInstitutions',
            legacyKey: '2_2395',
          },
          {
            title: '17. Partnerships for the goals',
            key: 'sustainableDevelopmentGoalsPartnerships',
            legacyKey: '2_2396',
          },
        ],
      },
      {
        title: 'Perspectives',
        key: 'perspectives',
        legacyKey: '0_31',
        children: [
          {
            title: 'Populations',
            key: 'perspectivesPopulations',
            legacyKey: '31_5',
            children: [
              {
                title: 'Children and youth',
                key: 'perspectivesPopulationChildrenYouth',
                legacyKey: '31_164',
              },
              {
                title: 'Ethnocultural minorities',
                key: 'perspectivesPopulationEthnoculturalMinorities',
                legacyKey: '31_165',
              },
              {
                title: 'Linguistic minorities',
                key: 'perspectivesPopulationLinguisticMinorities',
                legacyKey: '31_167',
              },
              {
                title: 'Immigrants and refugees',
                key: 'perspectivesPopulationImigrantsRefugees',
                legacyKey: '31_168',
              },
              {
                title: 'Indigenous peoples',
                key: 'perspectivesPopulationIndigenousPeoples',
                legacyKey: '31_169',
              },
              {
                title: 'Individuals who are homeless or marginally housed',
                key: 'perspectivesPopulationHomeless',
                legacyKey: '31_170',
              },
              {
                title: 'LGBTQ',
                key: 'perspectivesPopulationLGBTQ',
                legacyKey: '31_171',
              },
              {
                title: 'Older adults',
                key: 'perspectivesPopulationOlderAdults',
                legacyKey: '31_166',
              },
              {
                title: 'People living in rural and remote communities',
                key: 'perspectivesPopulationRuralRemote',
                legacyKey: '31_172',
              },
              {
                title: 'People with disabilities',
                key: 'perspectivesPopulationDisabilities',
                legacyKey: '31_173',
              },
            ],
          },
          {
            title: 'Outcomes',
            key: 'outcomesProvider',
            legacyKey: '31_7',
            children: [
              {
                title: 'Economic',
                key: 'outcomesProviderEconomic',
                legacyKey: '31_175',
              },
              {
                title: 'Education',
                key: 'outcomesProviderEducation',
                legacyKey: '31_343',
              },
              {
                title: 'Employment',
                key: 'outcomesProviderEmployment',
                legacyKey: '31_344',
              },
              {
                title: 'Health',
                key: 'outcomesProviderHealth',
                legacyKey: '31_174',
              },
              {
                title: 'Housing',
                key: 'outcomesProviderHousing',
                legacyKey: '31_176',
              },
              {
                title: 'Other sector/area-specific outcomes',
                key: 'outcomesProviderOther',
                legacyKey: '31_381',
              },
              {
                title: 'Social inclusion',
                key: 'outcomesProviderSocialInclusion',
                legacyKey: '31_345',
              },
              {
                title: 'Well-being',
                key: 'outcomesProviderWellBeing',
                legacyKey: '31_346',
              },
            ],
          },
          {
            title: 'Disciplines',
            key: 'perspectivesDisciplines',
            legacyKey: '31_8',
            children: [
              {
                title: 'Anthropology',
                key: 'perspectivesDisciplineAnthropology',
                legacyKey: '31_180',
              },
              {
                title: 'Arts',
                key: 'perspectivesDisciplineArts',
                legacyKey: '31_179',
              },
              {
                title: 'Business administration',
                key: 'perspectivesDisciplineBusinessAdministration',
                legacyKey: '31_181',
              },
              {
                title: 'Communications',
                key: 'perspectivesDisciplineCommunication',
                legacyKey: '31_182',
              },
              {
                title: 'Criminology',
                key: 'perspectivesDisciplineCriminology',
                legacyKey: '31_183',
              },
              {
                title: 'Economics',
                key: 'perspectivesDisciplineEconomics',
                legacyKey: '31_184',
              },
              {
                title: 'Engineering',
                key: 'perspectivesDisciplineEngineering',
                legacyKey: '31_185',
              },
              {
                title: 'Geography',
                key: 'perspectivesDisciplineGeography',
                legacyKey: '31_186',
              },
              {
                title: 'Gerontology',
                key: 'perspectivesDisciplineGerontology',
                legacyKey: '31_187',
              },
              {
                title: 'History',
                key: 'perspectivesDisciplineHistory',
                legacyKey: '31_188',
              },
              {
                title: 'Law',
                key: 'perspectivesDisciplineLaw',
                legacyKey: '31_189',
              },
              {
                title: 'Philosophy',
                key: 'perspectivesDisciplinePhilosophy',
                legacyKey: '31_190',
              },
              {
                title: 'Political science',
                key: 'perspectivesDisciplinePoliticalScience',
                legacyKey: '31_191',
              },
              {
                title: 'Psychology',
                key: 'perspectivesDisciplinePsychology',
                legacyKey: '31_193',
              },
              {
                title: 'Public administration',
                key: 'perspectivesDisciplinePublicAdministration',
                legacyKey: '31_192',
              },
              {
                title: 'Social work',
                key: 'perspectivesDisciplineSocialWork',
                legacyKey: '31_194',
              },
              {
                title: 'Sociology',
                key: 'perspectivesDisciplineSociology',
                legacyKey: '31_193',
              },
            ],
          },
        ],
      },
    ],
  },
  checkedLMIC: {
    title: 'LMIC Focus',
    legacyKey: '0_9',
    items: [
      {
        title: 'Target of document',
        key: 'lmicTargetOfDocument',
        legacyKey: '9_1',
      },
      {
        title: 'At least one LMIC study included',
        key: 'lmicAtLeastOneStudy',
        legacyKey: '9_3',
      },
    ],
  },
  checkedTheme: {
    title: 'Theme',
    legacyKey: '0_15',
    items: [
      { title: 'Optimal aging', key: 'themeOptimalAging', legacyKey: '15_1' },
    ],
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
