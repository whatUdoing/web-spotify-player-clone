import { IUserApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'

export default class UserApiClient implements IUserApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	isAuthenticated() {
		return this.httpClient.get('/isAuthenticated')
	}

	logout() {
		return this.httpClient.post('/logout')
	}

	getUserProfile() {
		// todo move prefix to config file
		return this.httpClient.get('/v1/me')
	}
}
