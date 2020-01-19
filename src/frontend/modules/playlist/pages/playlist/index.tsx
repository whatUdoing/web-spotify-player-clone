import React, { useEffect, useState, useCallback } from 'react'
import { PlaylistObjectFull, ServiceType, TrackObjectFull } from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { useServiceRequest } from '../../../../lib/hooks/use-service-request'
import { useParams } from 'react-router-dom'
import PlaylistFullView from '../../components/playlist-full-view/playlist-full-view'
import { PlaylistContext } from '../../store/index'

const Playlist = () => {
	const { playlistId } = useParams()
	const [playlist, setPlaylist] = useState<PlaylistObjectFull | null>(null)
	const [tracksLoaded, setTracksLoaded] = useState(false)
	const [isLoadingPlaylist, setLoadingPlaylist] = useState(true)
	const [isLoadingTracks, setLoadingTracks] = useState(false)
	const PlaylistService = Container.get('playlists-service') as ServiceType

	if (!playlistId) return null

	const loadTracks = async () => {
		if (playlist) {
			setLoadingTracks(true)
			const [response, error] = await PlaylistService.getPlaylistTracks(
				playlist
			)

			if (response) {
				setLoadingTracks(false)

				const newTracks = [...playlist.tracks.items, ...response.items]

				setPlaylist({
					...playlist,
					tracks: {
						...response,
						items: newTracks
					}
				})

				setTracksLoaded(!response.next)
			}
		}
	}

	const [, response, error] = useServiceRequest<PlaylistObjectFull, Error>(
		PlaylistService,
		'getPlaylist',
		[playlistId],
		playlistId
	)

	useEffect(() => {
		if (response && !error) {
			setLoadingPlaylist(false)
			setPlaylist(response)
		}
	}, [response])

	return (
		<div>
			<PlaylistContext.Provider
				value={{
					isLoadingPlaylist,
					isLoadingTracks,
					tracksLoaded,
					playlist,
					loadTracks
				}}
			>
				<PlaylistFullView />
			</PlaylistContext.Provider>
		</div>
	)
}

export default Playlist
