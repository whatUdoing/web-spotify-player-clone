import React from 'react'
import { Route } from 'react-router-dom'
import { RouteObject } from 'router'

type Props = {} & RouteObject

const RouteWithSubroutes = (route: Props) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}

export default RouteWithSubroutes
