import React from 'react'
import { PlaylistObjectSimplified } from 'types/services'
import NavigationList from '../../navigation/navigation-list/navigation-list'

type Props = {
	playlists: Array<PlaylistObjectSimplified>
}

const PlaylistsNavigation = ({ playlists = [] }: Props) => {
	const playlistsNavigationItems = playlists.map(playlist => ({
		id: playlist.id,
		to: playlist.href, //todo href
		name: playlist.name
	}))

	return (
		<span>
			<br />

			<NavigationList items={playlistsNavigationItems} />
		</span>
	)
}

export default PlaylistsNavigation
