import express, { Application } from 'express'
import { ServerConfigRecord } from 'server'
import consola from 'consola'
import path from 'path'

export const start = (config: ServerConfigRecord): void => {
	const app: Application = express()

	app.use(
		'/assets',
		express.static(path.resolve(config.rootPath, 'dist/web/frontend/'))
	)

	app.use('*', (req, res) => {
		res.sendFile(
			path.resolve(config.rootPath, 'dist/web/frontend/index.html')
		)
	})

	app.listen(config.port, () => {
		consola.info(`Server is listening on port ${config.port}`)
	})
}
