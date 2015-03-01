'use strict';

var os = require('os');
var path = require('path');
var yeoman = require('yeoman-generator');
var assert = yeoman.assert;
var helpers = yeoman.test;

var config = require('../app/config/files');
var tmp = path.join(os.tmpdir(), './yeoman-angular-devstack-test');

describe('angular-devstack:app', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(tmp)
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        flightplan: true
      })
      .on('end', done)
    ;
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
