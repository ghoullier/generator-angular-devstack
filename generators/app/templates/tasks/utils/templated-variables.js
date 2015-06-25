'use strict';

import merge from 'merge';

import config from './config';

import pkg from '../../package';

export default function() {
  return merge(config().TEMPLATED_VARIABLES, {
    APP_VERSION: pkg.version
  });
}
