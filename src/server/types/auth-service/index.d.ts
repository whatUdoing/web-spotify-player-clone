declare module 'auth-service' {
	import { Response } from 'http-client'
	import { TokenObject, TokenOperationResult } from 'tokens'

	export type AuthConfigObject = {
		clientId?: string
		clientSecret?: string
		redirectUri?: string
	}

	export type RequestData = {
		code?: string
		token?: TokenObject
		formData?: object
	} & AuthConfigObject

	export type AuthRespObject = {
		tokenObject?: TokenObject
		error?: {
			code: number
			message: string
		}
	}

	export interface IAuthService {
		getAuthToken(requestData: RequestData): Promise<AuthRespObject>

		saveToken(tokenObject: TokenObject): TokenOperationResult
		removeToken(accessToken: string): TokenOperationResult

		checkAndExtendAuth(
			accessToken: string,
			requestData: RequestData
		): Promise<[boolean, TokenObject | null, Error | null]>

		refreshToken(
			accessToken: string,
			requestData: RequestData
		): Promise<AuthRespObject>
		isAuthenticated(
			accessToken: string
		): Promise<[boolean, Error | null, boolean]>
	}
}
