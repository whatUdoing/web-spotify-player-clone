import React from 'react'
import { TrackObjectFull } from 'types/services'
import { Redirect } from 'react-router-dom'
import { getResourceUri } from '../../../../utils/functions/resource-uri'

type Props = {
	track: TrackObjectFull
}
const TrackFullPreview = ({ track }: Props) => {
	console.log('track full preview', track)
	return track?.album?.id ? (
		<Redirect
			to={getResourceUri('album', {
				':albumId': track.album.id
			})}
		/>
	) : null
}

export default TrackFullPreview
