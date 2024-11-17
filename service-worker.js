
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                './404.html',  // Adjusted path for GitHub Pages
                './img/error404.jpg'  // Adjusted path for GitHub Pages
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('./404.html');  // Ensure fallback to the correct file
        })
    );
});
