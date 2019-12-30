import { IUserApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'
import { CancelTokenSource } from 'axios'

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
		return this.httpClient.get('/v1/me')
	}

	getUserDashboard(cancelToken?: CancelTokenSource) {
		return this.httpClient.get('/v1/home-dashboard', {
			cancelToken: cancelToken ? cancelToken.token : undefined
		})
	}
}
