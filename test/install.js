'use strict';

var path = require('path');
var generator = require('yeoman-generator');
var helpers = generator.test;
var assert = generator.assert;

describe('Install', function base() {
  this.timeout(60 * 1000);

  var generated;

  beforeEach(function (done) {
    generated = helpers.run(path.join(__dirname, '../app'))
                       .inDir(path.join(__dirname, 'temporary', 'base'));
    done();
  });

  it('creates expected files', function (done) {
    var expected = [
      '.gitignore',
      '.editorconfig',
      '.jshintrc',
      '.bowerrc',
      'Gulpfile.js',
      'GETTING-STARTED.md',
      'STYLEGUIDE.md',
      'tests/e2e/protractor.conf.js',
      'tests/e2e/scenarios.js',
      'bower.json',
      'package.json',
      'README.md',
      'app/index.html',
      'app/scripts/modules/common/module.js',
      'app/scripts/modules/data/module.js',
      'app/scripts/modules/templates/.gitignore',
      'app/scripts/modules/ui/module.js',,
      'app/scripts/modules/common/services/tracer.js',
      'app/scripts/modules/ui/config/route.js',
      'app/scripts/modules/ui/controllers/index.js',
      'app/scripts/main.js',
      'app/scripts/vendor.js',
      'app/styles/main.scss',
      'app/styles/modules/blocks/_all.scss',
      'app/styles/modules/pages/_all.scss',
      'app/styles/modules/_all.scss',
      'app/styles/partials/_all.scss',
      'app/styles/partials/_colors.scss',
      'app/styles/partials/_mixins.scss',
      'app/styles/partials/_reset.scss',
      'app/styles/images/.gitkeep',
      'app/views/index.html',
      'app/views/.gitkeep',
      'tasks/build.js',
      'tasks/clean.js',
      'tasks/config.js',
      'tasks/default.js',
      'tasks/env.js',
      'tasks/handlers.js',
      'tasks/images.js',
      'tasks/lint.js',
      'tasks/live-reload.js',
      'tasks/paths.js',
      'tasks/scripts-app.js',
      'tasks/scripts-vendor.js',
      'tasks/server-config.js',
      'tasks/server.js',
      'tasks/styles.js',
      'tasks/views.js',
      'tasks/watch.js',
      'tasks/templates.js'
    ];
    generated.on('end', function () {
      assert.file(expected);
      done();
    });
  });
});
