'use strict';

var chalk = require('chalk');
var path = require('path');
var yosay = require('yosay');
var _ = require('lodash');

var utils = require('./utils');

module.exports = function () {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    chalk.red('Welcome!') + '\n' +
    chalk.yellow('You\'re using Angular Devstack!')
  ));

  var prompts = [{
    type: 'input',
    name: 'appname',
    message: 'Confirm your application name?',
    default: utils.getAppName()
  }, {
    type: 'input',
    name: 'component',
    message: 'What name do you give your component?',
    default: 'component'
  }];

  this.prompt(prompts, function onGetAnswers(answers) {
    this.properties.answers = answers;

    this.properties.templated.appname = answers.appname;
    this.properties.templated.component = answers.component;
    this.properties.templated.controller = _.capitalize(answers.component);

    done();
  }.bind(this));
};
