import React, { useEffect, useState } from 'react'
import {
	PlaylistObjectFull,
	IPlaylistsService,
	ServiceType
} from 'types/services'
import { Container } from '../../utils/classes/dependency-injector'
import { useServiceRequest } from '../../utils/hooks/useServiceRequest'

const Playlist = () => {
	const PlaylistsService = Container.get(
		'playlists-service'
	) as IPlaylistsService
	const [items, setItems] = useState<Array<PlaylistObjectFull>>([])
	const [isLoading, response, error] = useServiceRequest<
		PlaylistObjectFull,
		Error
	>(PlaylistsService as ServiceType, 'getPlaylists', [])
	// todo: query params
	useEffect(() => {
		if (response?.items?.length) {
			console.log('response', response.items)
		}
	}, [response])

	return <span>Player</span>
}

export default Playlist
