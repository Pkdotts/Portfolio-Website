import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
 
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    '/': '/',
 
    '/games': {
      fr: '/jeux'
    },

    '/games/details/[gameId]': {
      fr: '/jeux/détails/[gameId]'
    },
 
    '/testimonials': {
      fr: '/témoignages'
    },
 
    '/contact': '/contact',
    
  }
});