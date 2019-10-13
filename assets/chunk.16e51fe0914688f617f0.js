(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[9],{15:function(e,t,n){"use strict"
n.r(t)
var i,r,a,o=n(2),s=n.n(o),c=n(1),u=(n(19),n(3)),_="measurementId",l="firebase_id",d="origin"
function E(e){return Array.isArray(window[e])}!function(e){e.EVENT="event",e.SET="set",e.CONFIG="config"}(i||(i={})),function(e){e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"}(r||(r={}))
var f,g,w=((a={})["no-ga-id"]='"'+_+'" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',a["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",a["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",a),p=new u.ErrorFactory("analytics","Analytics",w),v={},h="dataLayer",m="gtag",I=!1
s.a.INTERNAL.registerService("analytics",function(e,t){if(!e.options[_])throw p.create("no-ga-id")
var n=e.options[_]
if(null!=v[n])throw p.create("already-exists",{id:n})
if(!I){E(h)||function(e){var t=document.createElement("script")
t.src="https://www.googletagmanager.com/gtag/js?l="+e,t.async=!0,document.head.appendChild(t)}(h),function(e){E(e)?window[e]:window[e]=[]}(h)
var r=function(e,t,n){var r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
window[t].push(arguments)}
return window[n]&&"function"==typeof window[n]&&(r=window[n]),window[n]=function(e,t){return function(n,r,a){if(n===i.EVENT){var o=[]
if(a&&a.send_to){var s=a.send_to
Array.isArray(s)||(s=[s])
for(var c=0,u=s;c<u.length;c++){var _=u[c],l=t[_]
if(!l){o=[]
break}o.push(l)}}if(0===o.length)for(var d=0,E=Object.values(t);d<E.length;d++){var f=E[d]
o.push(f)}Promise.all(o).then(function(){return e(i.EVENT,r,a||{})}).catch(function(e){return console.error(e)})}else n===i.CONFIG?(t[r]||Promise.resolve()).then(function(){e(i.CONFIG,r,a)}).catch(function(e){return console.error(e)}):e(i.SET,r)}}(r,e),{gtagCore:r,wrappedGtag:window[n]}}(v,h,m),a=r.wrappedGtag,o=r.gtagCore
g=a,f=o,I=!0}v[n]=function(e,t){return Object(c.__awaiter)(this,void 0,void 0,function(){var n,r
return Object(c.__generator)(this,function(a){switch(a.label){case 0:return[4,e.installations().getId()]
case 1:return n=a.sent(),t("js",new Date),t(i.CONFIG,e.options[_],((r={})[l]=n,r[d]="firebase",r.update=!0,r)),[2]}})})}(e,f)
var s={app:e,logEvent:function(e,t,r){return function(e,t,n,r,a){var o=r||{}
a&&a.global||(o=Object(c.__assign)(Object(c.__assign)({},r),{send_to:t})),e(i.EVENT,n,o||{})}(g,n,e,t,r)},setCurrentScreen:function(e,t){return function(e,t,n,r){r&&r.global?e(i.SET,{screen_name:n}):e(i.CONFIG,t,{update:!0,screen_name:n})}(g,n,e,t)},setUserId:function(e,t){return function(e,t,n,r){r&&r.global?e(i.SET,{user_id:n}):e(i.CONFIG,t,{update:!0,user_id:n})}(g,n,e,t)},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var a={},o=0,s=Object.keys(n);o<s.length;o++){var c=s[o]
a["user_properties."+c]=n[c]}e(i.SET,a)}else e(i.CONFIG,t,{update:!0,user_properties:n})}(g,n,e,t)},setAnalyticsCollectionEnabled:function(t){return function(e,t){window["ga-disable-"+e]=!t}(e.options[_],t)}}
return t({INTERNAL:{analytics:{logEvent:s.logEvent}}}),s},{settings:function(e){if(I)throw p.create("already-initialized")
e.dataLayerName&&(h=e.dataLayerName),e.gtagName&&(m=e.gtagName)},EventName:r},void 0,!1)}}])
