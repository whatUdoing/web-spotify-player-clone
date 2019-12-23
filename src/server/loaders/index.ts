import { initAPI } from '../api/index'
import { Application } from 'express'
import { ServerConfigRecord } from 'server'
import { initExpress } from './express'
import { injectDependencies } from './dependencyInjector'

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
