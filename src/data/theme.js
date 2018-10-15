const _COLORS = {
  black: '#222',
  blue: '#003973',
  brown: '#c9bda7',
  white: '#fff',
};

const _FONT_FAMILIES = {
  header: '"Roboto Condensed", Helvetica, Arial, sans-serif',
  base: 'Roboto, Helvetica, Arial, sans-serif',
};

const _ZINDICES = {
  bottom: 1,
  middle: 5,
  top: 10,
};

const app = {
  backgroundColor: _COLORS.brown,
  backgroundImageUrl: '/media/code-mobile.jpg',
  fontFamily: _FONT_FAMILIES.base,
  smallDesktop: {
    backgroundImageUrl: '/media/code.jpg'
  },
};

const backgrounds = {
  backgroundPosition: '50% 22.5%',
  backgroundSize: 'cover',
  smallDesktop: {
    backgroundPosition: '0 50%',
  },
};

const carouselContent = {
  positionBottom: 'auto',
  positionLeft: '-100%',
  positionRight: 'auto',
  positionTop: '-100%',
};

const carouselNavButtons = {
  fontColor: _COLORS.black,
};

const contactInformation = {
  margin: '1em 0 0',
};

const fontFamilies = {
  googleFonts: [{
    name: 'Roboto',
    weights: [100, 200],
  }, {
    name: 'Roboto Condensed',
    weights: [400]
  }]
};

const headerContainer = {
  position: 'fixed',
  background: `linear-gradient(
    179deg,
    rgba(201,189,167,0) 0%,
    rgba(201,189,167,0) 5%,
    rgba(201,189,167,0.35) 18%,
    rgba(201,189,167,0.45) 26%,
    rgba(201,189,167,0.55) 34%,
    rgba(201,189,167,0.8) 56%,
    rgba(201,189,167,1) 88%,
    rgba(201,189,167,1) 100%)
  `,
  padding: '7.5vh 0 2.5em',
  smallDesktop: {
    background: 'none',
    positionRight: '0',
    padding: '1%',
    margin: '0 4.5% 4.5% 0',
    textAlign: 'right',
    width: 'auto',
  },
  desktop: {
    margin: '0 4.5% 4.5% 0',
    padding: '1%',
  },
};

const headers = {
  fontColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '400',
  letterSpacing: '0.05em',
  textTransform: 'none',
  margin: '.25em 0 0',
};

const links = {
  fontColor: _COLORS.blue,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.blue}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
  activeFontColor: _COLORS.white,
  activeIconBorderColor: _COLORS.white,
  activeIconBackgroundColor: _COLORS.blue,
};

const subheaders = {
  fontColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.base,
  letterSpacing: '0.05em',
  margin: '0',
};

const theme = {
  app,
  backgrounds,
  carouselContent,
  carouselNavButtons,
  contactInformation,
  fontFamilies,
  headerContainer,
  headers,
  links,
  subheaders,
};

export default theme;
