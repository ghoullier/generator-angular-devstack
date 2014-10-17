'use strict';

/**
 * @ngInject
 */
function Tracer($log) {
  // Interface
  var service = {
    trace: trace
  };
  return service;

  // Implentation

  function trace(caller) {
    $log.log(caller.name);
  }
}

module.exports = Tracer;
