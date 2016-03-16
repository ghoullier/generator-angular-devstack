import fs from 'fs'

import paths from './paths'
import args from './cli-args'
import { compile } from './string'

const env = args.env || 'dev'
const configPath = compile(paths.sources.config, {
  env
})

export default () => {
  const config = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(config)
}
