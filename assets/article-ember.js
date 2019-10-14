'use strict';



;define("article-ember/adapters/application", ["exports", "emberfire/adapters/firestore"], function (_exports, _firestore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _firestore.default.extend({
    // Uncomment the following lines to enable offline persistence and multi-tab support
    enablePersistence: true,
    persistenceSettings: {
      synchronizeTabs: true
    }
  });

  _exports.default = _default;
});
;define("article-ember/app", ["exports", "article-ember/resolver", "ember-load-initializers", "article-ember/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("article-ember/authenticators/firebase", ["exports", "emberfire/authenticators/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("article-ember/components/sentence-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      moveUp(sentence) {
        console.info(sentence.data());
      }

    }
  });

  _exports.default = _default;
});
;define("article-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("article-ember/components/write", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    submit(event) {
      let textArea = event.target.firstElementChild; // parent template should be responding to this;

      this.create(textArea.value); // cleanup

      textArea.value = '';
      event.preventDefault();
    }

  });

  _exports.default = _default;
});
;define("article-ember/controllers/sentence", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      edit(value) {
        this.model.set('body', value);
        this.model.save();
        this.transitionToRoute('/sentences');
      },

      createNew(value) {
        let claimingSortOrder = this.model.sortOrder;
        this.updateOthersSaveAndExit(value, claimingSortOrder);
      }

    },
    saveAndExit: function (value, claimingSortOrder) {
      this.store.createRecord('sentence', {
        body: value,
        sortOrder: claimingSortOrder,
        isDeleted: false
      }).save();
      this.transitionToRoute('/sentences');
    },
    updateOthersSaveAndExit: function (value, claimingSortOrder) {
      let queryOptions = {
        query: ref => ref.orderBy('sortOrder').startAt(parseInt(claimingSortOrder, 10))
      };
      this.store.query('sentence', queryOptions).then(sentences => {
        sentences.forEach(sentence => {
          sentence.incrementProperty('sortOrder');
          sentence.save(); //TODO: super heavy. should do it in a batch.
        });
        this.saveAndExit(value, claimingSortOrder);
      });
    }
  });

  _exports.default = _default;
});
;define("article-ember/helpers/app-version", ["exports", "article-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("article-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("article-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("article-ember/index", [], function () {
  "use strict";
});
;define("article-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "article-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("article-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("article-ember/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("article-ember/initializers/emberfire", ["exports", "emberfire/initializers/emberfire"], function (_exports, _emberfire) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberfire.default;
    }
  });
});
;define("article-ember/initializers/export-application-global", ["exports", "article-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("article-ember/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("article-ember/models/sentence", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    body: attr('string'),
    sortOrder: attr('number'),
    isDeleted: attr('boolean')
  });

  _exports.default = _default;
});
;define("article-ember/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("article-ember/router", ["exports", "article-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('sentences');
    this.route('new', {
      path: '/new/:sort_order'
    });
    this.route('sentence', {
      path: '/sentence/:sentence_id'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("article-ember/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    controllerName: 'sentence',

    model() {
      return this.store.createRecord('sentence', {
        sortOrder: 0
      });
    },

    renderTemplate: function (controller, model) {
      this.render('new', {
        model: model
      });
    }
  });

  _exports.default = _default;
});
;define("article-ember/routes/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    controllerName: 'sentence',

    model(params) {
      return this.store.createRecord('sentence', {
        sortOrder: params.sort_order
      });
    }

  });

  _exports.default = _default;
});
;define("article-ember/routes/sentence", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    controllerName: 'sentence',

    model(params) {
      return this.store.findRecord('sentence', params.sentence_id);
    },

    renderTemplate: function (controller, model) {
      this.render('edit', {
        model: model
      });
    }
  });

  _exports.default = _default;
});
;define("article-ember/routes/sentences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      let queryOptions = {
        query: ref => ref.where('isDeleted', '==', false).orderBy('sortOrder')
      };
      return this.store.query('sentence', queryOptions);
    },

    actions: {
      delete(sentence) {
        sentence.set('isDeleted', true);
        sentence.save();
        this.refresh();
      },

      new(claimingSortOrder) {
        this.transitionToRoute('/new/' + claimingSortOrder);
      },

      edit(sentence) {
        this.transitionToRoute('/sentence/' + sentence.id);
      }

    }
  });

  _exports.default = _default;
});
;define("article-ember/services/firebase-app", ["exports", "emberfire/services/firebase-app"], function (_exports, _firebaseApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebaseApp.default;
    }
  });
});
;define("article-ember/services/firebase", ["exports", "emberfire/services/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("article-ember/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MES2YDRI",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "article-ember/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("article-ember/templates/components/write", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qwBSZIiJ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\",true],[10,\"id\",\"new-sentence\"],[8],[0,\"\\n  \"],[5,\"textarea\",[],[[\"@form\",\"@value\"],[\"new-sentence\",[23,0,[\"sentence\",\"body\"]]]]],[0,\"  \"],[7,\"button\",true],[10,\"for\",\"new-sentence\"],[8],[0,\"create\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "article-ember/templates/components/write.hbs"
    }
  });

  _exports.default = _default;
});
;define("article-ember/templates/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CVnKimu6",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\",true],[8],[0,\"Edit\"],[9],[0,\"\\n\\n\"],[5,\"write\",[],[[\"@sentence\",\"@create\"],[[23,0,[\"model\"]],[28,\"action\",[[23,0,[]],\"edit\"],null]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "article-ember/templates/edit.hbs"
    }
  });

  _exports.default = _default;
});
;define("article-ember/templates/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gr/nQLck",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,0,[\"model\",\"isNew\"]]],null,{\"statements\":[[7,\"h1\",true],[8],[0,\"New\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[7,\"h1\",true],[8],[0,\"Edit\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[5,\"write\",[],[[\"@sentence\",\"@create\"],[[23,0,[\"model\"]],[28,\"action\",[[23,0,[]],\"createNew\"],null]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "article-ember/templates/new.hbs"
    }
  });

  _exports.default = _default;
});
;define("article-ember/templates/sentences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WrY21i4q",
    "block": "{\"symbols\":[\"sentence\",\"i\"],\"statements\":[[7,\"div\",true],[8],[0,\"\\n  \"],[7,\"h1\",true],[8],[0,\"Home\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"table\",true],[8],[0,\"\\n  \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"td\",true],[8],[0,\"\\n          \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"new\",[23,1,[\"sortOrder\"]]]],[8],[0,\"+\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"td\",true],[8],[0,\"\\n          \"],[1,[23,1,[\"body\"]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"td\",true],[8],[0,\"\\n          \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"edit\",[23,1,[]]]],[8],[0,\"edit\"],[9],[0,\"\\n          \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"delete\",[23,1,[]]]],[8],[0,\"x\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\n    \"],[7,\"tr\",true],[8],[0,\"\\n      \"],[7,\"td\",true],[8],[0,\"\\n        \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"new\",[23,0,[\"model\",\"length\"]]]],[8],[0,\"+\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "article-ember/templates/sentences.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('article-ember/config/environment', [], function() {
  var prefix = 'article-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("article-ember/app")["default"].create({"name":"article-ember","version":"0.0.0+52a4bebf"});
          }
        
//# sourceMappingURL=article-ember.map
