import React from 'react'
import { RouteObject } from 'router'
import NavigationList from '../navigation-list/navigation-list'
import { NavigationItem } from 'components'

type Props = {
	routes: Array<RouteObject>
}

const GlobalNavigation = ({ routes }: Props) => {
	const globalNavigationItems = routes.map(
		route =>
			({
				id: route.key,
				to: route.path,
				name: route.name,
				exact: route.exact,
				icon: route.icon
			} as NavigationItem)
	)

	return <NavigationList items={globalNavigationItems} />
}

export default GlobalNavigation
