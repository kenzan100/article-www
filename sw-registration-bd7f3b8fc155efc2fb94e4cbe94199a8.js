!function(){"use strict";var e=[],r=[];"serviceWorker"in navigator&&navigator.serviceWorker.register("/article-writer/distsw.js",{scope:"/article-writer/dist"}).then(function(r){for(var t=Promise.resolve(),n=function(n,i){t=t.then(function(){return e[n](r)})},i=0,o=e.length;i<o;i++)n(i);return t.then(function(){console.log("Service Worker registration succeeded. Scope is "+r.scope)})}).catch(function(e){for(var t=Promise.resolve(),n=function(n,i){t=t.then(function(){return r[n](e)})},i=0,o=r.length;i<o;i++)n(i);return t.then(function(){console.log("Service Worker registration failed with "+e)})})}();
//# sourceMappingURL=sw-registration-599e4bd465952bafb3ee8fbd47c1a108.map