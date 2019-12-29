import React from 'react'
import GlobalNavigation from './global-navigation/redux-global-nav'
import PlaylistsNavigation from './playlists-navigation/redux-playlists-nav'
const Navigation = () => {
	return (
		<nav>
			<header>Jingify</header>

			<GlobalNavigation />

			<h3>playlists</h3>

			<button>add playlist</button>

			<PlaylistsNavigation />
		</nav>
	)
}

export default Navigation
