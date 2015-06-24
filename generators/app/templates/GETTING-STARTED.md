# Getting started

### NPM Scripts

> List all available npm scripts

```console
npm run
```

### Developement

Livereload use [BrowserSync](http://www.browsersync.io)

> watch + livereload

```console
# Shortcut of 'gulp develop --env=dev'
npm start
```

### Production

> Build your application

```console
# Shortcut of 'gulp build --env=prod --optimze'
npm run build
```

```console
# Shortcut of 'gulp archive'
npm run archive
```

### CLI Options

- --env: Select target environment
- --optimize: Enable assets optimization

## First steps

#### Add dependency using bower

> Example with angular-bootstrap

- **--save** add dependency in  bower.json
- **--force-latest** force resolution to the latest version

```console
node node_modules/.bin/bower install angular-bootstrap --save --force-latest
```

Include dependency in **app/scripts/vendor.js**

```js
'use strict';

// Require vendors
require('../../vendor/angular/angular');
require('../../vendor/angular-ui-router/release/angular-ui-router');
// Your new dependency
require('../../vendor/angular-bootstrap/ui-bootstrap-tpls');
```


#### Controller

> Controllers should be declared in module <%= appname %>.ui.


> @ngInject allows you to dynamicly support [Angular explicit DI](https://docs.angularjs.org/guide/di)

```js
'use strict';

/**
 * @ngInject
 */
function DateController($log) {
  // ViewModel
  var vm = this;

  vm.date = new Date();

  $log.log(vm.date);
}

module.exports = DateController;
```

Then register it in module <%= appname %>.ui.

```js
'use strict';

module.exports = angular
  .module('<%= appname %>.ui', [
    'ui.router',
    '<%= appname %>.common',
    '<%= appname %>.data',
    '<%= appname %>.templates'
  ])
  .config(require('./config/route'))
  .controller('IndexController', require('./controllers/index'))
  .controller('DateController', require('./controllers/date'))
;
```

#### Routing

Application routing use [ui-router](https://github.com/angular-ui/ui-router) module.

Routes are described in this file **app/scripts/modules/ui/config/route.js**

```js
$stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'partials/views/index.html',
    controller: 'IndexController as vm'
  });
```

#### Partials

Views associated to templateUrl should be placed in **app/partials/**

HTML files in this folder are dynamically injected in the following file (**app/scripts/modules/templates/module.js**).

## Application structure

```console
.
├── README.md
├── bower.json
├── Gulpfile.js
├── package.json
├── src             // Where you code
│   ├── app         // Javascript files
│   ├── config
│   ├── partials    // AngularJS views
│   ├── styles
│   │   └── images  // Images files
│   └── index.html
└── tasks           // Gulp tasks
```

### Explanation app/scripts

```console
.
├── modules         // All application modules
│   ├── common      // Transversal Services
│   ├── data        // Data Access Services
│   ├── templates   // Generated Views
│   └── ui          // UI Layer (Controllers, Directives, Filters, ...)
└── app.js
```

> Module example

```js
'use strict';

module.exports = angular
  .module('<%= appname %>.ui', [
    'ui.router',
    '<%= appname %>.common'
    '<%= appname %>.data',
    '<%= appname %>.templates'
  ])
  .controller('WelcomeController', require('./controllers/welcome'))
;
```

### Explanation app/index.html

```html
<html data-ng-app="application.ui" data-ng-strict-di>
```

- data-ng-app: Set entry point module to "application.ui
- data-ng-strict-di: Set dependency injection in strict mode
