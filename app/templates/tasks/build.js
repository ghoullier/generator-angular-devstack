var gulp = require('gulp');
var images = require('./images');
var styles = require('./styles');
var lint = require('./lint');
var app = require('./scripts-app');
var vendor = require('./scripts-vendor');
var templates = require('./templates');
var views = require('./views');

module.exports = function() {
  images();
  styles();
  lint();
  app();
  vendor();
  templates();
  views();
};
