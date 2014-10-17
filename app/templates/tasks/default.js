var util = require('gulp-util');
var server = require('./server');
var config = require('./server-config');
var lrserver = require('./live-reload');

module.exports = function() {
  server.once('error', function onError(error) {
    if ('EADDRINUSE' === error.code) {
      util.log(util.colors.red('HTTP Server NOT started: port ' + config.serverport + ' is already used'));
      // End process
      process.exit(0);
    }
  });
  server.once('listening', function onListening() {
    // Notify server is running
    util.log('HTTP Server is running on: ' + util.colors.magenta('http://localhost:' + config.serverport));
    // Start live reload
    lrserver.listen(config.livereloadport);
  })
  // Start webserver
  server.listen(config.serverport);
};
