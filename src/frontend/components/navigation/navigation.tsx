import React from 'react'
import GlobalNavigation from './global-navigation/global-navigation'
import PlaylistsNavigation from '../../modules/playlist/components/playlists-navigation/hoc-playlists-navigation'
import { NavigationRoutes } from '../../routes/index'

type Props = {
	isAuth: boolean
	hideSidebar: () => void
}
const Navigation = ({ isAuth, hideSidebar }: Props) => {
	return (
		<nav className="main-menu">
			<div className="main-menu__header">
				<button className="main-menu__toggler" onClick={hideSidebar}>
					<span className="fas fa-times"></span>
				</button>
			</div>
			<GlobalNavigation routes={NavigationRoutes} />

			{isAuth && <PlaylistsNavigation />}
		</nav>
	)
}

export default Navigation
