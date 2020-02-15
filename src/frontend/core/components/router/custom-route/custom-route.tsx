import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { RouteObject } from 'router'

type Props = {} & RouteObject

const CustomRoute = (route: Props) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props =>
				route.routes && route.routes.length ? (
					<route.component {...props} routes={route.routes} />
				) : (
					<route.component {...props} />
				)
			}
		/>
	)
}

export default CustomRoute
