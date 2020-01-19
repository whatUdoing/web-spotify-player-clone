import React, { FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../../../lib/hooks/use-auth'

type Props = {
	component: FunctionComponent
	path: string
	exact: boolean
}
const PrivateRoute = ({ component, path, exact }: Props) => {
	const [isLoading, auth, error] = useAuth()

	if (isLoading) return null

	return auth?.isAuth ? (
		<Route exact={exact} path={path} component={component} />
	) : (
		<Redirect to="/" />
	)
}

export default PrivateRoute
