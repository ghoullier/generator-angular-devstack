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

#### Controller

> Controllers should be declared in your component folder **src/components/<component>/**


> 'ngInject' allows you to dynamicly support [Angular explicit DI](https://docs.angularjs.org/guide/di)

```js
'use strict';

export default class DateController {
  constructor($log) {
    'ngInject';

    this.date = new Date();

    $log.log(this.date):
  }
}
```

Then register it in module **src/components/<component>/index.js**

```js
'use strict';

import HomeController from './home-controller';
// ES6 import of your controller
import DateController from './date-controller';

import router from './router';

export default angular
  .module('<%= appname %>.components.home', [
    'ui.router'
  ])

  .controller('Home', HomeController)
  // Register your controller is component module
  .controller('Date', DateController)

  .config(router)
;

```

#### Routing

Application routing use [ui-router](https://github.com/angular-ui/ui-router) module.

Each component declare associated routes in a dedicated file **src/components/<component>/router.js**

```js
'use strict';

export default ($stateProvider) => {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'components/list/partials/list.html',
      controller: 'List as vm'
    })
  ;
};

```

#### Partials

Views associated to templateUrl should be placed in **src/components/<component>/partials/**

HTML files in this folder are dynamically injected in the following file (**src/templates.js**).

## Application structure

```console
.
├── CHANGELOG.md
├── GETTING-STARTED.md
├── README.md
├── bower.json      // Vendor declarations
├── gulpfile.babel.js
├── package.json
├── config          // Environment configuration files
├── src             // Where you code
│   ├── assets      // Javascript files
│   ├── components  // AngularJS components
│   ├── shared      // AngularJS shared elements
│   ├── app.js      // Application entry point
│   └── index.html
└── tasks           // Gulp tasks
```

### Explanation src/components

```console
.
└── <component>
    ├── partials   // Component templates
    ├── styles     // Component style
    ├── index.js   // Module declaration
    └── router.js  // Component routing declaration
```

> Component Module example

```js
'use strict';

// ES6 Import of controller declaration
import ListController from './list-controller';

// ES6 Import of routing declaration
import router from './router';

export default angular
  .module('<%= appname %>.components.list', [
    'ui.router'
  ])

  .controller('List', ListController)

  .config(router)
;
```

### Explanation app/index.html

```html
<html data-ng-app="application.ui" data-ng-strict-di>
```

- data-ng-app: Set entry point module to "application.ui
- data-ng-strict-di: Set dependency injection in strict mode

## Add dependency using bower

> Example with angular-bootstrap

- **--save** add dependency in  bower.json
- **--force-latest** force resolution to the latest version

```console
bower install angular-bootstrap --save --force-latest
```

Dependency automaticly added in **vendor.js** via main-bower-files
