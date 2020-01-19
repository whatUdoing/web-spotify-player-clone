import {
	ServiceResponse,
	IUserService,
	AuthObject,
	User,
	MyDashboardResponse,
	PlaylistObjectSimplified
} from 'services'
import { Container } from '../../../lib/classes/dependency-injector/dependency-injector'
import { IUserApiClient } from 'api-client'
import { Response } from 'http-client'
import { CancelTokenSource } from 'axios'
import { PagingPlaylistObject } from 'redux-store'

const isResponseSuccess = (response: Response) => {
	return response.statusText === 'OK'
}

export default class UserService implements IUserService {
	async isAuthenticated(
		cancelToken?: CancelTokenSource
	): ServiceResponse<AuthObject> {
		const userApiClient: IUserApiClient = <IUserApiClient>(
			Container.get('user-api-client')
		)

		try {
			const response = await userApiClient.isAuthenticated(cancelToken)

			if (isResponseSuccess(response)) {
				return [<AuthObject>response.data.auth, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [{ isAuth: false }, null]
	}

	async logout(): ServiceResponse<boolean> {
		const userApiClient: IUserApiClient = <IUserApiClient>(
			Container.get('user-api-client')
		)

		try {
			const response = await userApiClient.logout()

			if (isResponseSuccess(response)) {
				return [response.data.logoutSuccesfull, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [false, null]
	}

	async getUserProfile(): ServiceResponse<User> {
		const userApiClient: IUserApiClient = <IUserApiClient>(
			Container.get('user-api-client')
		)

		try {
			const response = await userApiClient.getUserProfile()

			if (isResponseSuccess(response)) {
				return [response.data, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [null, null]
	}

	async getUserDashboard(
		cancelToken?: CancelTokenSource
	): ServiceResponse<MyDashboardResponse> {
		const userApiClient: IUserApiClient = <IUserApiClient>(
			Container.get('user-api-client')
		)

		try {
			const response = await userApiClient.getUserDashboard(cancelToken)

			if (isResponseSuccess(response)) {
				return [response.data, null]
			}
		} catch (err) {
			return [null, err]
		}

		return [null, null]
	}

	async getCurrentUserPlaylists(
		queryParams?: object,
		cancelToken?: CancelTokenSource
	): ServiceResponse<PagingPlaylistObject<PlaylistObjectSimplified>> {
		const userApiClient: IUserApiClient = <IUserApiClient>(
			Container.get('user-api-client')
		)

		try {
			const response = await userApiClient.getCurrentUserPlaylists(
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
