var CACHE='v1782997961';
var URLS=['/pantelleria-2026/','/pantelleria-2026/index.html'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(names){return Promise.all(names.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
