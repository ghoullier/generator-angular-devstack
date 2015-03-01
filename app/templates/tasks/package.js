'use strict';

var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

var pkg = require('../package');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');

var archive = args.archive || [pkg.name, pkg.version].join('-');

// Package task
module.exports = function() {
  return gulp
    .src([paths.dist.root + '**/*'])
    .pipe(tar(archive + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'))
  ;
};
