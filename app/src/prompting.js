'use strict';

var chalk = require('chalk');
var path = require('path');
var yosay = require('yosay');

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
    message: 'What name do you give your project?',
    default: path.basename(process.cwd())
  }, {
    type: 'confirm',
    name: 'flightplan',
    message: 'Want to integrate Flightplan in your project?',
    default: true
  }];

  this.prompt(prompts, function onGetAnswers(answers) {
    this.properties.answers = answers;

    this.properties.templated.appname = answers.appname;

    done();
  }.bind(this));
};
