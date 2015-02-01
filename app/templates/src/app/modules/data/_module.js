'use strict';

import Faker from './services/faker';

export default angular
  .module('<%= appname %>.data', [
    'ng',

    '<%= appname %>.common'
  ])

  .service('Faker', Faker)
;
