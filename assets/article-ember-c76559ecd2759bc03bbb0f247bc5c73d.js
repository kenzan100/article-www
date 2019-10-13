"use strict"
define("article-ember/adapters/application",["exports","emberfire/adapters/firestore"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.extend({enablePersistence:!0,persistenceSettings:{synchronizeTabs:!0}})
e.default=r}),define("article-ember/app",["exports","article-ember/resolver","ember-load-initializers","article-ember/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(a,n.default.modulePrefix)
var i=a
e.default=i}),define("article-ember/authenticators/firebase",["exports","emberfire/authenticators/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/components/sentence-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{moveUp:function(e){console.info(e.data())}}})
e.default=t}),define("article-ember/components/write",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({submit:function(e){var t=e.target.firstElementChild
this.create(t.value),t.value="",e.preventDefault()}})
e.default=t}),define("article-ember/controllers/sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({actions:{createNew:function(e){this.store.createRecord("sentence",{body:e}).save(),this.transitionToRoute("/sentences")}}})
e.default=t}),define("article-ember/controllers/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({actions:{newHereAbove:function(e){this.transitionToRoute("/sentence/"+e.get("id"))}}})
e.default=t}),define("article-ember/helpers/app-version",["exports","article-ember/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,i=n.versionOnly||n.hideSha,o=n.shaOnly||n.hideVersion,l=null
return i&&(n.showExtended&&(l=a.match(r.versionExtendedRegExp)),l||(l=a.match(r.versionRegExp))),o&&(l=a.match(r.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var a=Ember.Helper.helper(n)
e.default=a}),define("article-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/index",[],function(){}),define("article-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","article-ember/config/environment"],function(e,t,r){var n,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,a=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,a)}
e.default=i}),define("article-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("article-ember/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("article-ember/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/initializers/export-application-global",["exports","article-ember/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,a=t.default.exportApplicationGlobal
n="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("article-ember/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("article-ember/models/sentence",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.Model,n=t.default.attr,a=r.extend({body:n("string")})
e.default=a}),define("article-ember/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/router",["exports","article-ember/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("sentences"),this.route("sentence",{path:"/sentence/:sentence_id"})})
var n=r
e.default=n}),define("article-ember/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({controllerName:"sentence",model:function(){return this.store.createRecord("sentence")}})
e.default=t}),define("article-ember/routes/sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){var t=this.store.getReference("sentence",e.sentence_id)
return null==t.value()?this.store.createRecord("sentence"):t.load()}})
e.default=t}),define("article-ember/routes/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("sentence")}})
e.default=t}),define("article-ember/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/services/firebase",["exports","emberfire/services/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1krNnXG0",block:'{"symbols":[],"statements":[[7,"p",true],[10,"id","notice"],[8],[0,"@notice"],[9],[0,"\\n\\n"],[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/application.hbs"}})
e.default=t}),define("article-ember/templates/components/write",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"3ChVPw+L",block:'{"symbols":[],"statements":[[7,"form",true],[10,"id","new-sentence"],[8],[0,"\\n  "],[5,"textarea",[],[["@form"],["new-sentence"]]],[0,"  "],[7,"button",true],[10,"for","new-sentence"],[8],[0,"create"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/components/write.hbs"}})
e.default=t}),define("article-ember/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"KhxEB2Gd",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"New"],[9],[0,"\\n\\n"],[5,"write",[],[["@sentence","@create"],[[23,0,["model"]],[28,"action",[[23,0,[]],"createNew"],null]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/index.hbs"}})
e.default=t}),define("article-ember/templates/sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"mOqHYbAm",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[1,[23,0,["model","body"]],false],[9],[0,"\\n\\n"],[5,"write",[],[["@sentence","@create"],[[23,0,["model"]],[28,"action",[[23,0,[]],"createNew"],null]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/sentence.hbs"}})
e.default=t}),define("article-ember/templates/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"m0AfNWJk",block:'{"symbols":["sentence"],"statements":[[7,"div",true],[8],[0,"\\n  "],[7,"h1",true],[8],[0,"Home"],[9],[0,"\\n"],[9],[0,"\\n\\n"],[7,"table",true],[8],[0,"\\n  "],[7,"tbody",true],[8],[0,"\\n"],[4,"each",[[23,0,["model"]]],null,{"statements":[[0,"      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"newHereAbove",[23,1,[]]]],[8],[0,"+"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[1,[23,1,["body"]],false],[0,"\\n        "],[9],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"edit",[23,1,[]]]],[8],[0,"edit"],[9],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"delete",[23,1,[]]]],[8],[0,"x"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[7,"tr",true],[8],[0,"\\n      "],[7,"td",true],[8],[0,"\\n        "],[7,"button",false],[3,"action",[[23,0,[]],"newBottom"]],[8],[0,"+"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/sentences.hbs"}})
e.default=t})
define("article-ember/config/environment",[],function(){try{var e="article-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("article-ember/app").default.create({name:"article-ember",version:"0.0.0+d5f2b819"})