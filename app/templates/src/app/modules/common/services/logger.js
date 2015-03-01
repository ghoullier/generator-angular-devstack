'use strict';

var levels = ['log', 'trace', 'debug', 'info', 'warn', 'error'];
var logLevel = 0;

function LoggerProvider() {
  // DDO
  return {
    setLogLevel: setLogLevel,
    $get: $get
  };

  // Implementation

  /**
   * @ngInject
   */
  function $get($log) {
    // Interface
    var service = {};
    // Enable correct log level
    levels.forEach(function onEachLogLevel(level) {
      service[level] = (levels.indexOf(level) >= logLevel) ? $log[level] : angular.noop;
    });
    return service;
  }

  function setLogLevel(level) {
    logLevel = levels.indexOf(level);
  }
}

module.exports = LoggerProvider;
