'use strict';

var path = require('path');
var generator = require('yeoman-generator');
var helpers = generator.test;
var assert = generator.assert;

describe('Install', function base() {
  this.timeout(5 * 60 * 1000);

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
      'bower.json',
      'package.json',
      'README.md',
      'src/index.html',
      'src/config/config-dev.js',
      'src/config/config-prod.js',
      'src/app/.gitignore',
      'src/app/app.js',
      'src/app/vendor.js',
      'src/app/modules/common/module.js',
      'src/app/modules/common/services/logger.js',
      'src/app/modules/data/module.js',
      'src/app/modules/data/services/faker.js',
      'src/app/modules/templates/.gitignore',
      'src/app/modules/ui/module.js',
      'src/app/modules/ui/config/route.js',
      'src/app/modules/ui/controllers/index.js',
      'src/app/modules/ui/controllers/list.js',
      'src/styles/main.scss',
      'src/styles/modules/blocks/_all.scss',
      'src/styles/modules/pages/_all.scss',
      'src/styles/modules/_all.scss',
      'src/styles/partials/_all.scss',
      'src/styles/partials/_colors.scss',
      'src/styles/partials/_mixins.scss',
      'src/styles/partials/_reset.scss',
      'src/styles/images/.gitkeep',
      'src/partials/directives/.gitkeep',
      'src/partials/views/index.html',
      'src/partials/views/list.html',
      'tests/e2e/protractor.conf.js',
      'tests/e2e/scenarios.js',
      'tasks/build.js',
      'tasks/clean.js',
      'tasks/config.js',
      'tasks/develop.js',
      'tasks/fonts.js',
      'tasks/html.js',
      'tasks/images.js',
      'tasks/lint.js',
      'tasks/publish.js',
      'tasks/scripts-app.js',
      'tasks/scripts-vendor.js',
      'tasks/styles.js',
      'tasks/templates.js',
      'tasks/watch.js',
      'tasks/server/config.js',
      'tasks/server/http.js',
      'tasks/server/live-reload.js',
      'tasks/utils/cli-args.js',
      'tasks/utils/config.js',
      'tasks/utils/event-emitter.js',
      'tasks/utils/handlers.js',
      'tasks/utils/notifyer.js',
      'tasks/utils/paths.js',
      'tasks/utils/string.js'
    ];
    generated.on('end', function () {
      assert.file(expected);
      done();
    });
  });
});
