'use strict';

var config = require('../../../config');

var levels = ['log', 'trace', 'debug', 'info', 'warn', 'error'];
var logLevel = levels.indexOf(config.logLevel || 'log');

/**
 * @ngInject()
 */
function Logger($log) {
  // Interface
  var service = {};
  // Enable correct log level
  levels.forEach(function onEachLogLevel(level) {
    service[level] = (levels.indexOf(level) >= logLevel) ? $log[level] : angular.noop;
  });
  return service;
}

module.exports = Logger;
