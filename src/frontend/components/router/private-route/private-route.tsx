import React, { FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../../utils/hooks/use-auth'

type Props = {
	component: FunctionComponent
	path: string
	exact: boolean
}
const PrivateRoute = ({ component: Component, path, exact }: Props) => {
	const [isLoading, auth, error] = useAuth()

	if (isLoading) return null

	return auth?.isAuth ? (
		<Route exact={exact} path={path} component={Component} />
	) : (
		<Redirect to="/" />
	)
}

export default PrivateRoute
