import React from 'react'
import { RouteObject } from 'redux-store'
import NavigationList from '../navigation-list/navigation-list'

type Props = {
	navigationItems: Array<RouteObject>
}

const GlobalNavigation = ({ navigationItems }: Props) => {
	const globalNavigationItems = navigationItems.map(route => ({
		id: route.id,
		to: route.path,
		name: route.name
	}))

	return <NavigationList items={globalNavigationItems} />
}

export default GlobalNavigation
