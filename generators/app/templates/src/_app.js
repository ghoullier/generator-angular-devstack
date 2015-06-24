import { name as templates } from './templates';
import { name as shared } from './shared';
import { name as components } from './components';

export default angular
  .module('<%= appname %>', [
    templates,
    shared,
    components
  ])
;
