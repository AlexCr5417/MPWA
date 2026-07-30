const CACHE_NAME = "MPWA";

const FILES = ["./", "./index.html", "./style.css", "./app.js"];

self.addEventListener("install", (event) => {
  console.log("Instalando Service Worker...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request);
    }),
  );
});
