'use strict';

var del = require('del');

var paths = require('./utils/paths');

module.exports = function(callback) {
  return del([
    paths.dist.root
  ], callback);
};
