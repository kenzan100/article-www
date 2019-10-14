(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[12],{18:function(e,t,r){"use strict"
r.r(t)
var n=r(2),o=r.n(n),i=r(1)
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s="firebasestorage.googleapis.com",u="storageBucket",c=12e4,l=6e5,p=-9007199254740991,h=function(){function e(e,t){this.code_=d(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return d(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),f={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"}
function d(e){return"storage/"+e}function _(){return new h(f.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new h(f.CANCELED,"User canceled the upload/download.")}function v(){return new h(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(e,t,r){return new h(f.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function g(){return new h(f.APP_DELETED,"The Firebase app was deleted.")}function y(e,t){return new h(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function R(e){throw new h(f.INTERNAL_ERROR,"Internal error: "+e)}var w={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"}
function E(e){switch(e){case w.RAW:case w.BASE64:case w.BASE64URL:case w.DATA_URL:return
default:throw"Expected one of the event types: ["+w.RAW+", "+w.BASE64+", "+w.BASE64URL+", "+w.DATA_URL+"]."}}var T=function(e,t){this.data=e,this.contentType=t||null}
function U(e,t){switch(e){case w.RAW:return new T(A(t))
case w.BASE64:case w.BASE64URL:return new T(N(e,t))
case w.DATA_URL:return new T((r=new k(t)).base64?N(w.BASE64,r.rest):function(e){var t
try{t=decodeURIComponent(e)}catch(e){throw y(w.DATA_URL,"Malformed data URL.")}return A(t)}(r.rest),new k(t).contentType)}var r
throw _()}function A(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r)
n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):55296==(64512&n)?r<e.length-1&&56320==(64512&e.charCodeAt(r+1))?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function N(e,t){switch(e){case w.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_")
if(r||n)throw y(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?")
break
case w.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/")
if(o||i)throw y(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?")
t=t.replace(/-/g,"+").replace(/_/g,"/")}var a
try{a=atob(t)}catch(t){throw y(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u)
return s}var O,k=function(e){this.base64=!1,this.contentType=null
var t=e.match(/^data:([^,]+)?,/)
if(null===t)throw y(w.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>")
var r,n,o=t[1]||null
null!=o&&(this.base64=(n=";base64",(r=o).length>=n.length&&r.substring(r.length-n.length)===n),this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)},S={STATE_CHANGED:"state_changed"},C={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},x={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}
function P(e){switch(e){case C.RUNNING:case C.PAUSING:case C.CANCELING:return x.RUNNING
case C.PAUSED:return x.PAUSED
case C.SUCCESS:return x.SUCCESS
case C.CANCELED:return x.CANCELED
case C.ERROR:default:return x.ERROR}}function I(e){return null!=e}function L(e){return void 0!==e}function D(e){return"function"==typeof e}function M(e){return"object"===a(e)}function W(e){return M(e)&&null!==e}function B(e){return"string"==typeof e||e instanceof String}function G(e){return j(e)&&Number.isInteger(e)}function j(e){return"number"==typeof e||e instanceof Number}function q(e){return F()&&e instanceof Blob}function F(){return"undefined"!=typeof Blob}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(O||(O={}))
var H=function(){function e(){var e=this
this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise(function(t){e.xhr_.addEventListener("abort",function(){e.errorCode_=O.ABORT,t(e)}),e.xhr_.addEventListener("error",function(){e.errorCode_=O.NETWORK_ERROR,t(e)}),e.xhr_.addEventListener("load",function(){t(e)})})}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw R("cannot .send() more than once")
if(this.sent_=!0,this.xhr_.open(t,e,!0),I(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString())
return I(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw R("cannot .getErrorCode() before sending")
return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw R("cannot .getStatus() before sending")
try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw R("cannot .getResponseText() before sending")
return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),z=function(){function e(){}return e.prototype.createXhrIo=function(){return new H},e}()
function X(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0
if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o])
return n.getBlob()}if(F())return new Blob(e)
throw Error("This browser doesn't seem to support creating Blobs")}var V=function(){function e(e,t){var r=0,n=""
q(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(q(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r)
return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(F()){var n=t.map(function(t){return t instanceof e?t.data_:t})
return new e(X.apply(null,n))}var o=t.map(function(e){return B(e)?U(w.RAW,e).data:e.data_}),i=0
o.forEach(function(e){i+=e.byteLength})
var a=new Uint8Array(i),s=0
return o.forEach(function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]}),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),K=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent
return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r,n
try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r
throw n=t,new h(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")},e.makeFromUrl=function(t){for(var r=null,n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i"),o=s.replace(/[.]/g,"\\."),i=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+o+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],a=0;a<i.length;a++){var u=i[a],c=u.regex.exec(t)
if(c){var l=c[u.indices.bucket],p=c[u.indices.path]
p||(p=""),r=new e(l,p),u.postModify(r)
break}}if(null==r)throw function(e){return new h(f.INVALID_URL,"Invalid URL '"+e+"'.")}(t)
return r},e}()
function Z(e){var t,r
try{t=JSON.parse(e)}catch(e){return null}return M(r=t)&&!Array.isArray(r)?t:null}function J(e){var t=e.lastIndexOf("/",e.length-2)
return-1===t?e:e.slice(t+1)}function Q(e){return"https://"+s+"/v0"+e}function $(e){var t=encodeURIComponent,r="?"
for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&")
return r.slice(0,-1)}function Y(e,t){return t}var ee=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Y},te=null
function re(e,t,r){var n=Z(t)
return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i]
n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new K(r,n)
return t.makeStorageReference(o)}})}(n,e),n}(e,n,r)}function ne(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o]
i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function oe(e){if(!M(e)||!e)throw"Expected Metadata object."
for(var t in e)if(e.hasOwnProperty(t)){var r=e[t]
if("customMetadata"===t){if(!M(r))throw"Expected object for 'customMetadata' mapping."}else if(W(r))throw"Mapping for '"+t+"' cannot be an object."}}var ie="maxResults",ae=1e3,se="pageToken",ue="prefixes",ce="items"
function le(e){if(!M(e)||!e)throw"Expected ListOptions object."
for(var t in e)if(t===ie){if(!G(e[ie])||e[ie]<=0)throw"Expected maxResults to be a positive number."
if(e[ie]>1e3)throw"Expected maxResults to be less than or equal to "+ae+"."}else{if(t!==se)throw"Unknown option: "+t
if(e[se]&&!B(e[se]))throw"Expected pageToken to be string."}}var pe=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}
function he(e){if(!e)throw _()}function fe(e,t){return function(r,n){var o=re(e,n,t)
return he(null!==o),o}}function de(e){return function(t,r){var n=function(e,t){var r=Z(t)
return null===r?null:function(e,t){var r={prefixes:[],items:[],nextPageToken:t.nextPageToken},n=e.bucket()
if(null===n)throw new h(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+u+"' property when initializing the app?")
if(t[ue])for(var o=0,i=t[ue];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new K(n,a))
r.prefixes.push(s)}if(t[ce])for(var c=0,l=t[ce];c<l.length;c++){var p=l[c]
s=e.makeStorageReference(new K(n,p.name)),r.items.push(s)}return r}(e,r)}(e,r)
return he(null!==n),n}}function _e(e){return function(t,r){var n,o,i
return 401===t.getStatus()?n=new h(f.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new h(f.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new h(f.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function me(e){var t=_e(e)
return function(r,n){var o,i=t(r,n)
return 404===r.getStatus()&&(o=e.path,i=new h(f.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function ve(e,t,r){var n=Q(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new pe(n,"GET",fe(e,r),o)
return i.errorHandler=me(t),i}function be(e,t,r){var n=Q(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new pe(n,"GET",function(e,t){return function(r,n){var o=re(e,n,t)
return he(null!==o),function(e,t){var r=Z(t)
if(null===r)return null
if(!B(r.downloadTokens))return null
var n=r.downloadTokens
if(0===n.length)return null
var o=encodeURIComponent
return n.split(",").map(function(t){var r=e.bucket,n=e.fullPath
return Q("/b/"+o(r)+"/o/"+o(n))+$({alt:"media",token:t})})[0]}(o,n)}}(e,r),o)
return i.errorHandler=me(t),i}function ge(e,t,r){var n=Object.assign({},r)
return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),n}var ye=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}
function Re(e,t){var r=null
try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){he(!1)}return he(!!r&&-1!==(t||["active"]).indexOf(r)),r}var we=function(e,t,r){if(D(e)||I(t)||I(r))this.next=e,this.error=t||null,this.complete=r||null
else{var n=e
this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},Ee=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}
function Te(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i
break}var a,s,u,c,l,p
if(!(n<=r.length&&r.length<=o))throw a=n,s=o,u=e,c=r.length,a===s?(l=a,p=1===a?"argument":"arguments"):(l="between "+a+" and "+s,p="arguments"),new h(f.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+l+" "+p+", received "+c+".")
for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(t){throw t instanceof Error?b(i,e,t.message):b(i,e,t)}}var Ue=function(e,t){var r=this
this.validator=function(t){r.optional&&!L(t)||e(t)},this.optional=!!t}
function Ae(e,t){function r(e){if(!B(e))throw"Expected string."}var n,o,i
return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new Ue(n,t)}function Ne(e){return new Ue(oe,e)}function Oe(e){return new Ue(le,e)}function ke(){return new Ue(function(e){if(!(j(e)&&e>=0))throw"Expected a number 0 or greater."})}function Se(e,t){return new Ue(function(t){if(!(null===t||I(t)&&t instanceof Object))throw"Expected an Object."
null!=e&&e(t)},t)}function Ce(e){return new Ue(function(e){if(null!==e&&!D(e))throw"Expected a Function."},e)}function xe(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
Promise.resolve().then(function(){return e.apply(void 0,t)})}}var Pe=function(){function e(e,t,r,n,o,i){var a=this
void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=C.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(f.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(C.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(f.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(C.ERROR))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_
return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===C.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this
this.authWrapper_.getAuthToken().then(function(r){switch(t.state_){case C.RUNNING:e(r)
break
case C.CANCELING:t.transition_(C.CANCELED)
break
case C.PAUSING:t.transition_(C.PAUSED)}})},e.prototype.createResumable_=function(){var e=this
this.resolveToken_(function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=ge(t,n,o),s={name:a.fullPath},u=Q(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ne(a,r),p=e.maxUploadRetryTime(),h=new pe(u,"POST",function(e){var t
Re(e)
try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){he(!1)}return he(B(t)),t},p)
return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=_e(t),h}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()},e.errorHandler_)})},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_
this.resolveToken_(function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime(),i=new pe(r,"POST",function(e){var t=Re(e,["active","final"]),r=null
try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){he(!1)}r||he(!1)
var o=Number(r)
return he(!isNaN(o)),new ye(o,n.size(),"final"===t)},o)
return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=_e(t),i}(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r)
e.request_=o,o.getPromise().then(function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()},e.errorHandler_)})},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new ye(this.transferred_,this.blob_.size()),n=this.uploadUrl_
this.resolveToken_(function(o){var i
try{i=function(e,t,r,n,o,i,a,s){var u=new ye(0,0)
if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new h(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")
var c=u.total-u.current,l=c
o>0&&(l=Math.min(l,o))
var p=u.current,d=p+l,_={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},m=n.slice(p,d)
if(null===m)throw v()
var b=t.maxUploadRetryTime(),g=new pe(r,"POST",function(e,r){var o,a=Re(e,["active","final"]),s=u.current+l,c=n.size()
return o="final"===a?fe(t,i)(e,r):null,new ye(s,c,"final"===a,o)},b)
return g.headers=_,g.body=m.uploadData(),g.progressCallback=s||null,g.errorHandler=_e(e),g}(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(C.ERROR)}var a=e.authWrapper_.makeRequest(i,o)
e.request_=a,a.getPromise().then(function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(C.SUCCESS)):e.completeTransitions_()},e.errorHandler_)})},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this
this.resolveToken_(function(t){var r=ve(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.transition_(C.SUCCESS)},e.metadataErrorHandler_)})},e.prototype.oneShotUpload_=function(){var e=this
this.resolveToken_(function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2)
return e}()
a["Content-Type"]="multipart/related; boundary="+s
var u=ge(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ne(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",p=V.getBlob(c,n,l)
if(null===p)throw v()
var h={name:u.fullPath},f=Q(i),d=e.maxUploadRetryTime(),_=new pe(f,"POST",fe(e,r),d)
return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=_e(t),_}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t)
e.request_=n,n.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(C.SUCCESS)},e.errorHandler_)})},e.prototype.updateProgress_=function(e){var t=this.transferred_
this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case C.CANCELING:case C.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel()
break
case C.RUNNING:var t=this.state_===C.PAUSED
this.state_=e,t&&(this.notifyObservers_(),this.start_())
break
case C.PAUSED:this.state_=e,this.notifyObservers_()
break
case C.CANCELED:this.error_=m(),this.state_=e,this.notifyObservers_()
break
case C.ERROR:case C.SUCCESS:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case C.PAUSING:this.transition_(C.PAUSED)
break
case C.CANCELING:this.transition_(C.CANCELED)
break
case C.RUNNING:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=P(this.state_)
return new Ee(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){var o="Expected a function or an Object with one of `next`, `error`, `complete` properties.",i=Ce(!0).validator,a=Se(null,!0).validator
function s(e){try{return void i(e)}catch(e){}try{if(a(e),!(L(e.next)||L(e.error)||L(e.complete)))throw""
return}catch(e){throw o}}Te("on",[Ae(function(){if(e!==S.STATE_CHANGED)throw"Expected one of the event types: ["+S.STATE_CHANGED+"]."}),Se(s,!0),Ce(!0),Ce(!0)],arguments)
var u=this
function c(e){return function(t,r,o){null!==e&&Te("on",e,arguments)
var i=new we(t,r,n)
return u.addObserver_(i),function(){u.removeObserver_(i)}}}var l=[Se(function(e){if(null===e)throw o
s(e)}),Ce(!0),Ce(!0)]
return!(L(t)||L(r)||L(n))?c(l):c(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this
this.finishPromise_(),this.observers_.slice().forEach(function(t){e.notifyObserver_(t)})},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0
switch(P(this.state_)){case x.SUCCESS:xe(this.resolve_.bind(null,this.snapshot))()
break
case x.CANCELED:case x.ERROR:xe(this.reject_.bind(null,this.error_))()
break
default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(P(this.state_)){case x.RUNNING:case x.PAUSED:e.next&&xe(e.next.bind(e,this.snapshot))()
break
case x.SUCCESS:e.complete&&xe(e.complete.bind(e))()
break
case x.CANCELED:case x.ERROR:e.error&&xe(e.error.bind(e,this.error_))()
break
default:e.error&&xe(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Te("resume",[],arguments)
var e=this.state_===C.PAUSED||this.state_===C.PAUSING
return e&&this.transition_(C.RUNNING),e},e.prototype.pause=function(){Te("pause",[],arguments)
var e=this.state_===C.RUNNING
return e&&this.transition_(C.PAUSING),e},e.prototype.cancel=function(){Te("cancel",[],arguments)
var e=this.state_===C.RUNNING||this.state_===C.PAUSING
return e&&this.transition_(C.CANCELING),e},e}(),Ie=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof K?t:K.makeFromUrl(t)}return e.prototype.toString=function(){return Te("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return function(){if(te)return te
var e=[]
e.push(new ee("bucket")),e.push(new ee("generation")),e.push(new ee("metageneration")),e.push(new ee("name","fullPath",!0))
var t=new ee("name")
t.xform=function(e,t){return function(e){return!B(e)||e.length<2?e:J(e)}(t)},e.push(t)
var r=new ee("size")
return r.xform=function(e,t){return I(t)?Number(t):t},e.push(r),e.push(new ee("timeCreated")),e.push(new ee("updated")),e.push(new ee("md5Hash",null,!0)),e.push(new ee("cacheControl",null,!0)),e.push(new ee("contentDisposition",null,!0)),e.push(new ee("contentEncoding",null,!0)),e.push(new ee("contentLanguage",null,!0)),e.push(new ee("contentType",null,!0)),e.push(new ee("metadata","customMetadata",!0)),te=e}()},e.prototype.child=function(e){Te("child",[Ae()],arguments)
var t=function(e,t){var r=t.split("/").filter(function(e){return e.length>0}).join("/")
return 0===e.length?r:e+"/"+r}(this.location.path,e),r=new K(this.location.bucket,t)
return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null
var t=e.lastIndexOf("/")
return-1===t?"":e.slice(0,t)}(this.location.path)
if(null===e)return null
var t=new K(this.location.bucket,e)
return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new K(this.location.bucket,"")
return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return J(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Te("put",[new Ue(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||F()&&e instanceof Blob))throw"Expected Blob or File."}),Ne(!0)],arguments),this.throwIfRoot_("put"),new Pe(this,this.authWrapper,this.location,this.mappings(),new V(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=w.RAW),Te("putString",[Ae(),Ae(E,!0),Ne(!0)],arguments),this.throwIfRoot_("putString")
var n=U(t,e),o=Object.assign({},r)
return!I(o.contentType)&&I(n.contentType)&&(o.contentType=n.contentType),new Pe(this,this.authWrapper,this.location,this.mappings(),new V(n.data,!0),o)},e.prototype.delete=function(){var e=this
return Te("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(t){var r=function(e,t){var r=Q(t.fullServerUrl()),n=e.maxOperationRetryTime(),o=new pe(r,"DELETE",function(e,t){},n)
return o.successCodes=[200,204],o.errorHandler=me(t),o}(e.authWrapper,e.location)
return e.authWrapper.makeRequest(r,t).getPromise()})},e.prototype.listAll=function(){Te("listAll",[],arguments)
var e={prefixes:[],items:[]}
return this.listAllHelper(e).then(function(){return e})},e.prototype.listAllHelper=function(e,t){return Object(i.__awaiter)(this,void 0,void 0,function(){var r,n,o,a
return Object(i.__generator)(this,function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)]
case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)]
case 2:i.sent(),i.label=3
case 3:return[2]}})})},e.prototype.list=function(e){Te("list",[Oe(!0)],arguments)
var t=this
return this.authWrapper.getAuthToken().then(function(r){var n=e||{},o=function(e,t,r,n,o){var i={}
t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o)
var a=Q(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new pe(a,"GET",de(e),s)
return u.urlParams=i,u.errorHandler=_e(t),u}(t.authWrapper,t.location,"/",n.pageToken,n.maxResults)
return t.authWrapper.makeRequest(o,r).getPromise()})},e.prototype.getMetadata=function(){var e=this
return Te("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(t){var r=ve(e.authWrapper,e.location,e.mappings())
return e.authWrapper.makeRequest(r,t).getPromise()})},e.prototype.updateMetadata=function(e){var t=this
return Te("updateMetadata",[Ne()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(r){var n=function(e,t,r,n){var o=Q(t.fullServerUrl()),i=ne(r,n),a=e.maxOperationRetryTime(),s=new pe(o,"PATCH",fe(e,n),a)
return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=me(t),s}(t.authWrapper,t.location,e,t.mappings())
return t.authWrapper.makeRequest(n,r).getPromise()})},e.prototype.getDownloadURL=function(){var e=this
return Te("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(t){var r=be(e.authWrapper,e.location,e.mappings())
return e.authWrapper.makeRequest(r,t).getPromise().then(function(e){if(null===e)throw new h(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")
return e})})},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new h(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),Le=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),De=function(){function e(){this.map=new Map,this.id=p}return e.prototype.addRequest=function(e){var t=this,r=this.id
this.id++,this.map.set(r,e),e.getPromise().then(function(){return t.map.delete(r)},function(){return t.map.delete(r)})},e.prototype.clear=function(){this.map.forEach(function(e){e&&e.cancel(!0)}),this.map.clear()},e}(),Me=function(){function e(t,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var a=this.app_.options
I(a)&&(this.bucket_=e.extractBucket_(a))}this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=c,this.maxUploadRetryTime_=l,this.requestMap_=new De}return e.extractBucket_=function(e){var t=e[u]||null
return null==t?null:K.makeFromBucketSpec(t).bucket},e.prototype.getAuthToken=function(){return null!==this.app_&&I(this.app_.INTERNAL)&&I(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(e){return null!==e?e.accessToken:null},function(){return null}):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw g()
return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new Le(g())
var r=this.requestMaker_(e,t,this.pool_)
return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}(),We=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this
this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){p.resolve_=e,p.reject_=t,p.start_()})}return e.prototype.start_=function(){var e=this
function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr
if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText())
L(s)?o(s):o()}catch(e){i(e)}else null!==a?((n=_()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?g():m()):i(n=new h(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new Be(!1,null,!0)):this.backoffId_=function(e,t,r){var n=1,o=null,a=!1,s=0
function u(){return 2===s}var c=!1
function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
c||(c=!0,t.apply(null,e))}function p(t){o=setTimeout(function(){o=null,e(h,u())},t)}function h(e){for(var t,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o]
c||(e?l.call.apply(l,Object(i.__spreadArrays)([null,e],r)):u()||a?l.call.apply(l,Object(i.__spreadArrays)([null,e],r)):(n<64&&(n*=2),1===s?(s=2,t=0):t=1e3*(n+Math.random()),p(t)))}var f=!1
function d(e){f||(f=!0,c||(null!==o?(e||(s=2),clearTimeout(o),p(0)):e||(s=1)))}return p(0),setTimeout(function(){a=!0,d(!0)},r),d}(function(t,r){if(r)t(!1,new Be(!1,null,!0))
else{var n=e.pool_.createXhrIo()
e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then(function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null
var n=(r=r).getErrorCode()===O.NO_ERROR,i=r.getStatus()
if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i)
t(!0,new Be(a,r))}else{var s=r.getErrorCode()===O.ABORT
t(!1,new Be(!1,null,s))}})}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1
null!==e.progressCallback_&&e.progressCallback_(r,n)}},t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e)
return t||r||n},e}(),Be=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}
function Ge(e,t,r){var n=$(e.urlParams),i=e.url+n,a=Object.assign({},e.headers)
return function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(a,t),function(e){var t=void 0!==o.a?o.a.SDK_VERSION:"AppManager"
e["X-Firebase-Storage-Version"]="webjs/"+t}(a),new We(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}var je,qe,Fe=function(){function e(e,t,r){if(this.bucket_=null,this.authWrapper_=new Me(e,function(e,t){return new Ie(e,t)},Ge,this,t),this.app_=e,null!=r)this.bucket_=K.makeFromBucketSpec(r)
else{var n=this.authWrapper_.bucket()
null!=n&&(this.bucket_=new K(n,""))}this.internals_=new He(this)}return e.prototype.ref=function(e){if(Te("ref",[Ae(function(e){if("string"!=typeof e)throw"Path is not a string."
if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.")
var t=new Ie(this.authWrapper_,this.bucket_)
return null!=e?t.child(e):t},e.prototype.refFromURL=function(e){return Te("refFromURL",[Ae(function(e){if("string"!=typeof e)throw"Path is not a string."
if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead."
try{K.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new Ie(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Te("setMaxUploadRetryTime",[ke()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){Te("setMaxOperationRetryTime",[ke()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),He=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}()
je=o.a,qe={TaskState:x,TaskEvent:S,StringFormat:w,Storage:Fe,Reference:Ie},je.INTERNAL.registerService("storage",function(e,t,r){return new Fe(e,new z,r)},qe,void 0,!0)}}])
