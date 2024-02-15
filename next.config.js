const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  // cacheOnFrontendNav: true,
  // aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  swcMinify: true,
  publicExcludes: ["!favicon/*/**", "!audio/**"],
  fallbacks: {
    // Failed page requests fallback to this.
    document: "pages/_offline.js",
  },
  // disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // Your Next.js config
  output: "export",
  reactStrictMode: true,
});
