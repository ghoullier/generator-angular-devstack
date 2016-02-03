export default ($compileProvider, AppConfig) => {
  'ngInject'

  $compileProvider.debugInfoEnabled(AppConfig.NG_DEBUG_INFO_ENABLED)
}
