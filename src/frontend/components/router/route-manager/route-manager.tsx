import React, { Suspense, ReactNode, ElementType } from 'react'
import { RouteObject } from 'types/router'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../private-route/private-route'

type Props = {
	routes: Array<RouteObject>
}
const RouteManager = ({ routes }: Props) => {
	return (
		<Suspense fallback="loading...">
			<Switch>
				{routes.map((route: RouteObject) => {
					const Component: ElementType = route.withAuth
						? PrivateRoute
						: Route

					return (
						<Component
							key={route.id}
							exact={route.exact}
							path={route.path}
							component={route.component}
						/>
					)
				})}
			</Switch>
		</Suspense>
	)
}

export default RouteManager
