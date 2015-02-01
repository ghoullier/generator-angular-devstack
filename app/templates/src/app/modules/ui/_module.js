'use strict';

import compiler from './config/compiler';
import logger from './config/logger';
import router from './config/router';

import Index from'./controllers/index';
import List from'./controllers/list';

export default angular
  .module('<%= appname %>.ui', [
    'ng',

    'ui.router',

    '<%= appname %>.common',
    '<%= appname %>.data',
    '<%= appname %>.templates'
  ])

  .config(compiler)
  .config(logger)
  .config(router)

  .controller('Index', Index)
  .controller('List', List)
;
