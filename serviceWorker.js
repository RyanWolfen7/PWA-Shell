const staticCacheName = 'site-static-v1';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// Install Event
self.addEventListener('install', evt => {
    //console.log('service worker has been installed')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        }).catch(error => console.log(error))
    )

})

// activate evt
self.addEventListener('activate', evt => {
    console.log('service worker has been activated')
})

// fetch evt
self.addEventListener('fetch', evt => {
    // console.log('fetch evt', evt)
    evt.respondWith(
        caches.match(evt.request).then( cacheResponse => {
            return cacheResponse || fetch(evt.request)
        })
    ) 
})