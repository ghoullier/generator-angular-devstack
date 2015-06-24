import { name as list} from './list';
import { name as home} from './home';

import router from './router';

export default angular
  .module('<%= appname %>.components', [
    list,
    home
  ])

  .config(router)
;
