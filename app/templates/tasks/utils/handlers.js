'use strict';

var util = require('gulp-util');

function onGenericError(error) {
  var message = JSON.stringify({
    file: error.file,
    line: error.line,
    message: error.message
  });

  util.beep();
  util.log(util.colors.red(message));
}

function onBrowserifyError(error) {
  var message = JSON.stringify({
    filename: error.filename,
    message: error.message
  });

  util.beep();
  util.log(util.colors.red(message));
}

module.exports = {
  onBrowserifyError: onBrowserifyError,
  onGenericError: onGenericError
};
