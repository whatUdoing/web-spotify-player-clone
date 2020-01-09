import React, { useRef, useState } from 'react'
import { PlaylistObjectSimplified } from 'services'
import NavigationList from '../../navigation/navigation-list/navigation-list'
import { getResourceUri } from '../../../utils/functions/resource-uri/resource-uri'
import { css } from '@emotion/core'
import LoaderGuiardian from '../../loader-guardian/loader-guardia'
import { useGuardianLazyLoading } from '../../../utils/hooks/use-guardian-lazy-loading'

type Props = {
	playlists: Array<PlaylistObjectSimplified>
	allLoaded: boolean
	loadMoreUserPlaylist: () => void
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
				':playlistId': playlist.id
			}),
			name: playlist.name
		}
	})

	return (
		<div
			css={css`
				border: 1px solid red;
			`}
		>
			<NavigationList items={playlistsNavigationItems} />
			<LoaderGuiardian ref={$guardian} />
		</div>
	)
}

export default PlaylistsNavigation
