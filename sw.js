/* ============================================================
   ARABIYYA — Service Worker (Version 2.2)
   Corrections v2.2 :
   - Cache individuel (tolerant aux fichiers manquants)
   - Version alignée avec l'app
   - Meilleur fallback hors ligne
   - Log discret en cas de problème
   ============================================================ */

var CACHE_NAME = 'arabiyya-v2.2';

/* Liste des ressources à mettre en cache */
var ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './nour.js',
  './app.js',
  './manifest.json'
];

/* ---------- INSTALLATION ---------- */
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      /* Cache un par un : si un fichier manque, on continue quand même */
      return Promise.all(
        ASSETS.map(function(url){
          return cache.add(url).catch(function(err){
            console.warn('[SW] Impossible de cacher : ' + url, err);
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
            .map(function(k){
              console.log('[SW] Suppression ancien cache : ' + k);
              return caches.delete(k);
            })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', function(event){
  var req = event.request;

  /* On ne gère que les GET */
  if (req.method !== 'GET') return;

  /* On ignore les URLs externes */
  var url = req.url;
  if (url.indexOf('http') === 0 && url.indexOf(self.location.origin) !== 0){
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if (cached) return cached;

      return fetch(req).then(function(response){
        /* Cache les nouvelles ressources valides */
        if (response && response.status === 200 && response.type === 'basic'){
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(req, clone);
          }).catch(function(){ /* quota dépassé, on ignore */ });
        }
        return response;
      }).catch(function(){
        /* Hors ligne et non caché */
        if (req.mode === 'navigate'){
          /* Pour la navigation : on retombe sur index.html */
          return caches.match('./index.html').then(function(page){
            if (page) return page;
            return new Response(
              '<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>Hors ligne</h2><p>Cette page n\'est pas encore disponible.</p></body></html>',
              { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            );
          });
        }
        /* Pour les autres ressources : 503 explicite */
        return new Response('Ressource indisponible hors ligne', {
          status: 503,
          statusText: 'Hors ligne',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

/* ---------- MESSAGES (pour forcer la mise à jour) ---------- */
self.addEventListener('message', function(event){
  if (event.data === 'skipWaiting'){
    self.skipWaiting();
  }
});