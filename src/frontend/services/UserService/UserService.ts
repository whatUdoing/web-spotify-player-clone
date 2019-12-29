import { IUserService, AuthObject, User } from 'types/user-service'
import { Container } from '../../utils/classes/dependency-injector'
import { IUserApiClient } from 'types/api-client'
import { Response } from 'types/http-client'
import { CancelTokenSource } from 'axios'

const isResponseSuccess = (response: Response) => {
	return response.statusText === 'OK'
}

export default class UserService implements IUserService {
	async isAuthenticated(
		cancelToken?: CancelTokenSource
	): Promise<[AuthObject | null, Error | null]> {
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

	async logout(): Promise<[boolean | null, Error | null]> {
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

	async getUserProfile(): Promise<[User | null, Error | null]> {
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
}
