import ListController from './list-controller';

import router from './router';

export default angular
  .module('<%= appname %>.components.list', [
    'ui.router'
  ])

  .controller('List', ListController)

  .config(router)
;
