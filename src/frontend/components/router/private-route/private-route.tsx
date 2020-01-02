import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../../utils/hooks/useAuth'

type Props = {
	component: React.ElementType
	path: string
	exact: boolean
}
const PrivateRoute = ({ component: Component, path, exact }: Props) => {
	const [isLoading, auth, error] = useAuth()

	if (isLoading) return null

	return auth?.isAuth ? <Component /> : <Redirect to="/" />
}

export default PrivateRoute
