import { useEffect, useState } from 'react'
import { IUserService } from 'types/services'
import { Container } from '../../../utils/classes/dependency-injector'

export const useAuth = () => {
	const [auth, setAuth] = useState()

	useEffect(() => {
		;(async () => {
			const userService: IUserService = Container.get(
				'user-service'
			) as IUserService

			const [auth, error] = await userService.isAuthenticated()

			if (error) {
				/**
				 * handle flash message or something :?
				 */
				console.error(error)
			}

			if (auth) {
				setAuth(auth)
			}
		})()
	}, [])

	return auth
}
