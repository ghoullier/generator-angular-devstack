'use strict';

export default class Index {
  constructor/*@ngInject*/(Logger) {
    Logger.log('Index::constructor');
    this.welcomeMessage = 'Welcome message generated by AngularJS';
  }
}
