// sw.js

// Import Workbox from the CDN
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

// Check if Workbox loaded successfully
if (workbox) {
  console.log("Workbox is loaded");

  // Define cache names
  const PRECACHE = "precache-v1";
  const RUNTIME = "runtime";

  const offlineFallbackPage = "/";

  // List of files to precache
  const FILES_TO_CACHE = [
    "/", // start of pages
    "/autori",
    "/slova-biskupa-Jana",
    "/slova-Prokopa-Broze",
    "/den/2024-12-01",
    "/den/2024-12-02",
    "/den/2024-12-03",
    "/den/2024-12-04",
    "/den/2024-12-05",
    "/den/2024-12-06",
    "/den/2024-12-07",
    "/den/2024-12-08",
    "/den/2024-12-09",
    "/den/2024-12-10",
    "/den/2024-12-11",
    "/den/2024-12-12",
    "/den/2024-12-13",
    "/den/2024-12-14",
    "/den/2024-12-15",
    "/den/2024-12-16",
    "/den/2024-12-17",
    "/den/2024-12-18",
    "/den/2024-12-19",
    "/den/2024-12-20",
    "/den/2024-12-21",
    "/den/2024-12-22",
    "/den/2024-12-23",
    "/den/2024-12-24", // end of pages
    offlineFallbackPage, // Ensure the fallback page is cached
    "/icons/alert.svg", // icons
    "/icons/github.svg",
    "/icons/mail.svg",
    "/icon.svg",
    "/styles.css",
  ];

  // Precache and route the specified files
  workbox.precaching.precacheAndRoute(
    FILES_TO_CACHE.map((url) => ({
      url,
      revision: generateHash(url), // Generate a hash based on file content
    }))
  );

  // Set up a navigation route with a fallback to the offline page
  workbox.routing.registerRoute(
    // Check to see if the request is a navigation to a new page
    ({ request }) => request.mode === "navigate",
    async ({ event }) => {
      try {
        // Try to get the response from the cache
        const preloadResp = await event.preloadResponse;
        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {
        // If both fail, show the offline fallback page
        const cache = await caches.open(PRECACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    }
  );

  // Cache CSS, JS, and Web Worker requests with a stale-while-revalidate strategy
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "script" ||
      request.destination === "style" ||
      request.destination === "worker",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: RUNTIME,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  // Fallback to the offline page for navigation requests if not found
  workbox.routing.setCatchHandler(async ({ event }) => {
    if (event.request.mode === "navigate") {
      return caches.match(offlineFallbackPage);
    }

    return Response.error();
  });
} else {
  console.log("Workbox failed to load");
}

// Listen for messages to skip waiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
