import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylist } from '../../redux/playlists/actions'
import { Dispatch, Store } from 'redux'
import { connect } from 'react-redux'
import TrackFullPreview from '../../components/music/tracks/track-full-preview/hoc-track-full-preview'
import { getTrack } from '../../redux/tracks/actions'

type Props = {
	getTrack: (trackId: string) => void
}

const Track = ({ getTrack }: Props) => {
	const { trackId } = useParams()

	useEffect(() => {
		if (trackId) {
			getTrack(trackId)
		}
	}, [trackId])

	if (!trackId) return null

	return (
		<div>
			<TrackFullPreview trackId={trackId} />
		</div>
	)
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		getTrack(trackId: string) {
			dispatch(getTrack(trackId))
		}
	}
}

export default connect(null, mapDispatch)(Track)
