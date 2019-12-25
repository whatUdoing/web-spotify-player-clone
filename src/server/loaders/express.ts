import express, { Application } from 'express'
import { initAPI } from '../api/'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { Container } from 'typedi'
import path from 'path'
import { IConfigService } from 'config-service'

/**
 * Init express middlewars, as well as whole routing
 */
export const initExpress = async ({ app }: { app: Application }) => {
	const configService: IConfigService = Container.get('config-service')
	const { rootPath } = configService.getServerConfig()

	app.use(cookieParser())
	app.use(bodyParser.json())

	app.use('/assets', express.static(path.resolve(rootPath, 'dist/frontend/')))

	await initAPI({
		app
	})

	app.use('*', (req, res) => {
		res.sendFile(path.resolve(rootPath, 'dist/frontend/index.html'))
	})
}
