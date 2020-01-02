import { Application, Router } from 'express'
import { initAuthEndpoints } from './endpoints/auth'
import { initProfileEndpoints } from './endpoints/profile'
import { initUserEndpoints } from './endpoints/user'
import Container from 'typedi'
import { IConfigService } from 'config-service'
import apiConfing from './config'

export const initAPI = async ({ app }: { app: Application }) => {
	const configService: IConfigService = Container.get('config-service')
	const router = Router()

	const authRouter = initAuthEndpoints({
		config: configService.getAuthConfig()
	})

	const profileRouter = initProfileEndpoints()
	const userRouter = initUserEndpoints()

	router.use(authRouter)
	router.use(`/${apiConfing.apiVersion}`, profileRouter)
	router.use(`/${apiConfing.apiVersion}`, userRouter)

	app.use(router)
}
