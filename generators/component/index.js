'use strict';

var yeoman = require('yeoman-generator');

var prompting = require('./src/prompting');
var writing = require('./src/writing');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json');

    this.properties = {
      templated: {}
    };
  },

  prompting: prompting,

  writing: writing,

  install: function () {

  }
});
