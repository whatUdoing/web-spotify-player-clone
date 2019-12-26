import { IAuthService, RequestData, AuthRespObject } from 'auth-service'
import { IHttpClient } from 'http-client'
import formurlencoded from 'form-urlencoded'
import { TokenObject, ITokenService, TokenOperationResult } from 'tokens'
import { AuthUrls } from '../api/endpints/auth'

export default class AuthService implements IAuthService {
	tokenService: ITokenService
	httpClient: IHttpClient

	constructor(tokenService: ITokenService, httpClient: IHttpClient) {
		this.tokenService = tokenService
		this.httpClient = httpClient
	}

	getAuthToken(requestData: RequestData) {
		const { clientId, clientSecret } = requestData

		return this.httpClient
			.post(AuthUrls.getToken, formurlencoded(requestData.formData), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' +
						Buffer.from(clientId + ':' + clientSecret).toString(
							'base64'
						)
				}
			})
			.then(resp => {
				const result: AuthRespObject = {}

				if (resp.statusText === 'OK') {
					const {
						access_token,
						token_type,
						expires_in,
						refresh_token,
						scope
					} = resp.data

					result.tokenObject = {
						accessToken: access_token,
						tokenType: token_type,
						expiresIn: expires_in,
						creationDate: Date.now(),
						refreshToken: refresh_token,
						scope
					}

					return result
				}

				result.error = {
					code: resp.status,
					message: resp.statusText
				}

				return result
			})
			.catch(error => {
				// TODO change code
				return <AuthRespObject>{
					code: 502,
					message: error.message
				}
			})
	}

	isTokenValid(tokenObject: TokenObject) {
		return true
		return tokenObject.creationDate + tokenObject.expiresIn > Date.now()
	}

	async checkAndExtendAuth(
		accessToken: string,
		requestData: RequestData
	): Promise<[boolean, TokenObject | null, Error | null]> {
		const { clientId, clientSecret } = requestData
		let [isAuth, error, expired] = await this.isAuthenticated(accessToken)
		let [tokenObject, tokenError] = this.tokenService.getTokenObject(
			accessToken
		)

		if (expired) {
			const tokenData = await this.refreshToken(accessToken, {
				clientId,
				clientSecret
			})

			if (tokenData.tokenObject) {
				const [newTokenObject] = this.saveToken(tokenData.tokenObject)
				tokenObject = <TokenObject>{ ...tokenObject, ...newTokenObject }

				isAuth = true
			}
		}

		return [isAuth, tokenObject, error]
	}

	async isAuthenticated(
		accessToken: string
	): Promise<[boolean, Error | null, boolean]> {
		const [tokenObject, error] = this.tokenService.getTokenObject(
			accessToken
		)
		const isAuth =
			tokenObject && this.isTokenValid(tokenObject) ? true : false

		return [isAuth, error, !!(tokenObject && !isAuth)]
	}

	async refreshToken(
		token: string,
		requestData: RequestData
	): Promise<AuthRespObject> {
		const { clientId, clientSecret } = requestData
		const [tokenObject] = this.tokenService.getTokenObject(token)

		if (!tokenObject) {
			return {
				error: {
					code: 404,
					message: '[ refreshToken ] Token doesnt exist'
				}
			}
		}

		this.tokenService.removeToken(token)

		const resp = await this.getAuthToken({
			clientId,
			clientSecret,
			formData: {
				grant_type: 'refresh_token',
				refresh_token: tokenObject.refreshToken
			}
		})

		return {
			error: resp.error,
			tokenObject: <TokenObject>{
				...resp.tokenObject,
				refreshToken: tokenObject.refreshToken
			}
		}
	}

	removeToken(token: string): TokenOperationResult {
		return this.tokenService.removeToken(token)
	}

	saveToken(tokenObject: TokenObject): TokenOperationResult {
		const [tokenData, error] = this.tokenService.setTokenData(
			tokenObject.accessToken,
			tokenObject
		)

		return [tokenData, error]
	}
}
