'use strict';

/**
 * @ngInject
 */
function CompilerConfig($compileProvider, AppConfig) {
  $compileProvider.debugInfoEnabled(AppConfig.ngDebugInfoEnabled);
}

module.exports = CompilerConfig;
