'use strict';

function LoggerConfig(AppConfig, LoggerProvider) {
  'ngInject';

  LoggerProvider.setLogLevel(AppConfig.LOG_LEVEL);
}

module.exports = LoggerConfig;
