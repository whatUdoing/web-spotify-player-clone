import React from 'react'
import { TrackObjectFull } from 'services'
import { Redirect } from 'react-router-dom'
import { getResourceUri } from '../../../../lib/helpers/resource-uri/resource-uri'

type Props = {
	track: TrackObjectFull
}
const TrackFullPreview = ({ track }: Props) => {
	return track?.album?.id ? (
		<Redirect
			to={getResourceUri('album', {
				albumId: track.album.id
			})}
		/>
	) : null
}

export default TrackFullPreview
