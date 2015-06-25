'use strict';

var path = require('path');

var config = require('../config/files');

var DOT = '.';
var UNDERSCORE = '_';
var PATTERN = /component/;

module.exports = function () {

  var component = this.properties.templated.component;

  var componentify = function(context) {
    return path.join('src', 'components', component, context.replace(PATTERN, component));
  }

  var copyFile = function (source, destination) {
    destination = ('string' === typeof destination) ? destination : source;
    this.fs.copy(
      this.templatePath(source),
      this.destinationPath(componentify(destination))
    );
  }.bind(this);

  var copyTemplatedFile = function (file) {
    var basename = path.basename(file);
    var prefixed = file.replace(basename, UNDERSCORE + basename);
    this.fs.copyTpl(
      this.templatePath(prefixed),
      this.destinationPath(componentify(file)),
      this.properties.templated
    );
  }.bind(this);

  config.src.forEach(copyFile);
  config.templated.forEach(copyTemplatedFile);
};
