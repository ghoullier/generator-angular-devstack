'use strict';

function <%= controller %>() {
  'ngInject';

  // ViewModel
  var vm = this;

  vm.welcomeMessage = 'Message de bienvenue affiché par Angular JS';
}

module.exports = <%= controller %>;
