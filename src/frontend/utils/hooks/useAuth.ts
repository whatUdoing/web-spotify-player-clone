import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../../utils/classes/dependency-injector'
import { IUserService } from 'types/user-service'

const useAuth = () => {
	const [error, setError] = useState()
	const [isLoading, setLoading] = useState(true)
	const [isAuth, setAuth] = useState(false)
	const cancelToken = axios.CancelToken.source()

	useEffect(() => {
		;(async () => {
			const UserService = Container.get('user-service') as IUserService
			const [auth, error] = await UserService.isAuthenticated(cancelToken)

			if (error) {
				setError(error)
			}

			setAuth(!!auth?.isAuth)
			setLoading(false)
		})()

		return () => {
			cancelToken.cancel()
			setLoading(false)
		}
	}, [])

	return [isLoading, isAuth, error]
}

export default useAuth
