import React from 'react'
import { RouteObject } from 'redux-store'
import NavigationList from '../navigation-list/navigation-list'

type Props = {
	routes: Array<RouteObject>
}

const GlobalNavigation = ({ routes }: Props) => {
	console.log(routes)
	const globalNavigationItems = routes.map(route => ({
		id: route.key,
		to: route.path,
		name: route.name,
		exact: route.exact,
		icon: route.icon
	}))

	return <NavigationList items={globalNavigationItems} />
}

export default GlobalNavigation
