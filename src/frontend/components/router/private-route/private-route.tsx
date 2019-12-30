import React, { useEffect, useState, ReactNode, ReactChild } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from '../../../utils/classes/dependency-injector'
import { IUserService } from 'types/user-service'
import useAuth from '../../../utils/hooks/useAuth'
import axios from 'axios'

type Props = {
	component: React.ElementType
	path: string
	exact: boolean
}
const PrivateRoute = ({ component: Component, path, exact }: Props) => {
	const [isLoading, isAuth, error] = useAuth()

	if (isLoading) return null

	return isAuth ? <Component /> : <Redirect to="/" />
}

export default PrivateRoute
