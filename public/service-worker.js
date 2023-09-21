self.addEventListener("install", (event) => {
    //the installation phase of a service worker is a great place to cache some assets which don't change that often
    // like your app shell, the toolbar, your basic styling that might not change every second.
    console.log('service worker installed thired')
    event.waitUntil(
        caches.open("your-cache-name").then((cache) => {
            return cache.addAll([
                "/",
                "/vercel.svg",
                // Add paths to your assets like CSS, JS, and images here
                // "/_next/static/css/81b9fca16d314760.css", // Add the base path to the folder containing CSS files
            ]);
        })
    );


});

// strategy: cash with network fallback
//   self.addEventListener("fetch", (event) => {
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         return response || fetch(event.request);
//       })
//     );
//   });

// strategy: cash with network fallback and dynamic caching
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             if (!response) {
//                 return fetch(event.request)
//                     .then(res => {
//                         return caches.open('dynamic')
//                             .then((cache) => {
//                                 cache.put(event.request.url, res.clone())
//                                 return res // we can use the response one time so we make a clone here to avoid consuming the response
//                             })
//                     }).catch(err => console.log('fetch error'))
//             }

//             return response

//         })
//     )
// })
