'use strict';

import { version as AppVersion } from '../../package';

import EventsEmitter from './services/events-emitter';
import Faker from './services/faker';
import Logger from './services/logger';

import compiler from './config/compiler';
import logger from './config/logger';

export default angular
  .module('<%= appname %>.shared', [
    'ng'
  ])
  .constant('AppVersion', AppVersion)
  .constant('EventsEmitter', EventsEmitter)

  .service('Faker', Faker)

  .provider('Logger', Logger)

  .config(compiler)
  .config(logger)
;
