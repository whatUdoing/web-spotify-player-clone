import { IHttpClient } from 'http-client'
import { Router } from 'express'
import Container from 'typedi'
import apiConfig from '../config'
import { withAuth } from '../middlewares/with-auth'
import { getTokenAuthorizationHeader } from '../methods'
import { isRequestSuccess, replaceUrlParams } from '../../utils/tools'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const PLaylistsUrl = {
	getPlaylist: `/playlists/:playlistId`
}

export const initPlaylistsEndpoints: () => Router = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get(PLaylistsUrl.getPlaylist, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(`${baseApiUrl}${PLaylistsUrl.getPlaylist}`, {
					':playlistId': req.params.playlistId
				}),
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			if (isRequestSuccess(shopifyResp)) {
				return resp.status(200).json(shopifyResp.data)
			}
		} catch (error) {
			return resp.status(503).json(error)
		}
	})

	return router
}
