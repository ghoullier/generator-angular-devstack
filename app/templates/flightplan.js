'use strict';

// https://github.com/pstadler/flightplan/blob/master/README.md
// cat ~/.ssh/id_rsa.pub | ssh <user>@<IP> "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"

var plan = require('flightplan');

var pkg = require('./package');

var archive = [pkg.name, pkg.version].join('-');
var deploy = '/path/to/deploy/directory/';

/*
plan.target('target', {
  host: '<IP>',
  username: '<user>',
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Package');

  local.exec('npm run package -- --archive=' + archive);

  local.transfer(archive + '.tar.gz', deploy);
});

plan.remote(function(remote) {
  remote.log('Deploy');

  remote.with('cd ' + deploy, function() {
    remote.tar('-xvf ' + archive + '.tar.gz');
  });
});
*/
