import { TrackObjectFull } from 'types/services'
import React from 'react'
import { PlaylistTrackObject } from 'types/redux'

type Props = {
	tracks: Array<TrackObjectFull>
}

const TracksList = ({ tracks }: Props) => {
	return (
		<>
			<ul>
				{tracks.map((track: TrackObjectFull, index: number) => {
					return <li key={index}>{track?.name}</li>
				})}
			</ul>
		</>
	)
}

export default TracksList
