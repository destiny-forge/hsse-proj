export const treeData = {
  checkedKeysHST: [
    {
      title: 'Government arrangement',
      key: 'government',
      children: [
        {
          title: 'Policy authority',
          key: 'governmentPolicy',
          children: [
            {
              title: 'Centralization/decentralization of policy authority',
              key: 'governmentPolicyCentralization'
            },
            {
              title:
                "Accountability of the state sector's role in financing & delivery",
              key: 'governmentPolicyAccountability'
            },
            {
              title: "Stewardship of the non-state sector's role in financing & delivery",
              key: 'governmentPolicyStewardship'
            },
            {
              title: 'Decision-making authority about who is covered and what can or must be provided to them',
              key: 'governmentPolicyDecisionMaking'
            },
            {
              title: 'Corruption protections',
              key: 'governmentPolicyCorruptionProtections'
            }
          ]
        },
        {
          title: 'Organizational authority',
          key: 'organization',
          children: [
            { title: 'Ownership', key: 'organizationOwnership' },
            {
              title: 'Management approaches',
              key: 'organizationManagement'
            },
            { title: 'Accreditation', key: 'organizationAccreditation' },
            {
              title: 'Networks/multi-institutional arrangements',
              key: 'organizationNetworks'
            }
          ]
        },
        {
          title: 'Commercial authority',
          key: 'commercial',
          children: [
            {
              title: 'Licensure & registration requirements',
              key: 'commercialLicense'
            },
            {
              title: 'Patents & profits',
              key: 'commercialPatentsAndProfits'
            },
            {
              title: 'Pricing & purchasing',
              key: 'commercialPricingAndPurchasing'
            },
            { title: 'Marketing', key: 'commercialMarketing' },
            {
              title: 'Sales & dispensing',
              key: 'commercialSalesAndDispensing'
            },
            { title: 'Commercial liability', key: 'commercialLiability' }
          ]
        },
        {
          title: 'Professional authority',
          key: 'professional',
          children: [
            {
              title: 'Training & licensure requirements',
              key: 'professionalTrainingAndLicense'
            },
            {
              title: 'Scope of practice',
              key: 'professionalScopeOfPractice'
            },
            { title: 'Setting of practice', key: 'settingOfPractice' },
            {
              title: 'Continuing competence',
              key: 'professionalContinuingCompetance'
            },
            {
              title: 'Quality & safety',
              key: 'professionalQualityAndSafety'
            },
            {
              title: 'Professional liability',
              key: 'professionalLiability'
            },
            {
              title: 'Strike/job action',
              key: 'professionalStrikeJobAction'
            }
          ]
        },
        {
          title: 'Consumer & stakeholder involvement',
          key: 'consumer',
          children: [
            {
              title:
                'Consumer participation in policy & organizational decisions',
              key: 'consumerPolicyDecisions'
            },
            {
              title: 'Consumer participation in system monitoring',
              key: 'consumerSystemMonitoring'
            },
            {
              title: 'Consumer participation in service delivery',
              key: 'consumerServiceDelivery'
            },
            {
              title: 'Consumer complaints management',
              key: 'consumerComplaintsManagement'
            },
            {
              title:
                'Stakeholder participation in policy & organizational decisions (or monitoring)',
              key: 'consumerStakeholder'
            }
          ]
        }
      ]
    },
    {
      title: 'Financial arrangements',
      key: 'financial',
      children: [
        {
          title: 'Financing systems',
          key: 'financialSystems',
          children: [
            { title: 'Taxation', key: 'financialTaxation' },
            {
              title: 'Social health insurance',
              key: 'financialSocialHealthInsurance'
            },
            {
              title: 'Community-based health insurance',
              key: 'financialCommunityBasedHealthInsurance'
            },
            {
              title: 'Community loan funds',
              key: 'financialCommunityLoanFunds'
            },
            {
              title: 'Private insurance',
              key: 'financialPrivateInsurance'
            },
            {
              title: 'Health savings accounts (Individually financed)',
              key: 'financialHealthSavingsAccountsIndividuallyFinanced'
            },
            { title: 'User fees', key: 'financialUserFees' },
            {
              title: 'Donor contributions',
              key: 'financialDonorContributions'
            },
            { title: 'Fundraising', key: 'financialFundraising' }
          ]
        },
        {
          title: 'Funding organizations',
          key: 'fundingOrganization',
          children: [
            {
              title: 'Fee-for-service (Funding)',
              key: 'fundingOrganizationServiceFees'
            },
            {
              title: 'Capitation (Funding)',
              key: 'fundingOrganizationCapitation'
            },
            {
              title: 'Global budget',
              key: 'fundingOrganizationGlobalBudget'
            },
            {
              title: 'Prospective payment (Funding)',
              key: 'fundingOrganizationProspectivePayment'
            },
            {
              title: 'Indicative budgets (Funding)',
              key: 'fundingOrganizationIndicativeBudgets'
            },
            {
              title: 'Targeted payments/penalties (Funding)',
              key: 'fundingOrganizationPaymentsPenalties'
            }
          ]
        },
        {
          title: 'Remunerating providers',
          key: 'remuneratingProvider',
          children: [
            {
              title: 'Fee-for-service (Remuneration)',
              key: 'remuneratingProviderServiceFees'
            },
            {
              title: 'Capitation (Remuneration)',
              key: 'remuneratingProviderCapitation'
            },
            { title: 'Salary', key: 'remuneratingProviderSalary' },
            {
              title: 'Prospective payment (Remuneration)',
              key: 'remuneratingProviderProspectivePayment'
            },
            {
              title: 'Fundholding',
              key: 'remuneratingProviderFundholding'
            },
            {
              title: 'Indicative budgets (Remuneration)',
              key: 'remuneratingProviderIndicativeBudgets'
            },
            {
              title: 'Targeted payments/penalties (Remuneration)',
              key: 'remuneratingProviderPaymentPenalties'
            }
          ]
        },
        {
          title: 'Purchasing products & services',
          key: 'purchasing',
          children: [
            {
              title: 'Scope & nature of insurance plans',
              key: 'purchasingScope'
            },
            {
              title:
                'Lists of covered/reimbursed organizations, providers, services & products',
              key: 'purchasingCoveredReimbursedOrganizations'
            },
            {
              title:
                'Restrictions in coverage/reimbursement rates for organizations, providers, services & products',
              key: 'purchasingRestrictions'
            },
            {
              title:
                'Caps on coverage/reimbursement for organizations, providers, services & products',
              key: 'purchasingCaps'
            },
            {
              title:
                'Prior approval requirements for organizations, providers, services & products',
              key: 'purchasingApprovalRequirements'
            },
            {
              title: 'Lists of substitutable services & products',
              key: 'purchasingSubstitutes'
            }
          ]
        },
        {
          title: 'Incentivizing consumers',
          key: 'incentivizingConsumer',
          children: [
            {
              title: 'Premium (level & features)',
              key: 'incentivizingConsumerPremium'
            },
            {
              title: 'Cost-sharing',
              key: 'incentivizingConsumerCostSharing'
            },
            {
              title: 'Health savings accounts (Third party contributions)',
              key: 'incentivizingConsumerSavingsThirdPartyContributions'
            },
            {
              title: 'Targeted payments/penalties (Incentivizing consumers)',
              key: 'incentivizingConsumerSavingsTargetedPaymentsPenalties'
            }
          ]
        }
      ]
    },
    {
      title: 'Delivery arrangements',
      key: 'deliveryArrangement',
      children: [
        {
          title: "How care is designed to meet consumers' needs",
          key: 'deliveryArrangementCare',
          children: [
            {
              title: 'Availability of care',
              key: 'deliveryArrangementCareAvailability'
            },
            {
              title: 'Timely access to care',
              key: 'deliveryArrangementCareTimelyAcess'
            },
            {
              title: 'Culturally appropriate care',
              key: 'deliveryArrangementCareCulturallyAppropriate'
            },
            {
              title: 'Case management',
              key: 'deliveryArrangementCareCaseManagement'
            },
            {
              title: 'Package of care/care pathways/disease management',
              key: 'deliveryArrangementCareDiseaseManagement'
            },
            { title: 'Group care', key: 'deliveryArrangementCareGroup' }
          ]
        },
        {
          title: 'By whom care is provided',
          key: 'careProvider',
          children: [
            {
              title: 'System - Need, demand & supply',
              key: 'careProviderSystemDemandSupply'
            },
            {
              title: 'System - Recruitment, retention & transitions',
              key: 'careProviderSystemRecruitmentRetention'
            },
            {
              title: 'System - Performance management',
              key: 'careProviderSystemPerformanceManagement'
            },
            {
              title: 'Workplace conditions - Provider satisfaction',
              key: 'careProviderWorkplaceConditionsProviderSatisfaction'
            },
            {
              title: 'Workplace conditions - Health & safety',
              key: 'careProviderWorkplaceConditionsHealthSafety'
            },
            {
              title: 'Skill mix - Role performance',
              key: 'careProviderSkillMixRolePerformance'
            },
            {
              title: 'Skill mix - Role expansion or extension',
              key: 'careProviderSkillMixRoleExpansionOrExtension'
            },
            {
              title: 'Skill mix - Task shifting / substitution',
              key: 'careProviderSkillMixTaskShiftingSubstitution'
            },
            {
              title: 'Skill mix - Multidisciplinary teams',
              key: 'careProviderSkillMixMultidisciplinaryTeams'
            },
            {
              title: 'Skill mix - Volunteers or informal/family caregivers',
              key: 'careProviderSkillMixVolunteersOrInformalFamilyCaregivers'
            },
            {
              title:
                'Skill mix - Communication & case discussion between distant health professionals',
              key: 'careProviderSkillMixCommunicationDistantHealthProfessionals'
            },
            {
              title: 'Staff - Training',
              key: 'careProviderStaffTraining'
            },
            { title: 'Staff - Support', key: 'careProviderStaffSupport' },
            {
              title: 'Staff - Workload/workflow/intensity',
              key: 'careProviderStaffWorkloadWorkflowIntensity'
            },
            {
              title: 'Staff - Continuity of care',
              key: 'careProviderStaffContinuityOfCare'
            },
            {
              title: 'Staff/self - Shared decision-making',
              key: 'careProviderStaffSelfSharedDecisionMaking'
            },
            { title: 'Self-management', key: 'careProviderSelfManagement' }
          ]
        },
        {
          title: 'Where care is provided',
          key: 'careSource',
          children: [
            {
              title: 'Site of service delivery',
              key: 'careSourceSiteOfServiceDelivery'
            },
            {
              title: 'Physical structure, facilities & equipment',
              key: 'careSourcePhysicalstructureFacilitiesEquipment'
            },
            {
              title: 'Organizational scale',
              key: 'careSourceOrganizationalScale'
            },
            {
              title: 'Integration of services',
              key: 'careSourceIntegrationOfServices'
            },
            {
              title: 'Continuity of care',
              key: 'careSourceContinuityOfCare'
            },
            { title: 'Outreach', key: 'careSourceOutreach' }
          ]
        },
        {
          title: 'With what supports is care provided',
          key: 'careSupport',
          children: [
            {
              title: 'Health record systems',
              key: 'careSupportHealthRecordSystems'
            },
            {
              title: 'Electronic health record',
              key: 'careSupportElectronicHealthRecord'
            },
            {
              title: 'Other ICT that support individuals who provide care',
              key: 'careSupportOtherICTThatSupportIndividuals'
            },
            {
              title: 'ICT that support individuals who receive care',
              key: 'careSupportICTThatSupportIndividualsWhoReceiveCare'
            },
            {
              title: 'Quality monitoring and improvement systems',
              key: 'careSupportQualityMonitoringAndImprovementSystems'
            },
            {
              title: 'Safety monitoring and improvement systems',
              key: 'careSupportSafetyMonitoringAndImprovementSystems'
            }
          ]
        }
      ]
    },
    {
      title: 'Implementation strategies',
      key: 'implementationStrategies',
      children: [
        {
          title: 'Consumer-targeted strategy',
          key: 'implementationConsumerTargetedStrategy',
          children: [
            {
              title: 'Information or education provision',
              key: 'implementationInformationOrEducationProvision'
            },
            {
              title: 'Behaviour change support',
              key: 'implementationBehaviourChangeSupport'
            },
            {
              title: 'Skills and competencies development',
              key: 'implementationSkillsAndCompetenciesDevelopment'
            },
            {
              title: '(Personal) Support',
              key: 'implementationPersonalSupport'
            },
            {
              title: 'Communication and decision-making facilitation',
              key: 'implementationCommunicationAndDecisionMakingFacilitation'
            },
            {
              title: 'System participation',
              key: 'implementationSystemParticipation'
            }
          ]
        },
        {
          title: 'Provider-targeted strategy',
          key: 'providerStrategies',
          children: [
            {
              title: 'Educational material',
              key: 'providerStrategyEducationalMaterial'
            },
            {
              title: 'Educational meeting',
              key: 'providerStrategyEducationalMeeting'
            },
            {
              title: 'Educational outreach visit',
              key: 'providerStrategyEducationalOutreachVisit'
            },
            {
              title: 'Local opinion leader',
              key: 'providerStrategyLocalOpinionLeader'
            },
            {
              title: 'Local consensus process',
              key: 'providerStrategyLocalConsensusProcess'
            },
            { title: 'Peer review', key: 'providerStrategyPeerReview' },
            {
              title: 'Audit and feedback',
              key: 'providerStrategyAuditAndFeedback'
            },
            {
              title: 'Reminders and prompts',
              key: 'providerStrategyRemindersAndPrompts'
            },
            {
              title: 'Tailored intervention',
              key: 'providerStrategyTailoredIntervention'
            },
            {
              title: 'Patient-mediated intervention',
              key: 'providerStrategyPatientMediatedIntervention'
            },
            {
              title: 'Multi-faceted intervention',
              key: 'providerStrategyMultiFacetedIntervention'
            }
          ]
        },
        {
          title: 'Organization-targeted strategy',
          key: 'organizationStrategy'
        }
      ]
    }
  ],
  checkedKeysCA: [
    {
      title: 'Home and community care',
      key: 'canadianHomeAndCommunityCare'
    },
    {
      title: 'Mental health addiction services',
      key: 'canadianMentalHealthAndAddictionServices'
    },
    {
      title: 'Indigenous health (Fedral)',
      key: 'canadianIndigenousHealthFederal'
    },
    { title: 'Aging (emergent)', key: 'canadianAgingEmergent' }
  ],
  checkedDomain: [
    {
      title: 'Conditions',
      key: 'conditions',
      children: [
        {
          title: 'Infectious diseases',
          key: 'conditionInfectiousDiseases',
          children: [
            { title: 'HIV/AIDS', key: 'conditionHIVAIDS' },
            { title: 'Tuberculosis', key: 'conditionTuberculosis' },
            { title: 'Malaria', key: 'conditionMalaria' },
            {
              title: 'Diarrhoeal disease',
              key: 'conditionDiarrhoealDisease'
            },
            {
              title: 'Lower respiratory infections',
              key: 'conditionLowerRespiratoryInfections'
            }
          ]
        },
        {
          title: 'Non-communicable diseases',
          key: 'conditionNonCommunicableDiseases',
          children: [
            { title: 'Cancer', key: 'conditionCancer' },
            {
              title: 'Cardiovascular disease',
              key: 'conditionCardiovascularDisease'
            },
            { title: 'Diabetes', key: 'conditionDiabetes' },
            {
              title: 'Alzheimer and other dementias',
              key: 'conditionAlzheimerAndOtherDementias'
            },
            {
              title: 'Chronic obstructive pulmonary disease',
              key: 'conditionsChronicObstructivePulmonaryDisease'
            }
          ]
        },
        {
          title: 'Other',
          key: 'conditionOther',
          children: [
            {
              title: 'Maternal and child health',
              key: 'conditionMaternalAndChildHealth'
            },
            { title: 'Accidents', key: 'conditionAccidents' },
            {
              title: 'Mental health and addictions',
              key: 'conditionMentalHealthAddictions'
            }
          ]
        }
      ]
    },
    {
      title: 'Technologies',
      key: 'conditionTechnologies',
      children: [
        { title: 'Drugs', key: 'conditionTechnologyDrugs' },
        { title: 'Devices', key: 'conditionTechnologyDevices' },
        { title: 'Diagnotics', key: 'conditionTechnologyDiagnostics' },
        { title: 'Surgery', key: 'conditionTechnologySurgery' }
      ]
    },
    {
      title: 'Sectors',
      key: 'conditionSectors',
      children: [
        {
          title: 'Home and community care',
          key: 'conditionSectorPrimaryCare'
        },
        { title: 'Primary care', key: 'primaryCare' },
        {
          title: 'Specialty (hospital) care',
          key: 'conditionSectorSpecialHospitalCare'
        },
        {
          title: 'Rehabilitation care',
          key: 'conditionSectorRehabilitationCare'
        },
        { title: 'Long-term care', key: 'conditionSectorLongTermCare' },
        { title: 'Public health', key: 'conditionSectorPublicHealth' }
      ]
    },
    {
      title: 'Providers',
      key: 'conditionProviders',
      children: [
        {
          title: 'Physician',
          key: 'conditionProviderPhysician',
          children: [
            { title: 'Generalist', key: 'conditionProviderGeneralist' },
            { title: 'Specialist', key: 'conditionProviderSpecialist' }
          ]
        },
        {
          title: 'Nurse',
          key: 'conditionProviderNurse'
        },
        {
          title: 'Pharmacist',
          key: 'conditionProviderPharmacist'
        },
        {
          title: 'Allied health professional',
          key: 'conditionProviderAlliedHealthProfessional'
        },
        {
          title: 'Lay/community health worker',
          key: 'conditionProviderLayCommunityCealthWorker'
        },
        {
          title: 'Informal/family caregivers',
          key: 'conditionProviderInformalFamilyCaregivers'
        }
      ]
    }
  ],
  checkedLMIC: [
    { title: 'Target of document', key: 'lmicTargetOfDocument' },
    { title: 'At least one LMIC author', key: 'lmicAtLeastOneAuthor' },
    {
      title: 'At least one LMIC study included',
      key: 'lmicAtLeastOneStudy'
    }
  ],
  checkedProvince: [
    { title: 'Federal/national', key: 'territoryFederalNational' },
    { title: 'Alberta', key: 'territoryAlberta' },
    { title: 'British Columbia', key: 'territoryBritishColumbia' },
    { title: 'Manitoba', key: 'territoryManitoba' },
    { title: 'New Brunswick', key: 'territoryNewBrunswick' },
    {
      title: 'Newfoundland and Labrador',
      key: 'territoryNewFoundlandAndLabrador'
    },
    {
      title: 'Northwest Territories',
      key: 'territoryNorthwestTerritories'
    },
    { title: 'Nova Scotia', key: 'territoryNovaScotia' },
    { title: 'Nunavut', key: 'territoryNunavut' },
    { title: 'Ontario', key: 'territoryOntario' },
    { title: 'Prince Edward Island', key: 'territoryPrinceEdwardIsland' },
    { title: 'Quebec', key: 'territoryQuebec' },
    { title: 'Saskatchewan', key: 'territorySaskatchewan' },
    { title: 'Yukon', key: 'territoryYukon' }
  ],
  checkedTheme: [
    { title: 'Optimal aging', key: 'themeOptimalAging' },
    {
      title: 'Health promotion/primary prevention',
      key: 'themeHealthPromotionPrimaryPrevention'
    }
  ],
  checkedPopulation: [
    { title: 'Children and youth', key: 'populationChildrenAndYouth' },
    { title: 'Indigenous peoples', key: 'populationIndigenousPeoples' },
    { title: 'Old Adults', key: 'populationOldAdults' }
  ],
  checkedOPA: [
    {
      title: 'Community-based care',
      key: 'ontarioPriorityCommunityBasedCare'
    },
    {
      title: 'Health system performance and sustainability',
      key: 'ontarioPriorityHealthSystemPerformanceAndSustainability'
    },
    {
      title: 'Healthy living, with a focus on tobacco control',
      key: 'ontarioPriorityHealthyLivingWithAFocusOnTobaccoControl'
    },
    {
      title: 'Mental health and addictions',
      key: 'ontarioPriorityMentalHealthAndAddictions'
    },
    { title: 'Nursing research', key: 'ontarioPriorityNursingResearch' },
    {
      title: 'Primary care reform',
      key: 'ontarioPriorityPrimaryCareReform'
    },
    {
      title: 'Quality improvement and safety',
      key: 'ontarioPriorityQualityImprovementAndSafety'
    },
    { title: 'Seniors’ care', key: 'ontarioPrioritySeniorsCare' },
    {
      title: 'Vulnerable and special health needs populations',
      key: 'ontarioPriorityVulnerableAndSpecialHealthNeedsPopulations'
    },
    { title: 'Women’s health', key: 'ontarioPriorityWomensHealth' }
  ]
}

/**
 * TODO: These will need to be mapped to the checked array like above.
 * I commented these ones out for now as they don't seem to be used anywhere yet.
 */

// export const canadaHealthSystemSubtype = [
//   { title: 'Health and health system data', key: 'healthSystemData' },
//   {
//     title: 'Health expenditure review',
//     key: 'healthSystemExpenditureReview'
//   },
//   {
//     title: 'National health account',
//     key: 'healthSystemNationalAccount'
//   },
//   {
//     title: 'Health system research priorities',
//     key: 'healthSystemResearchPriorities'
//   },
//   { title: 'Situation analysis', key: 'healthSystemSituationAnalysis' },
//   {
//     title: 'Jurisdictional review',
//     key: 'healthSystemJurisdictionalReview'
//   },
//   { title: 'Performance review', key: 'healthSystemPerformanceReview' },
//   {
//     title: 'External evaluation',
//     key: 'healthSystemExternalEvaluation'
//   },
//   { title: 'Literature review', key: 'healthSystemLiteratureReview' },
//   { title: 'Framework', key: 'healthSystemFramework' },
//   { title: 'Toolkit', key: 'healthSystemToolkit' },
//   { title: 'Options framing', key: 'healthSystemOptionsFraming' },
//   { title: 'Guidance', key: 'healthSystemGuidance' },
//   {
//     title: 'Citizen/patient input',
//     key: 'healthSystemCitizenPatientInput'
//   },
//   { title: 'Stakeholder input', key: 'healthSystemStakeholderInput' },
//   {
//     title: 'Stakeholder position paper',
//     key: 'healthSystemStakeholderPositionPaper'
//   },
//   {
//     title: 'Political party platform ',
//     key: 'healthSystemPoliticalPartyPlatform'
//   },
//   {
//     title: 'Government discussion paper',
//     key: 'healthSystemGovernmentDiscussionPaper'
//   },
//   {
//     title: 'Government position paper',
//     key: 'healthSystemGovernmentPositionPaper'
//   },
//   {
//     title: 'Government strategic plan for the health sector',
//     key: 'healthSystemGovernmentStrategicPlan'
//   },
//   { title: 'Government policy', key: 'healthSystemGovernmentPolicy' },
//   {
//     title: 'Government legislation',
//     key: 'healthSystemGovernmentLegislation'
//   },
//   {
//     title: 'Intergovernmental communiqué',
//     key: 'healthSystemIntergovernmentalCommunique'
//   },
//   {
//     title: 'Intergovernmental accord',
//     key: 'healthSystemIntergovernmentalAccord'
//   },
//   {
//     title: 'Government/third party accord',
//     key: 'healthSystemGovernmentThirdPartyAccord'
//   }
// ];

// export const ontarioHealthSubtype = [
//   { title: 'Health and health system data', key: 'healthSystemData' },
//   {
//     title: 'Health expenditure review',
//     key: 'healthSystemExpenditureReview'
//   },
//   {
//     title: 'Provincial health account',
//     key: 'healthSystemProvincialAccount'
//   },
//   {
//     title: 'Health system research priorities',
//     key: 'healthSystemResearchPriorities'
//   },
//   { title: 'Situation analysis', key: 'healthSystemSituationAnalysis' },
//   {
//     title: 'Jurisdictional review',
//     key: 'healthSystemJurisdictionalReview'
//   },
//   { title: 'Performance review', key: 'healthSystemPerformanceReview' },
//   {
//     title: 'External evaluation',
//     key: 'healthSystemExternalEvaluation'
//   },
//   { title: 'Literature review', key: 'healthSystemLiteratureReview' },
//   { title: 'Framework', key: 'healthSystemFramework' },
//   { title: 'Toolkit', key: 'healthSystemToolkit' },
//   { title: 'Options framing', key: 'healthSystemOptionsFraming' },
//   { title: 'Guidance', key: 'healthSystemGuidance' },
//   {
//     title: 'Citizen/patient input',
//     key: 'healthSystemCitizenPatientInput'
//   },
//   { title: 'Stakeholder input', key: 'healthSystemStakeholderInput' },
//   {
//     title: 'Stakeholder position paper',
//     key: 'healthSystemStakeholderPositionPaper'
//   },
//   {
//     title: 'Political party platform',
//     key: 'healthSystemPoliticalPartyPlatform'
//   },
//   {
//     title: 'Government discussion paper',
//     key: 'healthSystemGovernmentDiscussionPaper'
//   },
//   {
//     title: 'Government position paper',
//     key: 'healthSystemGovernmentPositionPaper'
//   },
//   {
//     title: 'Government strategic plan for the health sector',
//     key: 'healthSystemGovernmentStrategicPlan'
//   },
//   { title: 'Government policy', key: 'healthSystemGovernmentPolicy' },
//   {
//     title: 'Government legislation',
//     key: 'healthSystemGovernmentLegislation'
//   },
//   {
//     title: 'Intergovernmental communiqué',
//     key: 'healthSystemIntergovernmentalCommunique'
//   },
//   {
//     title: 'Intergovernmental accord',
//     key: 'healthSystemIntergovernmentalAccord'
//   },
//   {
//     title: 'Government/third party accord',
//     key: 'healthSystemGovernmentThirdPartyAccord'
//   }
// ];

// export const intergovernmentalOrganizationSubtype = [
//   { title: 'Health and health system data', key: 'healthSystemData' },
//   {
//     title: 'Health expenditure review',
//     key: 'healthSystemExpenditureReview'
//   },
//   {
//     title: 'Health system research priorities',
//     key: 'healtySystemResearchPriorities'
//   },
//   { title: 'Situation analysis', key: 'healthSystemSituationAnalysis' },
//   {
//     title: 'Jurisdictional review',
//     key: 'healthSystemJurisdictionalReview'
//   },
//   { title: 'Performance review', key: 'healthSystemPerformanceReview' },
//   {
//     title: 'External evaluation',
//     key: 'healthSystemExternalEvaluation'
//   },
//   { title: 'Literature review', key: 'healthSystemLiteratureReview' },
//   { title: 'Framework', key: 'healthSystemFramework' },
//   { title: 'Toolkit', key: 'healthSystemToolkit' },
//   { title: 'Options framing', key: 'healthSystemOptionsFraming' },
//   { title: 'Guidance', key: 'healthSystemGuidance' },
//   {
//     title: 'Citizen/patient input',
//     key: 'healthSystemCitizenPatientInput'
//   },
//   { title: 'Stakeholder input', key: 'healthSystemStakeholderInput' },
//   {
//     title: 'WHO discussion paper',
//     key: 'healthSystemGovernmentDiscussionPaper'
//   },
//   {
//     title: 'WHO position paper',
//     key: 'healthSystemGovernmentPositionPaper'
//   },
//   {
//     title: 'WHO strategic plan',
//     key: 'healthSystemGovernmentStrategicPlan'
//   },
//   { title: 'WHO policy', key: 'healthSystemGovernmentPolicy' },
//   {
//     title: 'World Health Assembly resolution',
//     key: 'healthSystemGovernmentLegislation'
//   },
//   {
//     title: 'Inter-agency communiqué',
//     key: 'healthSystemIntergovernmentalCommunique'
//   },
//   {
//     title: 'Inter-agency accord',
//     key: 'healthSystemIntergovernmentalAccord'
//   },
//   {
//     title: 'WHO/third party accord',
//     key: 'healthSystemGovernmentThirdPartyAccord'
//   }
// ];
