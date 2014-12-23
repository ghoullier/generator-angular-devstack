'use strict';

var server = require('tiny-lr')();
var refresh = require('gulp-livereload');

var emitter = require('../utils/event-emitter');

emitter.on('server:live-reload', onServerLiveReload)

function onServerLiveReload(filepath) {
  refresh.changed(filepath, server);
}

module.exports = server;
