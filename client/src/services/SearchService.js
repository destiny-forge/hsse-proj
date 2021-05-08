/*
 * Search service for interacting with the API backend
 */

const SearchService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const latest = () => {
    //const res = await fetch(`${baseURL}/search/latest`);
    const sample = {
      document_Types_Articles: [
        {
          DocumentTypeID: 1,
          DocumentTypeName2: 'Evidence briefs for policy',
          DocumentTypeNameEN: 'Evidence briefs for policy',
          document_Types_Articles: [],
        },
        {
          DocumentTypeID: 2,
          DocumentTypeName2: 'Overviews of systematic reviews',
          DocumentTypeNameEN: 'Overviews of systematic reviews',
          document_Types_Articles: [],
        },
        {
          DocumentTypeID: 3,
          DocumentTypeName2: 'Systematic reviews of effects',
          DocumentTypeNameEN: 'Systematic reviews of effects',
          document_Types_Articles: [
            {
              ArticleId: 138108,
              Title2:
                'A meta-analysis of universal school-based prevention programs for anxiety and depression in children',
              TitleEN:
                'A meta-analysis of universal school-based prevention programs for anxiety and depression in children',
            },
            {
              ArticleId: 239624,
              Title2:
                'Can case management improve cancer patients quality of life?: A systematic review following PRISMA',
              TitleEN:
                'Can case management improve cancer patients quality of life?: A systematic review following PRISMA',
            },
            {
              ArticleId: 239629,
              Title2:
                'Effectiveness of flipped classroom vs traditional lectures in radiology education: A meta-analysis',
              TitleEN:
                'Effectiveness of flipped classroom vs traditional lectures in radiology education: A meta-analysis',
            },
            {
              ArticleId: 221289,
              Title2:
                'Effectiveness of multimedia interventions in the provision of patient education on anticoagulation therapy: A review',
              TitleEN:
                'Effectiveness of multimedia interventions in the provision of patient education on anticoagulation therapy: A review',
            },
            {
              ArticleId: 239578,
              Title2:
                'Feasibility and effectiveness of tools that support communication and decision making in life-prolonging treatments for patients in hospital: A systematic review',
              TitleEN:
                'Feasibility and effectiveness of tools that support communication and decision making in life-prolonging treatments for patients in hospital: A systematic review',
            },
          ],
        },
        {
          DocumentTypeID: 4,
          DocumentTypeName2: 'Systematic reviews addressing other questions ',
          DocumentTypeNameEN: 'Systematic reviews addressing other questions ',
          document_Types_Articles: [
            {
              ArticleId: 239353,
              Title2:
                'A systematic review and meta-analysis of health state utility values for osteoarthritis-related conditions',
              TitleEN:
                'A systematic review and meta-analysis of health state utility values for osteoarthritis-related conditions',
            },
            {
              ArticleId: 245498,
              Title2:
                'Analysis and evaluation of COVID-19 web applications for health professionals: Challenges and opportunities',
              TitleEN:
                'Analysis and evaluation of COVID-19 web applications for health professionals: Challenges and opportunities',
            },
            {
              ArticleId: 245394,
              Title2: 'Antibiotic resistance surveillance systems: A review',
              TitleEN: 'Antibiotic resistance surveillance systems: A review',
            },
            {
              ArticleId: 221263,
              Title2:
                'Challenges of managing diabetes in Iran: Meta-synthesis of qualitative studies',
              TitleEN:
                'Challenges of managing diabetes in Iran: Meta-synthesis of qualitative studies',
            },
            {
              ArticleId: 239604,
              Title2:
                'Developing a family-centered care model in the neonatal intensive care unit (NICU): A new vision to manage healthcare',
              TitleEN:
                'Developing a family-centered care model in the neonatal intensive care unit (NICU): A new vision to manage healthcare',
            },
            {
              ArticleId: 245456,
              Title2:
                'Health professional digital capabilities frameworks: A scoping review',
              TitleEN:
                'Health professional digital capabilities frameworks: A scoping review',
            },
            {
              ArticleId: 239395,
              Title2:
                'How people of African Caribbean or Irish ethnicity cope with long-term health conditions in UK community settings: A systematic review of qualitative, quantitative and mixed method studies',
              TitleEN:
                'How people of African Caribbean or Irish ethnicity cope with long-term health conditions in UK community settings: A systematic review of qualitative, quantitative and mixed method studies',
            },
            {
              ArticleId: 246877,
              Title2:
                'Information technology in emergency management of COVID-19 outbreak',
              TitleEN:
                'Information technology in emergency management of COVID-19 outbreak',
            },
            {
              ArticleId: 245514,
              Title2:
                'Key competences of outpatient nurses, as perceived by patients attending nurse-led clinics: An integrative review',
              TitleEN:
                'Key competences of outpatient nurses, as perceived by patients attending nurse-led clinics: An integrative review',
            },
            {
              ArticleId: 221281,
              Title2:
                "Missed nursing care and nurses' intention to leave: An integrative review",
              TitleEN:
                "Missed nursing care and nurses' intention to leave: An integrative review",
            },
            {
              ArticleId: 239557,
              Title2:
                'Organizational commitment among physicians: A systematic literature review',
              TitleEN:
                'Organizational commitment among physicians: A systematic literature review',
            },
            {
              ArticleId: 245503,
              Title2:
                'Perceived barriers, benefits, facilitators, and attitudes of health professionals towards multidisciplinary team care in type 2 diabetes management: A systematic review',
              TitleEN:
                'Perceived barriers, benefits, facilitators, and attitudes of health professionals towards multidisciplinary team care in type 2 diabetes management: A systematic review',
            },
            {
              ArticleId: 239397,
              Title2:
                'Prevalence of suicide-related behaviors among physicians: A systematic review and meta-analysis',
              TitleEN:
                'Prevalence of suicide-related behaviors among physicians: A systematic review and meta-analysis',
            },
            {
              ArticleId: 246896,
              Title2:
                'Protecting Indian health workforce during the COVID-19 pandemic',
              TitleEN:
                'Protecting Indian health workforce during the COVID-19 pandemic',
            },
            {
              ArticleId: 239565,
              Title2:
                'Referral and access to heart function clinics: A realist review',
              TitleEN:
                'Referral and access to heart function clinics: A realist review',
            },
            {
              ArticleId: 246903,
              Title2:
                'Registered nurses in expanded roles improve care in nursing homes: Swiss perspective based on the modified Delphi method',
              TitleEN:
                'Registered nurses in expanded roles improve care in nursing homes: Swiss perspective based on the modified Delphi method',
            },
            {
              ArticleId: 239546,
              Title2:
                'Rehabilitation and palliative care for socioeconomically disadvantaged patients with advanced cancer: A scoping review',
              TitleEN:
                'Rehabilitation and palliative care for socioeconomically disadvantaged patients with advanced cancer: A scoping review',
            },
            {
              ArticleId: 245391,
              Title2:
                'Strategies to improve adherence to anti-hypertensive medications: A narrative review',
              TitleEN:
                'Strategies to improve adherence to anti-hypertensive medications: A narrative review',
            },
            {
              ArticleId: 245398,
              Title2:
                'Technology-based psychosocial interventions for people with Borderline Personality Disorder: A scoping review of the literature',
              TitleEN:
                'Technology-based psychosocial interventions for people with Borderline Personality Disorder: A scoping review of the literature',
            },
            {
              ArticleId: 239605,
              Title2:
                'The impact of COVID-19 on telemedicine utilization across multiple service lines in the United States',
              TitleEN:
                'The impact of COVID-19 on telemedicine utilization across multiple service lines in the United States',
            },
            {
              ArticleId: 239600,
              Title2:
                'The mental health of frontline health care providers during pandemics: A rapid review of the literature',
              TitleEN:
                'The mental health of frontline health care providers during pandemics: A rapid review of the literature',
            },
            {
              ArticleId: 221271,
              Title2:
                'What are the barriers, facilitators and interventions targeting help-seeking behaviours for common mental health problems in adolescents? A systematic review',
              TitleEN:
                'What are the barriers, facilitators and interventions targeting help-seeking behaviours for common mental health problems in adolescents? A systematic review',
            },
          ],
        },
        {
          DocumentTypeID: 5,
          DocumentTypeName2: 'Systematic reviews in progress',
          DocumentTypeNameEN: 'Systematic reviews in progress',
          document_Types_Articles: [
            {
              ArticleId: 138147,
              Title2:
                'Impact of sharing electronic health records with patients on the quality and safety of care: A systematic review and narrative synthesis protocol',
              TitleEN:
                'Impact of sharing electronic health records with patients on the quality and safety of care: A systematic review and narrative synthesis protocol',
            },
            {
              ArticleId: 239584,
              Title2:
                'Social work leadership competencies in health and mental healthcare: A scoping review protocol',
              TitleEN:
                'Social work leadership competencies in health and mental healthcare: A scoping review protocol',
            },
          ],
        },
        {
          DocumentTypeID: 6,
          DocumentTypeName2: 'Systematic reviews being planned',
          DocumentTypeNameEN: 'Systematic reviews being planned',
          document_Types_Articles: [],
        },
        {
          DocumentTypeID: 7,
          DocumentTypeName2:
            'Economic evaluations and costing studies\u000d\u000a',
          DocumentTypeNameEN:
            'Economic evaluations and costing studies\u000d\u000a',
          document_Types_Articles: [
            {
              ArticleId: 239553,
              Title2:
                'Evaluation of a heart failure telemonitoring program through a microsimulation model: Cost-utility analysis',
              TitleEN:
                'Evaluation of a heart failure telemonitoring program through a microsimulation model: Cost-utility analysis',
            },
          ],
        },
      ],
      hot_Docs_Articles: [
        {
          ArticleId: 239578,
          Title2:
            'Feasibility and effectiveness of tools that support communication and decision making in life-prolonging treatments for patients in hospital: A systematic review',
          TitleEN:
            'Feasibility and effectiveness of tools that support communication and decision making in life-prolonging treatments for patients in hospital: A systematic review',
        },
        {
          ArticleId: 239397,
          Title2:
            'Prevalence of suicide-related behaviors among physicians: A systematic review and meta-analysis',
          TitleEN:
            'Prevalence of suicide-related behaviors among physicians: A systematic review and meta-analysis',
        },
        {
          ArticleId: 239605,
          Title2:
            'The impact of COVID-19 on telemedicine utilization across multiple service lines in the United States',
          TitleEN:
            'The impact of COVID-19 on telemedicine utilization across multiple service lines in the United States',
        },
        {
          ArticleId: 221271,
          Title2:
            'What are the barriers, facilitators and interventions targeting help-seeking behaviours for common mental health problems in adolescents? A systematic review',
          TitleEN:
            'What are the barriers, facilitators and interventions targeting help-seeking behaviours for common mental health problems in adolescents? A systematic review',
        },
      ],
      hot_Docs_Content1:
        "In this month's evidence service we have identified a few documents that will be of interest to a broad array of health system policymakers and stakeholders. This month's '<span style=\"color: #D9783E;\">hot docs</span>' include:",
      hot_Docs_Content2:
        "During the past month, the documents listed below were added to Health Systems Evidence, the world's most comprehensive, free access point for evidence to support policy makers, stakeholders and researchers interested in how to strengthen or reform health systems or in how to get cost-effective programs, services and drugs to those who need them. Registered users are able to subscribe to receive monthly email updates of new evidence that addresses topics of interest to them.",
      month: 'april',
      year: '2021',
    };
    return sample;
    //const result = new Promise(() => sample);
    //return Promise.resolve(result);
  };

  const suggestions = async (query, lang) => {
    const url = `${baseURL}/search/suggestions/q=${query}&lang=${lang}`;
    const res = await fetch(url);
    return Promise.resolve(res);
  };

  return {
    latest,
    suggestions,
  };
};

export default SearchService;
