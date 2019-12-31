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
			items: Array<any>
		} = {
			items: []
		}

		const accessToken = req.cookies.access_token

		if (accessToken) {
			//your playlist
			const presonalPlaylistsResponse: Response = await httpClient.get(
				ProfileUrl.mePlaylists,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			const presonalPlaylists = presonalPlaylistsResponse.data
			presonalPlaylists.type = 'playlist'
			presonalPlaylists.title = 'Your playlists'
			dashboardContent.items.push(presonalPlaylists)

			//personalization

			const topTracksResponse: Response = await httpClient.get(
				ProfileUrl.topTracks,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			const topTracks = topTracksResponse.data
			topTracks.title = 'Top tracks for you'
			topTracks.type = 'track'
			dashboardContent.items.push(topTracks)

			const topArtistsResponse: Response = await httpClient.get(
				ProfileUrl.topArtists,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			const topArtists = topArtistsResponse.data
			topArtists.title = 'Top artists for you'
			topArtists.type = 'artist'
			dashboardContent.items.push(topArtists)

			// new releases
			const newReleasesResponse: Response = await httpClient.get(
				ProfileUrl.newReleases,
				{
					headers: getTokenAuthorizationHeader(accessToken)
				}
			)

			const newReleases = newReleasesResponse.data.albums
			newReleases.title = 'New releases'
			newReleases.type = 'album'
			dashboardContent.items.push(newReleases)

			// recommendations

			resp.json(dashboardContent)
		}
	})

	return router
}
