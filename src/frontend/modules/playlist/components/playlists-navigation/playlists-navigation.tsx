import React, { useRef, useState } from 'react'
import { PlaylistObjectSimplified } from 'services'
import NavigationList from '../../../../components/navigation/navigation-list/navigation-list'
import { getResourceUri } from '../../../../lib/helpers/resource-uri/resource-uri'
import { css } from '@emotion/core'
import LoaderGuiardian from '../../../../components/loader-guardian/loader-guardia'
import { useGuardianLazyLoading } from '../../../../lib/hooks/use-guardian-lazy-loading'
import CreatePlaylistBtn from '../create-playlist/hoc-create-btn'

type Props = {
	playlists: Array<PlaylistObjectSimplified>
	allLoaded: boolean
	loadMoreUserPlaylist: () => void
}

const globalOverrides = {
	linkClass: 'main-menu__link main-menu__link_s link'
}

const PlaylistsNavigation = ({
	playlists = [],
	allLoaded,
	loadMoreUserPlaylist
}: Props) => {
	const $guardian = useRef<Element>(null)
	const onPlaylistLoad = () => {
		loadMoreUserPlaylist()
	}

	useGuardianLazyLoading(
		$guardian,
		allLoaded,
		onPlaylistLoad,
		playlists.length
	)

	const playlistsNavigationItems = playlists.map(playlist => {
		return {
			id: playlist.id,
			to: getResourceUri('playlist', {
				playlistId: playlist.id
			}),
			name: playlist.name
		}
	})

	return (
		<div>
			<header className="main-menu__section-header">playlists</header>

			<CreatePlaylistBtn
				cssClasses={{
					button: 'main-menu__action-btn'
				}}
			/>

			<NavigationList
				items={playlistsNavigationItems}
				override={globalOverrides}
			/>
			<LoaderGuiardian ref={$guardian} />
		</div>
	)
}

export default PlaylistsNavigation
