'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

var config = require('../generators/app/config/files');
var tmp = path.join(os.tmpdir(), './yeoman-angular-devstack-test');

describe('angular-devstack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(tmp)
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        appname: 'devstack-test'
      })
      .on('end', done);
  });

  it('creates src files', function () {
    assert.file(config.src);
  });

  it('creates tasks files', function () {
    assert.file(config.tasks);
  });

  it('creates dots files', function () {
    assert.file(config.dots);
  });

  it('creates templated files', function () {
    assert.file(config.templated);
  });
});
