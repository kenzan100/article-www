(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],{19:function(t,e,n){"use strict"
n.r(e),n.d(e,"registerInstallations",function(){return U})
var r,i=n(2),o=n.n(i),a=n(1),s=n(3),u=n(20),c=1e4,f="w:0.3.0",l="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,h=((r={})["missing-app-config-values"]="Missing App configuration values.",r["create-installation-failed"]="Could not register Firebase Installation.",r["generate-token-failed"]="Could not generate Auth Token.",r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),_=new s.ErrorFactory("installations","Installations",h)
function b(t){return t instanceof s.FirebaseError&&t.code.includes("request-failed")}function v(t){if(!t||!t.options)throw _.create("missing-app-config-values")
var e=t.name,n=t.options,r=n.projectId,i=n.apiKey,o=n.appId
if(!(e&&r&&i&&o))throw _.create("missing-app-config-values")
return{appName:e,projectId:r,apiKey:i,appId:o}}function g(t){var e=t.projectId
return d+"/projects/"+e+"/installations"}function w(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}
var e}function y(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,e.json()]
case 1:return n=i.sent(),r=n.error,[2,_.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function j(t){var e=t.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function m(t,e){var n=e.refreshToken,r=j(t)
return r.append("Authorization",l+" "+n),r}function O(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,t()]
case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}})})}function S(t,e){var n=e.fid
return Object(a.__awaiter)(this,void 0,void 0,function(){var e,r,i,o,s,u
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=g(t),r=j(t),i={fid:n,authVersion:l,appId:t.appId,sdkVersion:f},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,O(function(){return fetch(e,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,{fid:(u=a.sent()).fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:w(u.authToken)}]
case 3:return[4,y("Create Installation",s)]
case 4:throw a.sent()}})})}function I(t){return new Promise(function(e){setTimeout(e,t)})}var k=/^[cdef][\w-]{21}$/,T=""
function q(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16
var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.__spread)(e))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)
var e}(t)
return k.test(e)?e:T}catch(t){return T}}var D="firebase-installations-database",x=1,E="firebase-installations-store",C=null
function P(){return C||(C=Object(u.openDb)(D,x,function(t){switch(t.oldVersion){case 0:t.createObjectStore(E)}})),C}function A(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return n=K(t),[4,P()]
case 1:return r=o.sent(),[4,(i=r.transaction(E,"readwrite")).objectStore(E).put(e,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,e]}})})}function N(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return e=K(t),[4,P()]
case 1:return n=i.sent(),[4,(r=n.transaction(E,"readwrite")).objectStore(E).delete(e)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}})})}function B(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s,u
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=K(t),[4,P()]
case 1:return r=a.sent(),i=r.transaction(E,"readwrite"),[4,(o=i.objectStore(E)).get(n)]
case 2:return s=a.sent(),void 0!==(u=e(s))?[3,4]:[4,o.delete(n)]
case 3:return a.sent(),[3,6]
case 4:return[4,o.put(u,n)]
case 5:a.sent(),a.label=6
case 6:return[4,i.complete]
case 7:return a.sent(),[2,u]}})})}function K(t){return t.appName+"!"+t.appId}function V(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,B(t,function(n){var r=$(n||{fid:q(),registrationStatus:0}),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(_.create("app-offline"))}
var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,S(t,e)]
case 1:return n=i.sent(),[2,A(t,n)]
case 2:return b(r=i.sent())&&409===r.serverCode?[4,N(t)]:[3,4]
case 3:return i.sent(),[3,6]
case 4:return[4,A(t,{fid:e.fid,registrationStatus:0})]
case 5:i.sent(),i.label=6
case 6:throw r
case 7:return[2]}})})}(t,n)
return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:F(t)}:{installationEntry:e}}(t,r)
return e=i.registrationPromise,i.installationEntry})]
case 1:return(n=i.sent()).fid!==T?[3,3]:(r={},[4,e])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function F(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e
return Object(a.__generator)(this,function(n){switch(n.label){case 0:return[4,L(t)]
case 1:e=n.sent(),n.label=2
case 2:return 1!==e.registrationStatus?[3,5]:[4,I(100)]
case 3:return n.sent(),[4,L(t)]
case 4:return e=n.sent(),[3,2]
case 5:if(0===e.registrationStatus)throw _.create("create-installation-failed")
return[2,e]}})})}function L(t){return B(t,function(t){if(!t)throw _.create("installation-not-found")
return $(t)})}function $(t){return 1===(e=t).registrationStatus&&e.registrationTime+c<Date.now()?{fid:t.fid,registrationStatus:0}:t
var e}function J(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o,s
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return g(t)+"/"+n+"/authTokens:generate"}(t,e),r=m(t,e),i={installation:{sdkVersion:f}},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,O(function(){return fetch(n,o)})]
case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3]
case 2:return[2,w(a.sent())]
case 3:return[4,y("Generate Auth Token",s)]
case 4:throw a.sent()}})})}function M(t,e){return void 0===e&&(e=!1),Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,B(t,function(r){if(!z(r))throw _.create("not-registered")
var i=r.authToken
if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now()
return e<t.creationTime||t.creationTime+t.expiresIn<e+p}(t)}(i))return r
if(1===i.requestStatus)return n=function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,R(t)]
case 1:e=r.sent(),r.label=2
case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,I(100)]
case 3:return r.sent(),[4,R(t)]
case 4:return e=r.sent(),[3,2]
case 5:if(0===(n=e.authToken).requestStatus)throw _.create("generate-token-failed")
return[2,n]}})})}(t),r
if(!navigator.onLine)throw _.create("app-offline")
var o=function(t){var e={requestStatus:1,requestTime:Date.now()}
return Object(a.__assign)(Object(a.__assign)({},t),{authToken:e})}(r)
return n=function(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,J(t,e)]
case 1:return n=o.sent(),i=Object(a.__assign)(Object(a.__assign)({},e),{authToken:n}),[4,A(t,i)]
case 2:return o.sent(),[2,n]
case 3:return!b(r=o.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,N(t)]
case 4:return o.sent(),[3,7]
case 5:return i=Object(a.__assign)(Object(a.__assign)({},e),{authToken:{requestStatus:0}}),[4,A(t,i)]
case 6:o.sent(),o.label=7
case 7:throw r
case 8:return[2]}})})}(t,o),o})]
case 1:return r=o.sent(),n?[4,n]:[3,3]
case 2:return i=o.sent(),[3,4]
case 3:i=r.authToken,o.label=4
case 4:return[2,i.token]}})})}function R(t){return B(t,function(t){if(!z(t))throw _.create("not-registered")
var e
return 1===(e=t.authToken).requestStatus&&e.requestTime+c<Date.now()?Object(a.__assign)(Object(a.__assign)({},t),{authToken:{requestStatus:0}}):t})}function z(t){return void 0!==t&&2===t.registrationStatus}function G(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r
return Object(a.__generator)(this,function(i){switch(i.label){case 0:return[4,V(t)]
case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?[4,r]:[3,3]
case 2:return i.sent(),[3,4]
case 3:if(2!==n.registrationStatus)throw _.create("create-installation-failed")
i.label=4
case 4:return[2]}})})}function H(t,e){return Object(a.__awaiter)(this,void 0,void 0,function(){var n,r,i,o
return Object(a.__generator)(this,function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid
return g(t)+"/"+n}(t,e),r=m(t,e),i={method:"DELETE",headers:r},[4,O(function(){return fetch(n,i)})]
case 1:return(o=a.sent()).ok?[3,3]:[4,y("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}})})}function U(t){t.INTERNAL.registerService("installations",function(t){return v(t),{app:t,getId:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n,r,i
return Object(a.__generator)(this,function(o){switch(o.label){case 0:return[4,V(e=v(t))]
case 1:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)&&i.catch(function(){}),2===r.registrationStatus&&M(e).catch(function(){}),[2,r.fid]}})})}(t)},getToken:function(e){return function(t,e){return void 0===e&&(e=!1),Object(a.__awaiter)(this,void 0,void 0,function(){var n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,G(n=v(t))]
case 1:return r.sent(),[2,M(n,e)]}})})}(t,e)},delete:function(){return function(t){return Object(a.__awaiter)(this,void 0,void 0,function(){var e,n
return Object(a.__generator)(this,function(r){switch(r.label){case 0:return[4,B(e=v(t),function(t){if(!t||0!==t.registrationStatus)return t})]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw _.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw _.create("app-offline")
case 3:return[4,H(e,n)]
case 4:return r.sent(),[4,N(e)]
case 5:r.sent(),r.label=6
case 6:return[2]}})})}(t)}}})}U(o.a)},20:function(t,e,n){var r,i,o,a
function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict"
function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var i,o=new Promise(function(o,a){e(i=t[n].apply(t,r)).then(o,a)})
return o.request=i,o}function r(t,e,r){var i=n(t,e,r)
return i.then(function(t){if(t)return new c(t,i.request)})}function i(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,i){i.forEach(function(i){i in r.prototype&&(t.prototype[i]=function(){return n(this[e],i,arguments)})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function s(t,e,n,i){i.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})})}function u(t){this._index=t}function c(t,e){this._cursor=t,this._request=e}function f(t){this._store=t}function l(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new l(n)}function p(t){this._db=t}i(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(c,"_cursor",["direction","key","primaryKey","value"]),o(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new c(t,n._request)})})})}),f.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},i(f,"_store",["name","keyPath","indexNames","autoIncrement"]),o(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(f,"_store",IDBObjectStore,["deleteIndex"]),l.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},i(l,"_tx",["objectStoreNames","mode"]),a(l,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new l(this._db.transaction.apply(this._db,arguments))},i(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[f,u].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=function(t){return Array.prototype.slice.call(t)}(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1))
i.onsuccess=function(){n(i.result)}})})}),[u,f].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)})})})}),t.openDb=function(t,e,r){var i=n(indexedDB,"open",[t,e]),o=i.request
return o&&(o.onupgradeneeded=function(t){r&&r(new d(o.result,t.oldVersion,o.transaction))}),i.then(function(t){return new p(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))}}])
