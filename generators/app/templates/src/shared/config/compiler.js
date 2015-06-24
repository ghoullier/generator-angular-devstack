'use strict';

function CompilerConfig($compileProvider, AppConfig) {
  'ngInject';

  $compileProvider.debugInfoEnabled(AppConfig.NG_DEBUG_INFO_ENABLED);
}

module.exports = CompilerConfig;
