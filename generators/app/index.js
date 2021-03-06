'use strict';

var yeoman = require('yeoman-generator');

var prompting = require('./src/prompting');
var writing = require('./src/writing');

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json');

    this.properties = {};

    this.properties.templated = {
      APP_CONFIG: '<%= APP_CONFIG %>',
      APP_VERSION: '<%= APP_VERSION %>',
      BASE_HREF: '<%= BASE_HREF %>'
    };
  },

  prompting: prompting,

  writing: writing,

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
