import { Application } from 'express'
import { ServerConfigRecord } from 'server'
import { initExpress } from './express'
import { injectDependencies } from './dependency-injector'

export const initLoaders = async ({
	app,
	config
}: {
	app: Application
	config: ServerConfigRecord
}) => {
	injectDependencies(config)

	initExpress({
		app
	})
}
