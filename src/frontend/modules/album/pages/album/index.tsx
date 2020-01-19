import React, { useEffect, useState, useCallback } from 'react'
import {
	PlaylistObjectFull,
	ServiceType,
	TrackObjectFull,
	AlbumObjectFull
} from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { useServiceRequest } from '../../../../lib/hooks/use-service-request'
import { useParams } from 'react-router-dom'
import PlaylistFullView from '../../components/album-full-preview/album-full-preview'
import { AlbumContext } from '../../store/index'

const Album = () => {
	const { albumId } = useParams()
	const [album, setAlbum] = useState<AlbumObjectFull | null>(null)
	const [tracksLoaded, setTracksLoaded] = useState(false)
	const [isLoadingAlbum, setLoadingAlbum] = useState(true)
	const [isLoadingTracks, setLoadingTracks] = useState(false)
	const AlbumsService = Container.get('albums-service') as ServiceType

	if (!albumId) return null

	const loadTracks = async () => {
		if (album) {
			console.log('abum', album)
			setLoadingTracks(true)
			const [response, error] = await AlbumsService.getAlbumTracks(album)

			if (response) {
				setLoadingTracks(false)
				// console.log('album tracks', album.tracks)
				// console.log('resp', response)
				const newTracks = [...album.tracks.items, ...response.items]

				setAlbum({
					...album,
					tracks: {
						...response,
						items: newTracks
					}
				})

				setTracksLoaded(!response.next)
			}
		}
	}

	const [, response, error] = useServiceRequest<AlbumObjectFull, Error>(
		AlbumsService,
		'getAlbum',
		[albumId]
	)

	useEffect(() => {
		if (response && !error) {
			setLoadingAlbum(false)
			setAlbum(response)
		}
	}, [response])

	return (
		<div>
			<AlbumContext.Provider
				value={{
					isLoadingAlbum,
					isLoadingTracks,
					tracksLoaded,
					album,
					loadTracks
				}}
			>
				<PlaylistFullView />
			</AlbumContext.Provider>
		</div>
	)
}

export default Album
