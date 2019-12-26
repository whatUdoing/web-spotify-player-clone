import { Router } from 'express'
import { withAuth } from '../middlewares/with-auth'
import apiConfig from '../config'
import { IHttpClient } from 'http-client'
import { getTokenAuthorizationHeader } from '../methods'
import Container from 'typedi'

const { baseApi } = apiConfig
export const ProfileUrl = {
	me: `${baseApi}/v1/me`
}

export const initProfile: () => Router = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get('/me', withAuth, (req, resp) => {
		const accessToken = req.cookies.access_token

		if (accessToken) {
			httpClient
				.get(ProfileUrl.me, {
					headers: getTokenAuthorizationHeader(accessToken)
				})
				.then(shopifyResp => {
					if (shopifyResp.statusText === 'OK') {
						return resp.status(200).json(shopifyResp.data)
					}
				})
				.catch(error => {
					return resp.status(503).json({
						error: error?.message
					})
				})
		}
	})

	return router
}
