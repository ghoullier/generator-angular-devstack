var gulp = require('gulp');
var del = require('del');
var paths = require('./paths');

module.exports = function(callback) {
  return del([paths.dist.root], callback);
};
