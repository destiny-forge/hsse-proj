const filters = [
  {
    title: "Governance arrangements",
    key: "governance",
    name: "checkedKeysHST",
  },
  {
    title: "Policy authority",
    key: "governancePolicy",
    name: "checkedKeysHST",
  },
  {
    title: "Centralization/decentralization of policy authority",
    key: "governancePolicyCentralization",
    name: "checkedKeysHST",
  },
  {
    title: "Accountability of the state sector's role in financing & delivery",
    key: "governancePolicyAccountability",
    name: "checkedKeysHST",
  },
  {
    title: "Stewardship of the non-state sector's role in financing & delivery",
    key: "governancePolicyStewardship",
    name: "checkedKeysHST",
  },
  {
    title:
      "Decision-making authority about who is covered and what can or must be provided to them",
    key: "governancePolicyDecisionMaking",
    name: "checkedKeysHST",
  },
  {
    title: "Corruption protections",
    key: "governancePolicyCorruptionProtections",
    name: "checkedKeysHST",
  },
  {
    title: "Organizational authority",
    key: "organization",
    name: "checkedKeysHST",
  },
  { title: "Ownership", key: "organizationOwnership", name: "checkedKeysHST" },
  {
    title: "Management approaches",
    key: "organizationManagement",
    name: "checkedKeysHST",
  },
  {
    title: "Accreditation",
    key: "organizationAccreditation",
    name: "checkedKeysHST",
  },
  {
    title: "Networks/multi-institutional arrangements",
    key: "organizationNetworks",
    name: "checkedKeysHST",
  },
  {
    title: "Commercial authority",
    key: "commercial",
    name: "checkedKeysHST",
  },
  {
    title: "Licensure & registration requirements",
    key: "commercialLicense",
    name: "checkedKeysHST",
  },
  {
    title: "Patents & profits",
    key: "commercialPatentsAndProfits",
    name: "checkedKeysHST",
  },
  {
    title: "Pricing & purchasing",
    key: "commercialPricingAndPurchasing",
    name: "checkedKeysHST",
  },
  { title: "Marketing", key: "commercialMarketing", name: "checkedKeysHST" },
  {
    title: "Sales & dispensing",
    key: "commercialSalesAndDispensing",
    name: "checkedKeysHST",
  },
  {
    title: "Commercial liability",
    key: "commercialLiability",
    name: "checkedKeysHST",
  },
  {
    title: "Professional authority",
    key: "professional",
    name: "checkedKeysHST",
  },
  {
    title: "Training & licensure requirements",
    key: "professionalTrainingAndLicense",
    name: "checkedKeysHST",
  },
  {
    title: "Scope of practice",
    key: "professionalScopeOfPractice",
    name: "checkedKeysHST",
  },
  {
    title: "Setting of practice",
    key: "settingOfPractice",
    name: "checkedKeysHST",
  },
  {
    title: "Continuing competence",
    key: "professionalContinuingCompetance",
    name: "checkedKeysHST",
  },
  {
    title: "Quality & safety",
    key: "professionalQualityAndSafety",
    name: "checkedKeysHST",
  },
  {
    title: "Professional liability",
    key: "professionalLiability",
    name: "checkedKeysHST",
  },
  {
    title: "Strike/job action",
    key: "professionalStrikeJobAction",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer & stakeholder involvement",
    key: "consumer",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer participation in policy & organizational decisions",
    key: "consumerPolicyDecisions",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer participation in system monitoring",
    key: "consumerSystemMonitoring",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer participation in service delivery",
    key: "consumerServiceDelivery",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer complaints management",
    key: "consumerComplaintsManagement",
    name: "checkedKeysHST",
  },
  {
    title:
      "Stakeholder participation in policy & organizational decisions (or monitoring)",
    key: "consumerStakeholder",
    name: "checkedKeysHST",
  },
  {
    title: "Financial arrangements",
    key: "financial",
    name: "checkedKeysHST",
  },
  {
    title: "Financing systems",
    key: "financialSystems",
    name: "checkedKeysHST",
  },
  { title: "Taxation", key: "financialTaxation", name: "checkedKeysHST" },
  {
    title: "Social health insurance",
    key: "financialSocialHealthInsurance",
    name: "checkedKeysHST",
  },
  {
    title: "Community-based health insurance",
    key: "financialCommunityBasedHealthInsurance",
    name: "checkedKeysHST",
  },
  {
    title: "Community loan funds",
    key: "financialCommunityLoanFunds",
    name: "checkedKeysHST",
  },
  {
    title: "Private insurance",
    key: "financialPrivateInsurance",
    name: "checkedKeysHST",
  },
  {
    title: "Health savings accounts (Individually financed)",
    key: "financialHealthSavingsAccountsIndividuallyFinanced",
    name: "checkedKeysHST",
  },
  { title: "User fees", key: "financialUserFees", name: "checkedKeysHST" },
  {
    title: "Donor contributions",
    key: "financialDonorContributions",
    name: "checkedKeysHST",
  },
  { title: "Fundraising", key: "financialFundraising", name: "checkedKeysHST" },
  {
    title: "Funding organizations",
    key: "fundingOrganization",
    name: "checkedKeysHST",
  },
  {
    title: "Fee-for-service (Funding)",
    key: "fundingOrganizationServiceFees",
    name: "checkedKeysHST",
  },
  {
    title: "Capitation (Funding)",
    key: "fundingOrganizationCapitation",
    name: "checkedKeysHST",
  },
  {
    title: "Global budget",
    key: "fundingOrganizationGlobalBudget",
    name: "checkedKeysHST",
  },
  {
    title: "Case-mix funding",
    key: "fundingOrganizationCaseMixFunding",
    name: "checkedKeysHST",
  },
  {
    title: "Targeted payments/penalties (Funding)",
    key: "fundingOrganizationPaymentsPenalties",
    name: "checkedKeysHST",
  },
  {
    title: "Remunerating providers",
    key: "remuneratingProvider",
    name: "checkedKeysHST",
  },
  {
    title: "Fee-for-service (Remuneration)",
    key: "remuneratingProviderServiceFees",
    name: "checkedKeysHST",
  },
  {
    title: "Capitation (Remuneration)",
    key: "remuneratingProviderCapitation",
    name: "checkedKeysHST",
  },
  {
    title: "Salary",
    key: "remuneratingProviderSalary",
    name: "checkedKeysHST",
  },
  {
    title: "Episode-based payment",
    key: "remuneratingProviderEpisodeBasedPayment",
    name: "checkedKeysHST",
  },
  {
    title: "Fundholding",
    key: "remuneratingProviderFundholding",
    name: "checkedKeysHST",
  },
  {
    title: "Targeted payments/penalties (Remuneration)",
    key: "remuneratingProviderPaymentPenalties",
    name: "checkedKeysHST",
  },
  {
    title: "Purchasing products & services",
    key: "purchasing",
    name: "checkedKeysHST",
  },
  {
    title: "Scope & nature of insurance plans",
    key: "purchasingScope",
    name: "checkedKeysHST",
  },
  {
    title:
      "Lists of covered/reimbursed organizations, providers, services & products",
    key: "purchasingCoveredReimbursedOrganizations",
    name: "checkedKeysHST",
  },
  {
    title:
      "Restrictions in coverage/reimbursement rates for organizations, providers, services & products",
    key: "purchasingRestrictions",
    name: "checkedKeysHST",
  },
  {
    title:
      "Caps on coverage/reimbursement for organizations, providers, services & products",
    key: "purchasingCaps",
    name: "checkedKeysHST",
  },
  {
    title:
      "Prior approval requirements for organizations, providers, services & products",
    key: "purchasingApprovalRequirements",
    name: "checkedKeysHST",
  },
  {
    title: "Lists of substitutable services & products",
    key: "purchasingSubstitutes",
    name: "checkedKeysHST",
  },
  {
    title: "Incentivizing consumers",
    key: "incentivizingConsumer",
    name: "checkedKeysHST",
  },
  {
    title: "Premium (level & features)",
    key: "incentivizingConsumerPremium",
    name: "checkedKeysHST",
  },
  {
    title: "Cost-sharing",
    key: "incentivizingConsumerCostSharing",
    name: "checkedKeysHST",
  },
  {
    title: "Health savings accounts (Third party contributions)",
    key: "incentivizingConsumerSavingsThirdPartyContributions",
    name: "checkedKeysHST",
  },
  {
    title: "Targeted payments/penalties (Incentivizing consumers)",
    key: "incentivizingConsumerSavingsTargetedPaymentsPenalties",
    name: "checkedKeysHST",
  },
  {
    title: "Delivery arrangements",
    key: "deliveryArrangement",
    name: "checkedKeysHST",
  },
  {
    title: "How care is designed to meet consumers' needs",
    key: "deliveryArrangementCare",
    name: "checkedKeysHST",
  },
  {
    title: "Availability of care",
    key: "deliveryArrangementCareAvailability",
    name: "checkedKeysHST",
  },
  {
    title: "Timely access to care",
    key: "deliveryArrangementCareTimelyAcess",
    name: "checkedKeysHST",
  },
  {
    title: "Culturally appropriate care",
    key: "deliveryArrangementCareCulturallyAppropriate",
    name: "checkedKeysHST",
  },
  {
    title: "Case management",
    key: "deliveryArrangementCareCaseManagement",
    name: "checkedKeysHST",
  },
  {
    title: "Package of care/care pathways/disease management",
    key: "deliveryArrangementCareDiseaseManagement",
    name: "checkedKeysHST",
  },
  {
    title: "Group care",
    key: "deliveryArrangementCareGroup",
    name: "checkedKeysHST",
  },
  {
    title: "By whom care is provided",
    key: "careProvider",
    name: "checkedKeysHST",
  },
  {
    title: "System - Need, demand & supply",
    key: "careProviderSystemDemandSupply",
    name: "checkedKeysHST",
  },
  {
    title: "System - Recruitment, retention & transitions",
    key: "careProviderSystemRecruitmentRetention",
    name: "checkedKeysHST",
  },
  {
    title: "System - Performance management",
    key: "careProviderSystemPerformanceManagement",
    name: "checkedKeysHST",
  },
  {
    title: "Workplace conditions - Provider satisfaction",
    key: "careProviderWorkplaceConditionsProviderSatisfaction",
    name: "checkedKeysHST",
  },
  {
    title: "Workplace conditions - Health & safety",
    key: "careProviderWorkplaceConditionsHealthSafety",
    name: "checkedKeysHST",
  },
  {
    title: "Skill mix - Role performance",
    key: "careProviderSkillMixRolePerformance",
    name: "checkedKeysHST",
  },
  {
    title: "Skill mix - Role expansion or extension",
    key: "careProviderSkillMixRoleExpansionOrExtension",
    name: "checkedKeysHST",
  },
  {
    title: "Skill mix - Task shifting / substitution",
    key: "careProviderSkillMixTaskShiftingSubstitution",
    name: "checkedKeysHST",
  },
  {
    title: "Skill mix - Multidisciplinary teams",
    key: "careProviderSkillMixMultidisciplinaryTeams",
    name: "checkedKeysHST",
  },
  {
    title: "Skill mix - Volunteers or caregivers",
    key: "careProviderSkillMixVolunteersOrCaregivers",
    name: "checkedKeysHST",
  },
  {
    title:
      "Skill mix - Communication & case discussion between distant health professionals",
    key: "careProviderSkillMixCommunicationDistantHealthProfessionals",
    name: "checkedKeysHST",
  },
  {
    title: "Staff - Training",
    key: "careProviderStaffTraining",
    name: "checkedKeysHST",
  },
  {
    title: "Staff - Support",
    key: "careProviderStaffSupport",
    name: "checkedKeysHST",
  },
  {
    title: "Staff - Workload/workflow/intensity",
    key: "careProviderStaffWorkloadWorkflowIntensity",
    name: "checkedKeysHST",
  },
  {
    title: "Staff - Continuity of care",
    key: "careProviderStaffContinuityOfCare",
    name: "checkedKeysHST",
  },
  {
    title: "Staff/self - Shared decision-making",
    key: "careProviderStaffSelfSharedDecisionMaking",
    name: "checkedKeysHST",
  },
  {
    title: "Self-management",
    key: "careProviderSelfManagement",
    name: "checkedKeysHST",
  },
  {
    title: "Where care is provided",
    key: "careSource",
    name: "checkedKeysHST",
  },
  {
    title: "Site of service delivery",
    key: "careSourceSiteOfServiceDelivery",
    name: "checkedKeysHST",
  },
  {
    title: "Physical structure, facilities & equipment",
    key: "careSourcePhysicalstructureFacilitiesEquipment",
    name: "checkedKeysHST",
  },
  {
    title: "Organizational scale",
    key: "careSourceOrganizationalScale",
    name: "checkedKeysHST",
  },
  {
    title: "Integration of services",
    key: "careSourceIntegrationOfServices",
    name: "checkedKeysHST",
  },
  {
    title: "Continuity of care",
    key: "careSourceContinuityOfCare",
    name: "checkedKeysHST",
  },
  { title: "Outreach", key: "careSourceOutreach", name: "checkedKeysHST" },
  {
    title: "With what supports is care provided",
    key: "careSupport",
    name: "checkedKeysHST",
  },
  {
    title: "Health record systems",
    key: "careSupportHealthRecordSystems",
    name: "checkedKeysHST",
  },
  {
    title: "Electronic health record",
    key: "careSupportElectronicHealthRecord",
    name: "checkedKeysHST",
  },
  {
    title: "Other ICT that support individuals who provide care",
    key: "careSupportOtherICTThatSupportIndividuals",
    name: "checkedKeysHST",
  },
  {
    title: "ICT that support individuals who receive care",
    key: "careSupportICTThatSupportIndividualsWhoReceiveCare",
    name: "checkedKeysHST",
  },
  {
    title: "Quality monitoring and improvement systems",
    key: "careSupportQualityMonitoringAndImprovementSystems",
    name: "checkedKeysHST",
  },
  {
    title: "Safety monitoring and improvement systems",
    key: "careSupportSafetyMonitoringAndImprovementSystems",
    name: "checkedKeysHST",
  },
  {
    title: "Implementation strategies",
    key: "implementationStrategies",
    name: "checkedKeysHST",
  },
  {
    title: "Consumer-targeted strategy",
    key: "implementationConsumerTargetedStrategy",
    name: "checkedKeysHST",
  },
  {
    title: "Information or education provision",
    key: "implementationInformationOrEducationProvision",
    name: "checkedKeysHST",
  },
  {
    title: "Behaviour change support",
    key: "implementationBehaviourChangeSupport",
    name: "checkedKeysHST",
  },
  {
    title: "Skills and competencies development",
    key: "implementationSkillsAndCompetenciesDevelopment",
    name: "checkedKeysHST",
  },
  {
    title: "(Personal) Support",
    key: "implementationPersonalSupport",
    name: "checkedKeysHST",
  },
  {
    title: "Communication and decision-making facilitation",
    key: "implementationCommunicationAndDecisionMakingFacilitation",
    name: "checkedKeysHST",
  },
  {
    title: "System participation",
    key: "implementationSystemParticipation",
    name: "checkedKeysHST",
  },
  {
    title: "Provider-targeted strategy",
    key: "providerStrategies",
    name: "checkedKeysHST",
  },
  {
    title: "Educational material",
    key: "providerStrategyEducationalMaterial",
    name: "checkedKeysHST",
  },
  {
    title: "Educational meeting",
    key: "providerStrategyEducationalMeeting",
    name: "checkedKeysHST",
  },
  {
    title: "Educational outreach visit",
    key: "providerStrategyEducationalOutreachVisit",
    name: "checkedKeysHST",
  },
  {
    title: "Local opinion leader",
    key: "providerStrategyLocalOpinionLeader",
    name: "checkedKeysHST",
  },
  {
    title: "Local consensus process",
    key: "providerStrategyLocalConsensusProcess",
    name: "checkedKeysHST",
  },
  {
    title: "Peer review",
    key: "providerStrategyPeerReview",
    name: "checkedKeysHST",
  },
  {
    title: "Audit and feedback",
    key: "providerStrategyAuditAndFeedback",
    name: "checkedKeysHST",
  },
  {
    title: "Reminders and prompts",
    key: "providerStrategyRemindersAndPrompts",
    name: "checkedKeysHST",
  },
  {
    title: "Tailored intervention",
    key: "providerStrategyTailoredIntervention",
    name: "checkedKeysHST",
  },
  {
    title: "Patient-mediated intervention",
    key: "providerStrategyPatientMediatedIntervention",
    name: "checkedKeysHST",
  },
  {
    title: "Multi-faceted intervention",
    key: "providerStrategyMultiFacetedIntervention",
    name: "checkedKeysHST",
  },
  {
    title: "Organization-targeted strategy",
    key: "organizationStrategy",
    name: "checkedKeysHST",
  },
  {
    title: "Conditions",
    key: "conditions",
    name: "checkedDomain",
  },
  {
    title: "Infectious diseases",
    key: "conditionInfectiousDiseases",
    name: "checkedDomain",
  },
  { title: "HIV/AIDS", key: "conditionHIVAIDS", name: "checkedDomain" },
  {
    title: "Tuberculosis",
    key: "conditionTuberculosis",
    name: "checkedDomain",
  },
  { title: "Malaria", key: "conditionMalaria", name: "checkedDomain" },
  {
    title: "Diarrhoeal disease",
    key: "conditionDiarrhoealDisease",
    name: "checkedDomain",
  },
  {
    title: "Lower respiratory infections",
    key: "conditionLowerRespiratoryInfections",
    name: "checkedDomain",
  },
  {
    title: "Non-communicable diseases",
    key: "conditionNonCommunicableDiseases",
    name: "checkedDomain",
  },
  { title: "Cancer", key: "conditionCancer", name: "checkedDomain" },
  {
    title: "Cardiovascular disease",
    key: "conditionCardiovascularDisease",
    name: "checkedDomain",
  },
  { title: "Diabetes", key: "conditionDiabetes", name: "checkedDomain" },
  {
    title: "Alzheimer and other dementias",
    key: "conditionAlzheimerAndOtherDementias",
    name: "checkedDomain",
  },
  {
    title: "Chronic obstructive pulmonary disease",
    key: "conditionsChronicObstructivePulmonaryDisease",
    name: "checkedDomain",
  },
  {
    title: "Other",
    key: "conditionOther",
    name: "checkedDomain",
  },
  {
    title: "Accidents/injuries",
    key: "conditionOtherAccidentsInjuries",
    name: "checkedDomain",
  },
  {
    title: "Maternal and child health",
    key: "conditionOtherMaternalAndChildHealth",
    name: "checkedDomain",
  },
  {
    title: "Mental health and addictions",
    key: "conditionMentalHealthAddictions",
    name: "checkedDomain",
  },
  {
    title: "Oral health",
    key: "conditionOtherOralHealth",
    name: "checkedDomain",
  },
  {
    title: "Technologies",
    key: "conditionTechnologies",
    name: "checkedDomain",
  },
  { title: "Drugs", key: "conditionTechnologyDrugs", name: "checkedDomain" },
  {
    title: "Devices",
    key: "conditionTechnologyDevices",
    name: "checkedDomain",
  },
  {
    title: "Diagnotics",
    key: "conditionTechnologyDiagnostics",
    name: "checkedDomain",
  },
  {
    title: "Surgery",
    key: "conditionTechnologySurgery",
    name: "checkedDomain",
  },
  {
    title: "Sectors",
    key: "conditionSectors",
    name: "checkedDomain",
  },
  {
    title: "Home and community care",
    key: "conditionSectorPrimaryCare",
    name: "checkedDomain",
  },
  { title: "Primary care", key: "primaryCare", name: "checkedDomain" },
  {
    title: "Specialty care",
    key: "conditionSectorSpecialtyCare",
    name: "checkedDomain",
  },
  {
    title: "Rehabilitation care",
    key: "conditionSectorRehabilitationCare",
    name: "checkedDomain",
  },
  {
    title: "Long-term care",
    key: "conditionSectorLongTermCare",
    name: "checkedDomain",
  },
  {
    title: "Public health",
    key: "conditionSectorPublicHealth",
    name: "checkedDomain",
  },
  {
    title: "Providers",
    key: "conditionProviders",
    name: "checkedDomain",
  },
  {
    title: "Physicians",
    key: "conditionProviderPhysician",
    name: "checkedDomain",
  },
  {
    title: "Generalists",
    key: "conditionProviderGeneralist",
    name: "checkedDomain",
  },
  {
    title: "Specialists",
    key: "conditionProviderSpecialist",
    name: "checkedDomain",
  },
  { title: "Nurses", key: "conditionProviderNurse", name: "checkedDomain" },
  {
    title: "Pharmacists",
    key: "conditionProviderPharmacist",
    name: "checkedDomain",
  },
  {
    title: "Allied health professionals",
    key: "conditionProviderAlliedHealthProfessional",
    name: "checkedDomain",
  },
  {
    title: "Lay/community health workers",
    key: "conditionProviderLayCommunityCealthWorker",
    name: "checkedDomain",
  },
  {
    title: "Informal/family caregivers",
    key: "conditionProviderInformalFamilyCaregivers",
    name: "checkedDomain",
  },
  {
    title: "Target of document",
    key: "lmicTargetOfDocument",
    name: "checkedLMIC",
  },
  {
    title: "At least one LMIC author",
    key: "lmicAtLeastOneAuthor",
    name: "checkedLMIC",
  },
  {
    title: "At least one LMIC study included",
    key: "lmicAtLeastOneStudy",
    name: "checkedLMIC",
  },
  { title: "Optimal aging", key: "themeOptimalAging", name: "checkedTheme" },
  {
    title: "Health promotion/primary prevention",
    key: "themeHealthPromotionPrimaryPrevention",
    name: "checkedTheme",
  },
  {
    title: "Children and youth",
    key: "populationChildrenAndYouth",
    name: "checkedPopulation",
  },
  {
    title: "Indigenous peoples",
    key: "populationIndigenousPeoples",
    name: "checkedPopulation",
  },
  {
    title: "Old Adults",
    key: "populationOldAdults",
    name: "checkedPopulation",
  },
];

module.exports = filters;
