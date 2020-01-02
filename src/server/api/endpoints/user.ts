import { Router, response } from 'express'
import { IHttpClient } from 'http-client'
import Container from 'typedi'
import { withAuth } from '../middlewares/with-auth'
import apiConfig from '../config'
import { getTokenAuthorizationHeader } from '../methods'
import { replaceUrlParams, isRequestSuccess } from '../../utils/tools'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const ProfileUrl = {
	createPlaylist: `/users/:userId/playlists`
}

export const initUserEndpoints = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.post(ProfileUrl.createPlaylist, withAuth, async (req, resp) => {
		const userId = req.params.userId
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.post(
				replaceUrlParams(`${baseApiUrl}${ProfileUrl.createPlaylist}`, {
					':userId': userId
				}),
				{
					name: req.body.name
				},
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			if (isRequestSuccess(shopifyResp, 'Created')) {
				return resp.status(201).json(shopifyResp.data)
			}
		} catch (error) {
			return resp.status(503).json(error)
		}
	})

	return router
}
