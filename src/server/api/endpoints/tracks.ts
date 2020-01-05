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

export const PLaylistsUrl = {
	getTrack: `/tracks/:trackId`
}

export const initTracksEndpoints = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get(PLaylistsUrl.getTrack, withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp = await httpClient.get(
				replaceUrlParams(
					`${baseApiUrl}${
						PLaylistsUrl.getTrack
					}?${querystring.stringify(req.query)}`,
					{
						':trackId': req.params.trackId
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
