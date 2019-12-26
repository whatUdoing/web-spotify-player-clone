import React from 'react'
import { RouterRoutesType } from '../../store/router/initial-state'
import NavigationList from '../navigation-list/navigation-list'
import { NavigationItem } from 'types/navigation'

type Props = {
	routes: RouterRoutesType
}

/**
 * Path to exclude from main navigation
 */
const NavigationBlackList = ['/playlist/:id']

const Sidebar = ({ routes }: Props) => {
	const globalNavigationItems = routes
		.filter(route => !NavigationBlackList.includes(route.path))
		.map(route => ({
			id: route.id,
			to: route.path,
			name: route.name
		}))

	const playlistsNavigation: Array<NavigationItem> = []

	return (
		<nav>
			<header>Jingify</header>

			<NavigationList items={globalNavigationItems} />

			<h4>playlist</h4>

			<button>create playlist</button>

			<NavigationList items={playlistsNavigation} />
		</nav>
	)
}

export default Sidebar
