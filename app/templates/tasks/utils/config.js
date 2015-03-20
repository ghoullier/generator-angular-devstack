'use strict';

var fs = require('fs');

var paths = require('./paths');
var args = require('./cli-args');
var string =  require('./string');

var env = args.env || 'dev';
var configPath = string.compile(paths.sources.config, {
  env: env
});

module.exports = get;

function get() {
  var config = fs.readFileSync(configPath, 'utf8');
  return JSON.parse(config);
}
