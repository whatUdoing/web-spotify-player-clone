import React from 'react'
import { Redirect } from 'react-router-dom'
import useAuth from '../../../../lib/hooks/use-auth'
import { RouteObject } from 'router'
import CustomRoute from '../custom-route/custom-route'

type Props = {
	route: RouteObject
}
const PrivateRoute = ({ route }: Props) => {
	const [isLoading, auth, error] = useAuth()

	if (isLoading) return null

	return auth?.isAuth ? <CustomRoute {...route} /> : <Redirect to="/" />
}

export default PrivateRoute
