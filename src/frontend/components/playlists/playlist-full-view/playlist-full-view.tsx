import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col } from '../../../components/flexobx-grid'
import Tracks from '../../music/tracks/tracks'
import { PlaylistObjectFull, TrackObjectFull } from 'types/services'
import { PagingTrackObject } from 'types/redux'

type Props = {
	playlist: PlaylistObjectFull
	loadMoreTracks(playlistId: string): void
}

const defaultTracks = [] as Array<TrackObjectFull>

const PlaylistFullView = ({ playlist, loadMoreTracks }: Props) => {
	const [tracks, setTracks] = useState<Array<TrackObjectFull>>(defaultTracks)
	const handleLoadMoreTracks = () => {
		if (playlist) {
			loadMoreTracks(playlist.id)
		}
	}

	const allLoaded =
		(playlist?.tracks as PagingTrackObject)?.allLoaded ?? false

	useEffect(() => {
		if (playlist) {
			setTracks(playlist.tracks.items.map(item => item.track))
		}
	}, [playlist])

	if (!playlist) return null

	return (
		<Container>
			<Row>
				<Col>Playlist picture</Col>
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
