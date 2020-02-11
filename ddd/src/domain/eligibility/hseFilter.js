const t = require("tcomb");
const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const HSEFilter = Filter.extend(
  {
    documentType: t.enums.of(
      [
        "Evidence briefs for policy",
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
        "Systematic reviews in progress",
        "Systematic reviews being planned",
        "Economic evaluations and costing studies",
        "Health reform descriptions",
        "Health system descriptions",
        "Intergovernmental organizations' health systems documents",
        "Systematic reviews and other types of syntheses",
        "Canada's health systems documents",
        "Ontario's health system documents",
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE."
      ],
      "documentType"
    ),

    // Health System Topics
    government: t.Boolean,
    governmentPolicy: t.Boolean,
    governmentPolicyCentralization: t.Boolean,
    governmentPolicyAccountability: t.Boolean,
    governmentPolicyStewardship: t.Boolean,
    governmentPolicyDecisionMaking: t.Boolean,
    governmentPolicyCorruptionProtections: t.Boolean,

    organization: t.Boolean,
    organizationOwnership: t.Boolean,
    organizationManagement: t.Boolean,
    organizationAccreditation: t.Boolean,
    organizationNetworks: t.Boolean,

    commercial: t.Boolean,
    commercialLicense: t.Boolean,
    commercialPatentsAndProfits: t.Boolean,
    commercialPricingAndPurchasing: t.Boolean,
    commercialMarketing: t.Boolean,
    commercialSalesAndDispensing: t.Boolean,
    commercialLiability: t.Boolean,

    professional: t.Boolean,
    professionalTrainingAndLicense: t.Boolean,
    professionalScopeOfPractice: t.Boolean,
    professionalContinuingCompetance: t.Boolean,
    professionalQualityAndSafety: t.Boolean,
    professionalLiability: t.Boolean,
    professionalStrikeJobAction: t.Boolean,

    consumer: t.Boolean,
    consumerPolicyDecisions: t.Boolean,
    consumerSystemMonitoring: t.Boolean,
    consumerServiceDelivery: t.Boolean,
    consumerComplaintsManagement: t.Boolean,
    consumerStakeholder: t.Boolean,

    financial: t.Boolean,
    financialSystems: t.Boolean,
    financialTaxation: t.Boolean,
    financialSocialHealthInsurance: t.Boolean,
    financialCommunityBasedHealthInsurance: t.Boolean,
    financialCommunityLoanFunds: t.Boolean,
    financialPrivateInsurance: t.Boolean,
    financialHealthSavingsAccountsIndividuallyFinanced: t.Boolean,
    financialUserFees: t.Boolean,
    financialDonorContributions: t.Boolean,
    financialFundraising: t.Boolean,

    fundingOrganization: t.Boolean,
    fundingOrganizationServiceFees: t.Boolean,
    fundingOrganizationCapitation: t.Boolean,
    fundingOrganizationGlobalBudget: t.Boolean,
    fundingOrganizationProspectivePayment: t.Boolean,
    fundingOrganizationIndicativeBudgets: t.Boolean,
    fundingOrganizationPaymentsPenalties: t.Boolean,

    remuneratingProvider: t.Boolean,
    remuneratingProviderServiceFees: t.Boolean,
    remuneratingProviderCapitation: t.Boolean,
    remuneratingProviderSalary: t.Boolean,
    remuneratingProviderProspectivePayment: t.Boolean,
    remuneratingProviderFundholding: t.Boolean,
    remuneratingProviderIndicativeBudgets: t.Boolean,
    remuneratingProviderPaymentPenalties: t.Boolean,

    purchasing: t.Boolean,
    purchasingScope: t.Boolean,
    purchasingCoveredReimbursedOrganizations: t.Boolean,
    purchasingRestrictions: t.Boolean,
    purchasingCaps: t.Boolean,
    purchasingApprovalRequirements: t.Boolean,
    purchasingSubstitutes: t.Boolean,

    incentivizingConsumer: t.Boolean,
    incentivizingConsumerPremium: t.Boolean,
    incentivizingConsumerCostSharing: t.Boolean,
    incentivizingConsumerSavingsThirdPartyContributions: t.Boolean,
    incentivizingConsumerSavingsTargetedPaymentsPenalties: t.Boolean,

    deliveryArrangement: t.Boolean,
    deliveryArrangementCare: t.Boolean,
    deliveryArrangementCareAvailability: t.Boolean,
    deliveryArrangementCareTimelyAcess: t.Boolean,
    deliveryArrangementCareCulturallyAppropriate: t.Boolean,
    deliveryArrangementCareCaseManagement: t.Boolean,
    deliveryArrangementCareDiseaseManagement: t.Boolean,
    deliveryArrangementCareGroup: t.Boolean,

    careProvider: t.Boolean,
    careProviderSystemDemandSupply: t.Boolean,
    careProviderSystemRecruitmentRetention: t.Boolean,
    careProviderSystemPerformanceManagement: t.Boolean,
    careProviderWorkplaceConditionsProviderSatisfaction: t.Boolean,
    careProviderWorkplaceConditionsHealthSafety: t.Boolean,
    careProviderSkillMixRolePerformance: t.Boolean,
    careProviderSkillMixRoleExpansionOrExtension: t.Boolean,
    careProviderSkillMixTaskShiftingSubstitution: t.Boolean,
    careProviderSkillMixMultidisciplinaryTeams: t.Boolean,
    careProviderSkillMixVolunteersOrInformalFamilyCaregivers: t.Boolean,
    careProviderSkillMixCommunicationDistantHealthProfessionals: t.Boolean,
    careProviderStaffTraining: t.Boolean,
    careProviderStaffSupport: t.Boolean,
    careProviderStaffWorkloadWorkflowIntensity: t.Boolean,
    careProviderStaffContinuityOfCare: t.Boolean,
    careProviderStaffSelfSharedDecisionMaking: t.Boolean,
    careProviderSelfManagement: t.Boolean,

    careSource: t.Boolean,
    careSourceSiteOfServiceDelivery: t.Boolean,
    careSourcePhysicalstructureFacilitiesEquipment: t.Boolean,
    careSourceOrganizationalScale: t.Boolean,
    careSourceIntegrationOfServices: t.Boolean,
    careSourceContinuityOfCare: t.Boolean,
    careSourceOutreach: t.Boolean,

    careSupport: t.Boolean,
    careSupportHealthRecordSystems: t.Boolean,
    careSupportElectronicHealthRecord: t.Boolean,
    careSupportOtherICTThatSupportIndividuals: t.Boolean,
    careSupportICTThatSupportIndividualsWhoReceiveCare: t.Boolean,
    careSupportQualityMonitoringAndImprovementSystems: t.Boolean,
    careSupportSafetyMonitoringAndImprovementSystems: t.Boolean,

    implementationStrategies: t.Boolean,
    implementationConsumerTargetedStrategy: t.Boolean,
    implementationInformationOrEducationProvision: t.Boolean,
    implementationBehaviourChangeSupport: t.Boolean,
    implementationSkillsAndCompetenciesDevelopment: t.Boolean,
    implementationPersonalSupport: t.Boolean,
    implementationCommunicationAndDecisionMakingFacilitation: t.Boolean,
    implementationSystemParticipation: t.Boolean,

    providerStrategies: t.Boolean,
    providerStrategyEducationalMaterial: t.Boolean,
    providerStrategyEducationalMeeting: t.Boolean,
    providerStrategyEducationalOutreachVisit: t.Boolean,
    providerStrategyLocalOpinionLeader: t.Boolean,
    providerStrategyLocalConsensusProcess: t.Boolean,
    providerStrategyPeerReview: t.Boolean,
    providerStrategyAuditAndFeedback: t.Boolean,
    providerStrategyRemindersAndPrompts: t.Boolean,
    providerStrategyTailoredIntervention: t.Boolean,
    providerStrategyPatientMediatedIntervention: t.Boolean,
    providerStrategyMultiFacetedIntervention: t.Boolean,

    organizationStrategy: t.Boolean,

    // Province focus
    territoryFederalNational: t.Boolean,
    territoryAlberta: t.Boolean,
    territoryBritishColumbia: t.Boolean,
    territoryManitoba: t.Boolean,
    territoryNewBrunswick: t.Boolean,
    territoryNewFoundlandAndLabrador: t.Boolean,
    territoryNorthwestTerritories: t.Boolean,
    territoryNovaScotia: t.Boolean,
    territoryNunavut: t.Boolean,
    territoryOntario: t.Boolean,
    territoryPrinceEdwardIsland: t.Boolean,
    territoryQuebec: t.Boolean,
    territorySaskatchewan: t.Boolean,
    territoryYukon: t.Boolean,

    // New Canadian Areas
    canadianHomeAndCommunityCare: t.Boolean,
    canadianMentalHealthAndAddictionServices: t.Boolean,
    canadianIndigenousHealthFederal: t.Boolean,
    canadianAgingEmergent: t.Boolean,

    // Domains
    conditions: t.Boolean,
    conditionInfectiousDiseases: t.Boolean,
    conditionHIVAIDS: t.Boolean,
    conditionTuberculosis: t.Boolean,
    conditionMalaria: t.Boolean,
    conditionDiarrhoealDisease: t.Boolean,
    conditionLowerRespiratoryInfections: t.Boolean,

    conditionNonCommunicableDiseases: t.Boolean,
    conditionCancer: t.Boolean,
    conditionCardiovascularDisease: t.Boolean,
    conditionDiabetes: t.Boolean,
    conditionAlzheimerAndOtherDementias: t.Boolean,
    conditionsChronicObstructivePulmonaryDisease: t.Boolean,

    conditionOther: t.Boolean,
    conditionMaternalAndChildHealth: t.Boolean,
    conditionAccidents: t.Boolean,
    conditionMentalHealthAddictions: t.Boolean,

    conditionTechnologies: t.Boolean,
    conditionTechnologyDrugs: t.Boolean,
    conditionTechnologyDevices: t.Boolean,
    conditionTechnologyDiagnostics: t.Boolean,
    conditionTechnologySurgery: t.Boolean,

    // New Sectors
    conditionSectors: t.Boolean,
    conditionSectorPrimaryCare: t.Boolean,
    conditionSectorSpecialHospitalCare: t.Boolean,
    conditionSectorRehabilitationCare: t.Boolean,
    conditionSectorLongTermCare: t.Boolean,
    conditionSectorPublicHealth: t.Boolean,

    conditionProviders: t.Boolean,
    conditionProviderPhysician: t.Boolean,
    conditionProviderGeneralist: t.Boolean,
    conditionProviderSpecialist: t.Boolean,
    conditionProviderNurse: t.Boolean,
    conditionProviderPharmacist: t.Boolean,
    conditionProviderAlliedHealthProfessional: t.Boolean,
    conditionProviderLayCommunityCealthWorker: t.Boolean,
    conditionProviderInformalFamilyCaregivers: t.Boolean,

    // LMIC Focus
    lmicTargetOfDocument: t.Boolean,
    lmicAtLeastOneAuthor: t.Boolean,
    lmicAtLeastOneStudy: t.Boolean,

    // Theme
    themeOptimalAging: t.Boolean,
    themeHealthPromotionPrimaryPrevention: t.Boolean,

    // Population
    populationChildrenAndYouth: t.Boolean,
    populationIndigenousPeoples: t.Boolean,
    populationOldAdults: t.Boolean,

    // Information for evidence briefs
    evidenceFocusOfDocuments: t.String,
    evidenceKeyFindings: t.String,

    // Ontario priority areas
    ontarioPriorityCommunityBasedCare: t.Boolean,
    ontarioPriorityHealthSystemPerformanceAndSustainability: t.Boolean,
    ontarioPriorityHealthyLivingWithAFocusOnTobaccoControl: t.Boolean,
    ontarioPriorityMentalHealthAndAddictions: t.Boolean,
    ontarioPriorityNursingResearch: t.Boolean,
    ontarioPriorityPrimaryCareReform: t.Boolean,
    ontarioPriorityQualityImprovementAndSafety: t.Boolean,
    ontarioPrioritySeniorsCare: t.Boolean,
    ontarioPriorityVulnerableAndSpecialHealthNeedsPopulations: t.Boolean,
    ontarioPriorityWomensHealth: t.Boolean,

    healthSystemData: t.Boolean,
    healthSystemExpenditureReview: t.Boolean,
    healthSystemNationalAccount: t.maybe(t.Boolean),
    healthSystemProvincialAccount: t.maybe(t.Boolean),
    healthSystemResearchPriorities: t.Boolean,
    healthSystemSituationAnalysis: t.Boolean,
    healthSystemJurisdictionalReview: t.Boolean,
    healthSystemPerformanceReview: t.Boolean,
    healthSystemExternalEvaluation: t.Boolean,
    healthSystemLiteratureReview: t.Boolean,
    healthSystemFramework: t.Boolean,
    healthSystemToolkit: t.boolean,
    healthSystemOptionsFraming: t.Boolean,
    healthSystemGuidance: t.Boolean,
    healthSystemCitizenPatientInput: t.Boolean,
    healthSystemStakeholderInput: t.Boolean,
    healthSystemStakeholderPositionPaper: t.boolean,
    healthSystemPoliticalPartyPlatform: t.maybe(t.Boolean),
    healthSystemGovernmentDiscussionPaper: t.Boolean,
    healthSystemGovernmentPositionPaper: t.Boolean,
    healthSystemGovernmentStrategicPlan: t.Boolean,
    healthSystemGovernmentPolicy: t.Boolean,
    healthSystemGovernmentLegislation: t.Boolean,
    healthSystemIntergovernmentalCommunique: t.Boolean,
    healthSystemIntergovernmentalAccord: t.Boolean,
    healthSystemGovernmentThirdPartyAccord: t.Boolean
  },
  {
    defaultProps: {
      type: "hse",
      healthSystemNationalAccount: false,
      healthSystemProvincialAccount: false,
      documentType:
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE."
    }
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, HSEFilter, cleanMongoId);
