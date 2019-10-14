(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{14:function(t,e,i){"use strict"
i.r(e),i(26)},26:function(t,e,i){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var n,s=(n=i(2))&&"object"===r(n)&&"default"in n?n.default:n
i(19)
var o,a=i(1),c=i(3),u=i(4),h=function(){function t(t,e,i,r){this.client=t,this.storage=e,this.storageCache=i,this.logger=r}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1
var i=Date.now()-e,r=i<=t
return this.logger.debug("Config fetch cache check. Cache age millis: "+i+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,function(){var e,i,r,n,s
return a.__generator(this,function(o){switch(o.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])]
case 1:return e=o.sent(),i=e[0],(r=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,i)?[2,r]:(t.eTag=r&&r.eTag,[4,this.client.fetch(t)])
case 2:return n=o.sent(),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===n.status&&s.push(this.storage.setLastSuccessfulFetchResponse(n)),[4,Promise.all(s)]
case 3:return o.sent(),[2,n]}})})},t}(),l=((o={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",o["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",o["registration-api-key"]="Undefined API key. Check Firebase app initialization.",o["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",o["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",o["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",o["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",o["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",o["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",o["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',o["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',o["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",o["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",o),f=new c.ErrorFactory("remoteconfig","Remote Config",l),g=function(){function t(t,e,i,r,n,s){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=i,this.projectId=r,this.apiKey=n,this.appId=s}return t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,function(){var e,i,r,n,s,o,c,u,h,l,g,p,d,m,_,v,w,y,b
return a.__generator(this,function(a){switch(a.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])]
case 1:e=a.sent(),i=e[0],r=e[1],n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",s=n+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:r,app_id:this.appId,language_code:(void 0===C&&(C=navigator),C.languages&&C.languages[0]||C.language)},u={method:"POST",headers:o,body:JSON.stringify(c)},h=fetch(s,u),l=new Promise(function(e,i){t.signal.addEventListener(function(){var t=new Error("The operation was aborted.")
t.name="AbortError",i(t)})}),a.label=2
case 2:return a.trys.push([2,5,,6]),[4,Promise.race([h,l])]
case 3:return a.sent(),[4,h]
case 4:return g=a.sent(),[3,6]
case 5:throw p=a.sent(),d="fetch-client-network","AbortError"===p.name&&(d="fetch-timeout"),f.create(d,{originalErrorMessage:p.message})
case 6:if(m=g.status,_=g.headers.get("ETag")||void 0,200!==g.status)return[3,11]
y=void 0,a.label=7
case 7:return a.trys.push([7,9,,10]),[4,g.json()]
case 8:return y=a.sent(),[3,10]
case 9:throw b=a.sent(),f.create("fetch-client-parse",{originalErrorMessage:b.message})
case 10:v=y.entries,w=y.state,a.label=11
case 11:if("INSTANCE_STATE_UNSPECIFIED"===w?m=500:"NO_CHANGE"===w?m=304:"NO_TEMPLATE"!==w&&"EMPTY_CONFIG"!==w||(v={}),304!==m&&200!==m)throw f.create("fetch-status",{httpStatus:m})
return[2,{status:m,eTag:_,config:v}]}var C})})},t}(),p=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},t}(),d="",m=["1","true","t","yes","y","on"],_=function(){function t(t,e){void 0===e&&(e=d),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&m.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0
var t=Number(this._value)
return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),v=6e4,w=432e5,y=function(){function t(t,e,i,r,n){this.app=t,this._client=e,this._storageCache=i,this._storage=r,this._logger=n,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:v,minimumFetchIntervalMillis:w},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=u.LogLevel.DEBUG
break
case"silent":this._logger.logLevel=u.LogLevel.SILENT
break
default:this._logger.logLevel=u.LogLevel.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!0,configurable:!0}),t.prototype.activate=function(){return a.__awaiter(this,void 0,void 0,function(){var t,e,i
return a.__generator(this,function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])]
case 1:return t=r.sent(),e=t[0],i=t[1],e&&e.config&&e.eTag&&e.eTag!==i?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1]
case 2:return r.sent(),[2,!0]}})})},t.prototype.ensureInitialized=function(){var t=this
return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then(function(){t._isInitializationComplete=!0})),this._initializePromise},t.prototype.fetch=function(){return a.__awaiter(this,void 0,void 0,function(){var t=this
return a.__generator(this,function(e){return[2,new Promise(function(e,i){return a.__awaiter(t,void 0,void 0,function(){var t,r,n,s=this
return a.__generator(this,function(o){switch(o.label){case 0:t=new p,setTimeout(function(){return a.__awaiter(s,void 0,void 0,function(){return a.__generator(this,function(e){return t.abort(),[2]})})},this.settings.fetchTimeoutMillis),o.label=1
case 1:return o.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})]
case 2:return o.sent(),[4,this._storageCache.setLastFetchStatus("success")]
case 3:return o.sent(),e(),[3,6]
case 4:return r=o.sent(),"fetch-throttle",n=(u=r)instanceof c.FirebaseError&&-1!==u.code.indexOf("fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)]
case 5:return o.sent(),i(r),[3,6]
case 6:return[2]}var u})})})]})})},t.prototype.fetchAndActivate=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(t){switch(t.label){case 0:return[4,this.fetch()]
case 1:return t.sent(),[2,this.activate()]}})})},t.prototype.getAll=function(){var t=this
return function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(a.__assign(a.__assign({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce(function(e,i){return e[i]=t.getValue(i),e},{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.')
var e=this._storageCache.getActiveConfig()
return e&&void 0!==e[t]?new _("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new _("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new _("static"))},t}()
function b(t,e){var i=t.target.error||void 0
return f.create(e,{originalErrorMessage:i&&i.message})}var C="app_namespace_store",S="firebase_remote_config",T=1,M=function(){function t(t,e,i,r){void 0===r&&(r=new Promise(function(t,e){var i=indexedDB.open(S,T)
i.onerror=function(t){e(b(t,"storage-open"))},i.onsuccess=function(e){t(e.target.result)},i.onupgradeneeded=function(t){var e=t.target.result
switch(t.oldVersion){case 0:e.createObjectStore(C,{keyPath:"compositeKey"})}}})),this.appId=t,this.appName=e,this.namespace=i,this.openDbPromise=r}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return a.__awaiter(this,void 0,void 0,function(){var e,i=this
return a.__generator(this,function(r){switch(r.label){case 0:return[4,this.openDbPromise]
case 1:return e=r.sent(),[2,new Promise(function(r,n){var s=e.transaction([C],"readonly").objectStore(C),o=i.createCompositeKey(t)
try{var a=s.get(o)
a.onerror=function(t){n(b(t,"storage-get"))},a.onsuccess=function(t){var e=t.target.result
r(e?e.value:void 0)}}catch(t){n(f.create("storage-get",{originalErrorMessage:t&&t.message}))}})]}})})},t.prototype.set=function(t,e){return a.__awaiter(this,void 0,void 0,function(){var i,r=this
return a.__generator(this,function(n){switch(n.label){case 0:return[4,this.openDbPromise]
case 1:return i=n.sent(),[2,new Promise(function(n,s){var o=i.transaction([C],"readwrite").objectStore(C),a=r.createCompositeKey(t)
try{var c=o.put({compositeKey:a,value:e})
c.onerror=function(t){s(b(t,"storage-set"))},c.onsuccess=function(){n()}}catch(t){s(f.create("storage-set",{originalErrorMessage:t&&t.message}))}})]}})})},t.prototype.delete=function(t){return a.__awaiter(this,void 0,void 0,function(){var e,i=this
return a.__generator(this,function(r){switch(r.label){case 0:return[4,this.openDbPromise]
case 1:return e=r.sent(),[2,new Promise(function(r,n){var s=e.transaction([C],"readwrite").objectStore(C),o=i.createCompositeKey(t)
try{var a=s.delete(o)
a.onerror=function(t){n(b(t,"storage-delete"))},a.onsuccess=function(){r()}}catch(t){n(f.create("storage-delete",{originalErrorMessage:t&&t.message}))}})]}})})},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),E=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return a.__awaiter(this,void 0,void 0,function(){var t,e,i,r,n,s
return a.__generator(this,function(o){switch(o.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),[4,t]
case 1:return(r=o.sent())&&(this.lastFetchStatus=r),[4,e]
case 2:return(n=o.sent())&&(this.lastSuccessfulFetchTimestampMillis=n),[4,i]
case 3:return(s=o.sent())&&(this.activeConfig=s),[2]}})})},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}(),F=1e3,L=2,I=144e5,P=.5
function k(t){var e=F*Math.pow(L,t),i=Math.round(P*e*(Math.random()-.5)*2)
return Math.min(I,e+i)}function A(t,e){return new Promise(function(i,r){var n=Math.max(e-Date.now(),0),s=setTimeout(i,n)
t.addEventListener(function(){clearTimeout(s),r(f.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}var N=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,function(){var e
return a.__generator(this,function(i){switch(i.label){case 0:return[4,this.storage.getThrottleMetadata()]
case 1:return e=i.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}})})},t.prototype.attemptFetch=function(t,e){var i=e.throttleEndTimeMillis,r=e.backoffCount
return a.__awaiter(this,void 0,void 0,function(){var e,n,s
return a.__generator(this,function(o){switch(o.label){case 0:return[4,A(t.signal,i)]
case 1:o.sent(),o.label=2
case 2:return o.trys.push([2,5,,7]),[4,this.client.fetch(t)]
case 3:return e=o.sent(),[4,this.storage.deleteThrottleMetadata()]
case 4:return o.sent(),[2,e]
case 5:if(!function(t){if(!(t instanceof c.FirebaseError))return!1
var e=Number(t.httpStatus)
return 429===e||500===e||503===e||504===e}(n=o.sent()))throw n
return s={throttleEndTimeMillis:Date.now()+k(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(s)]
case 6:return o.sent(),[2,this.attemptFetch(t,s)]
case 7:return[2]}})})},t}(),O="@firebase/remote-config"
function j(t){t.INTERNAL.registerService("remoteConfig",function(e,i,r){if("undefined"==typeof window)throw f.create("registration-window")
var n=e.options,s=n.projectId,o=n.apiKey,a=n.appId
if(!s)throw f.create("registration-project-id")
if(!o)throw f.create("registration-api-key")
if(!a)throw f.create("registration-app-id")
r=r||"firebase"
var c=new M(a,e.name,r),l=new E(c),p=new u.Logger(O)
p.logLevel=u.LogLevel.ERROR
var d=new g(e.installations(),t.SDK_VERSION,r,s,o,a),m=new N(d,c),_=new h(m,c,l,p),v=new y(e,_,l,c,p)
return v.ensureInitialized(),v},void 0,void 0,!0)}j(s),e.registerRemoteConfig=j}}])
