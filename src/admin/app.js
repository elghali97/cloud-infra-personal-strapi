import Logo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['fr'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
   // Disable video tutorials
    tutorials: false
  },

  bootstrap() {},
};