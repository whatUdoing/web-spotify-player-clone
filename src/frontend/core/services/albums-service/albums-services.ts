import {
	ServiceResponse,
	IAlbumsService,
	AlbumObjectFull,
	TrackObjectSimplified
} from 'services'
import { CancelTokenSource } from 'axios'
import { IAlbumsApiClient } from 'api-client'
import { Container } from '../../../lib/classes/dependency-injector/dependency-injector'
import { isResponseSuccess } from '../../../lib/helpers/xhr/xhr'
import { PagingTrackObject } from 'redux-store'

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
		const tracks = album.tracks
		const queryParams = {
			offset: tracks.offset + tracks.limit
		}
		const albumsApiClient: IAlbumsApiClient = <IAlbumsApiClient>(
			Container.get('albums-api-client')
		)

		try {
			const response = await albumsApiClient.getTracks(
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
