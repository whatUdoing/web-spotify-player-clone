import { IHttpClient } from 'http-client'
import { Router } from 'express'
import Container from 'typedi'
import apiConfig from '../config'
import { withAuth } from '../middlewares/with-auth'
import { getTokenAuthorizationHeader } from '../methods'
import { isRequestSuccess, replaceUrlParams } from '../../utils/tools'
import querystring from 'querystring'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const PlaylistsUrl = {
	getPlaylist: `/playlists/:playlistId`,
	getPlaylistTracks: `/playlists/:playlistId/tracks`
}

export const initPlaylistsEndpoints: () => Router = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get(PlaylistsUrl.getPlaylist, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(`${baseApiUrl}${PlaylistsUrl.getPlaylist}`, {
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

	router.get(PlaylistsUrl.getPlaylistTracks, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(
					`${baseApiUrl}${
						PlaylistsUrl.getPlaylistTracks
					}?${querystring.stringify(req.query)}`,
					{
						':playlistId': req.params.playlistId
					}
				),
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
