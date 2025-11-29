const CACHE_NAME = "memory-jar-cache-v1";
const FILES = [
    "index.html",
    "style.css",
    "script.js",
    "jar.png",
    "icon1.png",
    "manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
