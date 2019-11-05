const Menu = [
  {
    heading: 'Main Navigation',
    translate: 'sidebar.heading.HEADER'
  },
  {
    name: 'Dashboards',
    icon: 'icon-speedometer',
    translate: 'sidebar.nav.DASHBOARD',
    /*label: { value: 3, color: 'success' },*/
    submenu: [{
      name: 'Main Dashboard',
      path: '/dashboard'
    }
    ]
  },
  {
    heading: 'Assigned Queue',
    translate: 'sidebar.heading.Evidence Systems'
  },
  {
    name: 'Health Systems Assigned',
    icon: 'icon-layers',
    translate: 'sidebar.nav.element.AssignedHealth',
    submenu: [
      {
        name: ' Eligibility & Filters',
        path: '/hse/assigned-eligibility-filters-articlequeue',
        translate: 'sidebar.nav.element.ASSIGNEDELIGIBILITYFILTERS'
      },
      {
        name: 'Quality Appraisals',
        path: '/hse/assignedqualityappraisalsarticlequeue',
        translate: 'sidebar.nav.element.ASSIGNEDQUALITYAPPRAISALS'
      },
      {
        name: 'Linking Studies',
        path: '/hse/assignedlinkingstudiesarticlequeue',
        translate: 'sidebar.nav.element.ASSIGNEDLINKINGSTUDIES'
      },
      {
        name: 'Presentation Details',
        path: '/hse/assignedpresentationdetailsarticlequeue',
        translate: 'sidebar.nav.element.ASSIGNEDPRESENTATIONDETAILS'
      },
      {
        name: 'Translating Titles',
        path: '/hse/assignedtranslatingtitlesqueue',
        translate: 'sidebar.nav.element.ASSIGNEDTRANSLATINGTITLES'
      },
      {
        name: 'Tracking & Prioritizing',
        path: '/hse/assignedtrackingprioritizingqueue',
        translate: 'sidebar.nav.element.ASSIGNEDTRACKINGPRIORITIZING'
      }
    ]
  },
  {
    name: 'Social Systems Assigned',
    icon: 'icon-chemistry',
    translate: 'sidebar.nav.element.Health',
    submenu: [
      {
        name: 'Eligibility & Filters',
        path: '/sse/assignedeligibilityfiltersarticlequeue',
        translate: 'sidebar.nav.element.ELIGIBILITYFILTERS'
      },
      {
        name: 'Quality Appraisals',
        path: '/sse/assignedqualityappraisalsarticlequeue',
        translate: 'sidebar.nav.element.QUALITYAPPRAISALS'
      },
      {
        name: 'Linking Studies',
        path: '/sse/assignedlinkingstudiesarticlequeue',
        translate: 'sidebar.nav.element.LINKINGSTUDIES'
      },
      {
        name: 'Presentation Details',
        path: '/sse/assignedpresentationdetailsarticlequeue',
        translate: 'sidebar.nav.element.PRESENTATIONDETAILS'
      },
      {
        name: 'Translating Titles',
        path: '/sse/assignedtranslatingtitlesqueue',
        translate: 'sidebar.nav.element.TRANSLATINGTITLES'
      },
      {
        name: 'Tracking & Prioritizing',
        path: '/sse/assignedtrackingprioritizingqueue',
        translate: 'sidebar.nav.element.TRACKINGPRIORITIZING'
      }
    ]
  },
  {
    heading: 'Pending Queue',
    translate: 'sidebar.heading.Evidence Systems'
  },
  {
    name: 'Health Systems Pending',
    icon: 'icon-layers',
    translate: 'sidebar.nav.element.QueuedHealth',
    submenu: [{
      name: 'Add Article',
      path: '/hse/add-article',
      translate: 'sidebar.nav.element.ADDHSEARTICLE'
    }, {
      name: 'Batch Upload',
      path: '/hse/batchfileupload',
      translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
    },
    {
      name: 'Eligibility & Filters',
      path: '/hse/pendingeligibilityfiltersarticlequeue',
      translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
    },/*
            {
                name: 'Eligibility & Filters Batch',
                path: '/hse/pendingeligibilityfiltersbatchfilequeue',
                translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERBATCHFILES'
            },*/
    {
      name: 'Quality Appraisals',
      path: '/hse/pendingqualityappraisalsarticlequeue',
      translate: 'sidebar.nav.element.PENDINGQUALITYAPPRAISALS'
    },
    {
      name: 'Linking Studies',
      path: '/hse/pendinglinkingstudiesarticlequeue',
      translate: 'sidebar.nav.element.PENDINGLINKINGSTUDIES'
    },
    {
      name: 'Presentation Details',
      path: '/hse/pendingpresentationdetailsarticlequeue',
      translate: 'sidebar.nav.element.PENDINGPRESENTATIONDETAILS'
    },
    {
      name: 'Translating Titles',
      path: '/hse/pendingtranslatingtitlesqueue',
      translate: 'sidebar.nav.element.PENDINGTRANSLATINGTITLES'
    },
    {
      name: 'Tracking & Prioritizing',
      path: '/hse/pendingtrackingprioritizingqueue',
      translate: 'sidebar.nav.element.PENDINGTRACKINGPRIORITIZING'
    }
    ]
  },
  {
    name: 'Social Systems Pending',
    icon: 'icon-chemistry',
    translate: 'sidebar.nav.element.Social',
    submenu: [{
      name: 'Add Article',
      path: '/sse/add-article',
      translate: 'sidebar.nav.element.ADDHSEARTICLE'
    }, {
      name: 'Batch Upload',
      path: '/sse/batchfileupload',
      translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
    },
    {
      name: 'Eligibility & Filters',
      path: '/sse/pendingeligibilityfiltersarticlequeue',
      translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
    },/*
        {
            name: 'Eligibility & Filters Batch',
            path: '/sse/pendingeligibilityfiltersbatchfilequeue',
            translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERBATCHFILES'
        },*/
    {
      name: 'Quality Appraisals',
      path: '/sse/pendingqualityappraisalsarticlequeue',
      translate: 'sidebar.nav.element.PENDINGQUALITYAPPRAISALSARTICLES'
    },
    {
      name: 'Linking Studies',
      path: '/sse/pendinglinkingstudiesarticlequeue',
      translate: 'sidebar.nav.element.PENDINGLINKINGSTUDIESARTICLES'
    },
    {
      name: 'Presentation Details',
      path: '/sse/pendingpresentationdetailsarticlequeue',
      translate: 'sidebar.nav.element.PENDINGPRESENTATIONDETAILSARTICLES'
    },
    {
      name: 'Translating Titles',
      path: 'dropdown',
      translate: 'sidebar.nav.element.PENDINGTRANSLATINGTITLESARTICLES'
    },
    {
      name: 'Tracking & Prioritizing',
      path: 'cards',
      translate: 'sidebar.nav.element.PENDIGTRACKINGPRIORITIZINGARTICLES'
    }
    ]
  },
  {
    heading: 'Complicated Queue',
    translate: 'sidebar.heading.Evidence Systems'
  },
  {
    name: 'Health Systems Compl...',
    icon: 'icon-layers',
    translate: 'sidebar.nav.element.QueuedHealth',
    submenu: [
      {
        name: 'Eligibility & Filters Article',
        path: '/hse/complicatedeligibilityfiltersarticlequeue',
        translate: 'sidebar.nav.element.COMPLICATEDELIGIBILITYFILTERARTICLES'
      },
      {
        name: 'Quality Appraisals',
        path: '/hse/complicatedqualityappraisalsqueue',
        translate: 'sidebar.nav.element.COMPLICATEDQUALITYAPPRAISALSARTICLES'
      },
      {
        name: 'Linking Studies',
        path: '/hse/complicatedlinkingstudiesqueue',
        translate: 'sidebar.nav.element.COMPLICATEDLINKINGSTUDIESARTICLES'
      },
      {
        name: 'Presentation Details',
        path: '/hse/complicatedpresentationdetailsqueue',
        translate: 'sidebar.nav.element.COMPLICATEDPRESENTATIONDETAILSARTICLES'
      },
      {
        name: 'Translating Titles',
        path: '/hse/complicatedtranslatingtitlesqueue',
        translate: 'sidebar.nav.element.COMPLICATEDTRANSLATINGTITLESARTICLES'
      },
      {
        name: 'Tracking & Prioritizing',
        path: '/hse/complicatedtrackingprioritizingqueue',
        translate: 'sidebar.nav.element.COMPLICATEDTRACKINGPRIORITIZINGARTICLES'
      }
    ]
  },
  {
    name: 'Social Systems Compli...',
    icon: 'icon-chemistry',
    translate: 'sidebar.nav.element.Social',
    submenu: [
      {
        name: 'Eligibility & Filters Article',
        path: '/sse/complicatedeligibilityfiltersarticlequeue',
        translate: 'sidebar.nav.element.COMPLICATEDELIGIBILITYFILTERARTICLES'
      },
      {
        name: 'Quality Appraisals',
        path: '/sse/complicatedqualityappraisalsarticlequeue',
        translate: 'sidebar.nav.element.COMPLICATEDQUALITYAPPRAISALSARTICLES'
      },
      {
        name: 'Linking Studies',
        path: '/sse/complicatedlinkingstudies',
        translate: 'sidebar.nav.element.COMPLICATEDLINKINGSTUDIESARTICLES'
      },
      {
        name: 'Presentation Details',
        path: '/sse/complicatedpresentationdetails',
        translate: 'sidebar.nav.element.COMPLICATEDPRESENTATIONDETAILSARTICLES'
      },
      {
        name: 'Translating Titles',
        path: '/sse/complicated/translatingtitles',
        translate: 'sidebar.nav.element.COMPLICATEDTRANSLATINGTITLESARTICLES'
      },
      {
        name: 'Tracking & Prioritizing',
        path: '/sse/complicatedtrackingprioritizing',
        translate: 'sidebar.nav.element.COMPLICATEDTRACKINGPRIORITIZINGARTICLES'
      }
    ]
  },
  {
    heading: 'Managers',
    translate: 'sidebar.heading.Managers'
  },
  {
    name: 'Search',
    icon: 'icon-note',
    translate: 'sidebar.nav.form.SEARCH',
    submenu: [{
      name: 'Standard',
      path: 'form-standard',
      translate: 'sidebar.nav.form.STANDARD'
    },
    {
      name: 'Extended',
      path: 'form-extended',
      translate: 'sidebar.nav.form.EXTENDED'
    },
    {
      name: 'Validation',
      path: 'form-validation',
      translate: 'sidebar.nav.form.VALIDATION'
    },
    {
      name: 'Wizard',
      path: 'form-wizard',
    },
    {
      name: 'Upload',
      path: 'form-upload',
    },
    {
      name: 'Cropper',
      path: 'form-cropper',
    }
    ]
  },
  {
    name: 'Export',
    icon: 'icon-note',
    translate: 'sidebar.nav.form.EXPORT',
    submenu: [{
      name: 'Standard',
      path: 'form-standard',
      translate: 'sidebar.nav.form.STANDARD'
    },
    {
      name: 'Extended',
      path: 'form-extended',
      translate: 'sidebar.nav.form.EXTENDED'
    },
    {
      name: 'Validation',
      path: 'form-validation',
      translate: 'sidebar.nav.form.VALIDATION'
    },
    {
      name: 'Wizard',
      path: 'form-wizard',
    },
    {
      name: 'Upload',
      path: 'form-upload',
    },
    {
      name: 'Cropper',
      path: 'form-cropper',
    }
    ]
  }, {
    name: 'Translation',
    icon: 'icon-grid',
    translate: 'sidebar.nav.table.TRANSLATION',
    submenu: [{
      name: 'Standard',
      path: 'table-standard',
      translate: 'sidebar.nav.table.STANDARD'
    },
    {
      name: 'Extended',
      path: 'table-extended',
      translate: 'sidebar.nav.table.EXTENDED'
    },
    {
      name: 'Datatable',
      path: 'table-datatable',
      translate: 'sidebar.nav.table.DATATABLE'
    },
    {
      name: 'Datagrid',
      path: 'table-datagrid',
    }
    ]
  }, {
    name: 'Monthly Email',
    icon: 'icon-envelope',
    translate: 'sidebar.nav.table. MONTHLY EMAIL',
    submenu: [{
      name: 'Standard',
      path: 'table-standard',
      translate: 'sidebar.nav.table.STANDARD'
    },
    {
      name: 'Extended',
      path: 'table-extended',
      translate: 'sidebar.nav.table.EXTENDED'
    },
    {
      name: 'Datatable',
      path: 'table-datatable',
      translate: 'sidebar.nav.table.DATATABLE'
    },
    {
      name: 'Datagrid',
      path: 'table-datagrid',
    }
    ]
  },
  {
    heading: 'Settings',
    translate: 'sidebar.heading.SETTINGS'
  }, {
    name: 'Account',
    icon: 'icon-user',
    translate: 'sidebar.nav.table.USER',
    submenu: [{
      name: 'Basic',
      path: 'table-standard',
      translate: 'sidebar.nav.table.BASIC'
    },
    {
      name: 'Advanced',
      path: 'table-extended',
      translate: 'sidebar.nav.table.ADVANCED'
    }
    ]
  }
];

export default Menu;