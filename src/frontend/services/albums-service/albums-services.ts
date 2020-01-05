import {
	ServiceResponse,
	IAlbumsService,
	AlbumObjectFull,
	TrackObjectSimplified
} from 'types/services'
import { CancelTokenSource } from 'axios'
import { IAlbumsApiClient } from 'types/api-client'
import { Container } from '../../utils/classes/dependency-injector'
import { isResponseSuccess } from '../../utils/functions/xhr'
import { PagingTrackObject } from 'types/redux'

export default class AlbumsService implements IAlbumsService {
	async getAlbum(
		albumId: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<AlbumObjectFull> {
		const albumsApiClient: IAlbumsApiClient = <IAlbumsApiClient>(
			Container.get('albums-api-client')
		)

		try {
			const response = await albumsApiClient.getAlbum(
				albumId,
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

	async getAlbumTracks(
		album: AlbumObjectFull,
		cancelToken?: CancelTokenSource
	): ServiceResponse<PagingTrackObject<TrackObjectSimplified>> {
		// TODO: refactor to one function
		const tracks = album.tracks
		const queryParams = {
			offset: tracks.offset + tracks.limit
		}
		const playlistsApiClient: IAlbumsApiClient = <IAlbumsApiClient>(
			Container.get('albums-api-client')
		)

		try {
			const response = await playlistsApiClient.getTracks(
				album.id,
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
