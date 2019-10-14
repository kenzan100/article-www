(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[7],{13:function(t,e,n){"use strict"
n.r(e),n(25)},25:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i,o=(i=n(2))&&"object"===r(i)&&"default"in i?i.default:i,a=n(1),s=n(3)
n(19)
var c,u,p,f,l,m,g=n(4),h="0.2.20",d="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",_="FB-PERF-TRACE-MEASURE",b="_wt_",y="@firebase/performance/config",I="@firebase/performance/configexpire",E=((c={})["trace started"]="Trace {$traceName} was started before.",c["trace stopped"]="Trace {$traceName} is not running.",c["no window"]="Window is not available.",c["no app id"]="App id is not available.",c["no project id"]="Project id is not available.",c["no api key"]="Api key is not available.",c["invalid cc log"]="Attempted to queue invalid cc event",c["FB not default"]="Performance can only start when Firebase app instance is the default one.",c["RC response not ok"]="RC response is not ok",c["invalid attribute name"]="Attribute name {$attributeName} is invalid.",c["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",c["invalide custom metric name"]="Custom metric name {$customMetricName} is invalid",c),T=new s.ErrorFactory("performance","Performance",E),w=function(){function t(t){if(!t)throw T.create("no window")
this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n]
e(i)}}).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===u&&(u=new t(p)),u},t}(),A=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId
if(!t)throw T.create("no app id")
return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId
if(!t)throw T.create("no project id")
return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey
if(!t)throw T.create("no api key")
return t},t.getInstance=function(){return void 0===f&&(f=new t),f},t}()
function S(){return l}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(m||(m={}))
var N=["firebase_","google_","ga_"],M=new RegExp("^[a-zA-Z]\\w*$")
function k(){switch(w.getInstance().document.visibilityState){case"visible":return m.VISIBLE
case"hidden":return m.HIDDEN
case"prerender":return m.PRERENDER
default:return m.UNKNOWN}}function O(){var t=w.getInstance().navigator.connection
switch(t&&t.effectiveType){case"slow-2g":return 1
case"2g":return 2
case"3g":return 3
case"4g":return 4
default:return 0}}var R=new g.Logger("Performance")
R.logLevel=g.LogLevel.INFO
var P="0.0.1",U={loggingEnabled:!0},D="FIREBASE_INSTALLATIONS_AUTH"
var B="Could not fetch config, will use default configs"
function L(t){if(!t)return t
var e=A.getInstance(),n=t.entries||{}
return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=U.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=j(e.tracesSamplingRate),e.logNetworkAfterSampling=j(e.networkRequestsSamplingRate),t}function j(t){return Math.random()<=t}var F,C=1
function q(){var t
return C=2,F=F||(t=w.getInstance().document,new Promise(function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())}):e()})).then(function(){return(t=A.getInstance().firebaseAppInstance.installations().getId()).then(function(t){l=t}),t
var t}).then(function(t){return function(t){var e=function(){var t=w.getInstance().localStorage,e=t.getItem(I)
if(e&&Number(e)>Date.now()){var n=t.getItem(y)
if(n)try{return JSON.parse(n)}catch(t){return}}}()
return e?(L(e),Promise.resolve()):function(t){return(e=A.getInstance().firebaseAppInstance.installations().getToken(),e.then(function(t){}),e).then(function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+A.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+A.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:D+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:A.getInstance().getAppId(),app_version:h,sdk_version:P})})
return fetch(r).then(function(t){if(t.ok)return t.json()
throw T.create("RC response not ok")})}).catch(function(){R.info(B)})
var e}(t).then(function(t){return L(t)}).then(function(t){return function(t){if(t){var e=w.getInstance().localStorage
e.setItem(y,JSON.stringify(t)),e.setItem(I,String(Date.now()+60*A.getInstance().configTimeToLive*60*1e3))}}(t)},function(){})}(t)}).then(function(){return W()},function(){return W()})}function W(){C=3}var J,x=1e4,K=3,V=[]
function $(){if(J)return J
var t=function(t){return function(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];(function(t){if(!t.eventTime||!t.message)throw T.create("invalid cc log")
V=a.__spreadArrays(V,[t])})({message:t.apply(void 0,r),eventTime:Date.now()})}}(Z)
return(J=new g.Logger("@firebase/performance/cc")).logHandler=t,J}function H(t){var e=A.getInstance()
!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&w.getInstance().requiredApisAvailable()&&(t.isAuto&&k()!==m.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===C?z(t):q().then(function(){return z(t)},function(){return z(t)})))}function z(t){S()&&setTimeout(function(){return $().log(t,1)},0)}function Z(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:G(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs}
0!==Object.keys(t.counters).length&&(e.counters=Q(t.counters))
var n=t.getAttributes()
0!==Object.keys(n).length&&(e.custom_attributes=Q(n))
var r={application_info:G(),trace_metric:e}
return JSON.stringify(r)}(t)
var n,r,i}function G(){return{google_app_id:A.getInstance().getAppId(),app_instance_id:S(),web_app_info:{sdk_version:h,page_url:w.getInstance().getUrl(),service_worker_status:(t=w.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:k(),effective_connection_type:O()},application_process_state:0}
var t}function Q(t){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})}!function t(e){setTimeout(function(){if(0!==K){if(!V.length)return t(x)
var e=a.__spreadArrays(V)
V=[]
var n=e.map(function(t){return{source_extension_json:t.message,event_time_ms:String(t.eventTime)}}),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:A.getInstance().logSource,log_event:n}
fetch(A.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(function(t){return t.ok||R.info("Call to Firebase backend failed."),t.json()}).then(function(e){var n=Number(e.next_request_wait_millis),r=isNaN(n)?x:Math.max(x,n)
K=3,t(r)}).catch(function(){V=a.__spreadArrays(e,V),K--,R.info("Tries left: "+K+"."),t(x)})}},e)}(5500)
var X=["_fp","_fcp","_fid"],Y=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=w.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=d+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||_+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw T.create("trace started",{traceName:this.name})
this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw T.create("trace stopped",{traceName:this.name})
this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),H(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=a.__assign({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r]
isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}H(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(b)&&X.indexOf(n)>-1)&&n.startsWith("_"))throw T.create("invalide custom metric name",{customMetricName:t})
var n,r
this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40||N.some(function(t){return n.startsWith(t)})||!n.match(M)),i=function(t){return 0!==t.length&&t.length<=100}(e)
if(r&&i)this.customAttributes[t]=e
else{if(!r)throw T.create("invalid attribute name",{attributeName:t})
if(!i)throw T.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return a.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0]
e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=w.getInstance().getUrl()
if(i){var o=new t(b+i,!0),a=Math.floor(1e3*w.getInstance().getTimeOrigin())
if(o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){var s=n.find(function(t){return"first-paint"===t.name})
s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime))
var c=n.find(function(t){return"first-contentful-paint"===t.name})
c&&c.startTime&&o.putMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}H(o)}},t.createUserTimingTrace=function(e){H(new t(e,!1,e))},t}()
function tt(t){var e=t
if(e&&void 0!==e.responseStart){var n=w.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime))
!function(t){var e=A.getInstance()
e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return $().log(t,0)},0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var et=5e3
function nt(){S()&&(setTimeout(function(){return function(){var t=w.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint")
if(t.onFirstInputDelay){var r=setTimeout(function(){Y.createOobTrace(e,n),r=void 0},et)
t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Y.createOobTrace(e,n,t))})}else Y.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){for(var t=w.getInstance(),e=0,n=t.getEntriesByType("resource");e<n.length;e++)tt(n[e])
t.setupObserver("resource",tt)}()},0),setTimeout(function(){return function(){for(var t=w.getInstance(),e=0,n=t.getEntriesByType("measure");e<n.length;e++)rt(n[e])
t.setupObserver("measure",rt)}()},0))}function rt(t){var e=t.name
e.substring(0,_.length)!==_&&Y.createUserTimingTrace(e)}var it=function(){function t(t){this.app=t,w.getInstance().requiredApisAvailable()?q().then(nt,nt):R.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new Y(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return A.getInstance().instrumentationEnabled},set:function(t){A.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return A.getInstance().dataCollectionEnabled},set:function(t){A.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}(),ot="[DEFAULT]"
function at(t){t.INTERNAL.registerService("performance",function(t){if(t.name!==ot)throw T.create("FB not default")
if("undefined"==typeof window)throw T.create("no window")
return function(t){p=t}(window),A.getInstance().firebaseAppInstance=t,new it(t)},{})}at(o),e.registerPerformance=at}}])
