'use strict';

var emitter = require('./event-emitter');
var Transform = require('stream').Transform;

function reload() {
  var piped = new Transform({
    objectMode:true
  });
  piped._transform = function(file, encoding, next) {
    emitter.emit('server:live-reload', file.path);
    next();
  };
  return piped;
}

module.exports = {
  reload: reload
}
