import { IHttpClient } from 'http-client'
import { Router } from 'express'
import Container from 'typedi'
import apiConfig from '../config'

const { baseApi, apiVersion } = apiConfig
const baseApiUrl = `${baseApi}/${apiVersion}`

export const ProfileUrl = {
	getPlaylist: `/playlists/:playlistId`
}

export const initPlaylistsEndpoints: () => Router = () => {
	const httpClient: IHttpClient = Container.get('http-client')
	const router = Router()

	router.get(ProfileUrl.getPlaylist)

	return router
}
