'use strict';

var fs = require('fs');

exports.getAppName = getAppName;

function getAppName() {
  var data = fs.readFileSync(process.cwd() + '/package.json', {
    encoding: 'utf8'
  });
  var _package = JSON.parse(data);

  return _package.name;
}
