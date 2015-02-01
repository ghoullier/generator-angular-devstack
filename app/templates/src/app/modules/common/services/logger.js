'use strict';

export default class LoggerProvider {
  constructor() {
    this.levels = ['log', 'trace', 'debug', 'info', 'warn', 'error'];
    this.logLevel = 0;
  }

  setLogLevel(logLevel) {
    this.logLevel = logLevel;
  }

  $get/*@ngInject*/($log) {
    var logger = {};
    this.levels.forEach(function onEachLogLevel(level) {
      logger[level] = (this.levels.indexOf(level) >= this.logLevel) ? $log[level] : angular.noop;
    }.bind(this));
    return logger;
  }
}
