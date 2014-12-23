'use strict';

var util = require('gulp-util');

var config = require('./server/config');

module.exports = function() {
  var http = require('./server/http');
  var lr = require('./server/live-reload');

  http.once('error', function onError(error) {
    if ('EADDRINUSE' === error.code) {
      util.log(util.colors.red('HTTP Server NOT started: port ' + config.serverport + ' is already used'));
      // End process
      process.exit(0);
    }
  });
  http.once('listening', function onListening() {
    // Notify server is running
    util.log('HTTP Server is running on: ' + util.colors.magenta('http://localhost:' + config.serverport));
    // Start live reload
    lr.listen(config.livereloadport);
  })
  // Start webserver
  http.listen(config.serverport);
};
