/**
 * @name HSEArticleEligibilityFilter.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's eligibility filter details as input by junior and senior data entry users
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleEligibilityFilterSchema = new Schema({ 
    
    _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    // Relevance
    relevance: { type: Boolean, default: false },

    liveDate: { type: Date },

    // Eligibility
    documentType: {
        type: String, 
        enum: [
            'Evidence briefs for policy',
            'Overviews of systematic reviews',
            'Systematic reviews of effects',
            'Systematic reviews addressing other questions',
            'Systematic reviews in progress',
            'Systematic reviews being planned',
            'Economic evaluations and costing studies',
            'Health reform descriptions',
            'Health system descriptions',
            "Intergovernmental organizations' health systems documents",
            'Systematic reviews and other types of syntheses',
            "Canada's health systems documents",
            "Ontario's health system documents",
            "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE."
        ],
        default: 'NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE.' 
    },

    // Health System Topics
    governanceArrangement: { type: Boolean, default: false },

    policyAuthority: { type: Boolean, default: false },
    centralizationDecentralizationOfPolicyAuthority: { type: Boolean, default: false },
    accountabilityOfTheStateSectorsRoleInFinancingAndDelivery: { type: Boolean, default: false },
    stewardshipOfTheNonStateSectorsRoleInFinancingAndDelivery: { type: Boolean, default: false },
    decisionMakingAuthorityAboutWhoIsCoveredAndWhatCanOrMustBeProvidedToThem: { type: Boolean, default: false },
    corruptionProtections: { type: Boolean, default: false },
    
    organizationalAuthority: { type: Boolean, default: false },
    ownership: { type: Boolean, default: false },
    managementApproaches: { type: Boolean, default: false },
    accreditation: { type: Boolean, default: false },
    networksMultiInstitutionalArrangements: { type: Boolean, default: false },

    commercialAuthority: { type: Boolean, default: false },
    licensureAndRegistrationRequirements: { type: Boolean, default: false },
    patentsAndProfits: { type: Boolean, default: false },
    pricingAndPurchasing: { type: Boolean, default: false },
    marketing: { type: Boolean, default: false },
    salesAndDispensing: { type: Boolean, default: false },
    commercialLiability: { type: Boolean, default: false },

    professionalAuthority: { type: Boolean, default: false },
    trainingAndLicensureRequirements: { type: Boolean, default: false },
    scopeOfPractice: { type: Boolean, default: false },
    settingOfPractice: { type: Boolean, default: false },
    continuingCompetence: { type: Boolean, default: false },
    qualityAndSafety: { type: Boolean, default: false },
    professionalLiability: { type: Boolean, default: false },
    strikeJobAction: { type: Boolean, default: false },

    consumerStakeholderInvolvement: { type: Boolean, default: false },
    consumerParticipationInPolicyOrganizationalDecisions: { type: Boolean, default: false },
    consumerParticipationInSystemMonitoring: { type: Boolean, default: false },
    consumerParticipationInServiceDelivery: { type: Boolean, default: false },
    consumerComplaintsManagement: { type: Boolean, default: false },
    stakeholderParticipationInPolicyAndOrganizationalDecisionsOrMonitoring: { type: Boolean, default: false },

    financialArrangements: { type: Boolean, default: false },

    financingSystems: { type: Boolean, default: false },
    taxation: { type: Boolean, default: false },
    socialHealthInsurance: { type: Boolean, default: false },
    communityBasedHealthInsurance: { type: Boolean, default: false },
    communityLoanFunds: { type: Boolean, default: false },
    privateInsurance: { type: Boolean, default: false },
    healthSavigsAccountsIndividuallyFinanced: { type: Boolean, default: false },
    userFees: { type: Boolean, default: false },
    donorContributions: { type: Boolean, default: false },
    fundraising: { type: Boolean, default: false },

    fundingOrganizations: { type: Boolean, default: false },
    feesForServiceFunding: { type: Boolean, default: false },
    capitationFunding: { type: Boolean, default: false },
    globalBudget: { type: Boolean, default: false },
    prospectivePaymentFunding: { type: Boolean, default: false },
    indicativeBudgets: { type: Boolean, default: false },
    targetedPaymentsPenaltiesFunding: { type: Boolean, default: false },

    remuneratingProviders: { type: Boolean, default: false },
    feeForServiceRemuneration: { type: Boolean, default: false },
    capitationRenumeration: { type: Boolean, default: false },
    salary: { type: Boolean, default: false },
    prospectivePaymentRenumeration: { type: Boolean, default: false },
    fundholding: { type: Boolean, default: false },
    indicativeBudgetsRenumeration: { type: Boolean, default: false },
    targetedPaymentPenaltiesRenumeration: { type: Boolean, default: false },


    purchasingProductsServices: { type: Boolean, default: false },
    scopeNatureOfInsurancePlans: { type: Boolean, default: false },
    listsOfCoveredReimbursedOrganizationsProvidersServicesProducts: { type: Boolean, default: false },
    restrictionsInCoverageReimbursementRatesForOrganizationsProvidersServicesProducts: { type: Boolean, default: false },
    capsOnCoverageReimbursementForOrganizationsProvidersServicesProducts: { type: Boolean, default: false },
    priorApprovalRequirementsForOrganizationsProvidersServicesProducts: { type: Boolean, default: false },
    listsOfSubstitutableServicesAndProducts: { type: Boolean, default: false },
    
    incentivizingConsumers: { type: Boolean, default: false },
    premiumLevelAndFeatures: { type: Boolean, default: false },
    costSharing: { type: Boolean, default: false },
    healthSavingsAccountsThirdPartyContributions: { type: Boolean, default: false },
    targetedPaymentsPenaltiesIncentivizingConsumers: { type: Boolean, default: false },
    
    deliveryArrangements: { type: Boolean, default: false },
    howCareIsDesignedToMeetConsumersNeeds: { type: Boolean, default: false },
    availabilityOfCare: { type: Boolean, default: false },
    timelyAccessToCare: { type: Boolean, default: false },
    culturallyAppropriateCare: { type: Boolean, default: false },
    caseManagement: { type: Boolean, default: false },
    packageOfCareCarePathwaysDiseaseManagement: { type: Boolean, default: false },
    groupCare: { type: Boolean, default: false },
    
    byWhomCareIsProvided: { type: Boolean, default: false },
    systemNeedDemandSupply: { type: Boolean, default: false },
    systemRecruitmentRetentionTransitions: { type: Boolean, default: false },
    systemPerformanceManagement: { type: Boolean, default: false },
    workplaceConditionsProviderSatisfaction: { type: Boolean, default: false },
    workplaceConditionsHealthSafety: { type: Boolean, default: false },
    skillMixRolePerformance: { type: Boolean, default: false },
    skillMixRoleExpansionOrExtension: { type: Boolean, default: false },
    skillMixTaskShiftingSubstitution: { type: Boolean, default: false },
    skillMixMultidisciplinaryTeams: { type: Boolean, default: false },
    skillMixVolunteersOrInformalFamilyCaregivers: { type: Boolean, default: false },
    skillMixCommunicationCaseDiscussionBetweenDistantHealthProfessionals: { type: Boolean, default: false },
    staffTraining: { type: Boolean, default: false },
    staffSupport: { type: Boolean, default: false },
    staffWorkloadWorkflowIntensity: { type: Boolean, default: false },
    staffContinuityOfCare: { type: Boolean, default: false },
    staffSelfSharedDecisionMaking: { type: Boolean, default: false },
    selfManagement: { type: Boolean, default: false },
    
    whereCareIsProvided: { type: Boolean, default: false },
    siteOfServiceDelivery: { type: Boolean, default: false },
    physicalstructureFacilitiesEquipment: { type: Boolean, default: false },
    organizationalScale: { type: Boolean, default: false },
    integrationOfServices: { type: Boolean, default: false },
    continuityOfCare: { type: Boolean, default: false },
    outreach: { type: Boolean, default: false },
    
    withwhatSupportsIsCareProvided: { type: Boolean, default: false },
    healthRecordSystems: { type: Boolean, default: false },
    electronicHealthRecord: { type: Boolean, default: false },
    otherICTThatSupportIndividualsWhoProvideCare: { type: Boolean, default: false },
    iCTThatSupportIndividualsWhoReceiveCare: { type: Boolean, default: false },
    qualityMonitoringAndImprovementSystems: { type: Boolean, default: false },
    safetyMonitoringAndImprovementSystems: { type: Boolean, default: false },
    
    implementationStrategies: { type: Boolean, default: false },
    consumerTargetedStrategy: { type: Boolean, default: false },
    informationOrEducationProvision: { type: Boolean, default: false },
    behaviourChangeSupport: { type: Boolean, default: false },
    skillsAndCompetenciesDevelopment: { type: Boolean, default: false },
    personalSupport: { type: Boolean, default: false },
    communicationAndDecisionMakingFacilitation: { type: Boolean, default: false },
    systemParticipation: { type: Boolean, default: false },
    
    providerTargetedStrategy: { type: Boolean, default: false },
    educationalMaterial: { type: Boolean, default: false },
    educationalMeeting: { type: Boolean, default: false },
    educationalOutreachVisit: { type: Boolean, default: false },
    localOpinionLeader: { type: Boolean, default: false },
    localConsensusProcess: { type: Boolean, default: false },
    peerReview: { type: Boolean, default: false },
    auditAndFeedback: { type: Boolean, default: false },
    remindersAndPrompts: { type: Boolean, default: false },
    tailoredIntervention: { type: Boolean, default: false },
    patientMediatedIntervention: { type: Boolean, default: false },
    multiFacetedIntervention: { type: Boolean, default: false },
    
    organizationTargetedStrategy: { type: Boolean, default: false },

    // Province focus
    federalNational: { type: Boolean, default: false },
    alberta: { type: Boolean, default: false },
    scopeOfPractice: { type: Boolean, default: false },
    britishColumbia: { type: Boolean, default: false },
    manitoba: { type: Boolean, default: false },
    newBrunswick: { type: Boolean, default: false },
    newFoundlandAndLabrador: { type: Boolean, default: false },
    novaScotia: { type: Boolean, default: false },
    nunavut: { type: Boolean, default: false },
    ontario: { type: Boolean, default: false },
    princeEdwardIsland: { type: Boolean, default: false },
    quebec: { type: Boolean, default: false },
    saskatchewan: { type: Boolean, default: false },
    yukon: { type: Boolean, default: false },

    // Canadian Areas
/*
    // Old Canadian Areas

    nationalPriorityFundingArea: { type: Boolean, default: false },
    primaryHealthcare: { type: Boolean, default: false },
    homeCare: { type: Boolean, default: false },
    prescriptionDrugCoverage: { type: Boolean, default: false },
    diagnosticMedicalEquipment: { type: Boolean, default: false },
    informationTechnology: { type: Boolean, default: false },
    ElectronicHealthRecord: { type: Boolean, default: false },
    OtherPriorityArea: { type: Boolean, default: false },
    patientSafety: { type: Boolean, default: false },
    healthHumanResources: { type: Boolean, default: false },
    technologyAssessment: { type: Boolean, default: false },
    innovationResearch: { type: Boolean, default: false },
    healthyCanadiansDeterminantsOfHealth: { type: Boolean, default: false },
    PerformanceIndicator: { type: Boolean, default: false },
    timelyAccessWaitingLists: { type: Boolean, default: false },
    quality: { type: Boolean, default: false },
    sustainability: { type: Boolean, default: false },
    healthStatusAndWellness: { type: Boolean, default: false },
    PriorityResearchThemesListeningForDirectionIII: { type: Boolean, default: false },
    workforceTheWorkEnvironment: { type: Boolean, default: false },
    changeManagementForImprovedPracticeImprovedHealth: { type: Boolean, default: false },
    dataInformationKnowledgeManagement: { type: Boolean, default: false },
    valuesBasedDecisionMakingPublicEngagement: { type: Boolean, default: false },
    patientCentredCare: { type: Boolean, default: false },
    patientFlowSystemIntegration: { type: Boolean, default: false },
    chronicDiseasePreventionManagement: { type: Boolean, default: false },
    healthSystemFinancingSustainability: { type: Boolean, default: false },
    emergingTechnologiesDrugs: { type: Boolean, default: false },
    qualityPatientSafety: { type: Boolean, default: false },
    linkingPopulationPublicHealthToHealthServices: { type: Boolean, default: false },
    aboriginalHealth: { type: Boolean, default: false },
*/

    // New Canadian Areas
    homeAndCommunityCare: { type: Boolean, default: false },
    mentalHealthAndAddictionServices: { type: Boolean, default: false },
    indigenousHealthFederal: { type: Boolean, default: false },
    agingEmergent: { type: Boolean, default: false },

    // Domains
    conditions: { type: Boolean, default: true },
    infectiousDiseases: { type: Boolean, default: false },
    HIVAIDS: { type: Boolean, default: false },
    tuberculosis: { type: Boolean, default: false },
    malaria: { type: Boolean, default: false },
    diarrhoealDisease: { type: Boolean, default: false },
    lowerRespiratoryInfections: { type: Boolean, default: false },

    nonCommunicableDiseases: { type: Boolean, default: false },
    cancer: { type: Boolean, default: false },
    cardiovascularDisease: { type: Boolean, default: false },
    diabetes: { type: Boolean, default: false },
    alzheimerAndOtherDementias: { type: Boolean, default: false },
    chronicObstructivePulmonaryDisease: { type: Boolean, default: false },

    domainsOther: { type: Boolean, default: false },
    maternalAndChildHealth: { type: Boolean, default: false },
    accidents: { type: Boolean, default: false },
    mentalHealthAndAddictions: { type: Boolean, default: false },

    technologies: { type: Boolean, default: false },
    drugs: { type: Boolean, default: false },
    devices: { type: Boolean, default: false },
    diagnostics: { type: Boolean, default: false },
    surgery: { type: Boolean, default: false },

/*
    // Old Sectors 
    sectors: { type: Boolean, default: false },
    primaryCare: { type: Boolean, default: false },
    homeCare: { type: Boolean, default: false },
    longTermCare: { type: Boolean, default: false },
    publicHealth: { type: Boolean, default: false },
*/
    // New Sectors
    sectors: { type: Boolean, default: false },
    homeAndCommunityCare: { type: Boolean, default: false },
    primaryCare: { type: Boolean, default: false },
    specialHospitalCare: { type: Boolean, default: false },
    rehabilitationCare: { type: Boolean, default: false },
    longTermCare: { type: Boolean, default: false },
    publicHealth: { type: Boolean, default: false },

    providers: { type: Boolean, default: false },
    physician: { type: Boolean, default: false },
    generalist: { type: Boolean, default: false },
    specialist: { type: Boolean, default: false },
    nurse: { type: Boolean, default: false },
    Pharmacist: { type: Boolean, default: false },
    alliedHealthProfessional: { type: Boolean, default: false },
    layCommunityCealthWorker: { type: Boolean, default: false },
    informalFamilyCaregivers: { type: Boolean, default: false },

    // LMIC Focus
    targetOfDocument: { type: Boolean, default: false },
    atLeastOneLMICAuthor: { type: Boolean, default: false },
    atLeastOneLMICStudyInclude: { type: Boolean, default: false },

    // Theme
    optimalAging: { type: Boolean, default: false },
    healthPromotionPrimaryPrevention: { type: Boolean, default: false },

    // Age
/*
    // Old Info
    neonates: { type: Boolean, default: false },
    pediatrics: { type: Boolean, default: false },
    adolescents: { type: Boolean, default: false },
    adults: { type: Boolean, default: false },
    geriatrics: { type: Boolean, default: false },

*/
    // Population
    childrenAndYouth: { type: Boolean, default: false },
    indigenousPeoples: { type: Boolean, default: false },
    oldAdults: { type: Boolean, default: false },

    // Information for evidence briefs
    focusOfDocuments: { type: String, default: '' },
    keyFindings: { type: String, default: '' },

    // Target
/*
    // Old Target section
    individual: { type: Boolean, default: false },
    community: { type: Boolean, default: false },
    healthSystem: { type: Boolean, default: false },
*/

    // Assessment and assignment status
    inProgress: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },

    // Ontario priority areas
    communityBasedCare: { type: Boolean, default: false },
    healthSystemPerformanceAndSustainability: { type: Boolean, default: false },
    healthyLivingWithAFocusOnTobaccoControl: { type: Boolean, default: false },
    mentalHealthAndAddictions: { type: Boolean, default: false },
    nursingResearch: { type: Boolean, default: false },
    primaryCareReform: { type: Boolean, default: false },
    qualityImprovementAndSafety: { type: Boolean, default: false },
    seniorsCare: { type: Boolean, default: false },
    vulnerableAndSpecialHealthNeedsPopulations: { type: Boolean, default: false },
    womensHealth: { type: Boolean, default: false },

    hseState: { type: Schema.Types.Mixed, default: null },

    complicated: { type: Boolean, default: false },

/*
    hseState: {type: Schema.Types.Mixed, default: {

        selectedOption: '',

        eligibilityFilterModel: {},

        showTitle: true,
        showRelevance: true,
        documentType: false,
        showGeneralArticleInformation: false,
        showEligibility: false,
        showHealthSystemsTopics: false,
        showCanadianAreas: false,
        showDomains: false,
        showLMICFocus: false,
        showProvinceFocus: false,
        showTheme: false,
        showPopulation: false,
        showOntarioPriorityArea: false,
        showTarget: false,
        showOntarioFocus: false,
        showArticle: false,
        showIntergovernmentalOrganizationHealthSystemDocument: false,
        showOntarianHealthSystemDocument: false,
        showCanadianHealthSystemDocument: false,
        showCanadaHealthSystemDocument: false,
        showArticleAssessment: false,

        relevanceValue: '', 

        checkedKeysHST: [],
        checkedKeysCA: [],
        checkedDomain: [],
        checkedLMIC: [],
        checkedProvince: [],
        checkedTheme: [], 
        checkedPopulation: [],
        checkedOPA: [],
        checkedCHSDT: [],
        checkedOHSDT: [],
        checkedIOHSDT: []
    }
    }
*/
});

// mongoose.model('HSEArticleEligibilityFilters', HSEArticleEligibilityFilterSchema);

/**
 * Compares this object to another to determine if they represent the same data
 * 
 * @param HSEArticleEligibilityFilterSchema otherInput The object to test.
 */
HSEArticleEligibilityFilterSchema.methods.isEqualTo = function (otherInput) {

    currentModel = this;

    var unEqualFields = 0;

    const props = Object.keys(HSEArticleEligibilityFilterSchema.paths);

    console.log(props.length);

    HSEArticleEligibilityFilterSchema.eachPath(function(path) {
        
        if( currentModel[path] !== otherInput[path] && path != '_article' && path != '_id') {
            console.log(`${path}: ${currentModel[path]}, ${path}: ${otherInput[path]}`);
            unEqualFields++;
            console.log(path);
        }
        //console.log(unEqualFields);
       // console.log(`${path}: ${currentModel[path]}, ${path}: ${otherInput[path]}`);
    });

    return unEqualFields === 0;

};

mongoose.model('HSEArticleEligibilityFilters', HSEArticleEligibilityFilterSchema);

HSEArticleEligibilityFilterSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticleEligibilityFilterSchema.paths);
//console.log(props.length);
