'use strict';

export default class List {
  constructor/*@ngInject*/(Logger, Faker) {
    Logger.log('List::constructor');
    this.items = Faker.getItems();
  }
}
