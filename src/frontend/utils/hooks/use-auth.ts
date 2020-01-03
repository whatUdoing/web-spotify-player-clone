import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../classes/dependency-injector'
import { IUserService } from 'types/services'

const useAuth = () => {
	const [error, setError] = useState()
	const [isLoading, setLoading] = useState(true)
	const [auth, setAuth] = useState()
	const cancelToken = axios.CancelToken.source()

	useEffect(() => {
		;(async () => {
			const UserService = Container.get('user-service') as IUserService
			const [auth, error] = await UserService.isAuthenticated(cancelToken)

			if (error) {
				setError(error)
			}

			setAuth(auth)
			setLoading(false)
		})()

		return () => {
			cancelToken.cancel()
			setLoading(false)
		}
	}, [])

	return [isLoading, auth, error]
}

export default useAuth
