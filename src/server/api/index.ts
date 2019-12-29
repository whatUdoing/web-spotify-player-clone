import { Application, Router } from 'express'
import { initAuth } from './endpoints/auth'
import { initProfile } from './endpoints/profile'
import Container from 'typedi'
import { IConfigService } from 'config-service'

export const initAPI = async ({ app }: { app: Application }) => {
	const configService: IConfigService = Container.get('config-service')
	const router = Router()

	const authRouter = initAuth({
		config: configService.getAuthConfig()
	})

	const profileRouter = initProfile()

	router.use(authRouter)
	router.use('/v1', profileRouter)

	app.use(router)
}
