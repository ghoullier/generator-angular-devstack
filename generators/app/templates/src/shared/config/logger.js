export default (AppConfig, LoggerProvider) => {
  'ngInject'

  LoggerProvider.setLogLevel(AppConfig.LOG_LEVEL)
}
