'use strict';

/**
 * @ngInject
 */
function Faker() {
  var service = {};

  function getItems() {
    var items = [];
    var size = Math.ceil(Math.random() * 10);
    for (var i = 0; i < size; ++i) {
      items.push({
        id: i,
        name: ['data', i].join('--')
      });
    }
    return items;
  }

  // Exports
  service.getItems = getItems;

  return service;
}

module.exports = Faker;
