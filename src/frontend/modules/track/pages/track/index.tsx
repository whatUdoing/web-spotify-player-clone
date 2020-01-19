// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { getPlaylist } from '../../../../core/store-manager/playlists/actions'
// import { Dispatch, Store } from 'redux'
// import { connect } from 'react-redux'
// import TrackFullPreview from '../../components/track-full-preview/hoc-track-full-preview'
// import { getTrack } from '../../../../core/store-manager/tracks/actions'

// type Props = {
// 	getTrack: (trackId: string) => void
// }

// const Track = ({ getTrack }: Props) => {
// 	const { trackId } = useParams()

// 	useEffect(() => {
// 		if (trackId) {
// 			getTrack(trackId)
// 		}
// 	}, [trackId])

// 	if (!trackId) return null

// 	return (
// 		<div>
// 			<TrackFullPreview trackId={trackId} />
// 		</div>
// 	)
// }

// const mapDispatch = (dispatch: Dispatch) => {
// 	return {
// 		getTrack(trackId: string) {
// 			dispatch(getTrack(trackId))
// 		}
// 	}
// }

// export default connect(null, mapDispatch)(Track)

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylist } from '../../../../core/store-manager/playlists/actions'
import { Dispatch, Store } from 'redux'
import { connect } from 'react-redux'
import TrackFullPreview from '../../components/track-full-preview/track-full-preview'
import { getTrack } from '../../../../core/store-manager/tracks/actions'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { useServiceRequest } from '../../../../lib/hooks/use-service-request'
import { TrackObjectFull, ServiceType } from 'services'

const Track = () => {
	const { trackId } = useParams()
	const [isLoading, setLoading] = useState<boolean>(true)
	const [track, setTrack] = useState<TrackObjectFull | null>({})
	console.log('render Track', track)

	if (!trackId) return null

	// TODO: fix mounting problem!!!!
	const TracksServices = Container.get('tracks-service') as ServiceType
	const [, response, error] = useServiceRequest<TrackObjectFull, Error>(
		TracksServices,
		'getTrack',
		[trackId]
	)

	useEffect(() => {
		let mounted = true

		if (response && mounted) {
			setLoading(false)
			setTrack(response)
		}

		return () => {
			mounted = false
		}
	}, [response])

	return <div>{track && <TrackFullPreview track={track} />}</div>
}

export default Track
