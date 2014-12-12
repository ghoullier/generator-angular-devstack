var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var pkg = require('../package');
var paths = require('./utils/paths');

module.exports = function() {
  return gulp.src([paths.dist.root + '**/*.*'])
    .pipe(ghPages({
      remoteUrl : pkg.repository.url,
      branch : 'gh-pages',
      cacheDir : __dirname + '/../.publish/'
    }))
  ;
};
