/* ============================================================
   ARABIYYA — Service Worker (Version 5.3)
   Cache pour fonctionnement 100% hors ligne
   Changements v5.3 : bump CACHE_NAME pour forcer la mise à jour
   ============================================================ */

var CACHE_NAME = 'arabiyya-v5.3';

var ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './nour.js',
  './madinah.js',
  './grammaire.js',
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
    }).then(function(){
      /* Notifier tous les clients que le SW a été mis à jour */
      return self.clients.matchAll({ type: 'window' }).then(function(clients){
        clients.forEach(function(client){
          try {
            client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
          } catch(e){}
        });
      });
    })
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', function(event){
  var req = event.request;

  /* Ne traiter que les GET */
  if (req.method !== 'GET') return;

  var url = req.url;

  /* Ignorer les requêtes externes (CORS, CDN, etc.) */
  if (url.indexOf('http') === 0 && url.indexOf(self.location.origin) !== 0){
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      /* 1. Servir depuis le cache si disponible */
      if (cached) return cached;

      /* 2. Sinon, chercher sur le réseau */
      return fetch(req).then(function(response){
        /* Mettre en cache les réponses valides */
        if (response && response.status === 200 && response.type === 'basic'){
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(req, clone);
          }).catch(function(){});
        }
        return response;
      }).catch(function(){
        /* 3. Fallback hors ligne */
        if (req.mode === 'navigate'){
          return caches.match('./index.html').then(function(page){
            if (page) return page;
            /* Fallback HTML minimal */
            return new Response(
              '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Hors ligne</title><style>body{font-family:sans-serif;text-align:center;padding:40px;background:#f4f6f5;color:#1c2b26}h2{color:#0f5132}</style></head><body><h2>📡 Hors ligne</h2><p>Cette page n\'est pas encore disponible hors ligne.</p><p style="margin-top:20px"><a href="./index.html" style="color:#0f5132;font-weight:700">← Retour à l\'accueil</a></p></body></html>',
              {
                status: 200,
                statusText: 'OK',
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
              }
            );
          });
        }

        /* Fallback pour les autres ressources */
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
  /* Permettre au client de forcer l'activation du SW en attente */
  if (event.data === 'skipWaiting' || (event.data && event.data.type === 'SKIP_WAITING')){
    self.skipWaiting();
  }

  /* Permettre au client de demander la version actuelle */
  if (event.data === 'getVersion'){
    event.source.postMessage({
      type: 'VERSION',
      version: CACHE_NAME
    });
  }
});