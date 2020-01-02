import { Container } from '../../utils/classes/dependency-injector'
import { IPlaylistsApiClient } from 'types/api-client'
import { isResponseSuccess } from '../../utils/functions/xhr'
import { PlaylistObjectFull, ServiceResponse } from 'types/services'

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
}
