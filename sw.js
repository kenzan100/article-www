(function () {
  'use strict';

  const VERSION = '1571024956145|0.48119337193143963';
  self.CACHE_BUSTER = VERSION;
  self.addEventListener('install', function installEventListenerCallback(event) {
    return self.skipWaiting();
  });
  self.addEventListener('activate', function installEventListenerCallback(event) {
    return self.clients.claim();
  });

  const FILES = ['assets/article-ember.css', 'assets/article-ember.js', 'assets/article-ember.map', 'assets/auto-import-fastboot.js', 'assets/chunk.0ae5c57672b390bac381.js', 'assets/chunk.6150ea19e0fc50bd532f.js', 'assets/chunk.7b8945e8bc70ba7e3fff.js', 'assets/chunk.7f3e62d16ee36fc0e92a.js', 'assets/chunk.8b31bcdf59184cd45d35.js', 'assets/chunk.9ebb237fb5b80190767c.js', 'assets/chunk.bd161eef7bba979cf7c3.js', 'assets/chunk.c2f4912f319e28154646.js', 'assets/chunk.e06a7603ebfe16cc6d04.js', 'assets/chunk.e93713239833c7c49f9f.js', 'assets/test-support.css', 'assets/test-support.js', 'assets/test-support.map', 'assets/tests.js', 'assets/tests.map', 'assets/vendor.css', 'assets/vendor.js', 'assets/vendor.map'];
  const PREPEND = undefined;
  const VERSION$1 = '1';
  const REQUEST_MODE = 'cors';
  const LENIENT_ERRORS = false;

  /*
   * Deletes all caches that start with the `prefix`, except for the
   * cache defined by `currentCache`
   */
  var cleanupCaches = ((prefix, currentCache) => {
    return caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        let isOwnCache = cacheName.indexOf(prefix) === 0;
        let isNotCurrentCache = cacheName !== currentCache;

        if (isOwnCache && isNotCurrentCache) {
          caches.delete(cacheName);
        }
      });
    });
  });

  const CACHE_KEY_PREFIX = 'esw-asset-cache';
  const CACHE_NAME = "".concat(CACHE_KEY_PREFIX, "-").concat(VERSION$1);
  const CACHE_URLS = FILES.map(file => {
    return new URL(file, PREPEND || self.location).toString();
  });
  /*
   * Removes all cached requests from the cache that aren't in the `CACHE_URLS`
   * list.
   */

  const PRUNE_CURRENT_CACHE = () => {
    caches.open(CACHE_NAME).then(cache => {
      return cache.keys().then(keys => {
        keys.forEach(request => {
          if (CACHE_URLS.indexOf(request.url) === -1) {
            cache.delete(request);
          }
        });
      });
    });
  };

  self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
      return Promise.all(CACHE_URLS.map(url => {
        let request = new Request(url, {
          mode: REQUEST_MODE
        });
        return fetch(request).then(response => {
          if (response.status >= 400) {
            let error = new Error("Request for ".concat(url, " failed with status ").concat(response.statusText));

            if (LENIENT_ERRORS) {
              console.warn("Not caching ".concat(url, " due to ").concat(error));
              return;
            } else {
              throw error;
            }
          }

          return cache.put(url, response);
        }).catch(function (error) {
          console.error("Not caching ".concat(url, " due to ").concat(error));
        });
      }));
    }));
  });
  self.addEventListener('activate', event => {
    event.waitUntil(Promise.all([cleanupCaches(CACHE_KEY_PREFIX, CACHE_NAME), PRUNE_CURRENT_CACHE()]));
  });
  self.addEventListener('fetch', event => {
    let isGETRequest = event.request.method === 'GET';
    let shouldRespond = CACHE_URLS.indexOf(event.request.url) !== -1;

    if (isGETRequest && shouldRespond) {
      event.respondWith(caches.match(event.request, {
        cacheName: CACHE_NAME
      }).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request.url, {
          mode: REQUEST_MODE
        });
      }));
    }
  });

  const VERSION$2 = '1';
  const PATTERNS = ['/(.+)'];

  /**
   * Create an absolute URL, allowing regex expressions to pass
   *
   * @param {string} url
   * @param {string|object} baseUrl
   * @public
   */
  function createNormalizedUrl(url, baseUrl = self.location) {
    return decodeURI(new URL(encodeURI(url), baseUrl).toString());
  }
  /**
   * Create an (absolute) URL Regex from a given string
   *
   * @param {string} url
   * @returns {RegExp}
   * @public
   */

  function createUrlRegEx(url) {
    let normalized = createNormalizedUrl(url);
    return new RegExp("^".concat(normalized, "$"));
  }
  /**
   * Check if given URL matches any pattern
   *
   * @param {string} url
   * @param {array} patterns
   * @returns {boolean}
   * @public
   */

  function urlMatchesAnyPattern(url, patterns) {
    return !!patterns.find(pattern => pattern.test(decodeURI(url)));
  }

  const CACHE_KEY_PREFIX$1 = 'esw-cache-fallback';
  const CACHE_NAME$1 = "".concat(CACHE_KEY_PREFIX$1, "-").concat(VERSION$2);
  const PATTERN_REGEX = PATTERNS.map(createUrlRegEx);
  self.addEventListener('fetch', event => {
    let request = event.request;

    if (request.method !== 'GET' || !/^https?/.test(request.url)) {
      return;
    }

    if (urlMatchesAnyPattern(request.url, PATTERN_REGEX)) {
      event.respondWith(caches.open(CACHE_NAME$1).then(cache => {
        return fetch(request).then(response => {
          cache.put(request, response.clone());
          return response;
        }).catch(() => caches.match(event.request));
      }));
    }
  });
  self.addEventListener('activate', event => {
    event.waitUntil(cleanupCaches(CACHE_KEY_PREFIX$1, CACHE_NAME$1));
  });

  const ENVIRONMENT = 'development';
  const VERSION$3 = '1';
  const INDEX_HTML_PATH = 'index.html';
  const INDEX_EXCLUDE_SCOPE = [];
  const INDEX_INCLUDE_SCOPE = [];
  self.INDEX_FILE_HASH = '6b8ff654edbba591ab862ff7510b1264';

  const CACHE_KEY_PREFIX$2 = 'esw-index';
  const CACHE_NAME$2 = "".concat(CACHE_KEY_PREFIX$2, "-").concat(VERSION$3);
  const INDEX_HTML_URL = new URL(INDEX_HTML_PATH, self.location).toString();
  self.addEventListener('install', event => {
    event.waitUntil(fetch(INDEX_HTML_URL, {
      credentials: 'include'
    }).then(response => {
      return caches.open(CACHE_NAME$2).then(cache => cache.put(INDEX_HTML_URL, response));
    }));
  });
  self.addEventListener('activate', event => {
    event.waitUntil(cleanupCaches(CACHE_KEY_PREFIX$2, CACHE_NAME$2));
  });
  self.addEventListener('fetch', event => {
    let request = event.request;
    let url = new URL(request.url);
    let isGETRequest = request.method === 'GET';
    let isHTMLRequest = request.headers.get('accept').indexOf('text/html') !== -1;
    let isLocal = url.origin === location.origin;
    let scopeExcluded = urlMatchesAnyPattern(request.url, INDEX_EXCLUDE_SCOPE);
    let scopeIncluded = !INDEX_INCLUDE_SCOPE.length || urlMatchesAnyPattern(request.url, INDEX_INCLUDE_SCOPE);
    let isTests = url.pathname === '/tests' && ENVIRONMENT === 'development';

    if (!isTests && isGETRequest && isHTMLRequest && isLocal && scopeIncluded && !scopeExcluded) {
      event.respondWith(caches.match(INDEX_HTML_URL, {
        cacheName: CACHE_NAME$2
      }).then(response => {
        if (response) {
          return response;
        } // Re-fetch the resource in the event that the cache had been cleared
        // (mostly an issue with Safari 11.1 where clearing the cache causes
        // the browser to throw a non-descriptive blank error page).


        return fetch(INDEX_HTML_URL, {
          credentials: 'include'
        }).then(fetchedResponse => {
          caches.open(CACHE_NAME$2).then(cache => cache.put(INDEX_HTML_URL, fetchedResponse));
          return fetchedResponse.clone();
        });
      }));
    }
  });

}());
