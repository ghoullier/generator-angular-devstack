'use strict';

var paths = require('./paths');
var args = require('./cli-args');
var string =  require('./string');

var env = args.env || 'dev';
var configPath = '../.' + string.compile(paths.sources.config, {
  env: env
});

module.exports = require(configPath);
