'use strict';

var util = require('gulp-util');

function onGenericError(error) {
  util.beep();
  util.log(util.colors.red(error));
}

function onBrowserifyError(error) {
  util.beep();
  util.log(util.colors.red(error.message));
  this.end();
}

module.exports = {
  onBrowserifyError: onBrowserifyError,
  onGenericError: onGenericError
};
