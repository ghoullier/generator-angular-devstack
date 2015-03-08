'use strict';

var browserSync = require('browser-sync');
var fs = require('fs');
var url = require('url');

var paths = require('./utils/paths');

module.exports = function() {
  browserSync({
    server: {
      baseDir: paths.dist.root,
      middleware: pushStateMiddleware
    }
  });
};

/**
 * Middelware that support pushState
 */
function pushStateMiddleware(request, response, next) {
  var pathname = paths.dist.root + url.parse(request.url).pathname;
  fs.exists(pathname, function onExists(exists) {
    if (!exists) {
      request.url = '/index.html';
    }
    return next();
  });
}
