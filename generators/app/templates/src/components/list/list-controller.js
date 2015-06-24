'use strict';

function List(Faker) {
  'ngInject';

  // ViewModel
  var vm = this;

  vm.items = Faker.getItems();
}

module.exports = List;
