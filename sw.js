/* ============================================================
   ARABIYYA — Service Worker (Version 5.0)
   Cache pour fonctionnement 100% hors ligne
   ============================================================ */

var CACHE_NAME = 'arabiyya-v5';

var ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './nour.js',
  './madinah.js',
  './app.js',
  './manifest.json'
];

/* ---------- INSTALLATION ---------- */
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return Promise.all(
        ASSETS.map(function(url){
          return cache.add(url).catch(function(err){
            console.warn('[SW] Impossible de cacher : ' + url);
          });
        })
      );
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

/* ---------- ACTIVATION ---------- */
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', function(event){
  var req = event.request;

  if (req.method !== 'GET') return;

  var url = req.url;
  if (url.indexOf('http') === 0 && url.indexOf(self.location.origin) !== 0){
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if (cached) return cached;

      return fetch(req).then(function(response){
        if (response && response.status === 200 && response.type === 'basic'){
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(req, clone);
          }).catch(function(){});
        }
        return response;
      }).catch(function(){
        if (req.mode === 'navigate'){
          return caches.match('./index.html').then(function(page){
            if (page) return page;
            return new Response(
              '<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>Hors ligne</h2><p>Cette page n\'est pas encore disponible.</p></body></html>',
              { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            );
          });
        }
        return new Response('Ressource indisponible hors ligne', {
          status: 503,
          statusText: 'Hors ligne',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

/* ---------- MESSAGES ---------- */
self.addEventListener('message', function(event){
  if (event.data === 'skipWaiting'){
    self.skipWaiting();
  }
});