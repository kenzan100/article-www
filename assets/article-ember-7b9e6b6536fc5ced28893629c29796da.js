"use strict"
define("article-ember/adapters/application",["exports","emberfire/adapters/firestore"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.extend({enablePersistence:!0,persistenceSettings:{synchronizeTabs:!0}})
e.default=r}),define("article-ember/app",["exports","article-ember/resolver","ember-load-initializers","article-ember/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(i,n.default.modulePrefix)
var a=i
e.default=a}),define("article-ember/authenticators/firebase",["exports","emberfire/authenticators/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/components/sentence-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{moveUp:function(e){console.info(e.data())}}})
e.default=t}),define("article-ember/components/write",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({submit:function(e){var t=e.target.firstElementChild
this.create(t.value),t.value="",e.preventDefault()}})
e.default=t}),define("article-ember/controllers/sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({actions:{edit:function(e){this.model.set("body",e),this.model.save(),this.transitionToRoute("/sentences")},createNew:function(e){var t=this.model.sortOrder
this.updateOthersSaveAndExit(e,t)}},saveAndExit:function(e,t){this.store.createRecord("sentence",{body:e,sortOrder:t,isDeleted:!1}).save(),this.transitionToRoute("/sentences")},updateOthersSaveAndExit:function(e,t){var r=this,n={query:function(e){return e.where("isDeleted","==",!1).orderBy("sortOrder").startAt(parseInt(t,10))}}
this.store.query("sentence",n).then(function(n){n.forEach(function(e){e.incrementProperty("sortOrder"),e.save()}),r.saveAndExit(e,t)})}})
e.default=t}),define("article-ember/helpers/app-version",["exports","article-ember/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,a=n.versionOnly||n.hideSha,o=n.shaOnly||n.hideVersion,l=null
return a&&(n.showExtended&&(l=i.match(r.versionExtendedRegExp)),l||(l=i.match(r.versionRegExp))),o&&(l=i.match(r.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var i=Ember.Helper.helper(n)
e.default=i}),define("article-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/index",[],function(){}),define("article-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","article-ember/config/environment"],function(e,t,r){var n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,i=r.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(n,i)}
e.default=a}),define("article-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("article-ember/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("article-ember/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/initializers/export-application-global",["exports","article-ember/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("article-ember/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("article-ember/models/sentence",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.Model,n=t.default.attr,i=r.extend({body:n("string"),sortOrder:n("number"),isDeleted:n("boolean")})
e.default=i}),define("article-ember/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("article-ember/router",["exports","article-ember/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("sentences"),this.route("new",{path:"/new/:sort_order"}),this.route("sentence",{path:"/sentence/:sentence_id"})})
var n=r
e.default=n}),define("article-ember/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({controllerName:"sentence",model:function(){return this.store.createRecord("sentence",{sortOrder:0})},renderTemplate:function(e,t){this.render("new",{model:t})}})
e.default=t}),define("article-ember/routes/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({controllerName:"sentence",model:function(e){return this.store.createRecord("sentence",{sortOrder:e.sort_order})}})
e.default=t}),define("article-ember/routes/sentence",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({controllerName:"sentence",model:function(e){return this.store.findRecord("sentence",e.sentence_id)},renderTemplate:function(e,t){this.render("edit",{model:t})}})
e.default=t}),define("article-ember/routes/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.query("sentence",{query:function(e){return e.where("isDeleted","==",!1).orderBy("sortOrder")}})},actions:{delete:function(e){e.set("isDeleted",!0),e.save(),this.refresh()},new:function(e){this.transitionTo("/new/"+e)},edit:function(e){this.transitionTo("/sentence/"+e.id)}}})
e.default=t}),define("article-ember/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/services/firebase",["exports","emberfire/services/firebase"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("article-ember/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"MES2YDRI",block:'{"symbols":[],"statements":[[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/application.hbs"}})
e.default=t}),define("article-ember/templates/components/write",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"qwBSZIiJ",block:'{"symbols":[],"statements":[[7,"form",true],[10,"id","new-sentence"],[8],[0,"\\n  "],[5,"textarea",[],[["@form","@value"],["new-sentence",[23,0,["sentence","body"]]]]],[0,"  "],[7,"button",true],[10,"for","new-sentence"],[8],[0,"create"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/components/write.hbs"}})
e.default=t}),define("article-ember/templates/edit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"CVnKimu6",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"Edit"],[9],[0,"\\n\\n"],[5,"write",[],[["@sentence","@create"],[[23,0,["model"]],[28,"action",[[23,0,[]],"edit"],null]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/edit.hbs"}})
e.default=t}),define("article-ember/templates/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"gr/nQLck",block:'{"symbols":[],"statements":[[4,"if",[[23,0,["model","isNew"]]],null,{"statements":[[7,"h1",true],[8],[0,"New"],[9],[0,"\\n"]],"parameters":[]},{"statements":[[7,"h1",true],[8],[0,"Edit"],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"],[5,"write",[],[["@sentence","@create"],[[23,0,["model"]],[28,"action",[[23,0,[]],"createNew"],null]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/new.hbs"}})
e.default=t}),define("article-ember/templates/sentences",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"WrY21i4q",block:'{"symbols":["sentence","i"],"statements":[[7,"div",true],[8],[0,"\\n  "],[7,"h1",true],[8],[0,"Home"],[9],[0,"\\n"],[9],[0,"\\n\\n"],[7,"table",true],[8],[0,"\\n  "],[7,"tbody",true],[8],[0,"\\n"],[4,"each",[[23,0,["model"]]],null,{"statements":[[0,"      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"new",[23,1,["sortOrder"]]]],[8],[0,"+"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"tr",true],[8],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[1,[23,1,["body"]],false],[0,"\\n        "],[9],[0,"\\n        "],[7,"td",true],[8],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"edit",[23,1,[]]]],[8],[0,"edit"],[9],[0,"\\n          "],[7,"button",false],[3,"action",[[23,0,[]],"delete",[23,1,[]]]],[8],[0,"x"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1,2]},null],[0,"\\n    "],[7,"tr",true],[8],[0,"\\n      "],[7,"td",true],[8],[0,"\\n        "],[7,"button",false],[3,"action",[[23,0,[]],"new",[23,0,["model","length"]]]],[8],[0,"+"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"article-ember/templates/sentences.hbs"}})
e.default=t})
define("article-ember/config/environment",[],function(){try{var e="article-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("article-ember/app").default.create({name:"article-ember",version:"0.0.0+25333fcc"})
