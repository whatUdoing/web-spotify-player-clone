import { ITracksApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'
import { CancelTokenSource } from 'axios'
import apiConfig from './config'

export default class TracksApiClient implements ITracksApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	getTrack(trackId: string, cancelToken?: CancelTokenSource) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/tracks/${trackId}`, {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}
}
