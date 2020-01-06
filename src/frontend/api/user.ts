import { IUserApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'
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
		// todo move prefix to config file
		return this.httpClient.get(`${apiConfig.apiPrefix}/me`).then(resp => {
			console.log(resp)

			return resp
		})
	}

	getUserDashboard(cancelToken?: CancelTokenSource) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/home-dashboard`, {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}

	getUserPlaylists(queryParams?: object, cancelToken?: CancelTokenSource) {
		return this.httpClient.get(`${apiConfig.apiPrefix}/me/playlists`, {
			params: queryParams ?? null,
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}
}
