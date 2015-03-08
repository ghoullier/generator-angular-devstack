'use strict';

var merge = require('merge');

var config = require('./config');

var pkg = require('../../package');

module.exports = merge(config.TEMPLATED_VARIABLES, {
  APP_VERSION: pkg.version
});
