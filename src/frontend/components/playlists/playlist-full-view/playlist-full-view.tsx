import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col } from '../../../components/flexobx-grid'
import Tracks from '../../music/tracks/tracks'
import { PlaylistObjectFull, TrackObjectFull } from 'types/services'

type Props = {
	playlist: PlaylistObjectFull
}

const defaultTracks = [] as Array<TrackObjectFull>

const PlaylistFullView = ({ playlist }: Props) => {
	const [tracks, setTracks] = useState<Array<TrackObjectFull>>(defaultTracks)
	const loadMoreTracks = useCallback(() => {
		console.log('load more tracks if exist')
	}, [])

	useEffect(() => {
		if (playlist) {
			console.log(playlist.tracks)
			setTracks(playlist.tracks.items.map(item => item.track))
		}
	}, [playlist])

	if (!playlist) return null

	return (
		<Container>
			<Row>
				<Col>Playlist picture</Col>
				<Col>
					<Tracks tracks={tracks} onTracksLoad={loadMoreTracks} />
				</Col>
			</Row>
		</Container>
	)
}

export default PlaylistFullView
