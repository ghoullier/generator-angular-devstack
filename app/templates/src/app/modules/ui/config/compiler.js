'use strict';

/**
 * @ngInject
 */
function CompilerConfig($compileProvider, AppConfig) {
  $compileProvider.debugInfoEnabled(AppConfig.NG_DEBUG_INFO_ENABLED);
}

module.exports = CompilerConfig;
