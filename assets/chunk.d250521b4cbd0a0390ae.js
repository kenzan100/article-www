(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[11],{17:function(e,t,n){"use strict"
n.r(t)
var r,o=n(2),i=n.n(o),s=n(1),a=n(3)
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(19)
var u,d=((r={})["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),f=new a.ErrorFactory("messaging","Messaging",d),l=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),p="https://fcmregistrations.googleapis.com/v1"
function h(e,t){if(null==e||null==t)return!1
if(e===t)return!0
if(e.byteLength!==t.byteLength)return!1
for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1
return!0}function b(e){return function(e){var t=new Uint8Array(e)
return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(u||(u={}))
var g=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,function(){var r,o,i,a,c,u
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,v(e)]
case 1:r=s.sent(),o=_(t,n),i={method:"POST",headers:r,body:JSON.stringify(o)},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(w(e),i)]
case 3:return[4,s.sent().json()]
case 4:return a=s.sent(),[3,6]
case 5:throw c=s.sent(),f.create("token-subscribe-failed",{errorInfo:c})
case 6:if(a.error)throw u=a.error.message,f.create("token-subscribe-failed",{errorInfo:u})
if(!a.token)throw f.create("token-subscribe-no-token")
return[2,a.token]}})})},e.prototype.updateToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,function(){var o,i,a,c,u,d
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,v(t)]
case 1:o=s.sent(),i=_(n,r),a={method:"PATCH",headers:o,body:JSON.stringify(i)},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(w(t)+"/"+e.fcmToken,a)]
case 3:return[4,s.sent().json()]
case 4:return c=s.sent(),[3,6]
case 5:throw u=s.sent(),f.create("token-update-failed",{errorInfo:u})
case 6:if(c.error)throw d=c.error.message,f.create("token-update-failed",{errorInfo:d})
if(!c.token)throw f.create("token-update-no-token")
return[2,c.token]}})})},e.prototype.deleteToken=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){var n,r,o,i,a
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,v(e)]
case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(w(e)+"/"+t.fcmToken,r)]
case 3:return[4,s.sent().json()]
case 4:if((o=s.sent()).error)throw i=o.error.message,f.create("token-unsubscribe-failed",{errorInfo:i})
return[3,6]
case 5:throw a=s.sent(),f.create("token-unsubscribe-failed",{errorInfo:a})
case 6:return[2]}})})},e}()
function w(e){return p+"/projects/"+e.options.projectId+"/registrations"}function v(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,e.installations().getToken()]
case 1:return t=n.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.options.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})]}})})}function _(e,t){var n=b(e.getKey("p256dh")),r=b(e.getKey("auth")),o={web:{endpoint:e.endpoint,p256dh:n,auth:r}}
return h(t.buffer,l.buffer)||(o.web.applicationPubKey=b(t)),o}function y(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o)
return r}var m="undefined",k="fcm_token_object_Store"
var T=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){return this.createTransaction(function(n){return n.index(e).get(t)})},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2]
case 1:e.sent().close(),this.dbPromise=null,e.label=2
case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(s.__awaiter)(this,void 0,void 0,function(){var n,r,o,i
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return[4,this.getDb()]
case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,S(e(o))]
case 2:return i=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this
return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion)
r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}()
function S(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}var j=function(e){function t(t){var n=e.call(this)||this
return n.app=t,n.dbName="fcm_token_details_db",n.dbVersion=4,n.objectStoreName="fcm_token_object_Store",n}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result
switch(t.oldVersion){case 0:(o=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),o.createIndex("fcmToken","fcmToken",{unique:!0})
case 1:(function(e){var t=indexedDB.open(m)
t.onerror=function(e){},t.onsuccess=function(n){!function(e,t){if(e.objectStoreNames.contains(k)){var n=e.transaction(k).objectStore(k),r=new g,o=n.openCursor()
o.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},o.onsuccess=function(){var n=o.result
if(n){var i=n.value
r.deleteToken(t,i),n.continue()}else e.close(),indexedDB.deleteDatabase(m)}}}(t.result,e)}})(this.app)
case 2:var r=(o=e.transaction.objectStore(this.objectStoreName)).openCursor()
r.onsuccess=function(){var e=r.result
if(e){var t=e.value,n=Object(s.__assign)({},t)
t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=y(t.vapidKey)),"string"==typeof t.auth&&(n.auth=y(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=y(t.p256dh).buffer),"string"==typeof t.fcmPushSet&&delete n.fcmPushSet,e.update(n),e.continue()}}
break
case 3:var o,i=(o=e.transaction.objectStore(this.objectStoreName)).openCursor()
i.onsuccess=function(){var e=i.result
if(e){var t=e.value,n=Object(s.__assign)({},t)
"string"==typeof t.fcmPushSet&&delete n.fcmPushSet,e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e)throw f.create("bad-token")
return O({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e)throw f.create("bad-scope")
return O({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(t){if(!e.swScope)throw f.create("bad-scope")
if(!e.vapidKey)throw f.create("bad-vapid-key")
if(!e.endpoint||!e.auth||!e.p256dh)throw f.create("bad-subscription")
if(!e.fcmSenderId)throw f.create("bad-sender-id")
if(!e.fcmToken)throw f.create("bad-token")
return O(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(f.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)]
case 1:if(!(t=n.sent()))throw f.create("delete-token-not-found")
return[4,this.delete(t.swScope)]
case 2:return n.sent(),[2,t]}})})},t}(T)
function O(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw f.create("bad-token")
if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw f.create("bad-scope")
if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw f.create("bad-vapid-key")
if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw f.create("bad-subscription")
if(e.auth&&!(e.auth instanceof ArrayBuffer))throw f.create("bad-subscription")
if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw f.create("bad-subscription")
if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw f.create("bad-sender-id")}var M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(s.__extends)(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw f.create("bad-scope")
return[4,this.get(e)]
case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){var n
return Object(s.__generator)(this,function(r){if("string"!=typeof e||0===e.length)throw f.create("bad-scope")
if(null===t||65!==t.length)throw f.create("bad-vapid-key")
return n={swScope:e,vapidKey:t},[2,this.put(n)]})})},t.prototype.deleteVapidDetails=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)]
case 1:if(!(t=n.sent()))throw f.create("delete-scope-not-found")
return[4,this.delete(e)]
case 2:return n.sent(),[2,t]}})})},t}(T),D=function(){function e(e){var t=this
if(this.app=e,this.vapidDetailsModel=new M,this.subscriptionManager=new g,!e.options.messagingSenderId||"string"!=typeof e.options.messagingSenderId)throw f.create("bad-sender-id")
this.INTERNAL={delete:function(){return t.delete()}},this.tokenDetailsModel=new j(e)}return e.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw f.create("notifications-blocked")
return"granted"!==e?[2,null]:[4,this.getSWRegistration_()]
case 1:return t=i.sent(),[4,this.getPublicVapidKey_()]
case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)]
case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)]
case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!h(t.buffer,n.vapidKey.buffer))return!1
var r=e.endpoint===n.endpoint,o=h(e.getKey("auth"),n.auth),i=h(e.getKey("p256dh"),n.p256dh)
return r&&o&&i}(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[3,1]
case 1:return[4,this.deleteTokenFromDB(r.fcmToken)]
case 2:return o.sent(),[2,this.getNewToken(e,t,n)]
case 3:return[2]}})})},e.prototype.updateToken=function(e,t,n,r){return Object(s.__awaiter)(this,void 0,void 0,function(){var o,i,a
return Object(s.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,this.subscriptionManager.updateToken(r,this.app,t,n)]
case 1:return o=s.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.app.options.messagingSenderId,fcmToken:o,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)]
case 2:return s.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)]
case 3:return s.sent(),[2,o]
case 4:return a=s.sent(),[4,this.deleteToken(r.fcmToken)]
case 5:throw s.sent(),a
case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,function(){var r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:return[4,this.subscriptionManager.getToken(this.app,t,n)]
case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.app.options.messagingSenderId,fcmToken:r,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)]
case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)]
case 3:return i.sent(),[2,r]}})})},e.prototype.deleteToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n
return Object(s.__generator)(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)]
case 1:return r.sent(),[4,this.getSWRegistration_()]
case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4]
case 3:if(n=r.sent())return[2,n.unsubscribe()]
r.label=4
case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)]
case 1:return t=n.sent(),[4,this.subscriptionManager.deleteToken(this.app,t)]
case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){var n
return Object(s.__generator)(this,function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()]
case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})]}})})},e.prototype.requestPermission=function(){throw f.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw f.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw f.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw f.create("only-available-in-sw")},e.prototype.delete=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])]
case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getSubscriptionManager=function(){return this.subscriptionManager},e}(),P=function(e){function t(t){var n=e.call(this,t)||this
return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return Object(s.__extends)(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o,i,a
return Object(s.__generator)(this,function(s){switch(s.label){case 0:if(!e.data)return[2]
try{t=e.data.json()}catch(e){return[2]}return[4,this.hasVisibleClients_()]
case 1:return s.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3]
case 2:return o=s.sent(),i=n.actions,a=Notification.maxActions,i&&a&&i.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5]
case 4:return s.sent(),[2]
case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t,n,r
return Object(s.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()]
case 1:return e=o.sent(),[3,3]
case 2:throw t=o.sent(),f.create("unable-to-resubscribe",{errorInfo:t})
case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()]
case 4:return o.sent(),[3,8]
case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)]
case 6:if(!(r=o.sent()))throw n
return[4,this.deleteToken(r.fcmToken)]
case 7:throw o.sent(),n
case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:if(!(e.notification&&e.notification.data&&e.notification.data.FCM_MSG))return[2]
if(e.action)return[2]
if(e.stopImmediatePropagation(),e.notification.close(),!(t=e.notification.data.FCM_MSG).notification)return[2]
if(!(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)){if(!(t.data&&"google.c.a.c_id"in t.data))return[2]
n=self.location.origin}return[4,this.getWindowClient_(n)]
case 1:return(r=i.sent())?[3,4]:[4,self.clients.openWindow(n)]
case 2:return r=i.sent(),[4,(3e3,new Promise(function(e){setTimeout(e,3e3)}))]
case 3:return i.sent(),[3,6]
case 4:return[4,r.focus()]
case 5:r=i.sent(),i.label=6
case 6:return r?(delete t.notification,delete t.fcmOptions,o=C(u.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}})})},t.prototype.getNotificationData_=function(e){var t
if(e&&"object"===c(e.notification)){var n=Object(s.__assign)({},e.notification)
return n.data=Object(s.__assign)(Object(s.__assign)({},e.notification.data),((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw f.create("bg-handler-function-expected")
this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r,o
return Object(s.__generator)(this,function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,I()]
case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o]
break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(n){if(!e)throw f.create("no-window-client-to-msg")
return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){switch(e.label){case 0:return[4,I()]
case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return Object(s.__awaiter)(this,void 0,void 0,function(){var t,n,r=this
return Object(s.__generator)(this,function(o){switch(o.label){case 0:return[4,I()]
case 1:return t=o.sent(),n=C(u.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))]
case 2:return o.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e,t
return Object(s.__generator)(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()]
case 1:if(!(e=n.sent()))throw f.create("sw-registration-expected")
return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)]
case 2:return null==(t=n.sent())?[2,l]:[2,t]}})})},t}(D)
function I(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function C(e,t){return{firebaseMessagingType:e,firebaseMessagingData:t}}var N,K=function(e){function t(t){var n=e.call(this,t)||this
return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(a.createSubscribe)(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=Object(a.createSubscribe)(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return Object(s.__extends)(t,e),t.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){var e
return Object(s.__generator)(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(e=t.sent()))return[2]
throw"denied"===e?f.create("permission-blocked"):f.create("permission-default")}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw f.create("sw-registration-expected")
if(null!=this.registrationToUse)throw f.create("use-sw-before-get-token")
this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw f.create("invalid-public-vapid-key")
if(null!=this.publicVapidKeyToUse)throw f.create("use-public-key-before-get-token")
var t=y(e)
if(65!==t.length)throw f.create("public-vapid-key-decryption-failed")
this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active
return new Promise(function(n,r){t?"activated"!==t.state?"redundant"!==t.state?t.addEventListener("statechange",function o(){if("activated"===t.state)n(e)
else{if("redundant"!==t.state)return
r(f.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)}):r(f.create("sw-reg-redundant")):n(e):r(f.create("no-sw-in-reg"))})},t.prototype.getSWRegistration_=function(){var e=this
return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw f.create("failed-serviceworker-registration",{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return Object(s.__awaiter)(this,void 0,void 0,function(){return Object(s.__generator)(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,l]})})},t.prototype.setupSWMessageListener_=function(){var e=this
navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data.firebaseMessagingType&&t.data.firebaseMessagingData){var n=t.data,r=n.firebaseMessagingType,o=n.firebaseMessagingData
e.messageObserver&&e.messageObserver.next(o)
var i=o.data
if(i&&"google.c.a.c_id"in i&&"1"===i["google.c.a.e"]){var s=function(e){switch(r){case u.NOTIFICATION_CLICKED:return"notification_open"
case u.PUSH_MSG_RECEIVED:return"notification_foreground"
default:throw new Error}}()
e.app.INTERNAL.analytics.logEvent(s,{message_name:i["google.c.a.c_l"],message_id:i["google.c.a.c_id"],message_time:i["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}}},!1)},t}(D)
function V(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}N={isSupported:V},i.a.INTERNAL.registerService("messaging",function(e){if(!V())throw f.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new P(e):new K(e)},N)}}])
