import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col } from '../../../components/flexobx-grid'
import Tracks from '../../music/tracks/tracks'
import CoverPreview from '../../music/cover-preview/cover-preview'
import { PlaylistObjectFull, TrackObjectFull } from 'services'
import { PagingTrackObject, PlaylistTrackObject } from 'redux-store'
import { getImage } from '../../../lib/helpers/images/images'
import { CoverObject } from 'components'

type Props = {
	playlist: PlaylistObjectFull
	loadMoreTracks(playlistId: string): void
}

const defaultTracks: Array<TrackObjectFull> = []

const PlaylistFullView = ({ playlist, loadMoreTracks }: Props) => {
	const [coverItem, setCoverItem] = useState<CoverObject>()
	const [tracks, setTracks] = useState<Array<TrackObjectFull>>(defaultTracks)
	const handleLoadMoreTracks = () => {
		if (playlist) {
			loadMoreTracks(playlist.id)
		}
	}

	const allLoaded =
		(playlist?.tracks as PagingTrackObject<PlaylistTrackObject>)
			?.allLoaded ?? false

	useEffect(() => {
		if (playlist) {
			setCoverItem({
				id: playlist.id,
				image: {
					src: getImage(playlist.images, 1)?.url,
					title: `Playlist ${playlist.name} cover`
				},
				title: playlist.name,
				author: playlist.owner.display_name,
				description: playlist.description
			} as CoverObject)

			setTracks(
				playlist.tracks.items
					.filter(item => item.track)
					.map(item => item.track)
			)
		}
	}, [playlist])

	if (!playlist) return null

	return (
		<Container>
			<Row>
				<Col>{coverItem && <CoverPreview item={coverItem} />}</Col>

				<Col>
					<Tracks
						tracks={tracks}
						loadAction={handleLoadMoreTracks}
						allLoaded={allLoaded}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default PlaylistFullView
