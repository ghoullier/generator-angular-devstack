'use strict';

export default LoggerConfig;

/**
 * @ngInject
 */
function LoggerConfig(AppConfig, LoggerProvider) {
  // Set log level
  LoggerProvider.setLogLevel(AppConfig.LOG_LEVEL);
}
