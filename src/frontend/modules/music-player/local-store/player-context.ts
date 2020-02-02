import React from 'react'
import { TrackObjectSimplified, TrackObjectFull } from 'services'

export type PlayerContextType = {
	currentTrack: TrackObjectFull | TrackObjectSimplified | null
	isPlaying: boolean

	tracks: Array<TrackObjectSimplified | TrackObjectFull>
	currentTrackNumber: number

	hasNext: boolean
	hasPrev: boolean

	playNext: () => void
	playPrev: () => void
	pause: () => void
	resume: () => void
	handleVolumeChange: (value: number) => void
}

const defaultValue = {
	currentTrack: null,
	isPlaying: false,
	tracks: [],
	currentTrackNumber: -1,
	hasNext: false,
	hasPrev: false,

	playNext: () => {},
	playPrev: () => {},
	pause: () => {},
	resume: () => {},
	handleVolumeChange: () => {}
}

export const PlayerContext = React.createContext<PlayerContextType>(
	defaultValue
)
