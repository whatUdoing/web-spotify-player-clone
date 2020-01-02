import { Router } from 'express'
import { withAuth } from '../middlewares/with-auth'
import apiConfig from '../config'
import { IHttpClient, Response } from 'http-client'
import { getTokenAuthorizationHeader } from '../methods'
import Container from 'typedi'
import { isRequestSuccess } from '../../utils/tools'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const ProfileUrl = {
	me: `${baseApiUrl}/me`,
	mePlaylists: `${baseApiUrl}/me/playlists`,
	newReleases: `${baseApiUrl}/browse/new-releases`,
	topArtists: `${baseApiUrl}/me/top/artists`,
	topTracks: `${baseApiUrl}/me/top/tracks`
}

export const initProfileEndpoints: () => Router = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get('/me', withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp: Response = await httpClient.get(ProfileUrl.me, {
				headers: getTokenAuthorizationHeader(accessToken)
			})

			if (isRequestSuccess(shopifyResp)) {
				return resp.status(200).json(shopifyResp.data)
			}
		} catch (error) {
			return resp.status(503).json(error)
		}
	})

	router.get('/me/playlists', withAuth, async (req, resp) => {
		const accessToken = req.cookies.access_token

		try {
			const shopifyResp: Response = await httpClient.get(
				ProfileUrl.mePlaylists,
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

	router.get('/home-dashboard', withAuth, async (req, resp) => {
		//TODO refactor add try/catch,with-auth
		const dashboardContent: {
			items: Array<any>
		} = {
			items: []
		}

		const accessToken = req.cookies.access_token

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
	})

	return router
}
