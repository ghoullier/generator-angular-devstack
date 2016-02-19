// Module variables
const patternRegExp = /\{\{([\w\*\.]*?)\}\}/g;
const dotRegExp = /([^\.]+)/g;

/**
* Compile template
* @param  {String} template String to precompile
* @param  {Object} object   Template arguments
* @return {String}          Precompiled template
* @api public
*/
export const compile = (template, object) => {
  return template.replace(patternRegExp, (value, property) => {
    let key;
    let map = object;
    while ((key = dotRegExp.exec(property)) && (key = key[1])) {
      map = map ? (key == '*' ? map : map[key]) : null;
    }
    return map == void 0 ? '' : map;
  });
}
