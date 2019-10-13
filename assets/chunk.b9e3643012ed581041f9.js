(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[10],{16:function(t,e,n){"use strict"
n.r(e)
var i=n(2),r=n.n(i)
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this
function i(t){var e=0
return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}function a(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator]
return e?e.call(t):{next:i(t)}}!function(t,i){if(i){var r=n
t=t.split(".")
for(var o=0;o<t.length-1;o++){var a=t[o]
a in r||(r[a]={}),r=r[a]}(i=i(o=r[t=t[t.length-1]]))!=o&&null!=i&&e(r,t,{configurable:!0,writable:!0,value:i})}}("Promise",function(t){function e(t){this.b=0,this.c=void 0,this.a=[]
var e=this.f()
try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function i(){this.a=null}function r(t){return t instanceof e?t:new e(function(e){e(t)})}if(t)return t
i.prototype.b=function(t){if(null==this.a){this.a=[]
var e=this
this.c(function(){e.g()})}this.a.push(t)}
var s=n.setTimeout
i.prototype.c=function(t){s(t,0)},i.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a
this.a=[]
for(var e=0;e<t.length;++e){var n=t[e]
t[e]=null
try{n()}catch(t){this.f(t)}}}this.a=null},i.prototype.f=function(t){this.c(function(){throw t})},e.prototype.f=function(){function t(t){return function(i){n||(n=!0,t.call(e,i))}}var e=this,n=!1
return{resolve:t(this.m),reject:t(this.g)}},e.prototype.m=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"))
else if(t instanceof e)this.o(t)
else{t:switch(o(t)){case"object":var n=null!=t
break t
case"function":n=!0
break t
default:n=!1}n?this.u(t):this.h(t)}},e.prototype.u=function(t){var e=void 0
try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.v(e,t):this.h(t)},e.prototype.g=function(t){this.i(2,t)},e.prototype.h=function(t){this.i(1,t)},e.prototype.i=function(t,e){if(0!=this.b)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.b)
this.b=t,this.c=e,this.l()},e.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)u.b(this.a[t])
this.a=null}}
var u=new i
return e.prototype.o=function(t){var e=this.f()
t.Ja(e.resolve,e.reject)},e.prototype.v=function(t,e){var n=this.f()
try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function i(t,e){return"function"==typeof t?function(e){try{r(t(e))}catch(t){o(t)}}:e}var r,o,a=new e(function(t,e){r=t,o=e})
return this.Ja(i(t,r),i(n,o)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.Ja=function(t,e){function n(){switch(i.b){case 1:t(i.c)
break
case 2:e(i.c)
break
default:throw Error("Unexpected state: "+i.b)}}var i=this
null==this.a?u.b(n):this.a.push(n)},e.resolve=r,e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){return new e(function(e,n){for(var i=a(t),o=i.next();!o.done;o=i.next())r(o.value).Ja(e,n)})},e.all=function(t){var n=a(t),i=n.next()
return i.done?r([]):new e(function(t,e){function o(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,r(i.value).Ja(o(a.length-1),e),i=n.next()}while(!i.done)})},e})
var s=s||{},u=this||self
function c(t){return"string"==typeof t}function h(t){return"boolean"==typeof t}var l=/^[\w+/_-]+[=]{0,2}$/,f=null
function d(){}function p(t){var e=o(t)
if("object"==e){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return e
var n=Object.prototype.toString.call(t)
if("[object Window]"==n)return"object"
if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object"
return e}function v(t){return null===t}function m(t){return"array"==p(t)}function g(t){var e=p(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function b(t){return"function"==p(t)}function y(t){var e=o(t)
return"object"==e&&null!=t||"function"==e}var w="closure_uid_"+(1e9*Math.random()>>>0),I=0
function T(t,e,n){return t.call.apply(t.bind,arguments)}function k(t,e,n){if(!t)throw Error()
if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:k).apply(null,arguments)}function S(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var A=Date.now||function(){return+new Date}
function N(t,e){function n(){}n.prototype=e.prototype,t.qb=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.fd=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o]
return e.prototype[n].apply(t,r)}}function _(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function O(t){if(Error.captureStackTrace)Error.captureStackTrace(this,O)
else{var e=Error().stack
e&&(this.stack=e)}t&&(this.message=String(t))}function P(t,e){for(var n="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)n+=t[r]+(r<e.length?e[r]:"%s")
O.call(this,n+t[i])}function R(t,e){throw new P("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function D(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function C(t,e){t.f(e),100>t.b&&(t.b++,e.next=t.a,t.a=e)}function L(){this.b=this.a=null}N(O,Error),O.prototype.name="CustomError",N(P,O),P.prototype.name="AssertionError",D.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var x=new D(function(){return new j},function(t){t.reset()})
function M(){var t=Ht,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function j(){this.next=this.b=this.a=null}function U(t,e){t:{try{var n=t&&t.ownerDocument,i=n&&(n.defaultView||n.parentWindow)
if((i=i||u).Element&&i.Location){var r=i
break t}}catch(t){}r=null}if(r&&void 0!==r[e]&&(!t||!(t instanceof r[e])&&(t instanceof r.Location||t instanceof r.Element))){if(y(t))try{var a=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){a="<object could not be stringified>"}else a=void 0===t?"undefined":null===t?"null":o(t)
R("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,a)}}L.prototype.add=function(t,e){var n=x.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},j.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},j.prototype.reset=function(){this.next=this.b=this.a=null}
var V=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(c(t))return c(e)&&1==e.length?t.indexOf(e,0):-1
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},F=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=c(t)?t.split(""):t,o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)},K=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=Array(n),r=c(t)?t.split(""):t,o=0;o<n;o++)o in r&&(i[o]=e.call(void 0,r[o],o,t))
return i},q=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=c(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t))return!0
return!1}
function H(t,e){return 0<=V(t,e)}function B(t,e){var n
return(n=0<=(e=V(t,e)))&&Array.prototype.splice.call(t,e,1),n}function G(t,e){!function(t,e){for(var n=c(t)?t.split(""):t,i=t.length-1;0<=i;--i)i in n&&e.call(void 0,n[i],i,t)}(t,function(n,i){e.call(void 0,n,i,t)&&Array.prototype.splice.call(t,i,1).length})}function W(t){return Array.prototype.concat.apply([],arguments)}function X(t){var e=t.length
if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i]
return n}return[]}function J(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function Y(t){for(var e in t)return!1
return!0}function z(t){var e,n={}
for(e in t)n[e]=t[e]
return n}var $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function Z(t,e){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])t[n]=i[n]
for(var o=0;o<$.length;o++)n=$[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Q(t,e){this.a=t===nt&&e||"",this.b=et}function tt(t){return t instanceof Q&&t.constructor===Q&&t.b===et?t.a:(R("expected object of type Const, got '"+t+"'"),"type_error:Const")}Q.prototype.qa=!0,Q.prototype.pa=function(){return this.a},Q.prototype.toString=function(){return"Const{"+this.a+"}"}
var et={},nt={},it=new Q(nt,"")
function rt(){this.a="",this.b=ct}function ot(t){return t instanceof rt&&t.constructor===rt&&t.b===ct?t.a:(R("expected object of type TrustedResourceUrl, got '"+t+"' of type "+p(t)),"type_error:TrustedResourceUrl")}function at(t,e){var n=tt(t)
if(!ut.test(n))throw Error("Invalid TrustedResourceUrl format: "+n)
return ht(t=n.replace(st,function(t,i){if(!Object.prototype.hasOwnProperty.call(e,i))throw Error('Found marker, "'+i+'", in format string, "'+n+'", but no valid label mapping found in args: '+JSON.stringify(e))
return(t=e[i])instanceof Q?tt(t):encodeURIComponent(String(t))}))}rt.prototype.qa=!0,rt.prototype.pa=function(){return this.a.toString()},rt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var st=/%{(\w+)}/g,ut=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,ct={}
function ht(t){var e=new rt
return e.a=t,e}var lt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},ft=/&/g,dt=/</g,pt=/>/g,vt=/"/g,mt=/'/g,gt=/\x00/g,bt=/[\x00&<>"']/
function yt(t,e){return-1!=t.indexOf(e)}function wt(t,e){return t<e?-1:t>e?1:0}function It(){this.a="",this.b=At}function Tt(t){return t instanceof It&&t.constructor===It&&t.b===At?t.a:(R("expected object of type SafeUrl, got '"+t+"' of type "+p(t)),"type_error:SafeUrl")}It.prototype.qa=!0,It.prototype.pa=function(){return this.a.toString()},It.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var kt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
function Et(t){return t instanceof It?t:(t="object"==o(t)&&t.qa?t.pa():String(t),kt.test(t)||(t="about:invalid#zClosurez"),Nt(t))}var St,At={}
function Nt(t){var e=new It
return e.a=t,e}Nt("about:blank")
t:{var _t=u.navigator
if(_t){var Ot=_t.userAgent
if(Ot){St=Ot
break t}}St=""}function Pt(t){return yt(St,t)}function Rt(){this.a="",this.b=Ct}function Dt(t){return t instanceof Rt&&t.constructor===Rt&&t.b===Ct?t.a:(R("expected object of type SafeHtml, got '"+t+"' of type "+p(t)),"type_error:SafeHtml")}Rt.prototype.qa=!0,Rt.prototype.pa=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Ct={}
function Lt(t){var e=new Rt
return e.a=t,e}Lt("<!DOCTYPE html>")
var xt,Mt,jt=Lt("")
function Ut(t,e){for(var n=t.split("%s"),i="",r=Array.prototype.slice.call(arguments,1);r.length&&1<n.length;)i+=n.shift()+r.shift()
return i+n.join("%s")}function Vt(t){return bt.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(ft,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(dt,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(pt,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(vt,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(mt,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(gt,"&#0;"))),t}function Ft(t){u.setTimeout(function(){throw t},0)}function Kt(t,e){Mt||function(){if(u.Promise&&u.Promise.resolve){var t=u.Promise.resolve(void 0)
Mt=function(){t.then(Bt)}}else Mt=function(){var t=Bt
!b(u.setImmediate)||u.Window&&u.Window.prototype&&!Pt("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(xt||(xt=function(){var t=u.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Pt("Presto")&&(t=function(){var t=document.createElement("IFRAME")
t.style.display="none",function(t){var e=ht(tt(it))
U(t,"HTMLIFrameElement"),t.src=ot(e).toString()}(t),document.documentElement.appendChild(t)
var e=t.contentWindow;(t=e.document).open(),t.write(Dt(jt)),t.close()
var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host
t=E(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}),void 0!==t&&!Pt("Trident")&&!Pt("MSIE")){var e=new t,n={},i=n
return e.port1.onmessage=function(){if(void 0!==n.next){var t=(n=n.next).yb
n.yb=null,t()}},function(t){i.next={yb:t},i=i.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT")
e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){u.setTimeout(t,0)}}()),xt(t)):u.setImmediate(t)}}(),qt||(Mt(),qt=!0),Ht.add(t,e)}Lt("<br>")
var qt=!1,Ht=new L
function Bt(){for(var t;t=M();){try{t.a.call(t.b)}catch(t){Ft(t)}C(x,t)}qt=!1}function Gt(t,e){if(this.a=Wt,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=d)try{var n=this
t.call(e,function(t){re(n,Xt,t)},function(t){if(!(t instanceof le))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}re(n,Jt,t)})}catch(t){re(this,Jt,t)}}var Wt=0,Xt=2,Jt=3
function Yt(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}Yt.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var zt=new D(function(){return new Yt},function(t){t.reset()})
function $t(t,e,n){var i=zt.get()
return i.g=t,i.b=e,i.f=n,i}function Zt(t){if(t instanceof Gt)return t
var e=new Gt(d)
return re(e,Xt,t),e}function Qt(t){return new Gt(function(e,n){n(t)})}function te(t,e,n){oe(t,e,n,null)||Kt(S(e,t))}function ee(t){return new Gt(function(e){var n=t.length,i=[]
if(n)for(var r=function(t,r,o){n--,i[t]=r?{Gb:!0,value:o}:{Gb:!1,reason:o},0==n&&e(i)},o=0;o<t.length;o++)te(t[o],S(r,o,!0),S(r,o,!1))
else e(i)})}function ne(t,e){t.b||t.a!=Xt&&t.a!=Jt||ae(t),t.f?t.f.next=e:t.b=e,t.f=e}function ie(t,e,n,i){var r=$t(null,null,null)
return r.a=new Gt(function(t,o){r.g=e?function(n){try{var r=e.call(i,n)
t(r)}catch(t){o(t)}}:t,r.b=n?function(e){try{var r=n.call(i,e)
void 0===r&&e instanceof le?o(e):t(r)}catch(t){o(t)}}:o}),r.a.c=t,ne(t,r),r.a}function re(t,e,n){t.a==Wt&&(t===n&&(e=Jt,n=new TypeError("Promise cannot resolve to itself")),t.a=1,oe(n,t.Oc,t.Pc,t)||(t.i=n,t.a=e,t.c=null,ae(t),e!=Jt||n instanceof le||function(t,e){t.g=!0,Kt(function(){t.g&&he.call(null,e)})}(t,n)))}function oe(t,e,n,i){if(t instanceof Gt)return ne(t,$t(e||d,n||null,i)),!0
if(_(t))return t.then(e,n,i),!0
if(y(t))try{var r=t.then
if(b(r))return function(t,e,n,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1
try{e.call(t,function(t){a||(a=!0,n.call(r,t))},o)}catch(t){o(t)}}(t,r,e,n,i),!0}catch(t){return n.call(i,t),!0}return!1}function ae(t){t.h||(t.h=!0,Kt(t.Zb,t))}function se(t){var e=null
return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function ue(t,e,n,i){if(n==Jt&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1
if(e.a)e.a.c=null,ce(e,n,i)
else try{e.c?e.g.call(e.f):ce(e,n,i)}catch(t){he.call(null,t)}C(zt,e)}function ce(t,e,n){e==Xt?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}Gt.prototype.then=function(t,e,n){return ie(this,b(t)?t:null,b(e)?e:null,n)},Gt.prototype.$goog_Thenable=!0,(t=Gt.prototype).ka=function(t,e){return(t=$t(t,t,e)).c=!0,ne(this,t),this},t.s=function(t,e){return ie(this,null,t,e)},t.cancel=function(t){this.a==Wt&&Kt(function(){!function t(e,n){if(e.a==Wt)if(e.c){var i=e.c
if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,s.a==e&&(o=s),!(o&&1<r)));s=s.next)o||(a=s)
o&&(i.a==Wt&&1==r?t(i,n):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):se(i),ue(i,o,Jt,n)))}e.c=null}else re(e,Jt,n)}(this,new le(t))},this)},t.Oc=function(t){this.a=Wt,re(this,Xt,t)},t.Pc=function(t){this.a=Wt,re(this,Jt,t)},t.Zb=function(){for(var t;t=se(this);)ue(this,t,this.a,this.i)
this.h=!1}
var he=Ft
function le(t){O.call(this,t)}function fe(){0!=de&&(pe[this[w]||(this[w]=++I)]=this),this.ta=this.ta,this.la=this.la}N(le,O),le.prototype.name="cancel"
var de=0,pe={}
function ve(t){if(!t.ta&&(t.ta=!0,t.xa(),0!=de)){var e=t[w]||(t[w]=++I)
if(0!=de&&t.la&&0<t.la.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete pe[e]}}function me(t){return me[" "](t),t}fe.prototype.ta=!1,fe.prototype.xa=function(){if(this.la)for(;this.la.length;)this.la.shift()()},me[" "]=d
var ge,be,ye=Pt("Opera"),we=Pt("Trident")||Pt("MSIE"),Ie=Pt("Edge"),Te=Ie||we,ke=Pt("Gecko")&&!(yt(St.toLowerCase(),"webkit")&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),Ee=yt(St.toLowerCase(),"webkit")&&!Pt("Edge")
function Se(){var t=u.document
return t?t.documentMode:void 0}t:{var Ae="",Ne=(be=St,ke?/rv:([^\);]+)(\)|;)/.exec(be):Ie?/Edge\/([\d\.]+)/.exec(be):we?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(be):Ee?/WebKit\/(\S+)/.exec(be):ye?/(?:Version)[ \/]?(\S+)/.exec(be):void 0)
if(Ne&&(Ae=Ne?Ne[1]:""),we){var _e=Se()
if(null!=_e&&_e>parseFloat(Ae)){ge=String(_e)
break t}}ge=Ae}var Oe,Pe={}
function Re(t){return function(t,e){var n=Pe
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,function(){for(var e=0,n=lt(String(ge)).split("."),i=lt(String(t)).split("."),r=Math.max(n.length,i.length),o=0;0==e&&o<r;o++){var a=n[o]||"",s=i[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
e=wt(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||wt(0==a[2].length,0==s[2].length)||wt(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}Oe=u.document&&we?Se():void 0
var De=Object.freeze||function(t){return t},Ce=!we||9<=Number(Oe),Le=we&&!Re("9"),xe=function(){if(!u.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{u.addEventListener("test",d,e),u.removeEventListener("test",d,e)}catch(t){}return t}()
function Me(t,e){this.type=t,this.b=this.target=e,this.Mb=!0}function je(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(ke){t:{try{me(e.nodeName)
var r=!0
break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=c(t.pointerType)?t.pointerType:Ue[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}Me.prototype.preventDefault=function(){this.Mb=!1},N(je,Me)
var Ue=De({2:"touch",3:"pen",4:"mouse"})
je.prototype.preventDefault=function(){je.qb.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,Le)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},je.prototype.f=function(){return this.a}
var Ve="closure_listenable_"+(1e6*Math.random()|0),Fe=0
function Ke(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.Na=r,this.key=++Fe,this.ra=this.Ia=!1}function qe(t){t.ra=!0,t.listener=null,t.proxy=null,t.src=null,t.Na=null}function He(t){this.src=t,this.a={},this.b=0}function Be(t,e){var n=e.type
n in t.a&&B(t.a[n],e)&&(qe(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Ge(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r]
if(!o.ra&&o.listener==e&&o.capture==!!n&&o.Na==i)return r}return-1}He.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=Ge(t,e,i,r)
return-1<a?(e=t[a],n||(e.Ia=!1)):((e=new Ke(e,this.src,o,!!i,r)).Ia=n,t.push(e)),e}
var We="closure_lm_"+(1e6*Math.random()|0),Xe={}
function Je(t,e,n,i,r){if(i&&i.once)ze(t,e,n,i,r)
else if(m(e))for(var o=0;o<e.length;o++)Je(t,e[o],n,i,r)
else n=an(n),t&&t[Ve]?un(t,e,n,y(i)?!!i.capture:!!i,r):Ye(t,e,n,!1,i,r)}function Ye(t,e,n,i,r,o){if(!e)throw Error("Invalid event type")
var a=y(r)?!!r.capture:!!r,s=rn(t)
if(s||(t[We]=s=new He(t)),!(n=s.add(e,n,i,a,o)).proxy)if(i=function(){var t=nn,e=Ce?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)xe||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r)
else if(t.attachEvent)t.attachEvent(Qe(e.toString()),i)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(i)}}function ze(t,e,n,i,r){if(m(e))for(var o=0;o<e.length;o++)ze(t,e[o],n,i,r)
else n=an(n),t&&t[Ve]?cn(t,e,n,y(i)?!!i.capture:!!i,r):Ye(t,e,n,!0,i,r)}function $e(t,e,n,i,r){if(m(e))for(var o=0;o<e.length;o++)$e(t,e[o],n,i,r)
else i=y(i)?!!i.capture:!!i,n=an(n),t&&t[Ve]?(t=t.u,(e=String(e).toString())in t.a&&-1<(n=Ge(o=t.a[e],n,i,r))&&(qe(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--))):t&&(t=rn(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Ge(e,n,i,r)),(n=-1<t?e[t]:null)&&Ze(n))}function Ze(t){if("number"!=typeof t&&t&&!t.ra){var e=t.src
if(e&&e[Ve])Be(e.u,t)
else{var n=t.type,i=t.proxy
e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Qe(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=rn(e))?(Be(n,t),0==n.b&&(n.src=null,e[We]=null)):qe(t)}}}function Qe(t){return t in Xe?Xe[t]:Xe[t]="on"+t}function tn(t,e,n,i){var r=!0
if((t=rn(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t]
o&&o.capture==n&&!o.ra&&(o=en(o,i),r=r&&!1!==o)}return r}function en(t,e){var n=t.listener,i=t.Na||t.src
return t.Ia&&Ze(t),n.call(i,e)}function nn(t,e){if(t.ra)return!0
if(!Ce){if(!e)t:{e=["window","event"]
for(var n=u,i=0;i<e.length;i++)if(null==(n=n[e[i]])){e=null
break t}e=n}if(e=new je(i=e,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){t:{var r=!1
if(0==i.keyCode)try{i.keyCode=-1
break t}catch(t){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=e.b;r;r=r.parentNode)i.push(r)
for(t=t.type,r=i.length-1;0<=r;r--){e.b=i[r]
var o=tn(i[r],t,!0,e)
n=n&&o}for(r=0;r<i.length;r++)e.b=i[r],o=tn(i[r],t,!1,e),n=n&&o}return n}return en(t,new je(e,this))}function rn(t){return(t=t[We])instanceof He?t:null}var on="__closure_events_fn_"+(1e9*Math.random()>>>0)
function an(t){return b(t)?t:(t[on]||(t[on]=function(e){return t.handleEvent(e)}),t[on])}function sn(){fe.call(this),this.u=new He(this),this.Sb=this,this.Wa=null}function un(t,e,n,i,r){t.u.add(String(e),n,!1,i,r)}function cn(t,e,n,i,r){t.u.add(String(e),n,!0,i,r)}function hn(t,e,n,i){if(!(e=t.u.a[String(e)]))return!0
e=e.concat()
for(var r=!0,o=0;o<e.length;++o){var a=e[o]
if(a&&!a.ra&&a.capture==n){var s=a.listener,u=a.Na||a.src
a.Ia&&Be(t.u,a),r=!1!==s.call(u,i)&&r}}return r&&0!=i.Mb}function ln(t,e,n){if(b(t))n&&(t=E(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function fn(t){var e=null
return new Gt(function(n,i){-1==(e=ln(function(){n(void 0)},t))&&i(Error("Failed to schedule timer."))}).s(function(t){throw u.clearTimeout(e),t})}function dn(t){if(t.U&&"function"==typeof t.U)return t.U()
if(c(t))return t.split("")
if(g(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i])
return e}for(i in e=[],n=0,t)e[n++]=t[i]
return e}function pn(t){if(t.X&&"function"==typeof t.X)return t.X()
if(!t.U||"function"!=typeof t.U){if(g(t)||c(t)){var e=[]
t=t.length
for(var n=0;n<t;n++)e.push(n)
return e}for(var i in e=[],n=0,t)e[n++]=i
return e}}function vn(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof vn)for(n=t.X(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]))
else for(i in t)this.set(i,t[i])}function mn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var i=t.a[e]
gn(t.b,i)&&(t.a[n++]=i),e++}t.a.length=n}if(t.c!=t.a.length){var r={}
for(n=e=0;e<t.a.length;)gn(r,i=t.a[e])||(t.a[n++]=i,r[i]=1),e++
t.a.length=n}}function gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}N(sn,fe),sn.prototype[Ve]=!0,sn.prototype.addEventListener=function(t,e,n,i){Je(this,t,e,n,i)},sn.prototype.removeEventListener=function(t,e,n,i){$e(this,t,e,n,i)},sn.prototype.dispatchEvent=function(t){var e,n=this.Wa
if(n)for(e=[];n;n=n.Wa)e.push(n)
n=this.Sb
var i=t.type||t
if(c(t))t=new Me(t,n)
else if(t instanceof Me)t.target=t.target||n
else{var r=t
Z(t=new Me(i,n),r)}if(r=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.b=e[o]
r=hn(a,i,!0,t)&&r}if(r=hn(a=t.b=n,i,!0,t)&&r,r=hn(a,i,!1,t)&&r,e)for(o=0;o<e.length;o++)r=hn(a=t.b=e[o],i,!1,t)&&r
return r},sn.prototype.xa=function(){if(sn.qb.xa.call(this),this.u){var t,e=this.u
for(t in e.a){for(var n=e.a[t],i=0;i<n.length;i++)qe(n[i])
delete e.a[t],e.b--}}this.Wa=null},(t=vn.prototype).U=function(){mn(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},t.X=function(){return mn(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return gn(this.b,t)?this.b[t]:e},t.set=function(t,e){gn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.X(),i=0;i<n.length;i++){var r=n[i],o=this.get(r)
t.call(e,o,r,this)}}
var bn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function yn(t,e){var n
this.b=this.i=this.f="",this.l=null,this.g=this.c="",this.h=!1,t instanceof yn?(this.h=void 0!==e?e:t.h,wn(this,t.f),this.i=t.i,this.b=t.b,In(this,t.l),this.c=t.c,Tn(this,Kn(t.a)),this.g=t.g):t&&(n=String(t).match(bn))?(this.h=!!e,wn(this,n[1]||"",!0),this.i=Nn(n[2]||""),this.b=Nn(n[3]||"",!0),In(this,n[4]),this.c=Nn(n[5]||"",!0),Tn(this,n[6]||"",!0),this.g=Nn(n[7]||"")):(this.h=!!e,this.a=new xn(null,this.h))}function wn(t,e,n){t.f=n?Nn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function In(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.l=e}else t.l=null}function Tn(t,e,n){e instanceof xn?(t.a=e,function(t,e){e&&!t.f&&(Mn(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase()
e!=n&&(Un(this,e),Fn(this,n,t))},t)),t.f=e}(t.a,t.h)):(n||(e=_n(e,Cn)),t.a=new xn(e,t.h))}function kn(t,e,n){t.a.set(e,n)}function En(t,e){return t.a.get(e)}function Sn(t){return t instanceof yn?new yn(t):new yn(t,void 0)}function An(t,e){var n=new yn(null,void 0)
return wn(n,"https"),t&&(n.b=t),e&&(n.c=e),n}function Nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _n(t,e,n){return c(t)?(t=encodeURI(t).replace(e,On),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function On(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}yn.prototype.toString=function(){var t=[],e=this.f
e&&t.push(_n(e,Pn,!0),":")
var n=this.b
return(n||"file"==e)&&(t.push("//"),(e=this.i)&&t.push(_n(e,Pn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.l)&&t.push(":",String(n))),(n=this.c)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(_n(n,"/"==n.charAt(0)?Dn:Rn,!0))),(n=this.a.toString())&&t.push("?",n),(n=this.g)&&t.push("#",_n(n,Ln)),t.join("")},yn.prototype.resolve=function(t){var e=new yn(this),n=!!t.f
n?wn(e,t.f):n=!!t.i,n?e.i=t.i:n=!!t.b,n?e.b=t.b:n=null!=t.l
var i=t.c
if(n)In(e,t.l)
else if(n=!!t.c){if("/"!=i.charAt(0))if(this.b&&!this.c)i="/"+i
else{var r=e.c.lastIndexOf("/");-1!=r&&(i=e.c.substr(0,r+1)+i)}if(".."==(r=i)||"."==r)i=""
else if(yt(r,"./")||yt(r,"/.")){i=0==r.lastIndexOf("/",0),r=r.split("/")
for(var o=[],a=0;a<r.length;){var s=r[a++]
"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r}return n?e.c=i:n=""!==t.a.toString(),n?Tn(e,Kn(t.a)):n=!!t.g,n&&(e.g=t.g),e}
var Pn=/[#\/\?@]/g,Rn=/[#\?:]/g,Dn=/[#\?]/g,Cn=/[#\?@]/g,Ln=/#/g
function xn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Mn(t){t.a||(t.a=new vn,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null
if(0<=i){var o=t[n].substring(0,i)
r=t[n].substring(i+1)}else o=t[n]
e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.c,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function jn(t){var e=pn(t)
if(void 0===e)throw Error("Keys are undefined")
var n=new xn(null,void 0)
t=dn(t)
for(var i=0;i<e.length;i++){var r=e[i],o=t[i]
m(o)?Fn(n,r,o):n.add(r,o)}return n}function Un(t,e){Mn(t),e=qn(t,e),gn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,gn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&mn(t)))}function Vn(t,e){return Mn(t),e=qn(t,e),gn(t.a.b,e)}function Fn(t,e,n){Un(t,e),0<n.length&&(t.c=null,t.a.set(qn(t,e),X(n)),t.b+=n.length)}function Kn(t){var e=new xn
return e.c=t.c,t.a&&(e.a=new vn(t.a),e.b=t.b),e}function qn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(t=xn.prototype).add=function(t,e){Mn(this),this.c=null,t=qn(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,e){Mn(this),this.a.forEach(function(n,i){F(n,function(n){t.call(e,n,i,this)},this)},this)},t.X=function(){Mn(this)
for(var t=this.a.U(),e=this.a.X(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i])
return n},t.U=function(t){Mn(this)
var e=[]
if(c(t))Vn(this,t)&&(e=W(e,this.a.get(qn(this,t))))
else{t=this.a.U()
for(var n=0;n<t.length;n++)e=W(e,t[n])}return e},t.set=function(t,e){return Mn(this),this.c=null,Vn(this,t=qn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.U(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.X(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i))
i=this.U(i)
for(var o=0;o<i.length;o++){var a=r
""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}}return this.c=t.join("&")}
var Hn=!we||9<=Number(Oe)
function Bn(t){var e=document
return c(t)?e.getElementById(t):t}function Gn(t,e){J(e,function(e,n){e&&"object"==o(e)&&e.qa&&(e=e.pa()),"style"==n?t.style.cssText=e:"class"==n?t.className=e:"for"==n?t.htmlFor=e:Wn.hasOwnProperty(n)?t.setAttribute(Wn[n],e):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?t.setAttribute(n,e):t[n]=e})}var Wn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function Xn(t){if(t&&"number"==typeof t.length){if(y(t))return"function"==typeof t.item||"string"==typeof t.item
if(b(t))return"function"==typeof t.item}return!1}function Jn(t){var e=[]
return function t(e,n,i){if(null==n)i.push("null")
else{if("object"==o(n)){if(m(n)){var r=n
n=r.length,i.push("[")
for(var a="",s=0;s<n;s++)i.push(a),t(e,r[s],i),a=","
return void i.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(r in i.push("{"),a="",n)Object.prototype.hasOwnProperty.call(n,r)&&"function"!=typeof(s=n[r])&&(i.push(a),Zn(r,i),i.push(":"),t(e,s,i),a=",")
return void i.push("}")}n=n.valueOf()}switch(o(n)){case"string":Zn(n,i)
break
case"number":i.push(isFinite(n)&&!isNaN(n)?String(n):"null")
break
case"boolean":i.push(String(n))
break
case"function":i.push("null")
break
default:throw Error("Unknown type: "+o(n))}}}(new Yn,t,e),e.join("")}function Yn(){}var zn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},$n=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function Zn(t,e){e.push('"',t.replace($n,function(t){var e=zn[t]
return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),zn[t]=e),e}),'"')}function Qn(){var t=bi()
return we&&!!Oe&&11==Oe||/Edge\/\d+/.test(t)}function ti(){return u.window&&u.window.location.href||self&&self.location&&self.location.href||""}function ei(t,e){e=e||u.window
var n="about:blank"
t&&(n=Tt(Et(t)).toString()),e.location.href=n}function ni(t){return!!((t=(t||bi()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function ii(t){t=t||u.window
try{t.close()}catch(t){}}function ri(t,e,n){var i=Math.floor(1e9*Math.random()).toString()
e=e||500,n=n||600
var r=(window.screen.availHeight-n)/2,a=(window.screen.availWidth-e)/2
for(s in e={width:e,height:n,top:0<r?r:0,left:0<a?a:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=bi().toLowerCase(),i&&(e.target=i,yt(n,"crios/")&&(e.target="_blank")),vi(bi())==di&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),i=window,e=n instanceof It?n:Et(void 0!==n.href?n.href:String(n)),n=t.target||n.target,r=[],t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s])
break
case"target":case"noopener":case"noreferrer":break
default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",")
if((Pt("iPhone")&&!Pt("iPod")&&!Pt("iPad")||Pt("iPad")||Pt("iPod"))&&i.navigator&&i.navigator.standalone&&n&&"_self"!=n?(U(s=i.document.createElement("A"),"HTMLAnchorElement"),e instanceof It||e instanceof It||(e="object"==o(e)&&e.qa?e.pa():String(e),kt.test(e)||(e="about:invalid#zClosurez"),e=Nt(e)),s.href=Tt(e),s.setAttribute("target",n),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),s.dispatchEvent(t),s={}):t.noreferrer?(s=i.open("",n,s),t=Tt(e).toString(),s&&(Te&&yt(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),s.opener=null,t=Lt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Vt(t)+'">'),s.document.write(Dt(t)),s.document.close())):(s=i.open(Tt(e).toString(),n,s))&&t.noopener&&(s.opener=null),s)try{s.focus()}catch(t){}return s}var oi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ai=/^[^@]+@[^@]+$/
function si(){var t=null
return new Gt(function(e){"complete"==u.document.readyState?e():(t=function(){e()},ze(window,"load",t))}).s(function(e){throw $e(window,"load",t),e})}function ui(t){return t=t||bi(),!("file:"!==ki()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ci(){var t=u.window
try{return!(!t||t==t.top)}catch(t){return!1}}function hi(){return void 0!==u.WorkerGlobalScope&&"function"==typeof u.importScripts}function li(){return r.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":r.a.INTERNAL.hasOwnProperty("node")?"Node":hi()?"Worker":"Browser"}function fi(){var t=li()
return"ReactNative"===t||"Node"===t}var di="Firefox",pi="Chrome"
function vi(t){var e=t.toLowerCase()
return yt(e,"opera/")||yt(e,"opr/")||yt(e,"opios/")?"Opera":yt(e,"iemobile")?"IEMobile":yt(e,"msie")||yt(e,"trident/")?"IE":yt(e,"edge/")?"Edge":yt(e,"firefox/")?di:yt(e,"silk/")?"Silk":yt(e,"blackberry")?"Blackberry":yt(e,"webos")?"Webos":!yt(e,"safari/")||yt(e,"chrome/")||yt(e,"crios/")||yt(e,"android")?!yt(e,"chrome/")&&!yt(e,"crios/")||yt(e,"edge/")?yt(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":pi:"Safari"}var mi={Vc:"FirebaseCore-web",Xc:"FirebaseUI-web"}
function gi(t,e){e=e||[]
var n,i=[],r={}
for(n in mi)r[mi[n]]=!0
for(n=0;n<e.length;n++)void 0!==r[e[n]]&&(delete r[e[n]],i.push(e[n]))
return i.sort(),(e=i).length||(e=["FirebaseCore-web"]),"Browser"===(i=li())?i=vi(r=bi()):"Worker"===i&&(i=vi(r=bi())+"-"+i),i+"/JsCore/"+t+"/"+e.join(",")}function bi(){return u.navigator&&u.navigator.userAgent||""}function yi(t,e){t=t.split("."),e=e||u
for(var n=0;n<t.length&&"object"==o(e)&&null!=e;n++)e=e[t[n]]
return n!=t.length&&(e=void 0),e}function wi(){try{var t=u.localStorage,e=_i()
if(t)return t.setItem(e,"1"),t.removeItem(e),!Qn()||!!u.indexedDB}catch(t){return hi()&&!!u.indexedDB}return!1}function Ii(){return(Ti()||"chrome-extension:"===ki()||ui())&&!fi()&&wi()&&!hi()}function Ti(){return"http:"===ki()||"https:"===ki()}function ki(){return u.location&&u.location.protocol||null}function Ei(t){return!ni(t=t||bi())&&vi(t)!=di}function Si(t){return void 0===t?null:Jn(t)}function Ai(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e])
return n}function Ni(t){if(null!==t)return JSON.parse(t)}function _i(t){return t||Math.floor(1e9*Math.random()).toString()}function Oi(t){return"Safari"!=vi(t=t||bi())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Pi(){var t=u.___jsl
if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Ri(t,e){if(t>e)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=e,t=bi(),e=li(),this.b=ni(t)||"ReactNative"===e}function Di(){var t=u.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Ci(t){try{var e=new Date(parseInt(t,10))
if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function Li(){return!(!yi("fireauth.oauthhelper",u)&&!yi("fireauth.iframe",u))}Ri.prototype.get=function(){var t=u.navigator
return!t||"boolean"!=typeof t.onLine||!Ti()&&"chrome-extension:"!==ki()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var xi,Mi={}
function ji(t){Mi[t]||(Mi[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var Ui={}
Object.defineProperty(Ui,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Ui,"abcd",{configurable:!0,enumerable:!0,value:2}),xi=2==Ui.abcd}catch(be){xi=!1}function Vi(t,e,n){xi?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function Fi(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&Vi(t,n,e[n])}function Ki(t){var e={}
return Fi(e,t),e}function qi(t){var e=t
if("object"==o(t)&&null!=t)for(var n in e="length"in t?[]:{},t)Vi(e,n,qi(t[n]))
return e}function Hi(t){var e={},n=t[Gi],i=t[Wi]
if(!(t=t[Xi])||t!=Bi&&!n)throw Error("Invalid provider user info!")
e[Yi]=i||null,e[Ji]=n||null,Vi(this,$i,t),Vi(this,zi,qi(e))}var Bi="EMAIL_SIGNIN",Gi="email",Wi="newEmail",Xi="requestType",Ji="email",Yi="fromEmail",zi="data",$i="operation"
function Zi(t,e){this.code=tr+t,this.message=e||er[t]||""}function Qi(t){var e=t&&t.code
return e?new Zi(e.substring(tr.length),t.message):null}N(Zi,Error),Zi.prototype.A=function(){return{code:this.code,message:this.message}},Zi.prototype.toJSON=function(){return this.A()}
var tr="auth/",er={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."}
function nr(t){var e=En(t=Sn(t),ir)||null,n=En(t,rr)||null,i=En(t,sr)||null
if(i=i&&cr[i]||null,!e||!n||!i)throw new Zi("argument-error",ir+", "+rr+"and "+sr+" are required in a valid action code URL.")
Fi(this,{apiKey:e,operation:i,code:n,continueUrl:En(t,or)||null,languageCode:En(t,ar)||null,tenantId:En(t,ur)||null})}var ir="apiKey",rr="oobCode",or="continueUrl",ar="languageCode",sr="mode",ur="tenantId",cr={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",signIn:Bi,verifyEmail:"VERIFY_EMAIL"}
function hr(t){try{return new nr(t)}catch(t){return null}}function lr(t){var e=t[mr]
if(void 0===e)throw new Zi("missing-continue-uri")
if("string"!=typeof e||"string"==typeof e&&!e.length)throw new Zi("invalid-continue-uri")
this.h=e,this.b=this.a=null,this.g=!1
var n=t[fr]
if(n&&"object"===o(n)){e=n[yr]
var i=n[gr]
if(n=n[br],"string"==typeof e&&e.length){if(this.a=e,void 0!==i&&"boolean"!=typeof i)throw new Zi("argument-error",gr+" property must be a boolean when specified.")
if(this.g=!!i,void 0!==n&&("string"!=typeof n||"string"==typeof n&&!n.length))throw new Zi("argument-error",br+" property must be a non empty string when specified.")
this.b=n||null}else{if(void 0!==e)throw new Zi("argument-error",yr+" property must be a non empty string when specified.")
if(void 0!==i||void 0!==n)throw new Zi("missing-android-pkg-name")}}else if(void 0!==n)throw new Zi("argument-error",fr+" property must be a non null object when specified.")
if(this.f=null,(e=t[vr])&&"object"===o(e)){if("string"==typeof(e=e[wr])&&e.length)this.f=e
else if(void 0!==e)throw new Zi("argument-error",wr+" property must be a non empty string when specified.")}else if(void 0!==e)throw new Zi("argument-error",vr+" property must be a non null object when specified.")
if(void 0!==(e=t[pr])&&"boolean"!=typeof e)throw new Zi("argument-error",pr+" property must be a boolean when specified.")
if(this.c=!!e,void 0!==(t=t[dr])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new Zi("argument-error",dr+" property must be a non empty string when specified.")
this.i=t||null}var fr="android",dr="dynamicLinkDomain",pr="handleCodeInApp",vr="iOS",mr="url",gr="installApp",br="minimumVersion",yr="packageName",wr="bundleId"
function Ir(t){var e={}
for(var n in e.continueUrl=t.h,e.canHandleCodeInApp=t.c,(e.androidPackageName=t.a)&&(e.androidMinimumVersion=t.b,e.androidInstallApp=t.g),e.iOSBundleId=t.f,e.dynamicLinkDomain=t.i,e)null===e[n]&&delete e[n]
return e}var Tr=null,kr=null
function Er(t){this.f=t.sub,A(),this.a=t.provider_id||t.firebase&&t.firebase.sign_in_provider||null,this.c=t.firebase&&t.firebase.tenant||null,this.b=!!t.is_anonymous||"anonymous"==this.a}function Sr(t){return(t=Ar(t))&&t.sub&&t.iss&&t.aud&&t.exp?new Er(t):null}function Ar(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+="."
try{return JSON.parse(function(t){var e=""
return function(t,e){function n(e){for(;i<t.length;){var n=t.charAt(i++),r=kr[n]
if(null!=r)return r
if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}!function(){if(!Tr){Tr={},kr={}
for(var t=0;65>t;t++)Tr[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),kr[Tr[t]]=t,62<=t&&(kr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}()
for(var i=0;;){var r=n(-1),o=n(0),a=n(64),s=n(64)
if(64===s&&-1===r)break
e(r<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}(t,function(t){e+=String.fromCharCode(t)}),e}(t))}catch(t){}return null}Er.prototype.R=function(){return this.c},Er.prototype.g=function(){return this.b}
var Nr,_r={ad:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://securetoken.googleapis.com/v1/token",id:"p"},cd:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},dd:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",ib:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}}
function Or(t){for(var e in _r)if(_r[e].id===t)return{firebaseEndpoint:(t=_r[e]).bb,secureTokenEndpoint:t.ib}
return null}Nr=Or("__EID__")?"__EID__":void 0
var Pr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Rr=["client_id","response_type","scope","redirect_uri","state"],Dr={Wc:{Oa:"locale",Da:500,Ca:600,Pa:"facebook.com",hb:Rr},Yc:{Oa:null,Da:500,Ca:620,Pa:"github.com",hb:Rr},Zc:{Oa:"hl",Da:515,Ca:680,Pa:"google.com",hb:Rr},ed:{Oa:"lang",Da:485,Ca:705,Pa:"twitter.com",hb:Pr}}
function Cr(t){for(var e in Dr)if(Dr[e].Pa==t)return Dr[e]
return null}function Lr(t){var e={}
e["facebook.com"]=Vr,e["google.com"]=Kr,e["github.com"]=Fr,e["twitter.com"]=qr
var n=t&&t[Mr]
try{if(n)return e[n]?new e[n](t):new Ur(t)
if(void 0!==t[xr])return new jr(t)}catch(t){}return null}var xr="idToken",Mr="providerId"
function jr(t){var e=t[Mr]
if(!e&&t[xr]){var n=Sr(t[xr])
n&&n.a&&(e=n.a)}if(!e)throw Error("Invalid additional user info!")
"anonymous"!=e&&"custom"!=e||(e=null),n=!1,void 0!==t.isNewUser?n=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(n=!0),Vi(this,"providerId",e),Vi(this,"isNewUser",n)}function Ur(t){jr.call(this,t),Vi(this,"profile",qi((t=Ni(t.rawUserInfo||"{}"))||{}))}function Vr(t){if(Ur.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Fr(t){if(Ur.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
Vi(this,"username",this.profile&&this.profile.login||null)}function Kr(t){if(Ur.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function qr(t){if(Ur.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
Vi(this,"username",t.screenName||null)}function Hr(t){var e=Sn(t),n=En(e,"link"),i=En(Sn(n),"link")
return e=En(e,"deep_link_id"),En(Sn(e),"link")||e||i||n||t}function Br(){}function Gr(t,e){return t.then(function(t){if(t[Da]){var n=Sr(t[Da])
if(!n||e!=n.f)throw new Zi("user-mismatch")
return t}throw new Zi("user-mismatch")}).s(function(t){throw t&&t.code&&t.code==tr+"user-not-found"?new Zi("user-mismatch"):t})}function Wr(t,e){if(!e)throw new Zi("internal-error","failed to construct a credential")
this.a=e,Vi(this,"providerId",t),Vi(this,"signInMethod",t)}function Xr(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function Jr(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new Wr(t.providerId,t.pendingToken)}catch(t){}return null}function Yr(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&Vi(this,"idToken",e.idToken),e.accessToken&&Vi(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&Vi(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken)
else{if(!e.oauthToken||!e.oauthTokenSecret)throw new Zi("internal-error","failed to construct a credential")
Vi(this,"accessToken",e.oauthToken),Vi(this,"secret",e.oauthTokenSecret)}Vi(this,"providerId",t),Vi(this,"signInMethod",n)}function zr(t){var e={}
return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:jn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function $r(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new Yr(t.providerId,e,t.signInMethod)}catch(t){}}return null}function Zr(t,e){this.Fc=e||[],Fi(this,{providerId:t,isOAuthProvider:!0}),this.zb={},this.cb=(Cr(t)||{}).Oa||null,this.ab=null}function Qr(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new Zi("argument-error",'SAML provider IDs must be prefixed with "saml."')
Zr.call(this,t,[])}function to(t){Zr.call(this,t,Rr),this.a=[]}function eo(){to.call(this,"facebook.com")}function no(t){if(!t)throw new Zi("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return y(t)&&(e=t.accessToken),(new eo).credential({accessToken:e})}function io(){to.call(this,"github.com")}function ro(t){if(!t)throw new Zi("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var e=t
return y(t)&&(e=t.accessToken),(new io).credential({accessToken:e})}function oo(){to.call(this,"google.com"),this.wa("profile")}function ao(t,e){var n=t
return y(t)&&(n=t.idToken,e=t.accessToken),(new oo).credential({idToken:n,accessToken:e})}function so(){Zr.call(this,"twitter.com",Pr)}function uo(t,e){var n=t
if(y(n)||(n={oauthToken:t,oauthTokenSecret:e}),!n.oauthToken||!n.oauthTokenSecret)throw new Zi("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new Yr("twitter.com",n,"twitter.com")}function co(t,e,n){this.a=t,this.c=e,Vi(this,"providerId","password"),Vi(this,"signInMethod",n===lo.EMAIL_LINK_SIGN_IN_METHOD?lo.EMAIL_LINK_SIGN_IN_METHOD:lo.EMAIL_PASSWORD_SIGN_IN_METHOD)}function ho(t){return t&&t.email&&t.password?new co(t.email,t.password,t.signInMethod):null}function lo(){Fi(this,{providerId:"password",isOAuthProvider:!1})}function fo(t,e){if(!(e=po(e)))throw new Zi("argument-error","Invalid email link!")
return new co(t,e.code,lo.EMAIL_LINK_SIGN_IN_METHOD)}function po(t){return(t=hr(t=Hr(t)))&&t.operation===Bi?t:null}function vo(t){if(!(t.Ua&&t.Ta||t.Fa&&t.ba))throw new Zi("internal-error")
this.a=t,Vi(this,"providerId","phone"),Vi(this,"signInMethod","phone")}function mo(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var e={}
return F(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(n){t[n]&&(e[n]=t[n])}),new vo(e)}return null}function go(t){return t.a.Fa&&t.a.ba?{temporaryProof:t.a.Fa,phoneNumber:t.a.ba}:{sessionInfo:t.a.Ua,code:t.a.Ta}}function bo(t){try{this.a=t||r.a.auth()}catch(t){throw new Zi("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Fi(this,{providerId:"phone",isOAuthProvider:!1})}function yo(t,e){if(!t)throw new Zi("missing-verification-id")
if(!e)throw new Zi("missing-verification-code")
return new vo({Ua:t,Ta:e})}function wo(t){if(t.temporaryProof&&t.phoneNumber)return new vo({Fa:t.temporaryProof,ba:t.phoneNumber})
var e=t&&t.providerId
if(!e||"password"===e)return null
var n=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(e){case"google.com":return ao(o,n)
case"facebook.com":return no(n)
case"github.com":return ro(n)
case"twitter.com":return uo(n,i)
default:return n||i||o||a?a?0==e.indexOf("saml.")?new Wr(e,a):new Yr(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new to(e).credential({idToken:o,accessToken:n,rawNonce:r}):null}}catch(t){return null}}function Io(t){if(!t.isOAuthProvider)throw new Zi("invalid-oauth-provider")}function To(t,e,n,i,r,o,a){if(this.c=t,this.b=e||null,this.g=n||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new Zi("invalid-auth-event")
if(this.g&&this.a)throw new Zi("invalid-auth-event")
if(this.g&&!this.f)throw new Zi("invalid-auth-event")}function ko(t){return(t=t||{}).type?new To(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&Qi(t.error),t.postBody,t.tenantId):null}function Eo(){this.b=null,this.a=[]}N(Ur,jr),N(Vr,Ur),N(Fr,Ur),N(Kr,Ur),N(qr,Ur),Wr.prototype.na=function(t){return za(t,Xr(this))},Wr.prototype.b=function(t,e){var n=Xr(this)
return n.idToken=e,$a(t,n)},Wr.prototype.f=function(t,e){return Gr(Za(t,Xr(this)),e)},Wr.prototype.A=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},Yr.prototype.na=function(t){return za(t,zr(this))},Yr.prototype.b=function(t,e){var n=zr(this)
return n.idToken=e,$a(t,n)},Yr.prototype.f=function(t,e){return Gr(Za(t,zr(this)),e)},Yr.prototype.A=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},Zr.prototype.Ea=function(t){return this.zb=z(t),this},N(Qr,Zr),N(to,Zr),to.prototype.wa=function(t){return H(this.a,t)||this.a.push(t),this},to.prototype.Hb=function(){return X(this.a)},to.prototype.credential=function(t,e){var n
if(!(n=y(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null}).idToken&&!n.accessToken)throw new Zi("argument-error","credential failed: must provide the ID token and/or the access token.")
return new Yr(this.providerId,n,this.providerId)},N(eo,to),Vi(eo,"PROVIDER_ID","facebook.com"),Vi(eo,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),N(io,to),Vi(io,"PROVIDER_ID","github.com"),Vi(io,"GITHUB_SIGN_IN_METHOD","github.com"),N(oo,to),Vi(oo,"PROVIDER_ID","google.com"),Vi(oo,"GOOGLE_SIGN_IN_METHOD","google.com"),N(so,Zr),Vi(so,"PROVIDER_ID","twitter.com"),Vi(so,"TWITTER_SIGN_IN_METHOD","twitter.com"),co.prototype.na=function(t){return this.signInMethod==lo.EMAIL_LINK_SIGN_IN_METHOD?Ns(t,as,{email:this.a,oobCode:this.c}):Ns(t,ks,{email:this.a,password:this.c})},co.prototype.b=function(t,e){return this.signInMethod==lo.EMAIL_LINK_SIGN_IN_METHOD?Ns(t,ss,{idToken:e,email:this.a,oobCode:this.c}):Ns(t,gs,{idToken:e,email:this.a,password:this.c})},co.prototype.f=function(t,e){return Gr(this.na(t),e)},co.prototype.A=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}},Fi(lo,{PROVIDER_ID:"password"}),Fi(lo,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Fi(lo,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),vo.prototype.na=function(t){return t.Va(go(this))},vo.prototype.b=function(t,e){var n=go(this)
return n.idToken=e,Ns(t,Ss,n)},vo.prototype.f=function(t,e){var n=go(this)
return n.operation="REAUTH",Gr(t=Ns(t,As,n),e)},vo.prototype.A=function(){var t={providerId:"phone"}
return this.a.Ua&&(t.verificationId=this.a.Ua),this.a.Ta&&(t.verificationCode=this.a.Ta),this.a.Fa&&(t.temporaryProof=this.a.Fa),this.a.ba&&(t.phoneNumber=this.a.ba),t},bo.prototype.Va=function(t,e){var n=this.a.b
return Zt(e.verify()).then(function(i){if(!c(i))throw new Zi("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(e.type){case"recaptcha":return function(t,e){return Ns(n,vs,e)}(0,{phoneNumber:t,recaptchaToken:i}).then(function(t){return"function"==typeof e.reset&&e.reset(),t},function(t){throw"function"==typeof e.reset&&e.reset(),t})
default:throw new Zi("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}})},Fi(bo,{PROVIDER_ID:"phone"}),Fi(bo,{PHONE_SIGN_IN_METHOD:"phone"}),To.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},To.prototype.R=function(){return this.h},To.prototype.A=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.A()}}
var So,Ao=null
function No(t){var e="unauthorized-domain",n=void 0,i=Sn(t)
t=i.b,"chrome-extension"==(i=i.f)?n=Ut("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?n=Ut("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",Zi.call(this,e,n)}function _o(t,e,n){Zi.call(this,t,n),(t=e||{}).Ab&&Vi(this,"email",t.Ab),t.ba&&Vi(this,"phoneNumber",t.ba),t.credential&&Vi(this,"credential",t.credential),t.Qb&&Vi(this,"tenantId",t.Qb)}function Oo(t){if(t.code){var e=t.code||""
0==e.indexOf(tr)&&(e=e.substring(tr.length))
var n={credential:wo(t),Qb:t.tenantId}
if(t.email)n.Ab=t.email
else if(t.phoneNumber)n.ba=t.phoneNumber
else if(!n.credential)return new Zi(e,t.message||void 0)
return new _o(e,n,t.message)}return null}function Po(){}function Ro(t){return t.c||(t.c=t.b())}function Do(){}function Co(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var i=e[n]
try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function Lo(){}function xo(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=E(this.fc,this),this.a.onerror=E(this.Ib,this),this.a.onprogress=E(this.gc,this),this.a.ontimeout=E(this.kc,this)}function Mo(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function jo(t,e,n){this.reset(t,e,n,void 0,void 0)}function Uo(t){this.f=t,this.b=this.c=this.a=null}function Vo(t,e){this.name=t,this.value=e}N(No,Zi),N(_o,Zi),_o.prototype.A=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId)
var e=this.credential&&this.credential.A()
return e&&Z(t,e),t},_o.prototype.toJSON=function(){return this.A()},Po.prototype.c=null,N(Do,Po),Do.prototype.a=function(){var t=Co(this)
return t?new ActiveXObject(t):new XMLHttpRequest},Do.prototype.b=function(){var t={}
return Co(this)&&(t[0]=!0,t[1]=!0),t},So=new Do,N(Lo,Po),Lo.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new xo
throw Error("Unsupported browser")},Lo.prototype.b=function(){return{}},(t=xo.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.")
this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.fc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Mo(this,4)},t.Ib=function(){this.status=500,this.response=this.responseText="",Mo(this,4)},t.kc=function(){this.Ib()},t.gc=function(){this.status=200,Mo(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},jo.prototype.a=null,jo.prototype.reset=function(t,e,n,i,r){i||A(),delete this.a},Vo.prototype.toString=function(){return this.name}
var Fo=new Vo("SEVERE",1e3),Ko=new Vo("WARNING",900),qo=new Vo("CONFIG",700),Ho=new Vo("FINE",500)
Uo.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c?e.c:e.a?t(e.a):(R("Root logger has no level set."),null)}(this).value)for(b(e)&&(e=e()),t=new jo(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a}
var Bo={},Go=null
function Wo(t){var e
if(Go||(Go=new Uo(""),Bo[""]=Go,Go.c=qo),!(e=Bo[t])){e=new Uo(t)
var n=t.lastIndexOf("."),i=t.substr(n+1);(n=Wo(t.substr(0,n))).b||(n.b={}),n.b[i]=e,e.a=n,Bo[t]=e}return e}function Xo(t,e){t&&t.log(Ho,e,void 0)}function Jo(t){this.f=t}function Yo(t){sn.call(this),this.o=t,this.readyState=zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.m="GET",this.g="",this.a=!1,this.h=Wo("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}N(Jo,Po),Jo.prototype.a=function(){return new Yo(this.f)},Jo.prototype.b=function(t){return function(){return t}}({}),N(Yo,sn)
var zo=0
function $o(t){t.c.read().then(t.ec.bind(t)).catch(t.Ma.bind(t))}function Zo(t,e){e&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,Qo(t)}function Qo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ta(t){sn.call(this),this.headers=new vn,this.B=t||null,this.c=!1,this.w=this.a=null,this.h=this.O=this.l="",this.f=this.J=this.i=this.I=!1,this.g=0,this.o=null,this.m=ea,this.v=this.P=!1}(t=Yo.prototype).open=function(t,e){if(this.readyState!=zo)throw this.abort(),Error("Error reopening a connection")
this.m=t,this.g=e,this.readyState=1,Qo(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var e={headers:this.i,method:this.m,credentials:void 0,cache:void 0}
t&&(e.body=t),this.o.fetch(new Request(this.g,e)).then(this.jc.bind(this),this.Ma.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Zo(this,!1)),this.readyState=zo},t.jc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,Qo(this)),this.a&&(this.readyState=3,Qo(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.hc.bind(this),this.Ma.bind(this)):void 0!==u.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,$o(this)):t.text().then(this.ic.bind(this),this.Ma.bind(this)))))},t.ec=function(t){if(this.a){var e=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
e&&(this.response=this.responseText+=e),t.done?Zo(this,!0):Qo(this),3==this.readyState&&$o(this)}},t.ic=function(t){this.a&&(this.response=this.responseText=t,Zo(this,!0))},t.hc=function(t){this.a&&(this.response=t,Zo(this,!0))},t.Ma=function(t){var e=this.h
e&&e.log(Ko,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&Zo(this,!0)},t.setRequestHeader=function(t,e){this.i.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(Ko,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(Ko,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next()
return t.join("\r\n")},N(ta,sn)
var ea=""
ta.prototype.b=Wo("goog.net.XhrIo")
var na=/^https?$/i,ia=["POST","PUT"]
function ra(t){return"content-type"==t.toLowerCase()}function oa(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,aa(t),ua(t)}function aa(t){t.I||(t.I=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function sa(t){if(t.c&&void 0!==s)if(t.w[1]&&4==ha(t)&&2==la(t))Xo(t.b,fa(t,"Local request error detected and ignored"))
else if(t.i&&4==ha(t))ln(t.Lb,0,t)
else if(t.dispatchEvent("readystatechange"),4==ha(t)){Xo(t.b,fa(t,"Request complete")),t.c=!1
try{var e,n=la(t)
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0
break t
default:i=!1}if(!(e=i)){var r
if(r=0===n){var o=String(t.l).match(bn)[1]||null
if(!o&&u.self&&u.self.location){var a=u.self.location.protocol
o=a.substr(0,a.length-1)}r=!na.test(o?o.toLowerCase():"")}e=r}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var c=2<ha(t)?t.a.statusText:""}catch(e){Xo(t.b,"Can not get status: "+e.message),c=""}t.h=c+" ["+la(t)+"]",aa(t)}}finally{ua(t)}}}function ua(t,e){if(t.a){ca(t)
var n=t.a,i=t.w[0]?d:null
t.a=null,t.w=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=i}catch(e){(t=t.b)&&t.log(Fo,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function ca(t){t.a&&t.v&&(t.a.ontimeout=null),t.o&&(u.clearTimeout(t.o),t.o=null)}function ha(t){return t.a?t.a.readyState:0}function la(t){try{return 2<ha(t)?t.a.status:-1}catch(t){return-1}}function fa(t,e){return e+" ["+t.O+" "+t.l+" "+la(t)+"]"}function da(t){var e=Ea
this.g=[],this.v=e,this.o=t||null,this.f=this.a=!1,this.c=void 0,this.u=this.w=this.i=!1,this.h=0,this.b=null,this.l=0}function pa(t,e,n){t.a=!0,t.c=n,t.f=!e,ba(t)}function va(t){if(t.a){if(!t.u)throw new ya(t)
t.u=!1}}function ma(t,e,n,i){t.g.push([e,n,i]),t.a&&ba(t)}function ga(t){return q(t.g,function(t){return b(t[1])})}function ba(t){if(t.h&&t.a&&ga(t)){var e=t.h,n=Ta[e]
n&&(u.clearTimeout(n.a),delete Ta[e]),t.h=0}t.b&&(t.b.l--,delete t.b),e=t.c
for(var i=n=!1;t.g.length&&!t.i;){var r=t.g.shift(),o=r[0],a=r[1]
if(r=r[2],o=t.f?a:o)try{var s=o.call(r||t.o,e)
void 0!==s&&(t.f=t.f&&(s==e||s instanceof Error),t.c=e=s),(_(e)||"function"==typeof u.Promise&&e instanceof u.Promise)&&(i=!0,t.i=!0)}catch(i){e=i,t.f=!0,ga(t)||(n=!0)}}t.c=e,i&&(s=E(t.m,t,!0),i=E(t.m,t,!1),e instanceof da?(ma(e,s,i),e.w=!0):e.then(s,i)),n&&(e=new Ia(e),Ta[e.a]=e,t.h=e.a)}function ya(){O.call(this)}function wa(){O.call(this)}function Ia(t){this.a=u.setTimeout(E(this.c,this),0),this.b=t}(t=ta.prototype).Ga=function(){void 0!==s&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Xo(this.b,fa(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(Xo(this.b,fa(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ua(this))},t.xa=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ua(this,!0)),ta.qb.xa.call(this)},t.Lb=function(){this.ta||(this.J||this.i||this.f?sa(this):this.yc())},t.yc=function(){sa(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.m){case ea:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(Fo,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return Xo(this.b,"Can not get response: "+t.message),null}},da.prototype.cancel=function(t){if(this.a)this.c instanceof da&&this.c.cancel()
else{if(this.b){var e=this.b
delete this.b,t?e.cancel(t):(e.l--,0>=e.l&&e.cancel())}this.v?this.v.call(this.o,this):this.u=!0,this.a||(t=new wa(this),va(this),pa(this,!1,t))}},da.prototype.m=function(t,e){this.i=!1,pa(this,t,e)},da.prototype.then=function(t,e,n){var i,r,o=new Gt(function(t,e){i=t,r=e})
return ma(this,i,function(t){t instanceof wa?o.cancel():r(t)}),o.then(t,e,n)},da.prototype.$goog_Thenable=!0,N(ya,O),ya.prototype.message="Deferred has already fired",ya.prototype.name="AlreadyCalledError",N(wa,O),wa.prototype.message="Deferred was canceled",wa.prototype.name="CanceledError",Ia.prototype.c=function(){throw delete Ta[this.a],this.b}
var Ta={}
function ka(t){var e={},n=e.document||document,i=ot(t).toString(),r=document.createElement("SCRIPT"),o={Nb:r,Ga:void 0},a=new da(o),s=null,c=null!=e.timeout?e.timeout:5e3
return 0<c&&(s=window.setTimeout(function(){Sa(r,!0)
var t=new _a(Na,"Timeout reached for loading script "+i)
va(a),pa(a,!1,t)},c),o.Ga=s),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Sa(r,e.gd||!1,s),va(a),pa(a,!0,null))},r.onerror=function(){Sa(r,!0,s)
var t=new _a(Aa,"Error while loading script "+i)
va(a),pa(a,!1,t)},Z(o=e.attributes||{},{type:"text/javascript",charset:"UTF-8"}),Gn(r,o),function(t,e){U(t,"HTMLScriptElement"),t.src=ot(e),null===f&&(f=(e=(e=u.document).querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&l.test(e)?e:""),(e=f)&&t.setAttribute("nonce",e)}(r,t),function(t){var e
return(e=(t||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:t.documentElement}(n).appendChild(r),a}function Ea(){if(this&&this.Nb){var t=this.Nb
t&&"SCRIPT"==t.tagName&&Sa(t,!0,this.Ga)}}function Sa(t,e,n){null!=n&&u.clearTimeout(n),t.onload=d,t.onerror=d,t.onreadystatechange=d,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var Aa=0,Na=1
function _a(t,e){var n="Jsloader error (code #"+t+")"
e&&(n+=": "+e),O.call(this,n),this.code=t}function Oa(t){this.f=t}function Pa(t,e,n){if(this.c=t,t=e||{},this.l=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.u=t.secureTokenTimeout||Ca,this.g=z(t.secureTokenHeaders||La),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.firebaseTimeout||xa,this.a=z(t.firebaseHeaders||Ma),n&&(this.a["X-Client-Version"]=n,this.g["X-Client-Version"]=n),n="Node"==li(),!(n=u.XMLHttpRequest||n&&r.a.INTERNAL.node&&r.a.INTERNAL.node.XMLHttpRequest)&&!hi())throw new Zi("internal-error","The XMLHttpRequest compatibility library was not found.")
this.f=void 0,hi()?this.f=new Jo(self):fi()?this.f=new Oa(n):this.f=new Lo,this.b=null}N(_a,O),N(Oa,Po),Oa.prototype.a=function(){return new this.f},Oa.prototype.b=function(){return{}}
var Ra,Da="idToken",Ca=new Ri(3e4,6e4),La={"Content-Type":"application/x-www-form-urlencoded"},xa=new Ri(3e4,6e4),Ma={"Content-Type":"application/json"}
function ja(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Ua(t,e){e?(t.a["X-Client-Version"]=e,t.g["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function Va(t,e,n,i,r,o,a){(function(){var t=bi()
return!((t=vi(t)!=pi?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||we&&Oe&&!(9<Oe))})()||hi()?t=E(t.o,t):(Ra||(Ra=new Gt(function(t,e){!function(t,e){((window.gapi||{}).client||{}).request?t():(u[Ka]=function(){((window.gapi||{}).client||{}).request?t():e(Error("CORS_UNSUPPORTED"))},function(t,e){ma(ka(at(Fa,{onload:Ka})),null,e,void 0)}(0,function(){e(Error("CORS_UNSUPPORTED"))}))}(t,e)})),t=E(t.m,t)),t(e,n,i,r,o,a)}Pa.prototype.R=function(){return this.b},Pa.prototype.o=function(t,e,n,i,r,o){if(hi()&&(void 0===u.fetch||void 0===u.Headers||void 0===u.Request))throw new Zi("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new ta(this.f)
if(o){a.g=Math.max(0,o)
var s=setTimeout(function(){a.dispatchEvent("timeout")},o)}un(a,"complete",function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(e){return Xo(t.b,"Can not get responseText: "+e.message),""}}(this))||null}catch(e){t=null}e&&e(t)}),cn(a,"ready",function(){s&&clearTimeout(s),ve(this)}),cn(a,"timeout",function(){s&&clearTimeout(s),ve(this),e&&e(null)}),function(t,e,n,i,r){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+e)
n=n?n.toUpperCase():"GET",t.l=e,t.h="",t.O=n,t.I=!1,t.c=!0,t.a=t.B?t.B.a():So.a(),t.w=t.B?Ro(t.B):Ro(So),t.a.onreadystatechange=E(t.Lb,t)
try{Xo(t.b,fa(t,"Opening Xhr")),t.J=!0,t.a.open(n,String(e),!0),t.J=!1}catch(e){return Xo(t.b,fa(t,"Error opening Xhr: "+e.message)),void oa(t,e)}e=i||""
var o=new vn(t.headers)
r&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(g(t)||c(t))F(t,e,void 0)
else for(var n=pn(t),i=dn(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(r,function(t,e){o.set(e,t)}),r=function(t){t:{for(var e=ra,n=t.length,i=c(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r
break t}e=-1}return 0>e?null:c(t)?t.charAt(e):t[e]}(o.X()),i=u.FormData&&e instanceof u.FormData,!H(ia,n)||r||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},t),t.m&&(t.a.responseType=t.m),"withCredentials"in t.a&&t.a.withCredentials!==t.P&&(t.a.withCredentials=t.P)
try{ca(t),0<t.g&&(t.v=function(t){return we&&Re(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),Xo(t.b,fa(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.v)),t.v?(t.a.timeout=t.g,t.a.ontimeout=E(t.Ga,t)):t.o=ln(t.Ga,t.g,t)),Xo(t.b,fa(t,"Sending request")),t.i=!0,t.a.send(e),t.i=!1}catch(e){Xo(t.b,fa(t,"Send error: "+e.message)),oa(t,e)}}(a,t,n,i,r)}
var Fa=new Q(nt,"https://apis.google.com/js/client.js?onload=%{onload}"),Ka="__fcb"+Math.floor(1e6*Math.random()).toString()
function qa(t){if(!c(t=t.email)||!ai.test(t))throw new Zi("invalid-email")}function Ha(t){"email"in t&&qa(t)}function Ba(t){if(!t[Da])throw new Zi("internal-error")}function Ga(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new Zi("internal-error")}else{if(!t.sessionInfo)throw new Zi("missing-verification-id")
if(!t.code)throw new Zi("missing-verification-code")}}Pa.prototype.m=function(t,e,n,i,r){var o=this
Ra.then(function(){window.gapi.client.setApiKey(o.c)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:n,body:i,headers:r,authType:"none",callback:function(t){window.gapi.auth.setToken(a),e&&e(t)}})}).s(function(t){e&&e({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},Pa.prototype.ob=function(){return Ns(this,bs,{})},Pa.prototype.rb=function(t,e){return Ns(this,ms,{idToken:t,email:e})},Pa.prototype.sb=function(t,e){return Ns(this,gs,{idToken:t,password:e})}
var Wa={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function Xa(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new Zi("internal-error")}function Ja(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&Vn(t=new xn(t.postBody),"nonce")&&(e.nonce=t.get("nonce"))),e}function Ya(t){var e=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=Oo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=Oo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=Oo(t)):t.errorMessage&&(e=_s(t.errorMessage)),e)throw e
if(!t[Da])throw new Zi("internal-error")}function za(t,e){return e.returnIdpCredential=!0,Ns(t,ys,e)}function $a(t,e){return e.returnIdpCredential=!0,Ns(t,Is,e)}function Za(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,Ns(t,ws,e)}function Qa(t){if(!t.oobCode)throw new Zi("invalid-action-code")}(t=Pa.prototype).tb=function(t,e){var n={idToken:t},i=[]
return J(Wa,function(t,r){var o=e[r]
null===o?i.push(t):r in e&&(n[r]=o)}),i.length&&(n.deleteAttribute=i),Ns(this,ms,n)},t.kb=function(t,e){return Z(t={requestType:"PASSWORD_RESET",email:t},e),Ns(this,ls,t)},t.lb=function(t,e){return Z(t={requestType:"EMAIL_SIGNIN",email:t},e),Ns(this,cs,t)},t.jb=function(t,e){return Z(t={requestType:"VERIFY_EMAIL",idToken:t},e),Ns(this,hs,t)},t.Va=function(t){return Ns(this,Es,t)},t.$a=function(t,e){return Ns(this,ps,{oobCode:t,newPassword:e})},t.Ka=function(t){return Ns(this,es,{oobCode:t})},t.Xa=function(t){return Ns(this,ts,{oobCode:t})}
var ts={endpoint:"setAccountInfo",D:Qa,fa:"email",F:!0},es={endpoint:"resetPassword",D:Qa,K:function(t){var e=t.requestType
if(!e||!t.email&&"EMAIL_SIGNIN"!=e)throw new Zi("internal-error")},F:!0},ns={endpoint:"signupNewUser",D:function(t){if(qa(t),!t.password)throw new Zi("weak-password")},K:Ba,T:!0,F:!0},is={endpoint:"createAuthUri",F:!0},rs={endpoint:"deleteAccount",V:["idToken"]},os={endpoint:"setAccountInfo",V:["idToken","deleteProvider"],D:function(t){if(!m(t.deleteProvider))throw new Zi("internal-error")}},as={endpoint:"emailLinkSignin",V:["email","oobCode"],D:qa,K:Ba,T:!0,F:!0},ss={endpoint:"emailLinkSignin",V:["idToken","email","oobCode"],D:qa,K:Ba,T:!0},us={endpoint:"getAccountInfo"},cs={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new Zi("internal-error")
qa(t)},fa:"email",F:!0},hs={endpoint:"getOobConfirmationCode",V:["idToken","requestType"],D:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new Zi("internal-error")},fa:"email",F:!0},ls={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(t){if("PASSWORD_RESET"!=t.requestType)throw new Zi("internal-error")
qa(t)},fa:"email",F:!0},fs={wb:!0,endpoint:"getProjectConfig",Kb:"GET"},ds={wb:!0,endpoint:"getRecaptchaParam",Kb:"GET",K:function(t){if(!t.recaptchaSiteKey)throw new Zi("internal-error")}},ps={endpoint:"resetPassword",D:Qa,fa:"email",F:!0},vs={endpoint:"sendVerificationCode",V:["phoneNumber","recaptchaToken"],fa:"sessionInfo",F:!0},ms={endpoint:"setAccountInfo",V:["idToken"],D:Ha,T:!0},gs={endpoint:"setAccountInfo",V:["idToken"],D:function(t){if(Ha(t),!t.password)throw new Zi("weak-password")},K:Ba,T:!0},bs={endpoint:"signupNewUser",K:Ba,T:!0,F:!0},ys={endpoint:"verifyAssertion",D:Xa,Qa:Ja,K:Ya,T:!0,F:!0},ws={endpoint:"verifyAssertion",D:Xa,Qa:Ja,K:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new Zi("user-not-found")
if(t.errorMessage)throw _s(t.errorMessage)
if(!t[Da])throw new Zi("internal-error")},T:!0,F:!0},Is={endpoint:"verifyAssertion",D:function(t){if(Xa(t),!t.idToken)throw new Zi("internal-error")},Qa:Ja,K:Ya,T:!0},Ts={endpoint:"verifyCustomToken",D:function(t){if(!t.token)throw new Zi("invalid-custom-token")},K:Ba,T:!0,F:!0},ks={endpoint:"verifyPassword",D:function(t){if(qa(t),!t.password)throw new Zi("wrong-password")},K:Ba,T:!0,F:!0},Es={endpoint:"verifyPhoneNumber",D:Ga,K:Ba,F:!0},Ss={endpoint:"verifyPhoneNumber",D:function(t){if(!t.idToken)throw new Zi("internal-error")
Ga(t)},K:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",Oo(t)
Ba(t)}},As={Yb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Ga,K:Ba,F:!0}
function Ns(t,e,n){if(!function(t,e){if(!e||!e.length)return!0
if(!t)return!1
for(var n=0;n<e.length;n++){var i=t[e[n]]
if(null==i||""===i)return!1}return!0}(n,e.V))return Qt(new Zi("internal-error"))
var i,r=e.Kb||"POST"
return Zt(n).then(e.D).then(function(){return e.T&&(n.returnSecureToken=!0),e.F&&t.b&&void 0===n.tenantId&&(n.tenantId=t.b),function(t,e,n,i,r,o){var a=Sn(t.h+e)
kn(a,"key",t.c),o&&kn(a,"cb",A().toString())
var s="GET"==n
if(s)for(var u in i)i.hasOwnProperty(u)&&kn(a,u,i[u])
return new Gt(function(e,o){Va(t,a.toString(),function(t){t?t.error?o(Os(t,r||{})):e(t):o(new Zi("network-request-failed"))},n,s?void 0:Jn(Ai(i)),t.a,t.i.get())})}(t,e.endpoint,r,n,e.Yb,e.wb||!1)}).then(function(t){return i=t,e.Qa?e.Qa(n,i):i}).then(e.K).then(function(){if(!e.fa)return i
if(!(e.fa in i))throw new Zi("internal-error")
return i[e.fa]})}function _s(t){return Os({error:{errors:[{message:t}],code:400,message:t}})}function Os(t,e){var n=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",i={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(n=i[n]?new Zi(i[n]):null)return n
for(var r in n=t.error&&t.error.message||"",Z(i={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation"},e||{}),e=(e=n.match(/^[^\s]+\s*:\s*(.*)$/))&&1<e.length?e[1]:void 0,i)if(0===n.indexOf(r))return new Zi(i[r],e)
return!e&&t&&(e=Si(t)),new Zi("internal-error",e)}function Ps(t){this.b=t,this.a=null,this.fb=function(t){return(Ls||(Ls=new Gt(function(t,e){function n(){Pi(),yi("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Pi(),e(Error("Network Error"))},timeout:Ds.get()})}if(yi("gapi.iframes.Iframe"))t()
else if(yi("gapi.load"))n()
else{var i="__iframefcb"+Math.floor(1e6*Math.random()).toString()
u[i]=function(){yi("gapi.load")?n():e(Error("Network Error"))},Zt(ka(i=at(Rs,{onload:i}))).s(function(){e(Error("Network Error"))})}}).s(function(t){throw Ls=null,t}))).then(function(){return new Gt(function(e,n){yi("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(i){function r(){clearTimeout(o),e()}t.a=i,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout(function(){n(Error("Network Error"))},Cs.get())
i.ping(r).then(r,function(){n(Error("Network Error"))})})})})}(this)}var Rs=new Q(nt,"https://apis.google.com/js/api.js?onload=%{onload}"),Ds=new Ri(3e4,6e4),Cs=new Ri(5e3,15e3),Ls=null
function xs(t,e,n){this.i=t,this.g=e,this.h=n,this.f=null,this.a=An(this.i,"/__/auth/iframe"),kn(this.a,"apiKey",this.g),kn(this.a,"appName",this.h),this.b=null,this.c=[]}function Ms(t,e,n,i,r){this.o=t,this.m=e,this.c=n,this.u=i,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function js(t){try{return r.a.app(t).auth().Aa()}catch(t){return[]}}function Us(t,e,n,i,r){this.u=t,this.f=e,this.b=n,this.c=i||null,this.h=r||null,this.m=this.o=this.v=null,this.g=[],this.l=this.a=null}function Vs(t){var e=ti()
return function(t){return Ns(t,fs,{}).then(function(t){return t.authorizedDomains||[]})}(t).then(function(t){t:{var n=Sn(e),i=n.f
n=n.b
for(var r=0;r<t.length;r++){var o=t[r],a=n,s=i
if(0==o.indexOf("chrome-extension://")?a=Sn(o).b==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:oi.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new No(ti())})}function Fs(t){return t.l?t.l:(t.l=si().then(function(){if(!t.o){var e=t.c,n=t.h,i=js(t.b),r=new xs(t.u,t.f,t.b)
r.f=e,r.b=n,r.c=X(i||[]),t.o=r.toString()}t.i=new Ps(t.o),function(t){if(!t.i)throw Error("IfcHandler must be initialized!")
!function(t,e){t.fb.then(function(){t.a.register("authEvent",e,yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(t.i,function(e){var n={}
if(e&&e.authEvent){var i=!1
for(e=ko(e.authEvent),n=0;n<t.g.length;n++)i=t.g[n](e)||i
return(n={}).status=i?"ACK":"ERROR",Zt(n)}return n.status="ERROR",Zt(n)})}(t)}),t.l)}function Ks(t){return t.m||(t.v=t.c?gi(t.c,js(t.b)):null,t.m=new Pa(t.f,Or(t.h),t.v)),t.m}function qs(t,e,n,i,r,o,a,s,u,c,h){return(t=new Ms(t,e,n,i,r)).l=o,t.g=a,t.i=s,t.b=z(u||null),t.f=c,t.nb(h).toString()}function Hs(t){if(this.a=t||r.a.INTERNAL.reactNative&&r.a.INTERNAL.reactNative.AsyncStorage,!this.a)throw new Zi("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function Bs(t){this.b=t,this.a={},this.f=E(this.c,this)}xs.prototype.toString=function(){return this.f?kn(this.a,"v",this.f):Un(this.a.a,"v"),this.b?kn(this.a,"eid",this.b):Un(this.a.a,"eid"),this.c.length?kn(this.a,"fw",this.c.join(",")):Un(this.a.a,"fw"),this.a.toString()},Ms.prototype.nb=function(t){return this.h=t,this},Ms.prototype.toString=function(){var t=An(this.o,"/__/auth/handler")
if(kn(t,"apiKey",this.m),kn(t,"appName",this.c),kn(t,"authType",this.u),this.a.isOAuthProvider){var e=this.a
try{var n=r.a.app(this.c).auth().ha()}catch(t){n=null}for(var i in e.ab=n,kn(t,"providerId",this.a.providerId),n=Ai((e=this.a).zb))n[i]=n[i].toString()
i=e.Fc,n=z(n)
for(var o=0;o<i.length;o++){var a=i[o]
a in n&&delete n[a]}e.cb&&e.ab&&!n[e.cb]&&(n[e.cb]=e.ab),Y(n)||kn(t,"customParameters",Si(n))}if("function"==typeof this.a.Hb&&(e=this.a.Hb()).length&&kn(t,"scopes",e.join(",")),this.l?kn(t,"redirectUrl",this.l):Un(t.a,"redirectUrl"),this.g?kn(t,"eventId",this.g):Un(t.a,"eventId"),this.i?kn(t,"v",this.i):Un(t.a,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!En(t,s)&&kn(t,s,this.b[s])
return this.h?kn(t,"tid",this.h):Un(t.a,"tid"),this.f?kn(t,"eid",this.f):Un(t.a,"eid"),(s=js(this.c)).length&&kn(t,"fw",s.join(",")),t.toString()},(t=Us.prototype).Fb=function(t,e,n){var i=new Zi("popup-closed-by-user"),r=new Zi("web-storage-unsupported"),o=this,a=!1
return this.ia().then(function(){(function(t){var e={type:"webStorageSupport"}
return Fs(t).then(function(){return function(t,e){return t.fb.then(function(){return new Gt(function(n){t.a.send(e.type,e,n,yi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}(t.i,e)}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()})})(o).then(function(n){n||(t&&ii(t),e(r),a=!0)})}).s(function(){}).then(function(){if(!a)return function(t){return new Gt(function(e){return function n(){fn(2e3).then(function(){if(t&&!t.closed)return n()
e()})}()})}(t)}).then(function(){if(!a)return fn(n).then(function(){e(i)})})},t.Ob=function(){var t=bi()
return!Ei(t)&&!Oi(t)},t.Jb=function(){return!1},t.Db=function(t,e,n,i,r,o,a,s){if(!t)return Qt(new Zi("popup-blocked"))
if(a&&!Ei())return this.ia().s(function(e){ii(t),r(e)}),i(),Zt()
this.a||(this.a=Vs(Ks(this)))
var u=this
return this.a.then(function(){var e=u.ia().s(function(e){throw ii(t),r(e),e})
return i(),e}).then(function(){Io(n),a||ei(qs(u.u,u.f,u.b,e,n,null,o,u.c,void 0,u.h,s),t)}).s(function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t})},t.Eb=function(t,e,n,i){this.a||(this.a=Vs(Ks(this)))
var r=this
return this.a.then(function(){Io(e),ei(qs(r.u,r.f,r.b,t,e,ti(),n,r.c,void 0,r.h,i))}).s(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.ia=function(){var t=this
return Fs(this).then(function(){return t.i.fb}).s(function(){throw t.a=null,new Zi("network-request-failed")})},t.Rb=function(){return!0},t.ya=function(t){this.g.push(t)},t.La=function(t){G(this.g,function(e){return e==t})},(t=Hs.prototype).get=function(t){return Zt(this.a.getItem(t)).then(function(t){return t&&Ni(t)})},t.set=function(t,e){return Zt(this.a.setItem(t,Si(e)))},t.S=function(t){return Zt(this.a.removeItem(t))},t.$=function(){},t.ea=function(){}
var Gs,Ws=[]
function Xs(t,e,n){Y(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[e]&&(t.a[e]=[]),t.a[e].push(n)}function Js(t){this.a=t}function Ys(t){this.c=t,this.b=!1,this.a=[]}function zs(t,e,n,i){var r,o,a,s,u=n||{},c=null
if(t.b)return Qt(Error("connection_unavailable"))
var h=i?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new Gt(function(n,i){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){i(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){i(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?n(t.data.response):i(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),i(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:e,eventId:r,data:u},[l.port2])):i(Error("connection_unavailable"))}).then(function(e){return $s(t,c),e}).s(function(e){throw $s(t,c),e})}function $s(t,e){if(e){var n=e.messageChannel,i=e.onMessage
n&&(n.port1.removeEventListener("message",i),n.port1.close()),G(t.a,function(t){return t==e})}}function Zs(){if(!tu())throw new Zi("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.u=u.indexedDB,this.type="indexedDB",this.g=this.l=this.f=this.i=null,this.o=!1,this.h=null
var t=this
hi()&&self?(this.l=function(){var t=hi()?self:null
if(F(Ws,function(n){n.b==t&&(e=n)}),!e){var e=new Bs(t)
Ws.push(e)}return e}(),Xs(this.l,"keyChanged",function(e,n){return ou(t).then(function(e){return 0<e.length&&F(t.a,function(t){t(e)}),{keyProcessed:H(e,n.key)}})}),Xs(this.l,"ping",function(){return Zt(["keyChanged"])})):function(){var t=u.navigator
return t&&t.serviceWorker?Zt().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).s(function(){return null}):Zt(null)}().then(function(e){(t.h=e)&&(t.g=new Ys(new Js(e)),zs(t.g,"ping",null,!0).then(function(e){e[0].fulfilled&&H(e[0].value,"keyChanged")&&(t.o=!0)}).s(function(){}))})}function Qs(t){return t.m||(t.m=function t(e){return new Gt(function(n,i){var r=e.u.open("firebaseLocalStorageDb",1)
r.onerror=function(t){try{t.preventDefault()}catch(t){}i(Error(t.target.error))},r.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){i(t)}},r.onsuccess=function(r){(r=r.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(r):function(t){return new Gt(function(e,n){var i=t.u.deleteDatabase("firebaseLocalStorageDb")
i.onsuccess=function(){e()},i.onerror=function(t){n(Error(t.target.error))}})}(e).then(function(){return t(e)}).then(function(t){n(t)}).s(function(t){i(t)})}})}(t)),t.m}function tu(){try{return!!u.indexedDB}catch(t){return!1}}function eu(t){return t.objectStore("firebaseLocalStorage")}function nu(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function iu(t){return new Gt(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function ru(t,e){return t.g&&t.h&&function(){var t=u.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?zs(t.g,"keyChanged",{key:e},t.o).then(function(){}).s(function(){}):Zt()}function ou(t){return Qs(t).then(function(t){var e=eu(nu(t,!1))
return e.getAll?iu(e.getAll()):new Gt(function(t,n){var i=[],r=e.openCursor()
r.onsuccess=function(e){(e=e.target.result)?(i.push(e.value),e.continue()):t(i)},r.onerror=function(t){n(t.target.error)}})}).then(function(e){var n={},i=[]
if(0==t.b){for(i=0;i<e.length;i++)n[e[i].fbase_key]=e[i].value
i=function t(e,n){var i,r=[]
for(i in e)i in n?o(e[i])!=o(n[i])?r.push(i):"object"==o(e[i])&&null!=e[i]&&null!=n[i]?0<t(e[i],n[i]).length&&r.push(i):e[i]!==n[i]&&r.push(i):r.push(i)
for(i in n)i in e||r.push(i)
return r}(t.c,n),t.c=n}return i})}function au(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function su(t){var e=this,n=null
this.a=[],this.type="indexedDB",this.c=t,this.b=Zt().then(function(){if(tu()){var t=_i(),i="__sak"+t
return Gs||(Gs=new Zs),(n=Gs).set(i,t).then(function(){return n.get(i)}).then(function(e){if(e!==t)throw Error("indexedDB not supported!")
return n.S(i)}).then(function(){return n}).s(function(){return e.c})}return e.c}).then(function(t){return e.type=t.type,t.$(function(t){F(e.a,function(e){e(t)})}),t})}function uu(){this.a={},this.type="inMemory"}function cu(){if(!function(){var t="Node"==li()
if(!(t=hu()||t&&r.a.INTERNAL.node&&r.a.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==li())throw new Zi("internal-error","The LocalStorage compatibility library was not found.")
throw new Zi("web-storage-unsupported")}this.a=hu()||r.a.INTERNAL.node.localStorage,this.type="localStorage"}function hu(){try{var t=u.localStorage,e=_i()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function lu(){this.type="nullStorage"}function fu(){if(!function(){var t="Node"==li()
if(!(t=du()||t&&r.a.INTERNAL.node&&r.a.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==li())throw new Zi("internal-error","The SessionStorage compatibility library was not found.")
throw new Zi("web-storage-unsupported")}this.a=du()||r.a.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function du(){try{var t=u.sessionStorage,e=_i()
return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function pu(){var t={}
t.Browser=gu,t.Node=bu,t.ReactNative=yu,t.Worker=wu,this.a=t[li()]}Bs.prototype.c=function(t){var e=t.data.eventType,n=t.data.eventId,i=this.a[e]
if(i&&0<i.length){t.ports[0].postMessage({status:"ack",eventId:n,eventType:e,response:null})
var r=[]
F(i,function(e){r.push(Zt().then(function(){return e(t.origin,t.data.data)}))}),ee(r).then(function(i){var r=[]
F(i,function(t){r.push({fulfilled:t.Gb,value:t.value,reason:t.reason?t.reason.message:void 0})}),F(r,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),t.ports[0].postMessage({status:"done",eventId:n,eventType:e,response:r})})}},Js.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},Ys.prototype.close=function(){for(;0<this.a.length;)$s(this,this.a[0])
this.b=!0},(t=Zs.prototype).set=function(t,e){var n,i=!1,r=this
return Qs(this).then(function(e){return iu((e=eu(nu(n=e,!0))).get(t))}).then(function(o){var a=eu(nu(n,!0))
return o?(o.value=e,iu(a.put(o))):(r.b++,i=!0,(o={}).fbase_key=t,o.value=e,iu(a.add(o)))}).then(function(){return r.c[t]=e,ru(r,t)}).ka(function(){i&&r.b--})},t.get=function(t){return Qs(this).then(function(e){return iu(eu(nu(e,!1)).get(t))}).then(function(t){return t&&t.value})},t.S=function(t){var e=!1,n=this
return Qs(this).then(function(i){return e=!0,n.b++,iu(eu(nu(i,!0)).delete(t))}).then(function(){return delete n.c[t],ru(n,t)}).ka(function(){e&&n.b--})},t.$=function(t){0==this.a.length&&function(t){au(t),function e(){t.f=setTimeout(function(){t.i=ou(t).then(function(e){0<e.length&&F(t.a,function(t){t(e)})}).then(function(){e()}).s(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()}(this),this.a.push(t)},t.ea=function(t){G(this.a,function(e){return e==t}),0==this.a.length&&au(this)},(t=su.prototype).get=function(t){return this.b.then(function(e){return e.get(t)})},t.set=function(t,e){return this.b.then(function(n){return n.set(t,e)})},t.S=function(t){return this.b.then(function(e){return e.S(t)})},t.$=function(t){this.a.push(t)},t.ea=function(t){G(this.a,function(e){return e==t})},(t=uu.prototype).get=function(t){return Zt(this.a[t])},t.set=function(t,e){return this.a[t]=e,Zt()},t.S=function(t){return delete this.a[t],Zt()},t.$=function(){},t.ea=function(){},(t=cu.prototype).get=function(t){var e=this
return Zt().then(function(){return Ni(e.a.getItem(t))})},t.set=function(t,e){var n=this
return Zt().then(function(){var i=Si(e)
null===i?n.S(t):n.a.setItem(t,i)})},t.S=function(t){var e=this
return Zt().then(function(){e.a.removeItem(t)})},t.$=function(t){u.window&&Je(u.window,"storage",t)},t.ea=function(t){u.window&&$e(u.window,"storage",t)},(t=lu.prototype).get=function(){return Zt(null)},t.set=function(){return Zt()},t.S=function(){return Zt()},t.$=function(){},t.ea=function(){},(t=fu.prototype).get=function(t){var e=this
return Zt().then(function(){return Ni(e.a.getItem(t))})},t.set=function(t,e){var n=this
return Zt().then(function(){var i=Si(e)
null===i?n.S(t):n.a.setItem(t,i)})},t.S=function(t){var e=this
return Zt().then(function(){e.a.removeItem(t)})},t.$=function(){},t.ea=function(){}
var vu,mu,gu={C:cu,Sa:fu},bu={C:cu,Sa:fu},yu={C:Hs,Sa:lu},wu={C:cu,Sa:lu},Iu={$c:"local",NONE:"none",bd:"session"}
function Tu(){var t=!(Oi(bi())||!ci()),e=Ei(),n=wi()
this.m=t,this.h=e,this.l=n,this.a={},vu||(vu=new pu),t=vu
try{this.g=!Qn()&&Li()||!u.indexedDB?new t.a.C:new su(hi()?new uu:new t.a.C)}catch(t){this.g=new uu,this.h=!0}try{this.i=new t.a.Sa}catch(t){this.i=new uu}this.u=new uu,this.f=E(this.Pb,this),this.b={}}function ku(){return mu||(mu=new Tu),mu}function Eu(t,e){switch(e){case"session":return t.i
case"none":return t.u
default:return t.g}}function Su(t,e){return"firebase:"+t.name+(e?":"+e:"")}function Au(t,e,n){return n=Su(e,n),"local"==e.C&&(t.b[n]=null),Eu(t,e.C).S(n)}function Nu(t){t.c&&(clearInterval(t.c),t.c=null)}function _u(t){this.a=t,this.b=ku()}(t=Tu.prototype).get=function(t,e){return Eu(this,t.C).get(Su(t,e))},t.set=function(t,e,n){var i=Su(t,n),r=this,o=Eu(this,t.C)
return o.set(i,e).then(function(){return o.get(i)}).then(function(e){"local"==t.C&&(r.b[i]=e)})},t.addListener=function(t,e,n){t=Su(t,e),this.l&&(this.b[t]=u.localStorage.getItem(t)),Y(this.a)&&(Eu(this,"local").$(this.f),this.h||(Qn()||!Li())&&u.indexedDB||!this.l||function(t){Nu(t),t.c=setInterval(function(){for(var e in t.a){var n=u.localStorage.getItem(e),i=t.b[e]
n!=i&&(t.b[e]=n,n=new je({type:"storage",key:e,target:window,oldValue:i,newValue:n,a:!0}),t.Pb(n))}},1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=Su(t,e),this.a[t]&&(G(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),Y(this.a)&&(Eu(this,"local").ea(this.f),Nu(this))},t.Pb=function(t){if(t&&t.f){var e=t.a.key
if(null==e)for(var n in this.a){var i=this.b[n]
void 0===i&&(i=null)
var r=u.localStorage.getItem(n)
r!==i&&(this.b[n]=r,this.Za(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?Eu(this,"local").ea(this.f):Nu(this),this.m)if(n=u.localStorage.getItem(e),(i=t.a.newValue)!==n)null!==i?u.localStorage.setItem(e,i):u.localStorage.removeItem(e)
else if(this.b[e]===i&&void 0===t.a.a)return
var o=this
n=function(){void 0===t.a.a&&o.b[e]===u.localStorage.getItem(e)||(o.b[e]=u.localStorage.getItem(e),o.Za(e))},we&&Oe&&10==Oe&&u.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else F(t,E(this.Za,this))},t.Za=function(t){this.a[t]&&F(this.a[t],function(t){t()})}
var Ou,Pu={name:"authEvent",C:"local"}
function Ru(){this.a=ku()}function Du(t,e){this.b=Cu,this.f=u.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.l=u.Int32Array?new Int32Array(64):Array(64),void 0!==Ou||(Ou=u.Int32Array?new Int32Array(Fu):Fu),this.reset()}N(Du,function(){this.b=-1})
for(var Cu=64,Lu=Cu-1,xu=[],Mu=0;Mu<Lu;Mu++)xu[Mu]=0
var ju=W(128,xu)
function Uu(t){for(var e=t.f,n=t.l,i=0,r=0;r<e.length;)n[i++]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r=4*i
for(e=16;64>e;e++){r=0|n[e-15],i=0|n[e-2]
var o=(0|n[e-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|n[e-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0
n[e]=o+a|0}i=0|t.a[0],r=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],e=0;64>e;e++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|Ou[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function Vu(t,e,n){void 0===n&&(n=e.length)
var i=0,r=t.c
if(c(e))for(;i<n;)t.f[r++]=e.charCodeAt(i++),r==t.b&&(Uu(t),r=0)
else{if(!g(e))throw Error("message must be string or array")
for(;i<n;){var o=e[i++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[r++]=o,r==t.b&&(Uu(t),r=0)}}t.c=r,t.g+=n}Du.prototype.reset=function(){this.g=this.c=0,this.a=u.Int32Array?new Int32Array(this.h):X(this.h)}
var Fu=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function Ku(){Du.call(this,8,qu)}N(Ku,Du)
var qu=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function Hu(t,e,n,i,r){this.u=t,this.i=e,this.l=n,this.m=i||null,this.o=r||null,this.h=e+":"+n,this.v=new Ru,this.g=new _u(this.h),this.f=null,this.b=[],this.a=this.c=null}function Bu(t){return new Zi("invalid-cordova-configuration",t)}function Gu(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function Wu(t){return t.f||(t.f=t.ia().then(function(){return new Gt(function(e){t.ya(function n(i){return e(i),t.La(n),!1}),function(t){function e(e){i=!0,r&&r.cancel(),Xu(t).then(function(i){var r=n
if(i&&e&&e.url){var a=null;-1!=(r=Hr(e.url)).indexOf("/__/auth/callback")&&(a=(a="object"===o(a=Ni(En(a=Sn(r),"firebaseError")||null))?Qi(a):null)?new To(i.c,i.b,null,null,a,null,i.R()):new To(i.c,i.b,r,i.f,null,null,i.R())),r=a||n}Gu(t,r)})}var n=new To("unknown",null,null,null,new Zi("no-auth-event")),i=!1,r=fn(500).then(function(){return Xu(t).then(function(){i||Gu(t,n)})}),a=u.handleOpenURL
u.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(yi("BuildInfo.packageName",u).toLowerCase()+"://")&&e({url:t}),"function"==typeof a)try{a(t)}catch(t){console.error(t)}},Ao||(Ao=new Eo),function(t){var e=Ao
e.a.push(t),e.b||(e.b=function(t){for(var n=0;n<e.a.length;n++)e.a[n](t)},"function"==typeof(t=yi("universalLinks.subscribe",u))&&t(null,e.b))}(e)}(t)})})),t.f}function Xu(t){var e=null
return function(t){return t.b.get(Pu,t.a).then(function(t){return ko(t)})}(t.g).then(function(n){return e=n,Au((n=t.g).b,Pu,n.a)}).then(function(){return e})}function Ju(t){this.a=t,this.b=ku()}(t=Hu.prototype).ia=function(){return this.Ba?this.Ba:this.Ba=(ui(void 0)?si().then(function(){return new Gt(function(t,e){var n=u.document,i=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3)
n.addEventListener("deviceready",function(){clearTimeout(i),t()},!1)})}):Qt(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof yi("universalLinks.subscribe",u))throw Bu("cordova-universal-links-plugin-fix is not installed")
if(void 0===yi("BuildInfo.packageName",u))throw Bu("cordova-plugin-buildinfo is not installed")
if("function"!=typeof yi("cordova.plugins.browsertab.openUrl",u))throw Bu("cordova-plugin-browsertab is not installed")
if("function"!=typeof yi("cordova.InAppBrowser.open",u))throw Bu("cordova-plugin-inappbrowser is not installed")},function(){throw new Zi("cordova-not-ready")})},t.Fb=function(t,e){return e(new Zi("operation-not-supported-in-this-environment")),Zt()},t.Db=function(){return Qt(new Zi("operation-not-supported-in-this-environment"))},t.Rb=function(){return!1},t.Ob=function(){return!0},t.Jb=function(){return!0},t.Eb=function(t,e,n,i){if(this.c)return Qt(new Zi("redirect-operation-pending"))
var r=this,o=u.document,a=null,s=null,c=null,h=null
return this.c=Zt().then(function(){return Io(e),Wu(r)}).then(function(){return function(t,e,n,i,r){var o=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}(),a=new To(e,i,null,o,new Zi("no-auth-event"),null,r),s=yi("BuildInfo.packageName",u)
if("string"!=typeof s)throw new Zi("invalid-cordova-configuration")
var c=yi("BuildInfo.displayName",u),h={}
if(bi().toLowerCase().match(/iphone|ipad|ipod/))h.ibi=s
else{if(!bi().toLowerCase().match(/android/))return Qt(new Zi("operation-not-supported-in-this-environment"))
h.apn=s}c&&(h.appDisplayName=c),o=function(t){var e=new Ku
Vu(e,t),t=[]
var n=8*e.g
56>e.c?Vu(e,ju,56-e.c):Vu(e,ju,e.b-(e.c-56))
for(var i=63;56<=i;i--)e.f[i]=255&n,n/=256
for(Uu(e),i=n=0;i<e.i;i++)for(var r=24;0<=r;r-=8)t[n++]=e.a[i]>>r&255
return function(t){return K(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}(t)}(o),h.sessionId=o
var l=qs(t.u,t.i,t.l,e,n,null,i,t.m,h,t.o,r)
return t.ia().then(function(){var e=t.h
return t.v.a.set(Pu,a.A(),e)}).then(function(){var e=yi("cordova.plugins.browsertab.isAvailable",u)
if("function"!=typeof e)throw new Zi("invalid-cordova-configuration")
var n=null
e(function(e){if(e){if("function"!=typeof(n=yi("cordova.plugins.browsertab.openUrl",u)))throw new Zi("invalid-cordova-configuration")
n(l)}else{if("function"!=typeof(n=yi("cordova.InAppBrowser.open",u)))throw new Zi("invalid-cordova-configuration")
e=bi(),t.a=n(l,e.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n,i)}).then(function(){return new Gt(function(t,e){s=function(){var e=yi("cordova.plugins.browsertab.close",u)
return t(),"function"==typeof e&&e(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.ya(s),c=function(){a||(a=fn(2e3).then(function(){e(new Zi("redirect-cancelled-by-user"))}))},h=function(){Di()&&c()},o.addEventListener("resume",c,!1),bi().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",h,!1)}).s(function(t){return Xu(r).then(function(){throw t})})}).ka(function(){c&&o.removeEventListener("resume",c,!1),h&&o.removeEventListener("visibilitychange",h,!1),a&&a.cancel(),s&&r.La(s),r.c=null})},t.ya=function(t){this.b.push(t),Wu(this).s(function(e){"auth/invalid-cordova-configuration"===e.code&&(e=new To("unknown",null,null,null,new Zi("no-auth-event")),t(e))})},t.La=function(t){G(this.b,function(e){return e==t})}
var Yu={name:"pendingRedirect",C:"session"}
function zu(t){return Au(t.b,Yu,t.a)}function $u(t,e,n){this.i={},this.v=0,this.B=t,this.u=e,this.m=n,this.h=[],this.f=!1,this.l=E(this.o,this),this.b=new lc,this.w=new mc,this.g=new Ju(this.u+":"+this.m),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.w,this.c.linkViaPopup=this.w,this.c.reauthViaPopup=this.w,this.a=Zu(this.B,this.u,this.m,Nr)}function Zu(t,e,n,i){var o=r.a.SDK_VERSION||null
return ui()?new Hu(t,e,n,o,i):new Us(t,e,n,o,i)}function Qu(t){t.f||(t.f=!0,t.a.ya(t.l))
var e=t.a
return t.a.ia().s(function(n){throw t.a==e&&t.reset(),n})}function tc(t){t.a.Ob()&&Qu(t).s(function(e){var n=new To("unknown",null,null,null,new Zi("operation-not-supported-in-this-environment"))
ac(e)&&t.o(n)}),t.a.Jb()||fc(t.b)}function ec(t,e){H(t.h,e)||t.h.push(e),t.f||function(t){return t.b.get(Yu,t.a).then(function(t){return"pending"==t})}(t.g).then(function(e){e?zu(t.g).then(function(){Qu(t).s(function(e){var n=new To("unknown",null,null,null,new Zi("operation-not-supported-in-this-environment"))
ac(e)&&t.o(n)})}):tc(t)}).s(function(){tc(t)})}function nc(t,e){G(t.h,function(t){return t==e})}$u.prototype.reset=function(){this.f=!1,this.a.La(this.l),this.a=Zu(this.B,this.u,this.m),this.i={}},$u.prototype.o=function(t){if(!t)throw new Zi("invalid-auth-event")
if(6e5<=A()-this.v&&(this.i={},this.v=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var e=!1,n=0;n<this.h.length;n++){var i=this.h[n]
if(i.xb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.v=A())),e=!0
break}}return fc(this.b),e}
var ic=new Ri(2e3,1e4),rc=new Ri(3e4,6e4)
function oc(t,e,n,i,r,o,a){return t.a.Db(e,n,i,function(){t.f||(t.f=!0,t.a.ya(t.l))},function(){t.reset()},r,o,a)}function ac(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function sc(t,e,n,i,r){var o
return function(t){return t.b.set(Yu,"pending",t.a)}(t.g).then(function(){return t.a.Eb(e,n,i,r).s(function(e){if(ac(e))throw new Zi("operation-not-supported-in-this-environment")
return o=e,zu(t.g).then(function(){throw o})}).then(function(){return t.a.Rb()?new Gt(function(){}):zu(t.g).then(function(){return t.oa()}).then(function(){}).s(function(){})})})}function uc(t,e,n,i,r){return t.a.Fb(i,function(t){e.ja(n,null,t,r)},ic.get())}$u.prototype.oa=function(){return this.b.oa()}
var cc={}
function hc(t,e,n){var i=e+":"+n
return cc[i]||(cc[i]=new $u(t,e,n)),cc[i]}function lc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function fc(t){t.g||(t.g=!0,vc(t,!1,null,null))}function dc(t){t.g&&!t.i&&vc(t,!1,null,null)}function pc(t,e){if(t.b=function(){return Zt(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function vc(t,e,n,i){e?i?function(t,e){if(t.b=function(){return Qt(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,i):pc(t,n):pc(t,{user:null}),t.f=[],t.c=[]}function mc(){}function gc(){this.vb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.vb},set:function(t){this.vb=t},enumerable:!1})}function bc(t,e){this.a=e,Vi(this,"verificationId",t)}function yc(t,e,n,i){return new bo(t).Va(e,n).then(function(t){return new bc(t,i)})}function wc(t){var e=Ar(t)
if(!(e&&e.exp&&e.auth_time&&e.iat))throw new Zi("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Fi(this,{token:t,expirationTime:Ci(1e3*e.exp),authTime:Ci(1e3*e.auth_time),issuedAtTime:Ci(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,claims:e})}function Ic(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function Tc(t){this.f=t,this.b=this.a=null,this.c=0}function kc(t,e){var n=e[Da],i=e.refreshToken
e=Ec(e.expiresIn),t.b=n,t.c=e,t.a=i}function Ec(t){return A()+1e3*parseInt(t,10)}function Sc(t,e){this.a=t||null,this.b=e||null,Fi(this,{lastSignInTime:Ci(e||null),creationTime:Ci(t||null)})}function Ac(t,e,n,i,r,o){Fi(this,{uid:t,displayName:i||null,photoURL:r||null,email:n||null,phoneNumber:o||null,providerId:e})}function Nc(t,e){for(var n in Me.call(this,t),e)this[n]=e[n]}function _c(t,e,n){this.I=[],this.l=t.apiKey,this.m=t.appName,this.o=t.authDomain||null,t=r.a.SDK_VERSION?gi(r.a.SDK_VERSION):null,this.a=new Pa(this.l,Or(Nr),t),this.b=new Tc(this.a),xc(this,e[Da]),kc(this.b,e),Vi(this,"refreshToken",this.b.a),Uc(this,n||{}),sn.call(this),this.J=!1,this.o&&Ii()&&(this.i=hc(this.o,this.l,this.m)),this.O=[],this.h=null,this.w=function(t){return new Ic(function(){return t.G(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var e=t.b.c-A()-3e5
return 0<e?e:0})}(this),this.W=E(this.Ha,this)
var i=this
this.ga=null,this.va=function(t){i.sa(t.g)},this.Z=null,this.P=[],this.ua=function(t){Pc(i,t.c)},this.Y=null}function Oc(t,e){t.Z&&$e(t.Z,"languageCodeChanged",t.va),(t.Z=e)&&Je(e,"languageCodeChanged",t.va)}function Pc(t,e){t.P=e,Ua(t.a,r.a.SDK_VERSION?gi(r.a.SDK_VERSION,t.P):null)}function Rc(t,e){t.Y&&$e(t.Y,"frameworkChanged",t.ua),(t.Y=e)&&Je(e,"frameworkChanged",t.ua)}function Dc(t){try{return r.a.app(t.m).auth()}catch(e){throw new Zi("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.m+"'!")}}function Cc(t){t.B||t.w.b||(t.w.start(),$e(t,"tokenChanged",t.W),Je(t,"tokenChanged",t.W))}function Lc(t){$e(t,"tokenChanged",t.W),t.w.stop()}function xc(t,e){t.ma=e,Vi(t,"_lat",e)}function Mc(t){for(var e=[],n=0;n<t.O.length;n++)e.push(t.O[n](t))
return ee(e).then(function(){return t})}function jc(t){t.i&&!t.J&&(t.J=!0,ec(t.i,t))}function Uc(t,e){Fi(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,tenantId:e.tenantId||null,metadata:new Sc(e.createdAt,e.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Vc(){}function Fc(t){return Zt().then(function(){if(t.B)throw new Zi("app-deleted")})}function Kc(t){return K(t.providerData,function(t){return t.providerId})}function qc(t,e){e&&(Hc(t,e.providerId),t.providerData.push(e))}function Hc(t,e){G(t.providerData,function(t){return t.providerId==e})}function Bc(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&Vi(t,e,n)}function Gc(t,e){t!=e&&(Fi(t,{uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email,emailVerified:e.emailVerified,phoneNumber:e.phoneNumber,isAnonymous:e.isAnonymous,tenantId:e.tenantId,providerData:[]}),e.metadata?Vi(t,"metadata",function(t){return new Sc(t.a,t.b)}(e.metadata)):Vi(t,"metadata",new Sc),F(e.providerData,function(e){qc(t,e)}),function(t,e){t.b=e.b,t.a=e.a,t.c=e.c}(t.b,e.b),Vi(t,"refreshToken",t.b.a))}function Wc(t){return t.G().then(function(e){var n=t.isAnonymous
return function(t,e){return Ns(t.a,us,{idToken:e}).then(E(t.zc,t))}(t,e).then(function(){return n||Bc(t,"isAnonymous",!1),e})})}function Xc(t,e){e[Da]&&t.ma!=e[Da]&&(kc(t.b,e),t.dispatchEvent(new Nc("tokenChanged")),xc(t,e[Da]),Bc(t,"refreshToken",t.b.a))}function Jc(t,e){return Wc(t).then(function(){if(H(Kc(t),e))return Mc(t).then(function(){throw new Zi("provider-already-linked")})})}function Yc(t,e,n){return Ki({user:t,credential:wo(e),additionalUserInfo:e=Lr(e),operationType:n})}function zc(t,e){return Xc(t,e),t.reload().then(function(){return t})}function $c(t,e,n,i,o){if(!Ii())return Qt(new Zi("operation-not-supported-in-this-environment"))
if(t.h&&!o)return Qt(t.h)
var a=Cr(n.providerId),s=_i(t.uid+":::"),u=null;(!Ei()||ci())&&t.o&&n.isOAuthProvider&&(u=qs(t.o,t.l,t.m,e,n,null,s,r.a.SDK_VERSION||null,null,null,t.tenantId))
var c=ri(u,a&&a.Da,a&&a.Ca)
return i=i().then(function(){if(Qc(t),!o)return t.G().then(function(){})}).then(function(){return oc(t.i,c,e,n,s,!!u,t.tenantId)}).then(function(){return new Gt(function(n,i){t.ja(e,null,new Zi("cancelled-popup-request"),t.g||null),t.f=n,t.v=i,t.g=s,t.c=uc(t.i,t,e,c,s)})}).then(function(t){return c&&ii(c),t?Ki(t):null}).s(function(t){throw c&&ii(c),t}),th(t,i,o)}function Zc(t,e,n,i,r){if(!Ii())return Qt(new Zi("operation-not-supported-in-this-environment"))
if(t.h&&!r)return Qt(t.h)
var o=null,a=_i(t.uid+":::")
return i=i().then(function(){if(Qc(t),!r)return t.G().then(function(){})}).then(function(){return t.ca=a,Mc(t)}).then(function(e){return t.da&&(e=(e=t.da).b.set(ih,t.A(),e.a)),e}).then(function(){return sc(t.i,e,n,a,t.tenantId)}).s(function(e){if(o=e,t.da)return rh(t.da)
throw o}).then(function(){if(o)throw o}),th(t,i,r)}function Qc(t){if(!t.i||!t.J){if(t.i&&!t.J)throw new Zi("internal-error")
throw new Zi("auth-domain-config-required")}}function th(t,e,n){var i=function(t,e,n){return t.h&&!n?(e.cancel(),Qt(t.h)):e.s(function(e){throw!e||"auth/user-disabled"!=e.code&&"auth/user-token-expired"!=e.code||(t.h||t.dispatchEvent(new Nc("userInvalidated")),t.h=e),e})}(t,e,n)
return t.I.push(i),i.ka(function(){B(t.I,i)}),i}function eh(t){if(!t.apiKey)return null
var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName},n={}
if(!(t.stsTokenManager&&t.stsTokenManager.accessToken&&t.stsTokenManager.expirationTime))return null
n[Da]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null,n.expiresIn=(t.stsTokenManager.expirationTime-A())/1e3
var i=new _c(e,n,t)
return t.providerData&&F(t.providerData,function(t){t&&qc(i,Ki(t))}),t.redirectEventId&&(i.ca=t.redirectEventId),i}function nh(t){this.a=t,this.b=ku()}lc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},lc.prototype.h=function(t,e){if(t){this.reset(),this.g=!0
var n=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!r&&!o),"unknown"!=n||r||o?t.a?(vc(this,!0,null,t.a),Zt()):e.za(n,i)?function(t,e,n){n=n.za(e.c,e.b)
var i=e.g,r=e.f,o=e.i,a=e.R(),s=!!e.c.match(/Redirect$/)
n(i,r,a,o).then(function(e){vc(t,s,e,null)}).s(function(e){vc(t,s,null,e)})}(this,t,e):Qt(new Zi("invalid-auth-event")):(vc(this,!1,null,null),Zt())}else Qt(new Zi("invalid-auth-event"))},lc.prototype.oa=function(){var t=this
return new Gt(function(e,n){t.b?t.b().then(e,n):(t.f.push(e),t.c.push(n),function(t){var e=new Zi("timeout")
t.a&&t.a.cancel(),t.a=fn(rc.get()).then(function(){t.b||(t.g=!0,vc(t,!0,null,e))})}(t))})},mc.prototype.h=function(t,e){if(t){var n=t.c,i=t.b
t.a?(e.ja(t.c,null,t.a,t.b),Zt()):e.za(n,i)?function(t,e){var n=t.b,i=t.c
e.za(i,n)(t.g,t.f,t.R(),t.i).then(function(t){e.ja(i,t,null,n)}).s(function(t){e.ja(i,null,t,n)})}(t,e):Qt(new Zi("invalid-auth-event"))}else Qt(new Zi("invalid-auth-event"))},bc.prototype.confirm=function(t){return t=yo(this.verificationId,t),this.a(t)},Ic.prototype.start=function(){this.a=this.c,function t(e,n){e.stop(),e.b=fn(function(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}(e,n)).then(function(){return t=u.document,e=null,Di()||!t?Zt():new Gt(function(n){e=function(){Di()&&(t.removeEventListener("visibilitychange",e,!1),n())},t.addEventListener("visibilitychange",e,!1)}).s(function(n){throw t.removeEventListener("visibilitychange",e,!1),n})
var t,e}).then(function(){return e.h()}).then(function(){t(e,!0)}).s(function(n){e.i(n)&&t(e,!1)})}(this,!0)},Ic.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},Tc.prototype.A=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}},Tc.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?Qt(new Zi("user-token-expired")):t||!this.b||A()>this.c-3e4?this.a?function(t,e){return function(t,e){return new Gt(function(n,i){"refresh_token"==e.grant_type&&e.refresh_token||"authorization_code"==e.grant_type&&e.code?Va(t,t.l+"?key="+encodeURIComponent(t.c),function(t){t?t.error?i(Os(t)):t.access_token&&t.refresh_token?n(t):i(new Zi("internal-error")):i(new Zi("network-request-failed"))},"POST",jn(e).toString(),t.g,t.u.get()):i(new Zi("internal-error"))})}(t.f,e).then(function(e){return t.b=e.access_token,t.c=Ec(e.expires_in),t.a=e.refresh_token,{accessToken:t.b,expirationTime:t.c,refreshToken:t.a}}).s(function(e){throw"auth/user-token-expired"==e.code&&(t.a=null),e})}(this,{grant_type:"refresh_token",refresh_token:this.a}):Zt(null):Zt({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})},Sc.prototype.A=function(){return{lastLoginAt:this.b,createdAt:this.a}},N(Nc,Me),N(_c,sn),_c.prototype.sa=function(t){this.ga=t,ja(this.a,t)},_c.prototype.ha=function(){return this.ga},_c.prototype.Aa=function(){return X(this.P)},_c.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())},Vi(_c.prototype,"providerId","firebase"),(t=_c.prototype).reload=function(){var t=this
return th(this,Fc(this).then(function(){return Wc(t).then(function(){return Mc(t)}).then(Vc)}))},t.dc=function(t){return this.G(t).then(function(t){return new wc(t)})},t.G=function(t){var e=this
return th(this,Fc(this).then(function(){return e.b.getToken(t)}).then(function(t){if(!t)throw new Zi("internal-error")
return t.accessToken!=e.ma&&(xc(e,t.accessToken),e.dispatchEvent(new Nc("tokenChanged"))),Bc(e,"refreshToken",t.refreshToken),t.accessToken}))},t.zc=function(t){if(!(t=t.users)||!t.length)throw new Zi("internal-error")
Uc(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId})
for(var e=function(t){return(t=t.providerUserInfo)&&t.length?K(t,function(t){return new Ac(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[]}(t),n=0;n<e.length;n++)qc(this,e[n])
Bc(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length))},t.Ac=function(t){return ji("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.gb(t)},t.gb=function(t){var e=this,n=null
return th(this,t.f(this.a,this.uid).then(function(t){return Xc(e,t),n=Yc(e,t,"reauthenticate"),e.h=null,e.reload()}).then(function(){return n}),!0)},t.rc=function(t){return ji("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.eb(t)},t.eb=function(t){var e=this,n=null
return th(this,Jc(this,t.providerId).then(function(){return e.G()}).then(function(n){return t.b(e.a,n)}).then(function(t){return n=Yc(e,t,"link"),zc(e,t)}).then(function(){return n}))},t.sc=function(t,e){var n=this
return th(this,Jc(this,"phone").then(function(){return yc(Dc(n),t,e,E(n.eb,n))}))},t.Bc=function(t,e){var n=this
return th(this,Zt().then(function(){return yc(Dc(n),t,e,E(n.gb,n))}),!0)},t.rb=function(t){var e=this
return th(this,this.G().then(function(n){return e.a.rb(n,t)}).then(function(t){return Xc(e,t),e.reload()}))},t.Sc=function(t){var e=this
return th(this,this.G().then(function(n){return t.b(e.a,n)}).then(function(t){return Xc(e,t),e.reload()}))},t.sb=function(t){var e=this
return th(this,this.G().then(function(n){return e.a.sb(n,t)}).then(function(t){return Xc(e,t),e.reload()}))},t.tb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Fc(this)
var e=this
return th(this,this.G().then(function(n){return e.a.tb(n,{displayName:t.displayName,photoUrl:t.photoURL})}).then(function(t){return Xc(e,t),Bc(e,"displayName",t.displayName||null),Bc(e,"photoURL",t.photoUrl||null),F(e.providerData,function(t){"password"===t.providerId&&(Vi(t,"displayName",e.displayName),Vi(t,"photoURL",e.photoURL))}),Mc(e)}).then(Vc))},t.Qc=function(t){var e=this
return th(this,Wc(this).then(function(n){return H(Kc(e),t)?function(t,e,n){return Ns(t,os,{idToken:e,deleteProvider:n})}(e.a,n,[t]).then(function(t){var n={}
return F(t.providerUserInfo||[],function(t){n[t.providerId]=!0}),F(Kc(e),function(t){n[t]||Hc(e,t)}),n[bo.PROVIDER_ID]||Vi(e,"phoneNumber",null),Mc(e)}):Mc(e).then(function(){throw new Zi("no-such-provider")})}))},t.delete=function(){var t=this
return th(this,this.G().then(function(e){return Ns(t.a,rs,{idToken:e})}).then(function(){t.dispatchEvent(new Nc("userDeleted"))})).then(function(){for(var e=0;e<t.I.length;e++)t.I[e].cancel("app-deleted")
Oc(t,null),Rc(t,null),t.I=[],t.B=!0,Lc(t),Vi(t,"refreshToken",null),t.i&&nc(t.i,t)})},t.xb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.ca||null)==e||"reauthViaRedirect"==t&&(this.ca||null)==e)},t.ja=function(t,e,n,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.g||null)||(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)},t.za=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?E(this.Bb,this):"reauthViaPopup"==t&&e==(this.g||null)?E(this.Cb,this):"linkViaRedirect"==t&&(this.ca||null)==e?E(this.Bb,this):"reauthViaRedirect"==t&&(this.ca||null)==e?E(this.Cb,this):null},t.tc=function(t){var e=this
return $c(this,"linkViaPopup",t,function(){return Jc(e,t.providerId).then(function(){return Mc(e)})},!1)},t.Cc=function(t){return $c(this,"reauthViaPopup",t,function(){return Zt()},!0)},t.uc=function(t){var e=this
return Zc(this,"linkViaRedirect",t,function(){return Jc(e,t.providerId)},!1)},t.Dc=function(t){return Zc(this,"reauthViaRedirect",t,function(){return Zt()},!0)},t.Bb=function(t,e,n,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return th(this,this.G().then(function(n){return $a(r.a,{requestUri:t,postBody:i,sessionId:e,idToken:n})}).then(function(t){return o=Yc(r,t,"link"),zc(r,t)}).then(function(){return o}))},t.Cb=function(t,e,n,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return th(this,Zt().then(function(){return Gr(Za(r.a,{requestUri:t,sessionId:e,postBody:i,tenantId:n}),r.uid)}).then(function(t){return o=Yc(r,t,"reauthenticate"),Xc(r,t),r.h=null,r.reload()}).then(function(){return o}),!0)},t.jb=function(t){var e=this,n=null
return th(this,this.G().then(function(e){return n=e,void 0===t||Y(t)?{}:Ir(new lr(t))}).then(function(t){return e.a.jb(n,t)}).then(function(t){if(e.email!=t)return e.reload()}).then(function(){}))},t.toJSON=function(){return this.A()},t.A=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.A(),redirectEventId:this.ca||null}
return this.metadata&&Z(t,this.metadata.A()),F(this.providerData,function(e){t.providerData.push(function(t){var e,n={}
for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e])
return n}(e))}),t}
var ih={name:"redirectUser",C:"session"}
function rh(t){return Au(t.b,ih,t.a)}function oh(t){this.a=t,this.b=ku(),this.c=null,this.f=function(t){var e=uh("local"),n=uh("session"),i=uh("none")
return function(t,e,n){var i=Su(e,n),r=Eu(t,e.C)
return t.get(e,n).then(function(o){var a=null
try{a=Ni(u.localStorage.getItem(i))}catch(t){}if(a&&!o)return u.localStorage.removeItem(i),t.set(e,a,n)
a&&o&&"localStorage"!=r.type&&u.localStorage.removeItem(i)})}(t.b,e,t.a).then(function(){return t.b.get(n,t.a)}).then(function(r){return r?n:t.b.get(i,t.a).then(function(n){return n?i:t.b.get(e,t.a).then(function(n){return n?e:t.b.get(sh,t.a).then(function(t){return t?uh(t):e})})})}).then(function(e){return t.c=e,ah(t,e.C)}).s(function(){t.c||(t.c=e)})}(this),this.b.addListener(uh("local"),this.a,E(this.g,this))}function ah(t,e){var n,i=[]
for(n in Iu)Iu[n]!==e&&i.push(Au(t.b,uh(Iu[n]),t.a))
return i.push(Au(t.b,sh,t.a)),function(t){return new Gt(function(e,n){var i=t.length,r=[]
if(i)for(var o=function(t,n){i--,r[t]=n,0==i&&e(r)},a=function(t){n(t)},s=0;s<t.length;s++)te(t[s],S(o,s),a)
else e(r)})}(i)}oh.prototype.g=function(){var t=this,e=uh("local")
fh(this,function(){return Zt().then(function(){return t.c&&"local"!=t.c.C?t.b.get(e,t.a):null}).then(function(n){if(n)return ah(t,"local").then(function(){t.c=e})})})}
var sh={name:"persistence",C:"session"}
function uh(t){return{name:"authUser",C:t}}function ch(t,e){return fh(t,function(){return t.b.set(t.c,e.A(),t.a)})}function hh(t){return fh(t,function(){return Au(t.b,t.c,t.a)})}function lh(t,e){return fh(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),eh(t||{})})})}function fh(t,e){return t.f=t.f.then(e,e),t.f}function dh(t){if(this.l=!1,Vi(this,"settings",new gc),Vi(this,"app",t),!Ih(this).options||!Ih(this).options.apiKey)throw new Zi("invalid-api-key")
t=r.a.SDK_VERSION?gi(r.a.SDK_VERSION):null,this.b=new Pa(Ih(this).options&&Ih(this).options.apiKey,Or(Nr),t),this.O=[],this.m=[],this.J=[],this.Ub=r.a.INTERNAL.createSubscribe(E(this.oc,this)),this.W=void 0,this.Vb=r.a.INTERNAL.createSubscribe(E(this.pc,this)),yh(this,null),this.h=new oh(Ih(this).options.apiKey+":"+Ih(this).name),this.w=new nh(Ih(this).options.apiKey+":"+Ih(this).name),this.Y=Sh(this,function(t){var e=Ih(t).options.authDomain,n=function(t){var e=function(t,e){return t.b.get(ih,t.a).then(function(t){return t&&e&&(t.authDomain=e),eh(t||{})})}(t.w,Ih(t).options.authDomain).then(function(e){return(t.B=e)&&(e.da=t.w),rh(t.w)})
return Sh(t,e)}(t).then(function(){return lh(t.h,e)}).then(function(e){return e?(e.da=t.w,t.B&&(t.B.ca||null)==(e.ca||null)?e:e.reload().then(function(){return ch(t.h,e).then(function(){return e})}).s(function(n){return"auth/network-request-failed"==n.code?e:hh(t.h)})):null}).then(function(e){yh(t,e||null)})
return Sh(t,n)}(this)),this.i=Sh(this,function(t){return t.Y.then(function(){return gh(t)}).s(function(){}).then(function(){if(!t.l)return t.ma()}).s(function(){}).then(function(){if(!t.l){t.ga=!0
var e=t.h
e.b.addListener(uh("local"),e.a,t.ma)}})}(this)),this.ga=!1,this.ma=E(this.Nc,this),this.ub=E(this.aa,this),this.ua=E(this.bc,this),this.va=E(this.mc,this),this.Ha=E(this.nc,this),this.a=null,function(t){var e=Ih(t).options.authDomain,n=Ih(t).options.apiKey
e&&Ii()&&(t.Tb=t.Y.then(function(){if(!t.l){if(t.a=hc(e,n,Ih(t).name),ec(t.a,t),Th(t)&&jc(Th(t)),t.B){jc(t.B)
var i=t.B
i.sa(t.ha()),Oc(i,t),Pc(i=t.B,t.I),Rc(i,t),t.B=null}return t.a}}))}(this),this.INTERNAL={},this.INTERNAL.delete=E(this.delete,this),this.INTERNAL.logFramework=E(this.vc,this),this.o=0,sn.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ha()},set:function(t){this.sa(t)},enumerable:!1}),t.Z=null,Object.defineProperty(t,"ti",{get:function(){return this.R()},set:function(t){this.nb(t)},enumerable:!1}),t.P=null}(this),this.I=[]}function ph(t){Me.call(this,"languageCodeChanged"),this.g=t}function vh(t){Me.call(this,"frameworkChanged"),this.c=t}function mh(t){return t.Tb||Qt(new Zi("auth-domain-config-required"))}function gh(t){if(!Ii())return Qt(new Zi("operation-not-supported-in-this-environment"))
var e=mh(t).then(function(){return t.a.oa()}).then(function(t){return t?Ki(t):null})
return Sh(t,e)}function bh(t,e){var n={}
return n.apiKey=Ih(t).options.apiKey,n.authDomain=Ih(t).options.authDomain,n.appName=Ih(t).name,t.Y.then(function(){return function(t,e,n,i){var r=new _c(t,e)
return n&&(r.da=n),i&&Pc(r,i),r.reload().then(function(){return r})}(n,e,t.w,t.Aa())}).then(function(e){return Th(t)&&e.uid==Th(t).uid?(Gc(Th(t),e),t.aa(e)):(yh(t,e),jc(e),t.aa(e))}).then(function(){Eh(t)})}function yh(t,e){Th(t)&&(function(t,e){G(t.O,function(t){return t==e})}(Th(t),t.ub),$e(Th(t),"tokenChanged",t.ua),$e(Th(t),"userDeleted",t.va),$e(Th(t),"userInvalidated",t.Ha),Lc(Th(t))),e&&(e.O.push(t.ub),Je(e,"tokenChanged",t.ua),Je(e,"userDeleted",t.va),Je(e,"userInvalidated",t.Ha),0<t.o&&Cc(e)),Vi(t,"currentUser",e),e&&(e.sa(t.ha()),Oc(e,t),Pc(e,t.I),Rc(e,t))}function wh(t,e){var n=null,i=null
return Sh(t,e.then(function(e){return n=wo(e),i=Lr(e),bh(t,e)}).then(function(){return Ki({user:Th(t),credential:n,additionalUserInfo:i,operationType:"signIn"})}))}function Ih(t){return t.app}function Th(t){return t.currentUser}function kh(t){return Th(t)&&Th(t)._lat||null}function Eh(t){if(t.ga){for(var e=0;e<t.m.length;e++)t.m[e]&&t.m[e](kh(t))
if(t.W!==t.getUid()&&t.J.length)for(t.W=t.getUid(),e=0;e<t.J.length;e++)t.J[e]&&t.J[e](kh(t))}}function Sh(t,e){return t.O.push(e),e.ka(function(){B(t.O,e)}),e}function Ah(){}function Nh(){this.a={},this.b=1e12}oh.prototype.mb=function(t){var e=null,n=this
return function(t){var e=new Zi("invalid-persistence-type"),n=new Zi("unsupported-persistence-type")
t:{for(i in Iu)if(Iu[i]==t){var i=!0
break t}i=!1}if(!i||"string"!=typeof t)throw e
switch(li()){case"ReactNative":if("session"===t)throw n
break
case"Node":if("none"!==t)throw n
break
default:if(!wi()&&"none"!==t)throw n}}(t),fh(this,function(){return t!=n.c.C?n.b.get(n.c,n.a).then(function(i){return e=i,ah(n,t)}).then(function(){if(n.c=uh(t),e)return n.b.set(n.c,e,n.a)}):Zt()})},N(dh,sn),N(ph,Me),N(vh,Me),(t=dh.prototype).mb=function(t){return Sh(this,t=this.h.mb(t))},t.sa=function(t){this.Z===t||this.l||(this.Z=t,ja(this.b,this.Z),this.dispatchEvent(new ph(this.ha())))},t.ha=function(){return this.Z},t.Tc=function(){var t=u.navigator
this.sa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.vc=function(t){this.I.push(t),Ua(this.b,r.a.SDK_VERSION?gi(r.a.SDK_VERSION,this.I):null),this.dispatchEvent(new vh(this.I))},t.Aa=function(){return X(this.I)},t.nb=function(t){this.P===t||this.l||(this.P=t,this.b.b=this.P)},t.R=function(){return this.P},t.toJSON=function(){return{apiKey:Ih(this).options.apiKey,authDomain:Ih(this).options.authDomain,appName:Ih(this).name,currentUser:Th(this)&&Th(this).A()}},t.xb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.g==e&&!!this.f
default:return!1}},t.ja=function(t,e,n,i){"signInViaPopup"==t&&this.g==i&&(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)},t.za=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?E(this.ac,this):null},t.ac=function(t,e,n,i){var r=this
t={requestUri:t,postBody:i,sessionId:e,tenantId:n},this.c&&(this.c.cancel(),this.c=null)
var o=null,a=null,s=za(r.b,t).then(function(t){return o=wo(t),a=Lr(t),t})
return Sh(this,t=r.Y.then(function(){return s}).then(function(t){return bh(r,t)}).then(function(){return Ki({user:Th(r),credential:o,additionalUserInfo:a,operationType:"signIn"})}))},t.Lc=function(t){if(!Ii())return Qt(new Zi("operation-not-supported-in-this-environment"))
var e=this,n=Cr(t.providerId),i=_i(),o=null;(!Ei()||ci())&&Ih(this).options.authDomain&&t.isOAuthProvider&&(o=qs(Ih(this).options.authDomain,Ih(this).options.apiKey,Ih(this).name,"signInViaPopup",t,null,i,r.a.SDK_VERSION||null,null,null,this.R()))
var a=ri(o,n&&n.Da,n&&n.Ca)
return Sh(this,n=mh(this).then(function(n){return oc(n,a,"signInViaPopup",t,i,!!o,e.R())}).then(function(){return new Gt(function(t,n){e.ja("signInViaPopup",null,new Zi("cancelled-popup-request"),e.g),e.f=t,e.v=n,e.g=i,e.c=uc(e.a,e,"signInViaPopup",a,i)})}).then(function(t){return a&&ii(a),t?Ki(t):null}).s(function(t){throw a&&ii(a),t}))},t.Mc=function(t){if(!Ii())return Qt(new Zi("operation-not-supported-in-this-environment"))
var e=this
return Sh(this,mh(this).then(function(){return fh(t=e.h,function(){return t.b.set(sh,t.c.C,t.a)})
var t}).then(function(){return sc(e.a,"signInViaRedirect",t,void 0,e.R())}))},t.oa=function(){var t=this
return gh(this).then(function(e){return t.a&&dc(t.a.b),e}).s(function(e){throw t.a&&dc(t.a.b),e})},t.Rc=function(t){if(!t)return Qt(new Zi("null-user"))
if(this.P!=t.tenantId)return Qt(new Zi("tenant-id-mismatch"))
var e=this,n={}
n.apiKey=Ih(this).options.apiKey,n.authDomain=Ih(this).options.authDomain,n.appName=Ih(this).name
var i=function(t,e,n,i){e=e||{apiKey:t.l,authDomain:t.o,appName:t.m}
var r=t.b,o={}
return o[Da]=r.b,o.refreshToken=r.a,o.expiresIn=(r.c-A())/1e3,e=new _c(e,o),n&&(e.da=n),i&&Pc(e,i),Gc(e,t),e}(t,n,e.w,e.Aa())
return Sh(this,this.i.then(function(){if(Ih(e).options.apiKey!=t.l)return i.reload()}).then(function(){return Th(e)&&t.uid==Th(e).uid?(Gc(Th(e),t),e.aa(t)):(yh(e,i),jc(i),e.aa(i))}).then(function(){Eh(e)}))},t.pb=function(){var t=this
return Sh(this,this.i.then(function(){return t.a&&dc(t.a.b),Th(t)?(yh(t,null),hh(t.h).then(function(){Eh(t)})):Zt()}))},t.Nc=function(){var t=this
return lh(this.h,Ih(this).options.authDomain).then(function(e){if(!t.l){var n
if(n=Th(t)&&e){n=Th(t).uid
var i=e.uid
n=null!=n&&""!==n&&null!=i&&""!==i&&n==i}if(n)return Gc(Th(t),e),Th(t).G();(Th(t)||e)&&(yh(t,e),e&&(jc(e),e.da=t.w),t.a&&ec(t.a,t),Eh(t))}})},t.aa=function(t){return ch(this.h,t)},t.bc=function(){Eh(this),this.aa(Th(this))},t.mc=function(){this.pb()},t.nc=function(){this.pb()},t.oc=function(t){var e=this
this.addAuthTokenListener(function(){t.next(Th(e))})},t.pc=function(t){var e=this
!function(t,e){t.J.push(e),Sh(t,t.i.then(function(){!t.l&&H(t.J,e)&&t.W!==t.getUid()&&(t.W=t.getUid(),e(kh(t)))}))}(this,function(){t.next(Th(e))})},t.xc=function(t,e,n){var i=this
return this.ga&&Promise.resolve().then(function(){b(t)?t(Th(i)):b(t.next)&&t.next(Th(i))}),this.Ub(t,e,n)},t.wc=function(t,e,n){var i=this
return this.ga&&Promise.resolve().then(function(){i.W=i.getUid(),b(t)?t(Th(i)):b(t.next)&&t.next(Th(i))}),this.Vb(t,e,n)},t.cc=function(t){var e=this
return Sh(this,this.i.then(function(){return Th(e)?Th(e).G(t).then(function(t){return{accessToken:t}}):null}))},t.Hc=function(t){var e=this
return this.i.then(function(){return wh(e,Ns(e.b,Ts,{token:t}))}).then(function(t){var n=t.user
return Bc(n,"isAnonymous",!1),e.aa(n),t})},t.Ic=function(t,e){var n=this
return this.i.then(function(){return wh(n,Ns(n.b,ks,{email:t,password:e}))})},t.Xb=function(t,e){var n=this
return this.i.then(function(){return wh(n,Ns(n.b,ns,{email:t,password:e}))})},t.Ra=function(t){var e=this
return this.i.then(function(){return wh(e,t.na(e.b))})},t.Gc=function(t){return ji("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Ra(t)},t.ob=function(){var t=this
return this.i.then(function(){var e=Th(t)
if(e&&e.isAnonymous){var n=Ki({providerId:null,isNewUser:!1})
return Ki({user:e,credential:null,additionalUserInfo:n,operationType:"signIn"})}return wh(t,t.b.ob()).then(function(e){var n=e.user
return Bc(n,"isAnonymous",!0),t.aa(n),e})})},t.getUid=function(){return Th(this)&&Th(this).uid||null},t.Wb=function(t){this.addAuthTokenListener(t),this.o++,0<this.o&&Th(this)&&Cc(Th(this))},t.Ec=function(t){var e=this
F(this.m,function(n){n==t&&e.o--}),0>this.o&&(this.o=0),0==this.o&&Th(this)&&Lc(Th(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var e=this
this.m.push(t),Sh(this,this.i.then(function(){e.l||H(e.m,t)&&t(kh(e))}))},t.removeAuthTokenListener=function(t){G(this.m,function(e){return e==t})},t.delete=function(){this.l=!0
for(var t=0;t<this.O.length;t++)this.O[t].cancel("app-deleted")
return this.O=[],this.h&&(t=this.h).b.removeListener(uh("local"),t.a,this.ma),this.a&&(nc(this.a,this),dc(this.a.b)),Promise.resolve()},t.$b=function(t){return Sh(this,function(t,e){return Ns(t,is,{identifier:e,continueUri:Ti()?ti():"http://localhost"}).then(function(t){return t.signinMethods||[]})}(this.b,t))},t.qc=function(t){return!!po(t)},t.lb=function(t,e){var n=this
return Sh(this,Zt().then(function(){var t=new lr(e)
if(!t.c)throw new Zi("argument-error",pr+" must be true when sending sign in link to email")
return Ir(t)}).then(function(e){return n.b.lb(t,e)}).then(function(){}))},t.Uc=function(t){return this.Ka(t).then(function(t){return t.data.email})},t.$a=function(t,e){return Sh(this,this.b.$a(t,e).then(function(){}))},t.Ka=function(t){return Sh(this,this.b.Ka(t).then(function(t){return new Hi(t)}))},t.Xa=function(t){return Sh(this,this.b.Xa(t).then(function(){}))},t.kb=function(t,e){var n=this
return Sh(this,Zt().then(function(){return void 0===e||Y(e)?{}:Ir(new lr(e))}).then(function(e){return n.b.kb(t,e)}).then(function(){}))},t.Kc=function(t,e){return Sh(this,yc(this,t,e,E(this.Ra,this)))},t.Jc=function(t,e){var n=this
return Sh(this,Zt().then(function(){var i=e||ti(),r=fo(t,i)
if(!(i=po(i)))throw new Zi("argument-error","Invalid email link!")
if(i.tenantId!==n.R())throw new Zi("tenant-id-mismatch")
return n.Ra(r)}))},Ah.prototype.render=function(){},Ah.prototype.reset=function(){},Ah.prototype.getResponse=function(){},Ah.prototype.execute=function(){}
var _h=null
function Oh(t,e){return(e=Ph(e))&&t.a[e]||null}function Ph(t){return(t=void 0===t?1e12:t)?t.toString():null}function Rh(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=Bn(t)
var n=this
this.i=function(){n.execute()},this.h?this.execute():Je(this.f,"click",this.i)}function Dh(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function Ch(){}Nh.prototype.render=function(t,e){return this.a[this.b.toString()]=new Rh(t,e),this.b++},Nh.prototype.reset=function(t){var e=Oh(this,t)
t=Ph(t),e&&t&&(e.delete(),delete this.a[t])},Nh.prototype.getResponse=function(t){return(t=Oh(this,t))?t.getResponse():null},Nh.prototype.execute=function(t){(t=Oh(this,t))&&t.execute()},Rh.prototype.getResponse=function(){return Dh(this),this.b},Rh.prototype.execute=function(){Dh(this)
var t=this
this.a||(this.a=setTimeout(function(){t.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return e.join("")}()
var e=t.c.callback,n=t.c["expired-callback"]
if(e)try{e(t.b)}catch(t){}t.a=setTimeout(function(){if(t.a=null,t.b=null,n)try{n()}catch(t){}t.h&&t.execute()},6e4)},500))},Rh.prototype.delete=function(){Dh(this),this.g=!0,clearTimeout(this.a),this.a=null,$e(this.f,"click",this.i)},Ch.prototype.g=function(){return _h||(_h=new Nh),Zt(_h)},Ch.prototype.c=function(){}
var Lh=null
function xh(){this.b=u.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var Mh=new Q(nt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),jh=new Ri(3e4,6e4)
xh.prototype.g=function(t){var e=this
return new Gt(function(n,i){var r=setTimeout(function(){i(new Zi("network-request-failed"))},jh.get())
!u.grecaptcha||t!==e.f&&!e.b?(u[e.a]=function(){if(u.grecaptcha){e.f=t
var o=u.grecaptcha.render
u.grecaptcha.render=function(t,n){return t=o(t,n),e.b++,t},clearTimeout(r),n(u.grecaptcha)}else clearTimeout(r),i(new Zi("internal-error"))
delete u[e.a]},Zt(ka(at(Mh,{onload:e.a,hl:t||""}))).s(function(){clearTimeout(r),i(new Zi("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(r),n(u.grecaptcha))})},xh.prototype.c=function(){this.b--}
var Uh=null
function Vh(t,e,n,i,r,o,a){if(Vi(this,"type","recaptcha"),this.c=this.f=null,this.B=!1,this.u=e,this.g=null,a?(Lh||(Lh=new Ch),a=Lh):(Uh||(Uh=new xh),a=Uh),this.m=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[qh])throw new Zi("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[Hh],!u.document)throw new Zi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!Bn(e)||!this.i&&Bn(e).hasChildNodes())throw new Zi("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.o=new Pa(t,o||null,r||null),this.v=i||function(){return null}
var s=this
this.l=[]
var c=this.a[Fh]
this.a[Fh]=function(t){if(Bh(s,t),"function"==typeof c)c(t)
else if("string"==typeof c){var e=yi(c,u)
"function"==typeof e&&e(t)}}
var h=this.a[Kh]
this.a[Kh]=function(){if(Bh(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=yi(h,u)
"function"==typeof t&&t()}}}var Fh="callback",Kh="expired-callback",qh="sitekey",Hh="size"
function Bh(t,e){for(var n=0;n<t.l.length;n++)try{t.l[n](e)}catch(t){}}function Gh(t,e){return t.h.push(e),e.ka(function(){B(t.h,e)}),e}function Wh(t){if(t.B)throw new Zi("internal-error","RecaptchaVerifier instance has been destroyed.")}function Xh(t,e,n){var i=!1
try{this.b=n||r.a.app()}catch(t){throw new Zi("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new Zi("invalid-api-key")
n=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().Aa()}catch(t){}try{i=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=r.a.SDK_VERSION?gi(r.a.SDK_VERSION,a):null,Vh.call(this,n,t,e,function(){try{var t=o.b.auth().ha()}catch(e){t=null}return t},a,Or(Nr),i)}function Jh(t,e,n,i){t:{n=Array.prototype.slice.call(n)
for(var r=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0
else{if(o)throw new Zi("internal-error","Argument validator encountered a required argument after an optional argument.")
r++}if(o=e.length,n.length<r||o<n.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+n.length+"."
else{for(r=0;r<n.length;r++)if(o=e[r].optional&&void 0===n[r],!e[r].N(n[r])&&!o){if(e=e[r],0>r||r>=Yh.length)throw new Zi("internal-error","Argument validator received an unsupported number of arguments.")
n=Yh[r],i=(i?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.M+"."
break t}i=null}}if(i)throw new Zi("argument-error",t+" failed: "+i)}(t=Vh.prototype).Ba=function(){var t=this
return this.f?this.f:this.f=Gh(this,Zt().then(function(){if(Ti()&&!hi())return si()
throw new Zi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return t.m.g(t.v())}).then(function(e){return t.g=e,Ns(t.o,ds,{})}).then(function(e){t.a[qh]=e.recaptchaSiteKey}).s(function(e){throw t.f=null,e}))},t.render=function(){Wh(this)
var t=this
return Gh(this,this.Ba().then(function(){if(null===t.c){var e=t.u
if(!t.i){var n=Bn(e)
e=function(t,e,n){var i=arguments,r=document,o=String(i[0]),a=i[1]
if(!Hn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',Vt(a.name),'"'),a.type){o.push(' type="',Vt(a.type),'"')
var s={}
Z(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=r.createElement(o),a&&(c(a)?o.className=a:m(a)?o.className=a.join(" "):Gn(o,a)),2<i.length&&function(t,e,n){function i(n){n&&e.appendChild(c(n)?t.createTextNode(n):n)}for(var r=2;r<n.length;r++){var o=n[r]
!g(o)||y(o)&&0<o.nodeType?i(o):F(Xn(o)?X(o):o,i)}}(r,o,i),o}("DIV"),n.appendChild(e)}t.c=t.g.render(e,t.a)}return t.c}))},t.verify=function(){Wh(this)
var t=this
return Gh(this,this.render().then(function(e){return new Gt(function(n){var i=t.g.getResponse(e)
i?n(i):(t.l.push(function e(i){i&&(function(t,e){G(t.l,function(t){return t==e})}(t,e),n(i))}),t.i&&t.g.execute(t.c))})}))},t.reset=function(){Wh(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Wh(this),this.B=!0,this.m.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=Bn(this.u)
for(var e;e=t.firstChild;)t.removeChild(e)}},N(Xh,Vh)
var Yh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function zh(t,e){return{name:t||"",M:"a valid string",optional:!!e,N:c}}function $h(t,e){return{name:t||"",M:"a boolean",optional:!!e,N:h}}function Zh(t,e){return{name:t||"",M:"a valid object",optional:!!e,N:y}}function Qh(t,e){return{name:t||"",M:"a function",optional:!!e,N:b}}function tl(t,e){return{name:t||"",M:"null",optional:!!e,N:v}}function el(t){return{name:t?t+"Credential":"credential",M:t?"a valid "+t+" credential":"a valid credential",optional:!1,N:function(e){if(!e)return!1
var n=!t||e.providerId===t
return!(!e.na||!n)}}}function nl(){return{name:"applicationVerifier",M:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,N:function(t){return!!(t&&c(t.type)&&b(t.verify))}}}function il(t,e,n,i){return{name:n||"",M:t.M+" or "+e.M,optional:!!i,N:function(n){return t.N(n)||e.N(n)}}}function rl(t,e){for(var n in e){var i=e[n].name
t[i]=sl(i,t[n],e[n].j)}}function ol(t,e){for(var n in e){var i=e[n].name
i!==n&&Object.defineProperty(t,i,{get:S(function(t){return this[t]},n),set:S(function(t,e,n,i){Jh(t,[n],[i],!0),this[e]=i},i,n,e[n].Ya),enumerable:!0})}}function al(t,e,n,i){t[e]=sl(e,n,i)}function sl(t,e,n){function i(){var t=Array.prototype.slice.call(arguments)
return Jh(o,n,t),e.apply(this,t)}if(!n)return e
var r,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(r in e)i[r]=e[r]
for(r in e.prototype)i.prototype[r]=e.prototype[r]
return i}rl(dh.prototype,{Xa:{name:"applyActionCode",j:[zh("code")]},Ka:{name:"checkActionCode",j:[zh("code")]},$a:{name:"confirmPasswordReset",j:[zh("code"),zh("newPassword")]},Xb:{name:"createUserWithEmailAndPassword",j:[zh("email"),zh("password")]},$b:{name:"fetchSignInMethodsForEmail",j:[zh("email")]},oa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[zh("emailLink")]},wc:{name:"onAuthStateChanged",j:[il(Zh(),Qh(),"nextOrObserver"),Qh("opt_error",!0),Qh("opt_completed",!0)]},xc:{name:"onIdTokenChanged",j:[il(Zh(),Qh(),"nextOrObserver"),Qh("opt_error",!0),Qh("opt_completed",!0)]},kb:{name:"sendPasswordResetEmail",j:[zh("email"),il(Zh("opt_actionCodeSettings",!0),tl(null,!0),"opt_actionCodeSettings",!0)]},lb:{name:"sendSignInLinkToEmail",j:[zh("email"),Zh("actionCodeSettings")]},mb:{name:"setPersistence",j:[zh("persistence")]},Gc:{name:"signInAndRetrieveDataWithCredential",j:[el()]},ob:{name:"signInAnonymously",j:[]},Ra:{name:"signInWithCredential",j:[el()]},Hc:{name:"signInWithCustomToken",j:[zh("token")]},Ic:{name:"signInWithEmailAndPassword",j:[zh("email"),zh("password")]},Jc:{name:"signInWithEmailLink",j:[zh("email"),zh("emailLink",!0)]},Kc:{name:"signInWithPhoneNumber",j:[zh("phoneNumber"),nl()]},Lc:{name:"signInWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Mc:{name:"signInWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Rc:{name:"updateCurrentUser",j:[il({name:"user",M:"an instance of Firebase User",optional:!1,N:function(t){return!!(t&&t instanceof _c)}},tl(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[zh(null,!0)]},Tc:{name:"useDeviceLanguage",j:[]},Uc:{name:"verifyPasswordResetCode",j:[zh("code")]}}),ol(dh.prototype,{lc:{name:"languageCode",Ya:il(zh(),tl(),"languageCode")},ti:{name:"tenantId",Ya:il(zh(),tl(),"tenantId")}}),dh.Persistence=Iu,dh.Persistence.LOCAL="local",dh.Persistence.SESSION="session",dh.Persistence.NONE="none",rl(_c.prototype,{delete:{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[$h("opt_forceRefresh",!0)]},G:{name:"getIdToken",j:[$h("opt_forceRefresh",!0)]},rc:{name:"linkAndRetrieveDataWithCredential",j:[el()]},eb:{name:"linkWithCredential",j:[el()]},sc:{name:"linkWithPhoneNumber",j:[zh("phoneNumber"),nl()]},tc:{name:"linkWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},uc:{name:"linkWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ac:{name:"reauthenticateAndRetrieveDataWithCredential",j:[el()]},gb:{name:"reauthenticateWithCredential",j:[el()]},Bc:{name:"reauthenticateWithPhoneNumber",j:[zh("phoneNumber"),nl()]},Cc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Dc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},jb:{name:"sendEmailVerification",j:[il(Zh("opt_actionCodeSettings",!0),tl(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[zh(null,!0)]},Qc:{name:"unlink",j:[zh("provider")]},rb:{name:"updateEmail",j:[zh("email")]},sb:{name:"updatePassword",j:[zh("password")]},Sc:{name:"updatePhoneNumber",j:[el("phone")]},tb:{name:"updateProfile",j:[Zh("profile")]}}),rl(Nh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),rl(Ah.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),rl(Gt.prototype,{ka:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),ol(gc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",Ya:$h("appVerificationDisabledForTesting")}}),rl(bc.prototype,{confirm:{name:"confirm",j:[zh("verificationCode")]}}),al(Br,"fromJSON",function(t){t=c(t)?JSON.parse(t):t
for(var e,n=[$r,ho,mo,Jr],i=0;i<n.length;i++)if(e=n[i](t))return e
return null},[il(zh(),Zh(),"json")]),al(lo,"credential",function(t,e){return new co(t,e)},[zh("email"),zh("password")]),rl(co.prototype,{A:{name:"toJSON",j:[zh(null,!0)]}}),rl(eo.prototype,{wa:{name:"addScope",j:[zh("scope")]},Ea:{name:"setCustomParameters",j:[Zh("customOAuthParameters")]}}),al(eo,"credential",no,[il(zh(),Zh(),"token")]),al(lo,"credentialWithLink",fo,[zh("email"),zh("emailLink")]),rl(io.prototype,{wa:{name:"addScope",j:[zh("scope")]},Ea:{name:"setCustomParameters",j:[Zh("customOAuthParameters")]}}),al(io,"credential",ro,[il(zh(),Zh(),"token")]),rl(oo.prototype,{wa:{name:"addScope",j:[zh("scope")]},Ea:{name:"setCustomParameters",j:[Zh("customOAuthParameters")]}}),al(oo,"credential",ao,[il(zh(),il(Zh(),tl()),"idToken"),il(zh(),tl(),"accessToken",!0)]),rl(so.prototype,{Ea:{name:"setCustomParameters",j:[Zh("customOAuthParameters")]}}),al(so,"credential",uo,[il(zh(),Zh(),"token"),zh("secret",!0)]),rl(to.prototype,{wa:{name:"addScope",j:[zh("scope")]},credential:{name:"credential",j:[il(zh(),il(Zh(),tl()),"optionsOrIdToken"),il(zh(),tl(),"accessToken",!0)]},Ea:{name:"setCustomParameters",j:[Zh("customOAuthParameters")]}}),rl(Yr.prototype,{A:{name:"toJSON",j:[zh(null,!0)]}}),rl(Wr.prototype,{A:{name:"toJSON",j:[zh(null,!0)]}}),al(bo,"credential",yo,[zh("verificationId"),zh("verificationCode")]),rl(bo.prototype,{Va:{name:"verifyPhoneNumber",j:[zh("phoneNumber"),nl()]}}),rl(vo.prototype,{A:{name:"toJSON",j:[zh(null,!0)]}}),rl(Zi.prototype,{toJSON:{name:"toJSON",j:[zh(null,!0)]}}),rl(_o.prototype,{toJSON:{name:"toJSON",j:[zh(null,!0)]}}),rl(No.prototype,{toJSON:{name:"toJSON",j:[zh(null,!0)]}}),rl(Xh.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),al(nr,"parseLink",hr,[zh("link")]),function(){if(void 0===r.a||!r.a.INTERNAL||!r.a.INTERNAL.registerService)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Bi,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:dh,AuthCredential:Br,Error:Zi}
al(t,"EmailAuthProvider",lo,[]),al(t,"FacebookAuthProvider",eo,[]),al(t,"GithubAuthProvider",io,[]),al(t,"GoogleAuthProvider",oo,[]),al(t,"TwitterAuthProvider",so,[]),al(t,"OAuthProvider",to,[zh("providerId")]),al(t,"SAMLAuthProvider",Qr,[zh("providerId")]),al(t,"PhoneAuthProvider",bo,[{name:"auth",M:"an instance of Firebase Auth",optional:!0,N:function(t){return!!(t&&t instanceof dh)}}]),al(t,"RecaptchaVerifier",Xh,[il(zh(),{name:"",M:"an HTML element",optional:!1,N:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Zh("recaptchaParameters",!0),{name:"app",M:"an instance of Firebase App",optional:!0,N:function(t){return!!(t&&t instanceof r.a.app.App)}}]),al(t,"ActionCodeURL",nr,[]),r.a.INTERNAL.registerService("auth",function(t,e){return e({INTERNAL:{getUid:E((t=new dh(t)).getUid,t),getToken:E(t.cc,t),addAuthTokenListener:E(t.Wb,t),removeAuthTokenListener:E(t.Ec,t)}}),t},t,function(t,e){if("create"===t)try{e.auth()}catch(t){}}),r.a.INTERNAL.extendNamespace({User:_c})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}])
