import del from 'del';

import paths from './utils/paths';

export default (callback) => {
  return del([
    paths.dist.root
  ], callback);
};
