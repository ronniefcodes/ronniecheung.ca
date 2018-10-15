const config = {
  name: 'Ronnie Cheung',
  title: 'Web Developer',
  contactMethods: [{
    title: 'Send me an email',
    type: 'email',
    value: 'ronniech@outlook.com',
    icon: 'mail',
  }, {
    title: 'Check out my Github',
    type: 'website',
    value: 'https://github.com/ronniefcodes',
    icon: 'github',
  }, {
    title: 'Connect on LinkedIn',
    type: 'website',
    value: 'https://www.linkedin.com/in/ronniech/',
    icon: 'linkedin',
  }, {
    title: 'Download my resume',
    type: 'file',
    value: './media/ronniecheung_resume.pdf',
    icon: 'download',
  }],
  projects: [{
    title: 'Heineken Cities',
    type: 'Contest Website',
    year: 2015,
    description: 'JQuery',
    link: '',
    images: {
      mobile: './media/heineken-mobile.jpg',
      smallDesktop: './media/heineken.jpg',
    },
  }, {
    title: 'Honda Shoppers',
    type: 'Web Application',
    year: 2018,
    description: 'AngularJS',
    link: 'https://www.honda.ca/login',
    images: {
      mobile: './media/shoppers-mobile.jpg',
      smallDesktop: './media/shoppers.jpg',
    },
  }, {
    title: 'Acura MySites',
    type: 'Web Application',
    year: 2017,
    description: 'AngularJS',
    link: 'https://acura.ca/login',
    images: {
      mobile: './media/mysites-mobile.jpg',
      smallDesktop: './media/mysites.jpg',
    },
  }, {
    title: 'Nikon I Am',
    type: 'Microsite',
    year: 2014,
    description: 'JQuery',
    images: {
      mobile: './media/nikon-mobile.jpg',
      smallDesktop: './media/nikon.jpg',
    },
  },  {
    title: 'Enchant with Airwick',
    type: 'Contest Website',
    year: 2014,
    description: 'JQuery',
    images: {
      mobile: './media/airwick-holidays-mobile.jpg',
      smallDesktop: './media/airwick-holidays.jpg',
    },
  }, {
    title: 'Sandbox Advertising',
    type: 'Website',
    year: 2015,
    description: 'AngularJS',
    link: '',
    images: {
      mobile: './media/sandbox-mobile.jpg',
      smallDesktop: './media/sandbox.jpg',
    },
  }, {
    title: 'Isolocity',
    type: 'Web Application',
    year: 2015,
    description: 'EmberJS',
    link: '',
    images: {
      mobile: './media/isolocity-mobile.jpg',
      smallDesktop: './media/isolocity.jpg',
    },
  }]
};

export default config;
