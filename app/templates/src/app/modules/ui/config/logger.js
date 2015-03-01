'use strict';

/**
 * @ngInject
 */
function LoggerConfig(AppConfig, LoggerProvider) {
  LoggerProvider.setLogLevel(AppConfig.LOG_LEVEL);
}

module.exports = LoggerConfig;
