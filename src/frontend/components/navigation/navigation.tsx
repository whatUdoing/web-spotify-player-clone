import React from 'react'
import GlobalNavigation from './global-navigation/hoc-global-nav'
import CreatePlaylistBtn from '../playlists/create-playlist/hoc-create-btn'
import PlaylistsNavigation from '../playlists/playlists-navigation/hoc-playlists-navigation'

const Navigation = () => {
	return (
		<nav>
			<header>Jingify</header>

			<GlobalNavigation />

			<h3>playlists</h3>

			<CreatePlaylistBtn />

			<PlaylistsNavigation />
		</nav>
	)
}

export default Navigation
