'use strict';

var path = require('path');

var config = require('../config/files');

var DOT = '.';
var UNDERSCORE = '_';

module.exports = function () {

  var copyFile = function (source, destination) {
    destination = ('string' === typeof destination) ? destination : source;
    this.fs.copy(
      this.templatePath(source),
      this.destinationPath(destination)
    );
  }.bind(this);

  var copyTemplatedFile = function (file) {
    var basename = path.basename(file);
    var prefixed = file.replace(basename, UNDERSCORE + basename);
    this.fs.copyTpl(
      this.templatePath(prefixed),
      this.destinationPath(file),
      this.properties.templated
    );
  }.bind(this);

  var copyDotFile = function (file) {
    var basename = path.basename(file);
    var prefixed = file.replace(basename, basename.substring(1));
    copyFile(prefixed, file);
  };

  config.src.forEach(copyFile);
  config.tasks.forEach(copyFile);
  config.templated.forEach(copyTemplatedFile);
  config.dots.forEach(copyDotFile);

  if (this.properties.answers.flightplan) {
    config.flightplan.forEach(copyFile);
  }
};
