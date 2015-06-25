'use strict';

const levels = ['log', 'trace', 'debug', 'info', 'warn', 'error'];
let logLevel = 0;

export function LoggerProvider() {
  // DDO
  return { setLogLevel, $get };

  // Implementation

  function $get($log) {
    'ngInject';

    // Interface
    const service = {};
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
