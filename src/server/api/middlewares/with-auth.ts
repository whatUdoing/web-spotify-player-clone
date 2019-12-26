import { Request, Response, NextFunction } from 'express-serve-static-core'
import { IAuthService } from 'auth-service'
import { Container } from 'typedi'
import { IConfigService } from 'config-service'
import { setTokenCookie } from '../endpints/auth'

export const withAuth = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const authService: IAuthService = Container.get('auth-service')
	const configService: IConfigService = Container.get('config-service')
	const { clientId, clientSecret } = configService.getAuthConfig()
	const accessToken = req.cookies.access_token

	if (accessToken) {
		const [
			isAuth,
			tokenObject,
			error
		] = await authService.checkAndExtendAuth(accessToken, {
			clientId,
			clientSecret
		})
		console.log('isAuth', isAuth)
		if (isAuth && tokenObject) {
			/**
			 * Set new token refreshed token
			 */
			req.cookies.access_token = tokenObject.accessToken
			setTokenCookie(resp, tokenObject)

			return next()
		}
	}

	return resp.set(401).json({
		error:
			'[ isAuthorized ] You need to be authorized to access this content'
	})
}
