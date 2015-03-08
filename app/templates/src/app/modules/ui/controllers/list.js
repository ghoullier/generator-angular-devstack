'use strict';

/**
 * @ngInject
 */
function List(Faker) {
  // ViewModel
  var vm = this;

  vm.items = Faker.getItems();
}

module.exports = List;
