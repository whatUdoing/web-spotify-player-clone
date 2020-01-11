import {
	ITracksService,
	ServiceResponse,
	PlaylistObjectFull,
	TrackObjectFull
} from 'services'
import { CancelTokenSource } from 'axios'
import { IPlaylistsApiClient, ITracksApiClient } from 'api-client'
import { Container } from '../../lib/classes/dependency-injector/dependency-injector'
import { isResponseSuccess } from '../../lib/helpers/xhr/xhr'

export default class TracksSrvice implements ITracksService {
	async getTrack(
		trackId: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<TrackObjectFull> {
		const tracksApiClient: ITracksApiClient = <ITracksApiClient>(
			Container.get('tracks-api-client')
		)

		try {
			const response = await tracksApiClient.getTrack(
				trackId,
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
