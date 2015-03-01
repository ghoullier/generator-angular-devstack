'use strict';

var gulp = require('gulp');
var template = require('gulp-template');

var config = require('./utils/config');
var paths = require('./utils/paths');

module.exports = function() {
  return gulp
    .src(paths.sources.entries.config)
    .pipe(template({
      APP_CONFIG: JSON.stringify(config, null, 2)
    }))
    .pipe(gulp.dest(paths.dist.scripts))
  ;
};
