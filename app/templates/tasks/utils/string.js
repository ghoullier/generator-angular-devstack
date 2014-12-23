'use strict';

// Module variables
var patternRegExp = /\{\{([\w\*\.]*?)\}\}/g;
var dotRegExp = /([^\.]+)/g;


/**
* Compile template
* @param  {String} template String to precompile
* @param  {Object} object   Template arguments
* @return {String}          Precompiled template
* @api public
*/
function compile(template, object) {
  var args = arguments.length > 2 ? arguments : object;
  return template.replace(patternRegExp, function(value, property) {
    var key;
    var map = args;
    while ((key = dotRegExp.exec(property)) && (key = key[1])) {
      map = map ? (key == '*' ? map : map[key]) : null;
    }
    return map == void 0 ? '' : map;
  });
}
module.exports.compile = compile
