'use strict';

export default CompilerConfig;

/**
 * @ngInject
 */
function CompilerConfig($compileProvider, AppConfig) {
  $compileProvider.debugInfoEnabled(AppConfig.ngDebugInfoEnabled);
}
