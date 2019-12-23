import { start } from './server'
import dotenv from 'dotenv'
import consola from 'consola'
import { ServerConfigRecord } from 'server'
import path from 'path'

const config = dotenv.config()

if (config.error) {
	consola.error(config.error)

	process.exit(1)
}

start(<ServerConfigRecord>{
	...config.parsed,
	rootPath: path.resolve(__dirname, '../')
})
