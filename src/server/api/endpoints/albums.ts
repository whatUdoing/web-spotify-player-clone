import { Router } from 'express'
import { isRequestSuccess, replaceUrlParams } from '../../utils/tools'
import { getTokenAuthorizationHeader } from '../methods'
import { withAuth } from '../middlewares/with-auth'
import { IHttpClient } from 'http-client'
import Container from 'typedi'
import apiConfig from '../config'
import querystring from 'querystring'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const PlaylistsUrl = {
	getAlbum: `/albums/:albumId`,
	getAlbumTracks: `/albums/:albumId/tracks`
}

export const initAlbumsEndpoints = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	// TODO: refactor to maybe one function
	router.get(PlaylistsUrl.getAlbum, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(
					`${baseApiUrl}${
						PlaylistsUrl.getAlbum
					}?${querystring.stringify(req.query)}`,
					{
						':albumId': req.params.albumId
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

	router.get(PlaylistsUrl.getAlbumTracks, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(
					`${baseApiUrl}${
						PlaylistsUrl.getAlbumTracks
					}?${querystring.stringify(req.query)}`,
					{
						':albumId': req.params.albumId
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
