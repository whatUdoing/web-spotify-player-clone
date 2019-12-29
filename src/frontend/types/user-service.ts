import { CancelTokenSource } from 'axios'

export interface IUserService {
	isAuthenticated(
		cancelToken?: CancelTokenSource
	): Promise<[AuthObject | null, Error | null]>
	getUserProfile(): Promise<[User | null, Error | null]>
	logout(): Promise<[boolean | null, Error | null]>
}

/**
 * todo: change to specific object shape
 */
export type User = object

export type AuthObject = {
	isAuth: boolean
	expiresIn?: number
}
