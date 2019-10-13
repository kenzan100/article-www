"use strict"
define("article-ember/adapters/application",["exports","emberfire/adapters/firestore"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({enablePersistence:!0,persistenceSettings:{synchronizeTabs:!0}})
e.default=n}),define("article-ember/app",["exports","article-ember/resolver","ember-load-initializers","article-ember/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,r.default.modulePrefix)
var a=i
e.default=a}),define("article-ember/authenticators/firebase",["exports","emberfire/authenticators/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/components/sentence-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{moveUp:function(e){console.info(e.data())}}})
e.default=t}),define("article-ember/controllers/new-sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({actions:{createNewSentence:function(e){var t=e.target.firstElementChild
this.store.createRecord("sentence",{body:t.value}).save(),t.value="",e.preventDefault(),this.transitionToRoute("/sentences")}}})
e.default=t}),define("article-ember/controllers/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({actions:{newHereAbove:function(e){this.transitionToRoute("/new-sentence/"+e.get("id"))}}})
e.default=t}),define("article-ember/helpers/app-version",["exports","article-ember/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,a=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,l=null
return a&&(r.showExtended&&(l=i.match(n.versionExtendedRegExp)),l||(l=i.match(n.versionRegExp))),o&&(l=i.match(n.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i}),define("article-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("article-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("article-ember/index",[],function(){}),define("article-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","article-ember/config/environment"],function(e,t,n){var r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,i=n.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=a}),define("article-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("article-ember/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("article-ember/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/initializers/export-application-global",["exports","article-ember/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r}),define("article-ember/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("article-ember/models/sentence",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.Model,r=t.default.attr,i=n.extend({body:r("string")})
e.default=i}),define("article-ember/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("article-ember/router",["exports","article-ember/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("sentences"),this.route("new-sentence",{path:"/new-sentence/:sentence_id"})})
var r=n
e.default=r}),define("article-ember/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({redirect:function(){this.transitionTo("new-sentence",0)}})
e.default=t}),define("article-ember/routes/new-sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){var t=this.store.getReference("sentence",e.sentence_id)
return null==t.value()?this.store.createRecord("sentence"):t.load()}})
e.default=t}),define("article-ember/routes/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("sentence")}})
e.default=t}),define("article-ember/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/services/firebase",["exports","emberfire/services/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1krNnXG0",block:'{"symbols":[],"statements":[[7,"p",true],[10,"id","notice"],[8],[0,"@notice"],[9],[0,"\\n\\n"],[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/application.hbs"}})
e.default=t}),define("article-ember/templates/new-sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"xaxKWt1C",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"New"],[9],[0,"\\n\\n"],[1,[23,0,["model","body"]],false],[0,"\\n\\n"],[7,"form",true],[10,"id","new-sentence"],[11,"onsubmit",[28,"action",[[23,0,[]],"createNewSentence"],null]],[8],[0,"\\n  "],[5,"textarea",[],[["@form"],["new-sentence"]]],[0,"  "],[7,"button",true],[10,"for","new-sentence"],[8],[0,"create"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/new-sentence.hbs"}})
e.default=t}),define("article-ember/templates/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"m0AfNWJk",block:'{"symbols":["sentence"],"statements":[[7,"div",true],[8],[0,"\\n  "],[7,"h1",true],[8],[0,"Home"],[9],[0,"\\n"],[9],[0,"\\n\\n"],[7,"table",true],[8],[0,"\\n  "],[7,"tbody",true],[8],[0,"\\n"],[4,"each",[[23,0,["model"]]],null,{"statements":[[0,"      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"newHereAbove",[23,1,[]]]],[8],[0,"+"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[1,[23,1,["body"]],false],[0,"\\n        "],[9],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"edit",[23,1,[]]]],[8],[0,"edit"],[9],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"delete",[23,1,[]]]],[8],[0,"x"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[7,"tr",true],[8],[0,"\\n      "],[7,"td",true],[8],[0,"\\n        "],[7,"button",false],[3,"action",[[23,0,[]],"newBottom"]],[8],[0,"+"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/sentences.hbs"}})
e.default=t}),define("article-ember/config/environment",[],function(){try{var e="article-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("article-ember/app").default.create({name:"article-ember",version:"0.0.0+a5a863d3"})
