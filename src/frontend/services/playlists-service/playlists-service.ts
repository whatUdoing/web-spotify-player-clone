import { Container } from '../../utils/classes/dependency-injector'
import { IPlaylistsApiClient } from 'types/api-client'
import { isResponseSuccess } from '../../utils/functions/xhr'
import { PlaylistObjectFull, ServiceResponse } from 'types/services'
import { CancelTokenSource } from 'axios'

export default class PlaylistsService {
	async createPlaylist(
		playlistName: string,
		userId: string
	): ServiceResponse<PlaylistObjectFull> {
		const playlistsApiClient: IPlaylistsApiClient = <IPlaylistsApiClient>(
			Container.get('playlists-api-client')
		)

		try {
			const response = await playlistsApiClient.createPlaylist(
				playlistName,
				userId
			)

			if (isResponseSuccess(response, 'Created')) {
				return [response.data, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [null, null]
	}

	async getPlaylist(
		playlistId: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<SpotifyApi.PagingObject<PlaylistObjectFull>> {
		const playlistsApiClient: IPlaylistsApiClient = <IPlaylistsApiClient>(
			Container.get('playlists-api-client')
		)

		try {
			const response = await playlistsApiClient.getPlaylist(
				playlistId,
				cancelToken
			)

			if (isResponseSuccess(response)) {
				return [response.data, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [null, null]
	}
}
