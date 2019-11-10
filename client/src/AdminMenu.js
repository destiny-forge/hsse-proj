const AdminMenu = [
{
  heading: 'Main Navigation',
  translate: 'sidebar.heading.HEADER'
},
{
  name: 'Dashboards',
  icon: 'icon-speedometer',
  translate: 'sidebar.nav.DASHBOARD',
  path: '/dashboard'
},
{
  heading: 'Assigned Queue',
  translate: 'sidebar.heading.Evidence Systems'
},
{
  name: 'Health Systems Assigned',
  icon: 'icon-layers',
  translate: 'sidebar.nav.element.AssignedHealth',
  submenu: [{
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
  }]
},
{
  name: 'Social Systems Assigned',
  icon: 'icon-chemistry',
  translate: 'sidebar.nav.element.Health',
  submenu: [{
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
  }]
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
  },{
    name: 'Batch Upload',
    path: '/hse/batch-upload',
    translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
  },{
    name: 'Eligibility & Filters',
    path: '/hse/filters-article-queue',
    translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
  },{
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
  }]
},
{
  name: 'Social Systems Pending',
  icon: 'icon-chemistry',
  translate: 'sidebar.nav.element.Social',
  submenu: [{
    name: 'Add Article',
    path: '/sse/add-article',
    translate: 'sidebar.nav.element.ADDHSEARTICLE'
  },{
    name: 'Batch Upload',
    path: '/sse/batchfileupload',
    translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
  },{
    name: 'Eligibility & Filters',
    path: '/sse/pendingeligibilityfiltersarticlequeue',
    translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
  },{
    name: 'Quality Appraisals',
    path: '/sse/pendingqualityappraisalsarticlequeue',
    translate: 'sidebar.nav.element.PENDINGQUALITYAPPRAISALSARTICLES'
  },{
    name: 'Linking Studies',
    path: '/sse/pendinglinkingstudiesarticlequeue',
    translate: 'sidebar.nav.element.PENDINGLINKINGSTUDIESARTICLES'
  },{
    name: 'Presentation Details',
    path: '/sse/pendingpresentationdetailsarticlequeue',
    translate: 'sidebar.nav.element.PENDINGPRESENTATIONDETAILSARTICLES'
  }]
},
  {
    heading: 'Administrator',
    translate: 'sidebar.heading.Administrator'
  },{
    name: 'Health Systems',
    icon: 'icon-user',
    translate: 'sidebar.nav.table.ADMINISTRATORHEALTHSYSTEMS',
    submenu: [{
      name: 'Eligibility Filter',
      path: '/administrator/hse/eligibility-filters',
      translate: 'sidebar.nav.table.ADMINISTRATORHSEELIGIBILITYFILTERQUEUE'
    },
    {
      name: 'Quality Appraisals',
      path: '/administrator/hse/quality-appraisals',
      translate: 'sidebar.nav.table.ADMINISTRATORHSEQUALITYAPPRAISALSQUEUE'
    },
    {
      name: 'Linking Studies',
      path: '/administrator/hse/linking-studies',
      translate: 'sidebar.nav.table.ADMINISTRATORHSETLINKINGSTUDIESQUEUE'
    },
    {
      name: 'Presentation Details',
      path: '/administrator/hse/presentation-details',
      translate: 'sidebar.nav.table.ADMINISTRATORHSEPRESENTATIONDETAILSQUEUE'
    },
    {
      name: 'Go Live Queue',
      path: '/administrator/hse/golive-queue',
      translate: 'sidebar.nav.table.ADMININISTRATORHSEGOLIVEQUEUE'
    },
    {
      name: 'Tracking & Prioritizing',
      path: '/administrator/hse/tracking-prioritizing',
      translate: 'sidebar.nav.table.ADMINISTRATORHSETRACKINGPRIORITIZINGQUEUE'
    }]
  },{
    name: 'Social Systems',
    icon: 'icon-user',
    translate: 'sidebar.nav.table.ADMINISTRATORSOCIALSYSTEMS',
    submenu: [
    {
      name: 'Eligibility Filter',
      path: '/administrator/sse/eligibility-filters',
      translate: 'sidebar.nav.table.ADMINISTRATORSSEELIGIBILITYFILTERQUEUE'
    },
    {
      name: 'Quality Appraisals',
      path: '/administrator/sse/quality-appraisals',
      translate: 'sidebar.nav.table.ADMINISTRATORSSEQUALITYAPPRAISALSQUEUE'
    },
    {
      name: 'Linking Studies',
      path: '/administrator/sse/linking-studies',
      translate: 'sidebar.nav.table.ADMINISTRATORSSETLINKINGSTUDIESQUEUE'
    },
    {
      name: 'Presentation Details',
      path: '/administrator/sse/presentation-details',
      translate: 'sidebar.nav.table.ADMINISTRATORSSEPRESENTATIONDETAILSQUEUE'
    },
    {
      name: 'Go Live Queue',
      path: '/administrator/sse/golive-queue',
      translate: 'sidebar.nav.table.ADMINISTRATORSSEGOLIVEQUEUE'
    },
    {
      name: 'Tracking & Prioritizing',
      path: '/administrator/sse/tracking-prioritizing',
      translate: 'sidebar.nav.table.ADMINISTRATORSSETRACKINGPRIORITIZING'
    }]
  },{
    heading: 'Settings',
    translate: 'sidebar.heading.SETTINGS'
  },
  {
    name: 'Administrator',
    icon: 'icon-shield',
    translate: 'sidebar.nav.table.USER',
    submenu: [{
      name: 'User Editor',
      path: '/settings/edit-user',
      translate: 'sidebar.nav.table.SETTINGSUSEREDITOR'
  }]
}];

export default AdminMenu;