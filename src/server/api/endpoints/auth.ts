import { Router } from 'express'
import { Response as ExpressResponse } from 'express-serve-static-core'
import querystring from 'querystring'
import Container from 'typedi'
import { IAuthService, AuthConfigObject } from 'auth-service'
import { TokenObject } from 'tokens'
import apiConfig from '../config'

const { baseAuth } = apiConfig
const tokenCookieName = 'access_token'

export const AuthUrls = {
	authorization: `${baseAuth}/authorize`,
	getToken: `${baseAuth}/api/token`
}

export const setTokenCookie = (resp: ExpressResponse, token: TokenObject) => {
	/**
	 * token.expiresIn is number of seconds so we need to convert it to ms
	 */
	return resp.cookie(tokenCookieName, token.accessToken, {
		expires: new Date(token.creationDate + token.expiresIn * 1000),
		httpOnly: true
	})
}

export const initAuth: ({ config }: { config: AuthConfigObject }) => Router = ({
	config
}: {
	config: AuthConfigObject
}) => {
	const router = Router()
	const { clientId, clientSecret, redirectUri } = config

	router.get('/login', (req, resp) => {
		return resp.redirect(
			`${AuthUrls.authorization}?${querystring.stringify({
				response_type: 'code',
				scope: 'user-read-private user-read-email',
				client_id: clientId,
				redirect_uri: redirectUri
			})}`
		)
	})

	router.get('/logout', (req, resp) => {
		const accessToken = req.cookies.access_token

		if (accessToken) {
			const authService: IAuthService = Container.get('auth-service')
			authService.removeToken(accessToken)
		}

		return resp
			.clearCookie(tokenCookieName, {
				httpOnly: true
			})
			.redirect('/')
	})

	router.get('/callback', async (req, resp) => {
		if (req.query.code) {
			const { clientId, clientSecret, redirectUri } = config
			const authService: IAuthService = Container.get('auth-service')

			const respObject = await authService.getAuthToken({
				clientId,
				clientSecret,
				formData: {
					code: req.query.code,
					grant_type: 'authorization_code',
					redirect_uri: redirectUri
				}
			})

			if (respObject.tokenObject) {
				const [tokenObject] = authService.saveToken(
					respObject.tokenObject
				)

				if (tokenObject) {
					return setTokenCookie(resp, tokenObject)
						.status(200)
						.redirect('/')
				}
			}
		}

		return resp.status(502).json({
			error: {
				message:
					'[ callback ] Something went wrong with during authentication on spotify'
			}
		})
	})

	router.get('/isAuthenticated', async (req, resp) => {
		const authService: IAuthService = Container.get('auth-service')
		const accessToken = req.cookies.access_token
		let tokenExpires

		let respStatus = 200

		if (!accessToken) {
			return resp.status(200).json({
				auth: {
					isAuth: false
				}
			})
		}
		/**
		 * Remove check from here and make seprate entpoint
		 */
		let [isAuth, tokenObject, error] = await authService.checkAndExtendAuth(
			accessToken,
			{
				clientId,
				clientSecret
			}
		)

		if (!tokenObject) {
			return resp.status(404).json({
				auth: {
					isAuth: false
				},
				error: {
					message: 'Wrong access code'
				}
			})
		}

		if (error) {
			respStatus = 500
		}

		if (tokenObject) {
			setTokenCookie(resp, tokenObject)
			tokenExpires =
				tokenObject?.creationDate + tokenObject?.expiresIn * 1000
		}

		return resp.status(respStatus).json({
			auth: {
				isAuth,
				expiresIn: tokenExpires
			},
			error: {
				message: error?.message
			}
		})
	})

	return router
}
