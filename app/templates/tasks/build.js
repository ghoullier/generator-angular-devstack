'use strict';

var runSequence = require('run-sequence');

module.exports = function(callback) {
  runSequence(
    'clean',
    'config',
    'templates',
    ['images', 'styles', 'fonts', 'html', 'lint', 'scripts'],
    callback
  );
};
