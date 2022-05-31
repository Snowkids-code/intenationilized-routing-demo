/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// module.exports = {
//   i18n: {
//     //all the locales to be supported in the app
//     locales: ["en-US", "fr", "nl-NL"],
//     //default locale when visiting a non-locale prefixed path - default lacale does not have a prefix
//     defaultLocale: "en-US",

//     domains: [
//       {
//         //subdomains must be included in the domain value to be matched
//         domain: 'example.com',
//         defaultLocale: 'en-US'
//       },
//       {
//         domain: 'example.fr',
//         defaultLocale: 'fr'
//       },
//       {
//         domain: 'example.nl',
//         defaultLocale: 'nl-NL',
//         //specify other locales that should be redirected to this domain
//         locales: ['nl-BE']
//       }
//     ]
//   },
// };


// Using domain routing, you can configure loicales to be served from different domains

module.exports = {
  i18n: {
    locales: ['default', 'en', 'de', 'fr'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
}