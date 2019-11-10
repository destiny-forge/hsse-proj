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
      path: '/hse/batch-upload',
      translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
    },
    {
      name: 'Eligibility & Filters',
      path: '/hse/filters-article-queue',
      translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
    },
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