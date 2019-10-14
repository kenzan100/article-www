'use strict';

define("article-ember/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n6:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/sentence-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/sentence-list.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('components/write.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/write.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/sentence.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/sentence.js should pass ESLint\n\n');
  });
  QUnit.test('models/sentence.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/sentence.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new.js should pass ESLint\n\n');
  });
  QUnit.test('routes/sentence.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sentence.js should pass ESLint\n\n');
  });
  QUnit.test('routes/sentences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sentences.js should pass ESLint\n\n');
  });
});
define("article-ember/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('article-ember/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'article-ember/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('article-ember/templates/components/write.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'article-ember/templates/components/write.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('article-ember/templates/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'article-ember/templates/edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('article-ember/templates/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'article-ember/templates/new.hbs should pass TemplateLint.\n\narticle-ember/templates/new.hbs\n  5:8  error  Incorrect indentation for `if` beginning at L1:C0. Expected `{{/if}}` ending at L5:C8 to be at an indentation of 0 but was found at 3.  block-indentation\n  2:0  error  Incorrect indentation for `<h1>` beginning at L2:C0. Expected `<h1>` to be at an indentation of 2 but was found at 0.  block-indentation\n  4:0  error  Incorrect indentation for `<h1>` beginning at L4:C0. Expected `<h1>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('article-ember/templates/sentences.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'article-ember/templates/sentences.hbs should pass TemplateLint.\n\narticle-ember/templates/sentences.hbs\n  7:40  error  \'i\' is defined but never used  no-unused-block-params\n');
  });
});
define("article-ember/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("article-ember/tests/test-helper", ["article-ember/app", "article-ember/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('article-ember/config/environment', [], function() {
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

require('article-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
