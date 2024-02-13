const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  publicExcludes: ["!favicon/*/**", "!audio/**"],
  buildExcludes: ["!audio/**"],
  async headers() {
    return [
      {
        source: "/den/:slug*",
        headers: [
          /*
              s-maxage=2419200, // Set the max age of the cached content to a month (28 days)
              stale-while-revalidate=1209600, // Stale whhile revalidate for a fortnight
              stale-if-error=31536000`, // If an error occurs with the revalidation of the cached content, then the cached content will be served for a maximum of a year (365 days)
            */
          {
            key: "Cache-Control",
            value:
              "public,s-maxage=2419200,stale-while-revalidate=1209600,stale-if-error=31536000",
          },
        ],
      },
    ];
  },
  runtimeCaching,
});
