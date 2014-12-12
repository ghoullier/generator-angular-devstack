'use strict';

var images = require('./images');
var styles = require('./styles');
var fonts = require('./fonts');
var lint = require('./lint');
var app = require('./scripts-app');
var vendor = require('./scripts-vendor');
var templates = require('./templates');
var html = require('./html');

module.exports = function() {
  images();
  styles();
  fonts();
  html();
  lint();
  app();
  vendor();
  templates();
};
