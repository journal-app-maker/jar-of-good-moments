const CACHE_NAME = "memory-jar-v3";

const urlsToCache = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icons/icon1.png",
  "icons/jar.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
