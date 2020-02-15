import React, { Suspense, useEffect } from 'react'
import { RouteObject } from 'router'
import { useHistory } from 'react-router-dom'
import PrivateRoute from '../private-route/private-route'
import CustomRoute from '../custom-route/custom-route'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import axios from 'axios'
import { IUserService } from 'services'
import { useDispatch } from 'react-redux'
import { setUserAuth } from '../../../../core/store-manager/user/actions'

type Props = {
	routes: Array<RouteObject>
}
const RouteManager = ({ routes }: Props) => {
	const history = useHistory()
	const disptach = useDispatch()

	useEffect(() => {
		const unlisten = history.listen(async () => {
			const cancelToken = axios.CancelToken.source()

			const UserService = Container.get('user-service') as IUserService
			const [auth, error] = await UserService.isAuthenticated(cancelToken)

			if (auth) {
				console.log('set auth', auth)
				disptach(setUserAuth(auth))
			}
		})

		return () => {
			unlisten()
		}
	}, [])

	return (
		<Suspense fallback="loading...">
			{routes.map((route: RouteObject) => {
				if (route.withAuth) {
					return <PrivateRoute key={route.key} route={route} />
				}

				return <CustomRoute key={route.key} {...route} />
			})}
		</Suspense>
	)
}

export default RouteManager
