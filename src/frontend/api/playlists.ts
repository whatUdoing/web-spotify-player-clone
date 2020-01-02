import { IPlaylistsApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'
import { CancelTokenSource } from 'axios'
import apiConfig from './config'

export default class PlaylistsApiClient implements IPlaylistsApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	createPlaylist(
		playlistName: string,
		userId: string,
		cancelToken?: CancelTokenSource
	) {
		return this.httpClient.post(
			`${apiConfig.apiPrefix}/users/${userId}/playlists`,
			{
				name: playlistName
			},
			{
				cancelToken: cancelToken ? cancelToken.token : undefined
			}
		)
	}
}
