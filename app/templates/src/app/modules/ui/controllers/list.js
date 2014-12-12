'use strict';

/**
 * @ngInject
 */
function List(Logger, Faker) {
  Logger.debug('List');
  // ViewModel
  var vm = this;

  vm.items = Faker.getItems();
}

module.exports = List;
