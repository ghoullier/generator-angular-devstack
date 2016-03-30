import { version as AppVersion } from '../../package'

import { AsyncFaker } from './services/async-faker'

import compiler from './config/compiler'

export default angular
  .module('<%= appname %>.shared', [
    'ng'
  ])
  .constant('AppVersion', AppVersion)

  .service('AsyncFaker', AsyncFaker)

  .config(compiler)
