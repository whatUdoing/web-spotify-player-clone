import React, { Suspense, ReactNode, ElementType } from 'react'
import { RouteObject } from 'router'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../private-route/private-route'
import RouteWithSubroutes from '../route-with-subroutes/route-with-subroutes'

type Props = {
	routes: Array<RouteObject>
}
const RouteManager = ({ routes }: Props) => {
	return (
		<Suspense fallback="loading...">
			{routes.map((route: RouteObject) => {
				if (route.withAuth) {
					return (
						<PrivateRoute
							key={route.key}
							exact={!!route.exact}
							path={route.path}
							component={route.component}
						/>
					)
				}

				return <RouteWithSubroutes key={route.key} {...route} />
			})}
		</Suspense>
	)
}

export default RouteManager
