'use strict';

var browserSync = require('browser-sync');

module.exports = function() {
  browserSync({
    server: {
      baseDir: './dist/'
    }
  });
};
