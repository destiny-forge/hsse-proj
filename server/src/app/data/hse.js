const types = [
  {
    value: "Evidence briefs for policy",
    label: "Evidence briefs for policy",
    legacyKey: "10_1",
  },
  {
    value: "Overviews of systematic reviews",
    label: "Overviews of systematic reviews",
    legacyKey: "10_2",
  },
  {
    label: "Systematic reviews of effects",
    value: "Systematic reviews of effects",
    legacyKey: "10_3",
  },
  {
    value: "Systematic reviews addressing other questions",
    label: "Systematic reviews addressing other questions",
    legacyKey: "10_4",
  },
  {
    value: "Systematic reviews in progress",
    label: "Systematic reviews in progress",
    legacyKey: "10_5",
  },
  {
    value: "Systematic reviews being planned",
    label: "Systematic reviews being planned",
    legacyKey: "10_6",
  },
  {
    value: "Economic evaluations and costing studies",
    label: "Economic evaluations and costing studies",
    legacyKey: "10_7",
  },
  {
    value: "Health reform descriptions",
    label: "Health reform descriptions",
    legacyKey: "10_8",
  },
  {
    value: "Health system descriptions",
    label: "Health system descriptions",
    legacyKey: "10_9",
  },
  {
    value:
      "No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.",
    label:
      "No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.",
  },
];

const questionTypes = [
  {
    label: "Many",
    value: "Many",
  },
  {
    label: "Effectiveness",
    value: "Effectiveness",
  },
  {
    label: "Not effectiveness",
    value: "Not effectiveness",
  },
  {
    label:
      "Cost-effectiveness/benefit/utility analysis or description of costs",
    value:
      "Cost-effectiveness/benefit/utility analysis or description of costs",
  },
  {
    label: "Description",
    value: "Description",
  },
];

const tree = {
  checkedKeysHST: {
    title: "Health Systems Topic",
    items: [
      {
        title: "Governance arrangements",
        key: "governance",
        legacyKey: "2_1001",
        children: [
          {
            title: "Policy authority",
            key: "governancePolicy",
            legacyKey: "2_1005",
            children: [
              {
                title: "Centralization/decentralization of policy authority",
                key: "governancePolicyCentralization",
                legacyKey: "2_1022",
              },
              {
                title:
                  "Accountability of the state sector's role in financing & delivery",
                key: "governancePolicyAccountability",
                legacyKey: "2_1023",
              },
              {
                title:
                  "Stewardship of the non-state sector's role in financing & delivery",
                key: "governancePolicyStewardship",
                legacyKey: "2_1024",
              },
              {
                title:
                  "Decision-making authority about who is covered and what can or must be provided to them",
                key: "governancePolicyDecisionMaking",
                legacyKey: "2_1025",
              },
              {
                title: "Corruption protections",
                key: "governancePolicyCorruptionProtections",
                legacyKey: "2_1026",
              },
            ],
          },
          {
            title: "Organizational authority",
            key: "organization",
            legacyKey: "2_1006",
            children: [
              {
                title: "Ownership",
                key: "organizationOwnership",
                legacyKey: "2_1027",
              },
              {
                title: "Management approaches",
                key: "organizationManagement",
                legacyKey: "2_1028",
              },
              {
                title: "Accreditation",
                key: "organizationAccreditation",
                legacyKey: "2_1029",
              },
              {
                title: "Networks/multi-institutional arrangements",
                key: "organizationNetworks",
                legacyKey: "2_1030",
              },
            ],
          },
          {
            title: "Commercial authority",
            key: "commercial",
            legacyKey: "2_1007",
            children: [
              {
                title: "Licensure & registration requirements",
                key: "commercialLicense",
                legacyKey: "2_1031",
              },
              {
                title: "Patents & profits",
                key: "commercialPatentsAndProfits",
                legacyKey: "2_1032",
              },
              {
                title: "Pricing & purchasing",
                key: "commercialPricingAndPurchasing",
                legacyKey: "2_1033",
              },
              {
                title: "Marketing",
                key: "commercialMarketing",
                legacyKey: "2_1034",
              },
              {
                title: "Sales & dispensing",
                key: "commercialSalesAndDispensing",
                legacyKey: "2_1035",
              },
              {
                title: "Commercial liability",
                key: "commercialLiability",
                legacyKey: "2_1036",
              },
            ],
          },
          {
            title: "Professional authority",
            key: "professional",
            legacyKey: "2_1008",
            children: [
              {
                title: "Training & licensure requirements",
                key: "professionalTrainingAndLicense",
                legacyKey: "2_1037",
              },
              {
                title: "Scope of practice",
                key: "professionalScopeOfPractice",
                legacyKey: "2_1038",
              },
              {
                title: "Setting of practice",
                key: "settingOfPractice",
                legacyKey: "2_1039",
              },
              {
                title: "Continuing competence",
                key: "professionalContinuingCompetance",
                legacyKey: "2_1040",
              },
              {
                title: "Quality & safety",
                key: "professionalQualityAndSafety",
                legacyKey: "2_1041",
              },
              {
                title: "Professional liability",
                key: "professionalLiability",
                legacyKey: "2_1042",
              },
              {
                title: "Strike/job action",
                key: "professionalStrikeJobAction",
                legacyKey: "2_1132",
              },
            ],
          },
          {
            title: "Consumer & stakeholder involvement",
            key: "consumer",
            legacyKey: "2_1009",
            children: [
              {
                title:
                  "Consumer participation in policy & organizational decisions",
                key: "consumerPolicyDecisions",
                legacyKey: "2_1043",
              },
              {
                title: "Consumer participation in system monitoring",
                key: "consumerSystemMonitoring",
                legacyKey: "2_1044",
              },
              {
                title: "Consumer participation in service delivery",
                key: "consumerServiceDelivery",
                legacyKey: "2_1045",
              },
              {
                title: "Consumer complaints management",
                key: "consumerComplaintsManagement",
                legacyKey: "2_1046",
              },
              {
                title:
                  "Stakeholder participation in policy & organizational decisions (or monitoring)",
                key: "consumerStakeholder",
                legacyKey: "2_1047",
              },
            ],
          },
        ],
      },
      {
        title: "Financial arrangements",
        key: "financial",
        children: [
          {
            title: "Financing systems",
            key: "financialSystems",
            legacyKey: "2_1010",
            children: [
              {
                title: "Taxation",
                key: "financialTaxation",
                legacyKey: "2_1048",
              },
              {
                title: "Social health insurance",
                key: "financialSocialHealthInsurance",
                legacyKey: "2_1049",
              },
              {
                title: "Community-based health insurance",
                key: "financialCommunityBasedHealthInsurance",
                legacyKey: "2_1050",
              },
              {
                title: "Community loan funds",
                key: "financialCommunityLoanFunds",
                legacyKey: "2_1051",
              },
              {
                title: "Private insurance",
                key: "financialPrivateInsurance",
                legacyKey: "2_1052",
              },
              {
                title: "Health savings accounts (Individually financed)",
                key: "financialHealthSavingsAccountsIndividuallyFinanced",
                legacyKey: "2_1053",
              },
              {
                title: "User fees",
                key: "financialUserFees",
                legacyKey: "2_1054",
              },
              {
                title: "Donor contributions",
                key: "financialDonorContributions",
                legacyKey: "2_1055",
              },
              {
                title: "Fundraising",
                key: "financialFundraising",
                legacyKey: "2_1131",
              },
            ],
          },
          {
            title: "Funding organizations",
            key: "fundingOrganization",
            legacyKey: "2_1011",
            children: [
              {
                title: "Fee-for-service (Funding)",
                key: "fundingOrganizationServiceFees",
                legacyKey: "2_1056",
              },
              {
                title: "Capitation (Funding)",
                key: "fundingOrganizationCapitation",
                legacyKey: "2_1057",
              },
              {
                title: "Global budget",
                key: "fundingOrganizationGlobalBudget",
                legacyKey: "2_1058",
              },
              {
                title: "Case-mix funding",
                key: "fundingOrganizationCaseMixFunding",
                legacyKey: "2_1059",
              },
              {
                title: "Targeted payments/penalties (Funding)",
                key: "fundingOrganizationPaymentsPenalties",
                legacyKey: "2_1061",
              },
            ],
          },
          {
            title: "Remunerating providers",
            key: "remuneratingProvider",
            legacyKey: "2_1012",
            children: [
              {
                title: "Fee-for-service (Remuneration)",
                key: "remuneratingProviderServiceFees",
                legacyKey: "2_1062",
              },
              {
                title: "Capitation (Remuneration)",
                key: "remuneratingProviderCapitation",
                legacyKey: "2_1063",
              },
              {
                title: "Salary",
                key: "remuneratingProviderSalary",
                legacyKey: "2_1064",
              },
              {
                title: "Episode-based payment",
                key: "remuneratingProviderEpisodeBasedPayment",
                legacyKey: "2_1065",
              },
              {
                title: "Fundholding",
                key: "remuneratingProviderFundholding",
                legacyKey: "2_1066",
              },
              {
                title: "Targeted payments/penalties (Remuneration)",
                key: "remuneratingProviderPaymentPenalties",
                legacyKey: "2_1068",
              },
            ],
          },
          {
            title: "Purchasing products & services",
            key: "purchasing",
            legacyKey: "2_1013",
            children: [
              {
                title: "Scope & nature of insurance plans",
                key: "purchasingScope",
                legacyKey: "2_1069",
              },
              {
                title:
                  "Lists of covered/reimbursed organizations, providers, services & products",
                key: "purchasingCoveredReimbursedOrganizations",
                legacyKey: "2_1070",
              },
              {
                title:
                  "Restrictions in coverage/reimbursement rates for organizations, providers, services & products",
                key: "purchasingRestrictions",
                legacyKey: "2_1071",
              },
              {
                title:
                  "Caps on coverage/reimbursement for organizations, providers, services & products",
                key: "purchasingCaps",
                legacyKey: "2_1072",
              },
              {
                title:
                  "Prior approval requirements for organizations, providers, services & products",
                key: "purchasingApprovalRequirements",
                legacyKey: "2_1073",
              },
              {
                title: "Lists of substitutable services & products",
                key: "purchasingSubstitutes",
                legacyKey: "2_1074",
              },
            ],
          },
          {
            title: "Incentivizing consumers",
            key: "incentivizingConsumer",
            legacyKey: "2_1014",
            children: [
              {
                title: "Premium (level & features)",
                key: "incentivizingConsumerPremium",
                legacyKey: "2_1075",
              },
              {
                title: "Cost-sharing",
                key: "incentivizingConsumerCostSharing",
                legacyKey: "2_1076",
              },
              {
                title: "Health savings accounts (Third party contributions)",
                key: "incentivizingConsumerSavingsThirdPartyContributions",
                legacyKey: "2_1077",
              },
              {
                title: "Targeted payments/penalties (Incentivizing consumers)",
                key: "incentivizingConsumerSavingsTargetedPaymentsPenalties",
                legacyKey: "2_1078",
              },
            ],
          },
        ],
      },
      {
        title: "Delivery arrangements",
        key: "deliveryArrangement",
        legacyKey: "2_1003",
        children: [
          {
            title: "How care is designed to meet consumers' needs",
            key: "deliveryArrangementCare",
            legacyKey: "2_1015",
            children: [
              {
                title: "Availability of care",
                key: "deliveryArrangementCareAvailability",
                legacyKey: "2_1079",
              },
              {
                title: "Timely access to care",
                key: "deliveryArrangementCareTimelyAcess",
                legacyKey: "2_1080",
              },
              {
                title: "Culturally appropriate care",
                key: "deliveryArrangementCareCulturallyAppropriate",
                legacyKey: "2_1081",
              },
              {
                title: "Case management",
                key: "deliveryArrangementCareCaseManagement",
                legacyKey: "2_1082",
              },
              {
                title: "Package of care/care pathways/disease management",
                key: "deliveryArrangementCareDiseaseManagement",
                legacyKey: "2_1083",
              },
              {
                title: "Group care",
                key: "deliveryArrangementCareGroup",
                legacyKey: "2_1084",
              },
            ],
          },
          {
            title: "By whom care is provided",
            key: "careProvider",
            legacyKey: "2_1016",
            children: [
              {
                title: "System - Need, demand & supply",
                key: "careProviderSystemDemandSupply",
                legacyKey: "2_1085",
              },
              {
                title: "System - Recruitment, retention & transitions",
                key: "careProviderSystemRecruitmentRetention",
                legacyKey: "2_1086",
              },
              {
                title: "System - Performance management",
                key: "careProviderSystemPerformanceManagement",
                legacyKey: "2_1087",
              },
              {
                title: "Workplace conditions - Provider satisfaction",
                key: "careProviderWorkplaceConditionsProviderSatisfaction",
                legacyKey: "2_1088",
              },
              {
                title: "Workplace conditions - Health & safety",
                key: "careProviderWorkplaceConditionsHealthSafety",
                legacyKey: "2_1089",
              },
              {
                title: "Skill mix - Role performance",
                key: "careProviderSkillMixRolePerformance",
                legacyKey: "2_1090",
              },
              {
                title: "Skill mix - Role expansion or extension",
                key: "careProviderSkillMixRoleExpansionOrExtension",
                legacyKey: "2_1091",
              },
              {
                title: "Skill mix - Task shifting / substitution",
                key: "careProviderSkillMixTaskShiftingSubstitution",
                legacyKey: "2_1092",
              },
              {
                title: "Skill mix - Multidisciplinary teams",
                key: "careProviderSkillMixMultidisciplinaryTeams",
                legacyKey: "2_1093",
              },
              {
                title: "Skill mix - Volunteers or caregivers",
                key: "careProviderSkillMixVolunteersOrCaregivers",
                legacyKey: "2_1094",
              },
              {
                title:
                  "Skill mix - Communication & case discussion between distant health professionals",
                key:
                  "careProviderSkillMixCommunicationDistantHealthProfessionals",
                legacyKey: "2_1095",
              },
              {
                title: "Staff - Training",
                key: "careProviderStaffTraining",
                legacyKey: "2_1096",
              },
              {
                title: "Staff - Support",
                key: "careProviderStaffSupport",
                legacyKey: "2_1097",
              },
              {
                title: "Staff - Workload/workflow/intensity",
                key: "careProviderStaffWorkloadWorkflowIntensity",
                legacyKey: "2_1098",
              },
              {
                title: "Staff - Continuity of care",
                key: "careProviderStaffContinuityOfCare",
                legacyKey: "2_1099",
              },
              {
                title: "Staff/self - Shared decision-making",
                key: "careProviderStaffSelfSharedDecisionMaking",
                legacyKey: "2_1100",
              },
              {
                title: "Self-management",
                key: "careProviderSelfManagement",
                legacyKey: "2_1101",
              },
            ],
          },
          {
            title: "Where care is provided",
            key: "careSource",
            legacyKey: "2_1017",
            children: [
              {
                title: "Site of service delivery",
                key: "careSourceSiteOfServiceDelivery",
                legacyKey: "2_1102",
              },
              {
                title: "Physical structure, facilities & equipment",
                key: "careSourcePhysicalstructureFacilitiesEquipment",
                legacyKey: "2_1103",
              },
              {
                title: "Organizational scale",
                key: "careSourceOrganizationalScale",
                legacyKey: "2_1104",
              },
              {
                title: "Integration of services",
                key: "careSourceIntegrationOfServices",
                legacyKey: "2_1105",
              },
              {
                title: "Continuity of care",
                key: "careSourceContinuityOfCare",
                legacyKey: "2_1106",
              },
              {
                title: "Outreach",
                key: "careSourceOutreach",
                legacyKey: "2_1107",
              },
            ],
          },
          {
            title: "With what supports is care provided",
            key: "careSupport",
            legacyKey: "2_1018",
            children: [
              {
                title: "Health record systems",
                key: "careSupportHealthRecordSystems",
                legacyKey: "2_1108",
              },
              {
                title: "Electronic health record",
                key: "careSupportElectronicHealthRecord",
                legacyKey: "2_1109",
              },
              {
                title: "Other ICT that support individuals who provide care",
                key: "careSupportOtherICTThatSupportIndividuals",
                legacyKey: "2_1110",
              },
              {
                title: "ICT that support individuals who receive care",
                key: "careSupportICTThatSupportIndividualsWhoReceiveCare",
                legacyKey: "2_1111",
              },
              {
                title: "Quality monitoring and improvement systems",
                key: "careSupportQualityMonitoringAndImprovementSystems",
                legacyKey: "2_1112",
              },
              {
                title: "Safety monitoring and improvement systems",
                key: "careSupportSafetyMonitoringAndImprovementSystems",
                legacyKey: "2_1113",
              },
            ],
          },
        ],
      },
      {
        title: "Implementation strategies",
        key: "implementationStrategies",
        legacyKey: "2_1004",
        children: [
          {
            title: "Consumer-targeted strategy",
            key: "implementationConsumerTargetedStrategy",
            legacyKey: "2_1019",
            children: [
              {
                title: "Information or education provision",
                key: "implementationInformationOrEducationProvision",
                legacyKey: "2_1114",
              },
              {
                title: "Behaviour change support",
                key: "implementationBehaviourChangeSupport",
                legacyKey: "2_1115",
              },
              {
                title: "Skills and competencies development",
                key: "implementationSkillsAndCompetenciesDevelopment",
                legacyKey: "2_1116",
              },
              {
                title: "(Personal) Support",
                key: "implementationPersonalSupport",
                legacyKey: "2_1117",
              },
              {
                title: "Communication and decision-making facilitation",
                key: "implementationCommunicationAndDecisionMakingFacilitation",
                legacyKey: "2_1118",
              },
              {
                title: "System participation",
                key: "implementationSystemParticipation",
                legacyKey: "2_1119",
              },
            ],
          },
          {
            title: "Provider-targeted strategy",
            key: "providerStrategies",
            legacyKey: "2_1020",
            children: [
              {
                title: "Educational material",
                key: "providerStrategyEducationalMaterial",
                legacyKey: "2_1120",
              },
              {
                title: "Educational meeting",
                key: "providerStrategyEducationalMeeting",
                legacyKey: "2_1121",
              },
              {
                title: "Educational outreach visit",
                key: "providerStrategyEducationalOutreachVisit",
                legacyKey: "2_1122",
              },
              {
                title: "Local opinion leader",
                key: "providerStrategyLocalOpinionLeader",
                legacyKey: "2_1123",
              },
              {
                title: "Local consensus process",
                key: "providerStrategyLocalConsensusProcess",
                legacyKey: "2_1124",
              },
              {
                title: "Peer review",
                key: "providerStrategyPeerReview",
                legacyKey: "2_1125",
              },
              {
                title: "Audit and feedback",
                key: "providerStrategyAuditAndFeedback",
                legacyKey: "2_1126",
              },
              {
                title: "Reminders and prompts",
                key: "providerStrategyRemindersAndPrompts",
                legacyKey: "2_1127",
              },
              {
                title: "Tailored intervention",
                key: "providerStrategyTailoredIntervention",
                legacyKey: "2_1128",
              },
              {
                title: "Patient-mediated intervention",
                key: "providerStrategyPatientMediatedIntervention",
                legacyKey: "2_1129",
              },
              {
                title: "Multi-faceted intervention",
                key: "providerStrategyMultiFacetedIntervention",
                legacyKey: "2_1130",
              },
            ],
          },
          {
            title: "Organization-targeted strategy",
            key: "organizationStrategy",
            legacyKey: "2_1021",
          },
        ],
      },
    ],
  } /*
  checkedKeysCA: {
    title: 'Canadian Areas',
    items: [
      {
        title: 'Home and community care',
        key: 'canadianHomeAndCommunityCare',
      },
      {
        title: 'Mental health addiction services',
        key: 'canadianMentalHealthAndAddictionServices',
      },
      {
        title: 'Indigenous health (Fedral)',
        key: 'canadianIndigenousHealthFederal',
      },
      { title: 'Aging (emergent)', key: 'canadianAgingEmergent' },
    ],
  },*/,
  checkedDomain: {
    title: "Domains",
    legacyKey: "0_2",
    items: [
      {
        title: "Conditions",
        key: "conditions",
        legacyKey: "2_1",
        children: [
          {
            title: "Infectious diseases",
            key: "conditionInfectiousDiseases",
            legacyKey: "2_5",
            children: [
              { title: "HIV/AIDS", key: "conditionHIVAIDS", legacyKey: "2_22" },
              {
                title: "Tuberculosis",
                key: "conditionTuberculosis",
                legacyKey: "2_23",
              },
              { title: "Malaria", key: "conditionMalaria", legacyKey: "2_24" },
              {
                title: "Diarrhoeal disease",
                key: "conditionDiarrhoealDisease",
                legacyKey: "2_25",
              },
              {
                title: "Lower respiratory infections",
                key: "conditionLowerRespiratoryInfections",
                legacyKey: "2_26",
              },
            ],
          },
          {
            title: "Non-communicable diseases",
            key: "conditionNonCommunicableDiseases",
            legacyKey: "2_6",
            children: [
              { title: "Cancer", key: "conditionCancer", legacyKey: "2_27" },
              {
                title: "Cardiovascular disease",
                key: "conditionCardiovascularDisease",
                legacyKey: "2_28",
              },
              {
                title: "Diabetes",
                key: "conditionDiabetes",
                legacyKey: "2_29",
              },
              {
                title: "Alzheimer and other dementias",
                key: "conditionAlzheimerAndOtherDementias",
                legacyKey: "2_30",
              },
              {
                title: "Chronic obstructive pulmonary disease",
                key: "conditionsChronicObstructivePulmonaryDisease",
                legacyKey: "2_31",
              },
            ],
          },
          {
            title: "Other",
            key: "conditionOther",
            legacyKey: "2_7",
            children: [
              {
                title: "Accidents/injuries",
                key: "conditionOtherAccidentsInjuries",
                legacyKey: "2_33",
              },
              {
                title: "Maternal and child health",
                key: "conditionOtherMaternalAndChildHealth",
                legacyKey: "2_32",
              },
              {
                title: "Mental health and addictions",
                key: "conditionMentalHealthAddictions",
                legacyKey: "2_34",
              },
              {
                title: "Oral health",
                key: "conditionOtherOralHealth",
                legacyKey: "2_39",
              },
            ],
          },
        ],
      },
      {
        title: "Technologies",
        key: "conditionTechnologies",
        legacyKey: "2_2",
        children: [
          { title: "Drugs", key: "conditionTechnologyDrugs", legacyKey: "2_8" },
          {
            title: "Devices",
            key: "conditionTechnologyDevices",
            legacyKey: "2_9",
          },
          {
            title: "Diagnostics",
            key: "conditionTechnologyDiagnostics",
            legacyKey: "2_10",
          },
          {
            title: "Surgery",
            key: "conditionTechnologySurgery",
            legacyKey: "2_11",
          },
        ],
      },
      {
        title: "Sectors",
        key: "conditionSectors",
        legacyKey: "2_3",
        children: [
          {
            title: "Home and community care",
            key: "conditionSectorPrimaryCare",
            legacyKey: "2_13",
          },
          {
            title: "Primary care",
            key: "primaryCare",
            legacyKey: "2_12",
          },
          {
            title: "Specialty care",
            key: "conditionSectorSpecialtyCare",
            legacyKey: "2_14",
          },
          {
            title: "Rehabilitation care",
            key: "conditionSectorRehabilitationCare",
            legacyKey: "2_15",
          },
          {
            title: "Long-term care",
            key: "conditionSectorLongTermCare",
            legacyKey: "2_16",
          },
          {
            title: "Public health",
            key: "conditionSectorPublicHealth",
            legacyKey: "2_37",
          },
        ],
      },
      {
        title: "Providers",
        key: "conditionProviders",
        legacyKey: "2_4",
        children: [
          {
            title: "Physicians",
            key: "conditionProviderPhysician",
            legacyKey: "2_17",
            children: [
              {
                title: "Generalists",
                key: "conditionProviderGeneralist",
                legacyKey: "2_35",
              },
              {
                title: "Specialists",
                key: "conditionProviderSpecialist",
                legacyKey: "2_36",
              },
            ],
          },
          {
            title: "Nurses",
            key: "conditionProviderNurse",
            legacyKey: "2_18",
          },
          {
            title: "Pharmacists",
            key: "conditionProviderPharmacist",
            legacyKey: "2_19",
          },
          {
            title: "Allied health professionals",
            key: "conditionProviderAlliedHealthProfessional",
            legacyKey: "2_20",
          },
          {
            title: "Lay/community health workers",
            key: "conditionProviderLayCommunityCealthWorker",
            legacyKey: "2_21",
          },
          {
            title: "Informal/family caregivers",
            key: "conditionProviderInformalFamilyCaregivers",
            legacyKey: "2_38",
          },
        ],
      },
    ],
  },
  checkedLMIC: {
    title: "LMIC Focus",
    items: [
      {
        title: "Target of document",
        key: "lmicTargetOfDocument",
        legacyKey: "9_1",
      },
      {
        title: "At least one LMIC author",
        key: "lmicAtLeastOneAuthor",
        legacyKey: "9_2",
      },
      {
        title: "At least one LMIC study included",
        key: "lmicAtLeastOneStudy",
        legacyKey: "9_3",
      },
    ],
  } /*
  checkedProvince: {
    title: 'Province Focus',
    items: [
      { title: 'Federal/national', key: 'territoryFederalNational' },
      { title: 'Alberta', key: 'territoryAlberta' },
      { title: 'British Columbia', key: 'territoryBritishColumbia' },
      { title: 'Manitoba', key: 'territoryManitoba' },
      { title: 'New Brunswick', key: 'territoryNewBrunswick' },
      {
        title: 'Newfoundland and Labrador',
        key: 'territoryNewFoundlandAndLabrador',
      },
      {
        title: 'Northwest Territories',
        key: 'territoryNorthwestTerritories',
      },
      { title: 'Nova Scotia', key: 'territoryNovaScotia' },
      { title: 'Nunavut', key: 'territoryNunavut' },
      { title: 'Ontario', key: 'territoryOntario' },
      { title: 'Prince Edward Island', key: 'territoryPrinceEdwardIsland' },
      { title: 'Quebec', key: 'territoryQuebec' },
      { title: 'Saskatchewan', key: 'territorySaskatchewan' },
      { title: 'Yukon', key: 'territoryYukon' },
    ],
  },*/,
  checkedTheme: {
    title: "Theme",
    legacyKey: "0_15",
    items: [
      { title: "Optimal aging", key: "themeOptimalAging", legacyKey: "15_1" },
      {
        title: "Health promotion/primary prevention",
        key: "themeHealthPromotionPrimaryPrevention",
        legacyKey: "15_2",
      },
    ],
  },
  checkedPopulation: {
    title: "Population",
    items: [
      { title: "Children and youth", key: "populationChildrenAndYouth" },
      { title: "Indigenous peoples", key: "populationIndigenousPeoples" },
      { title: "Old Adults", key: "populationOldAdults" },
    ],
    legacyKey: "31_5",
  } /*
  checkedOPA: {
    title: 'Ontario Priority Areas',
    items: [
      {
        title: 'Community-based care',
        key: 'ontarioPriorityCommunityBasedCare',
      },
      {
        title: 'Health system performance and sustainability',
        key: 'ontarioPriorityHealthSystemPerformanceAndSustainability',
      },
      {
        title: 'Healthy living, with a focus on tobacco control',
        key: 'ontarioPriorityHealthyLivingWithAFocusOnTobaccoControl',
      },
      {
        title: 'Mental health and addictions',
        key: 'ontarioPriorityMentalHealthAndAddictions',
      },
      { title: 'Nursing research', key: 'ontarioPriorityNursingResearch' },
      {
        title: 'Primary care reform',
        key: 'ontarioPriorityPrimaryCareReform',
      },
      {
        title: 'Quality improvement and safety',
        key: 'ontarioPriorityQualityImprovementAndSafety',
      },
      { title: 'Seniors’ care', key: 'ontarioPrioritySeniorsCare' },
      {
        title: 'Vulnerable and special health needs populations',
        key: 'ontarioPriorityVulnerableAndSpecialHealthNeedsPopulations',
      },
      { title: 'Women’s health', key: 'ontarioPriorityWomensHealth' },
    ],
  },*/,
};

module.exports = {
  types,
  questionTypes,
  tree,
};
