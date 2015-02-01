'use strict';

import AppConfig from '../../config';

import LoggerProvider from './services/logger';

export default angular
  .module('<%= appname %>.common', [
    'ng'
  ])

  .constant('AppConfig', AppConfig)

  .provider('Logger', LoggerProvider)
;
