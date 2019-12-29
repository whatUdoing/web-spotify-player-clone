import React, { useEffect, useState, ReactNode, ReactChild } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from '../../../utils/classes/dependency-injector'
import { IUserService } from 'types/user-service'
import axios from 'axios'

type Props = {
	component: React.ElementType
	path: string
	exact: boolean
}
const PrivateRoute = ({ component: Component, path, exact }: Props) => {
	const [isLoading, setLoading] = useState(true)
	const [isAuth, setAuth] = useState(false)
	const cancelToken = axios.CancelToken.source()

	useEffect(() => {
		setLoading(true)
		;(async () => {
			const UserService = Container.get('user-service') as IUserService

			const [auth, error] = await UserService.isAuthenticated(cancelToken)

			setAuth(!!auth?.isAuth)
			setLoading(false)
		})()

		return () => {
			cancelToken.cancel()
		}
	}, [])

	if (isLoading) {
		return null
	}

	return isAuth ? <Component /> : <Redirect to="/" />
}

export default PrivateRoute
