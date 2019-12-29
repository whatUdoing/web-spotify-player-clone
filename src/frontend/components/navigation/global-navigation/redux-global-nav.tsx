import React from 'react'
import NavigationList from '../../navigation-list/navigation-list'
import { RootStateShape } from '../../../redux/store'
import { connect } from 'react-redux'
import { Route } from 'types/router'

type Props = {
	navigationItems: Array<Route>
}

const mapState = (state: RootStateShape) => {
	return {
		navigationItems: state.navigation.main.map(
			routeId => state.router.routes[routeId]
		)
	}
}

const GlobalNavigation = ({ navigationItems }: Props) => {
	const globalNavigationItems = navigationItems.map(route => ({
		id: route.id,
		to: route.path,
		name: route.name
	}))

	return <NavigationList items={globalNavigationItems} />
}

export default connect(mapState)(GlobalNavigation)
