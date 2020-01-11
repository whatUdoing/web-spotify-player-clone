import { TrackObjectFull, TrackObjectSimplified } from 'services'
import React from 'react'

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
