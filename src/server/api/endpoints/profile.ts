import { Router } from 'express'
import { withAuth } from '../middlewares/with-auth'
import apiConfig from '../config'
import { IHttpClient, Response } from 'http-client'
import { getTokenAuthorizationHeader } from '../methods'
import Container from 'typedi'

const { baseApi } = apiConfig
const baseApiUrl = `${baseApi}/v1`

export const ProfileUrl = {
	me: `${baseApiUrl}/me`,
	mePlaylists: `${baseApiUrl}/me/playlists`,
	newReleases: `${baseApiUrl}/browse/new-releases`,
	topArtists: `${baseApiUrl}/me/top/artists`,
	topTracks: `${baseApiUrl}/me/top/tracks`
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
					return resp.status(503).json(error)
				})
		}
	})

	router.get('/home-dashboard', async (req, resp) => {
		//TODO refactor
		const dashboardContent: {
			content: {
				items: Array<Response>
			}
		} = {
			content: {
				items: []
			}
		}
		const accessToken = req.cookies.access_token

		if (accessToken) {
			//your playlist
			const presonalPlaylists: Response = await httpClient.get(
				ProfileUrl.mePlaylists,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			dashboardContent.content.items.push(presonalPlaylists.data)

			//personalization

			const topTracks: Response = await httpClient.get(
				ProfileUrl.topTracks,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			dashboardContent.content.items.push(topTracks.data)

			const topArtists: Response = await httpClient.get(
				ProfileUrl.topArtists,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			dashboardContent.content.items.push(topArtists.data)

			// new releases
			const newReleasess: Response = await httpClient.get(
				ProfileUrl.newReleases,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			dashboardContent.content.items.push(newReleasess.data.albums)

			// recommendations

			resp.json(dashboardContent)
		}
	})

	return router
}
