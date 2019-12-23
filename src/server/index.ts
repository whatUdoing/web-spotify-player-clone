import express, { Application } from 'express'
import { ServerConfigRecord } from 'server'
import consola from 'consola'
import { initLoaders } from './loaders/'

export const start = (config: ServerConfigRecord): void => {
	const app: Application = express()

	initLoaders({
		app,
		config
	})

	app.listen(config.port, () => {
		consola.info(`Server is listening on port ${config.port}`)
	})
}
