import { TrackObjectFull, TrackObjectSimplified } from 'types/services'
import React from 'react'
import { PlaylistTrackObject } from 'types/redux'

type Props = {
	tracks: Array<TrackObjectFull | TrackObjectSimplified>
}

const TracksList = ({ tracks }: Props) => {
	return (
		<>
			<ul>
				{tracks.map(
					(
						track: TrackObjectFull | TrackObjectSimplified,
						index: number
					) => {
						return <li key={index}>{track?.name}</li>
					}
				)}
			</ul>
		</>
	)
}

export default TracksList
