(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{12:function(e,t,n){"use strict"
n.r(t),n(24)},24:function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0})
var o,i=(o=n(2))&&"object"===r(o)&&"default"in o?o.default:o,a=n(1),s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},u=function(e){function t(n,r,o){var i=e.call(this,r)||this
return Object.setPrototypeOf(i,t.prototype),i.code=n,i.details=o,i}return a.__extends(t,e),t}(Error),c=function(){function e(e){this.app=e}return e.prototype.getAuthToken=function(){return a.__awaiter(this,void 0,void 0,function(){var e
return a.__generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.app.INTERNAL.getToken()]
case 1:return(e=t.sent())?[2,e.accessToken]:[2,void 0]
case 2:return t.sent(),[2,void 0]
case 3:return[2]}})})},e.prototype.getInstanceIdToken=function(){return a.__awaiter(this,void 0,void 0,function(){var e
return a.__generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.app.messaging?[4,this.app.messaging().getToken()]:[2,void 0]
case 1:return(e=t.sent())?[2,e]:[2,void 0]
case 2:return t.sent(),[2,void 0]
case 3:return[2]}})})},e.prototype.getContext=function(){return a.__awaiter(this,void 0,void 0,function(){var e,t
return a.__generator(this,function(n){switch(n.label){case 0:return[4,this.getAuthToken()]
case 1:return e=n.sent(),[4,this.getInstanceIdToken()]
case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}})})},e}()
function d(e,t){var n={}
for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]))
return n}var l=function(){function e(){}return e.prototype.encode=function(e){var t=this
if(null==e)return null
if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e
if(!0===e||!1===e)return e
if("[object String]"===Object.prototype.toString.call(e))return e
if(Array.isArray(e))return e.map(function(e){return t.encode(e)})
if("function"==typeof e||"object"===r(e))return d(e,function(e){return t.encode(e)})
throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this
if(null==e)return e
if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value)
if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e)
return n
default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(e){return t.decode(e)}):"function"==typeof e||"object"===r(e)?d(e,function(e){return t.decode(e)}):e},e}(),f=function(){function e(e,t){var n=this
void 0===t&&(t="us-central1"),this.app_=e,this.region_=t,this.serializer=new l,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return n.deleteService()}},this.contextProvider=new c(e),this.cancelAllRequests=new Promise(function(e){n.deleteService=function(){return e()}})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId,n=this.region_
return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+n+"/"+e:"https://"+n+"-"+t+".cloudfunctions.net/"+e},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this
return function(r){return n.call(e,r,t||{})}},e.prototype.postJSON=function(e,t,n){return a.__awaiter(this,void 0,void 0,function(){var r,o
return a.__generator(this,function(i){switch(i.label){case 0:n.append("Content-Type","application/json"),i.label=1
case 1:return i.trys.push([1,3,,4]),[4,fetch(e,{method:"POST",body:JSON.stringify(t),headers:n})]
case 2:return r=i.sent(),[3,4]
case 3:return i.sent(),[2,{status:0,json:null}]
case 4:o=null,i.label=5
case 5:return i.trys.push([5,7,,8]),[4,r.json()]
case 6:return o=i.sent(),[3,8]
case 7:return i.sent(),[3,8]
case 8:return[2,{status:r.status,json:o}]}})})},e.prototype.call=function(e,t,n){return a.__awaiter(this,void 0,void 0,function(){var r,o,i,c,d,l,f,p
return a.__generator(this,function(a){switch(a.label){case 0:return r=this._url(e),t=this.serializer.encode(t),o={data:t},i=new Headers,[4,this.contextProvider.getContext()]
case 1:return(c=a.sent()).authToken&&i.append("Authorization","Bearer "+c.authToken),c.instanceIdToken&&i.append("Firebase-Instance-ID-Token",c.instanceIdToken),d=n.timeout||7e4,[4,Promise.race([this.postJSON(r,o,i),(h=d,new Promise(function(e,t){setTimeout(function(){t(new u("deadline-exceeded","deadline-exceeded"))},h)})),this.cancelAllRequests])]
case 2:if(!(l=a.sent()))throw new u("cancelled","Firebase Functions instance was deleted.")
if(f=function(e,t,n){var r=function(e){if(e>=200&&e<300)return"ok"
switch(e){case 0:return"internal"
case 400:return"invalid-argument"
case 401:return"unauthenticated"
case 403:return"permission-denied"
case 404:return"not-found"
case 409:return"aborted"
case 429:return"resource-exhausted"
case 499:return"cancelled"
case 500:return"internal"
case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline-exceeded"}return"unknown"}(e),o=r,i=void 0
try{var a=t&&t.error
if(a){var c=a.status
if("string"==typeof c){if(!s[c])return new u("internal","internal")
r=s[c],o=c}var d=a.message
"string"==typeof d&&(o=d),void 0!==(i=a.details)&&(i=n.decode(i))}}catch(e){}return"ok"===r?null:new u(r,o,i)}(l.status,l.json,this.serializer))throw f
if(!l.json)throw new u("internal","Response is not valid JSON object.")
if(void 0===(p=l.json.data)&&(p=l.json.result),void 0===p)throw new u("internal","Response is missing data field.")
return[2,{data:this.serializer.decode(p)}]}var h})})},e}(),p="functions"
function h(e,t,n){return new f(e,n)}function v(e){var t={Functions:f}
e.INTERNAL.registerService(p,h,t,void 0,!0)}v(i),t.registerFunctions=v}}])
