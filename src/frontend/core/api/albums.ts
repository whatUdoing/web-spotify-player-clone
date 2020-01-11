import { IAlbumsApiClient } from 'api-client'
import { IHttpClient } from 'http-client'
import { CancelTokenSource } from 'axios'
import apiConfig from './config'

export default class AlbumsApiClient implements IAlbumsApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	getAlbum(albumId: string, cancelToken?: CancelTokenSource) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/albums/${albumId}`, {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}

	getTracks(
		albumId: string,
		queryParams?: object,
		cancelToken?: CancelTokenSource
	) {
		return this.httpClient.get(
			`${apiConfig.apiPrefix}/albums/${albumId}/tracks`,
			{
				params: queryParams ?? null,
				cancelToken: cancelToken ? cancelToken.token : undefined
			}
		)
	}
}
