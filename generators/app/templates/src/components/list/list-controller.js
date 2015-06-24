export default class ListController {
  constructor(Faker) {
    'ngInject';

    this.items = Faker.getItems();
  }
}
