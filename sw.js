!function(){"use strict";self.CACHE_BUSTER="1571551271195|0.5157240446285423",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()});var e=function(e,t){return caches.keys().then(function(n){n.forEach(function(n){0===n.indexOf(e)&&n!==t&&caches.delete(n)})})},t="".concat("esw-asset-cache","-").concat("1"),n=["assets/article-ember-d41d8cd98f00b204e9800998ecf8427e.css","assets/article-ember-edd76fcb6f9f6c38af9d3b21d936dfe3.js","assets/auto-import-fastboot-3aa79ad5e7796a03aff9969d426c72bd.js","assets/chunk.00f0caa70e26a8cd7762.js","assets/chunk.16e51fe0914688f617f0.js","assets/chunk.2383f36cd84339a868b4.js","assets/chunk.27c0c95bfd8b3f61a20a.js","assets/chunk.3b89ee1d866560991c7a.js","assets/chunk.47ae045ed68815c09635.js","assets/chunk.8805073c370ed70f86a7.js","assets/chunk.b9e3643012ed581041f9.js","assets/chunk.d2262caa79f820477d8f.js","assets/chunk.d250521b4cbd0a0390ae.js","assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-55a8a8cdf2823a0d2ede4b341e5060c1.js"].map(function(e){return new URL(e,self.location).toString()});self.addEventListener("install",function(e){e.waitUntil(caches.open(t).then(function(e){return Promise.all(n.map(function(t){var n=new Request(t,{mode:"cors"});return fetch(n).then(function(n){if(n.status>=400){var c=new Error("Request for ".concat(t," failed with status ").concat(n.statusText));throw c}return e.put(t,n)}).catch(function(e){console.error("Not caching ".concat(t," due to ").concat(e))})}))}))}),self.addEventListener("activate",function(c){c.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===n.indexOf(t.url)&&e.delete(t)})})})]))}),self.addEventListener("fetch",function(e){var c="GET"===e.request.method,s=-1!==n.indexOf(e.request.url);c&&s&&e.respondWith(caches.match(e.request,{cacheName:t}).then(function(t){return t||fetch(e.request.url,{mode:"cors"})}))});function c(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}var s="".concat("esw-cache-fallback","-").concat("1"),a=["/(.+)"].map(function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self.location;return decodeURI(new URL(encodeURI(e),t).toString())}(e);return new RegExp("^".concat(t,"$"))});self.addEventListener("fetch",function(e){var t=e.request;"GET"===t.method&&/^https?/.test(t.url)&&c(t.url,a)&&e.respondWith(caches.open(s).then(function(n){return fetch(t).then(function(e){return n.put(t,e.clone()),e}).catch(function(){return caches.match(e.request)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-cache-fallback",s))});var r=[],i=[];self.INDEX_FILE_HASH="bbfabb82e7d105e66d711db9f420cf4c";var o="".concat("esw-index","-").concat("1"),u=new URL("index.html",self.location).toString();self.addEventListener("install",function(e){e.waitUntil(fetch(u,{credentials:"include"}).then(function(e){return caches.open(o).then(function(t){return t.put(u,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index",o))}),self.addEventListener("fetch",function(e){var t=e.request,n=new URL(t.url),s="GET"===t.method,a=-1!==t.headers.get("accept").indexOf("text/html"),f=n.origin===location.origin,h=c(t.url,r),d=!i.length||c(t.url,i);!("/tests"===n.pathname&&!1)&&s&&a&&f&&d&&!h&&e.respondWith(caches.match(u,{cacheName:o}).then(function(e){return e||fetch(u,{credentials:"include"}).then(function(e){return caches.open(o).then(function(t){return t.put(u,e)}),e.clone()})}))})}();
//# sourceMappingURL=sw-a98ddaae41f67fa3f5218c48dc43d194.map