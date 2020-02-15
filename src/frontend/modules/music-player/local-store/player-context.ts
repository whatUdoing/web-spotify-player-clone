import React from 'react'
import { TrackObjectSimplified, TrackObjectFull } from 'services'
import { setVolume } from '../store/actions'

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
	setVolume: (value: number) => void
}

const defaultValue = {
	currentTrack: null,
	isPlaying: false,
	tracks: [],
	currentTrackNumber: -1,
	currentVolumeLevel: 1,
	hasNext: false,
	hasPrev: false,

	playNext: () => {},
	playPrev: () => {},
	pause: () => {},
	resume: () => {},
	setVolume: () => {}
}

export const PlayerContext = React.createContext<PlayerContextType>(
	defaultValue
)
