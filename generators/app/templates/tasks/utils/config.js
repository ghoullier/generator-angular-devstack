import fs from 'fs';

import paths from './paths';
import args from './cli-args';
import string from './string';

const env = args.env || 'dev';
const configPath = string.compile(paths.sources.config, {
  env: env
});

export default function() {
  var config = fs.readFileSync(configPath, 'utf8');
  return JSON.parse(config);
};
