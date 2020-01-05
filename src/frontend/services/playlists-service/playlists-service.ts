import { Container } from '../../utils/classes/dependency-injector'
import { IPlaylistsApiClient } from 'types/api-client'
import { isResponseSuccess } from '../../utils/functions/xhr'
import {
	PlaylistObjectFull,
	ServiceResponse,
	TrackObjectFull,
	IPlaylistsService
} from 'types/services'
import { CancelTokenSource } from 'axios'
import { PagingTrackObject, PlaylistTrackObject } from 'types/redux'

export default class PlaylistsService implements IPlaylistsService {
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
	): ServiceResponse<PlaylistObjectFull> {
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

	async getPlaylistTracks(
		playlist: PlaylistObjectFull,
		cancelToken?: CancelTokenSource
	): ServiceResponse<PagingTrackObject<PlaylistTrackObject>> {
		// TODO: refactor to one function
		const tracks = playlist.tracks
		const queryParams = {
			offset: tracks.offset + tracks.limit
		}
		const playlistsApiClient: IPlaylistsApiClient = <IPlaylistsApiClient>(
			Container.get('playlists-api-client')
		)

		try {
			const response = await playlistsApiClient.getTracks(
				playlist.id,
				queryParams,
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
