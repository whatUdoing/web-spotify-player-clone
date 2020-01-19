import React from 'react'
import GlobalNavigation from './global-navigation/global-navigation'
import CreatePlaylistBtn from '../../modules/playlist/components/create-playlist/hoc-create-btn'
import PlaylistsNavigation from '../../modules/playlist/components/playlists-navigation/hoc-playlists-navigation'
import { NavigationRoutes } from '../../routes/index'

const Navigation = () => {
	return (
		<nav className="main-menu">
			<div className="main-menu__header">
				<GlobalNavigation routes={NavigationRoutes} />
			</div>

			<PlaylistsNavigation />
		</nav>
	)
}

export default Navigation
