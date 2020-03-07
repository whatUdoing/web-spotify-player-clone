import { IUserApiClient } from 'api-client'
import { IHttpClient } from 'http-client'
import { CancelTokenSource } from 'axios'
import apiConfig from './config'

export default class UserApiClient implements IUserApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	isAuthenticated(cancelToken?: CancelTokenSource) {
		return this.httpClient.get('/is-authenticated', {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}

	logout() {
		return this.httpClient.post('/logout')
	}

	getUserProfile() {
		return this.httpClient.get(`${apiConfig.apiPrefix}/me`).then(resp => {
			return resp
		})
	}

	getUserDashboard(cancelToken?: CancelTokenSource) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/home-dashboard`, {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}

	getCurrentUserPlaylists(
		queryParams?: object,
		cancelToken?: CancelTokenSource
	) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/me/playlists`, {
			params: queryParams ?? null,
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}
}
