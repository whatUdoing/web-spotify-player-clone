import {
	PLAYER_PLAY_TRACK,
	PLAYER_SET_SOURCE,
	PLAYER_STOP_TRACK,
	PLAYER_SET_TRACKS,
	PLAYER_SET_TRACK,
	PLAYER_PLAY_NEXT,
	PLAYER_PLAY_PREV
} from './actions-types'
import { TrackObjectSimplified, TrackObjectFull } from 'services'

export const setPlayerTracks = (source: string) => {
	return {
		type: PLAYER_SET_SOURCE,
		payload: {
			source
		}
	}
}

export const stopTrack = () => {
	return {
		type: PLAYER_STOP_TRACK
	}
}

export const startTrack = () => {
	return {
		type: PLAYER_PLAY_TRACK
	}
}

export const playNextTrack = () => {
	return {
		type: PLAYER_PLAY_NEXT
	}
}

export const playPrevTrack = () => {
	return {
		type: PLAYER_PLAY_PREV
	}
}

export const setTracks = (
	tracks: Array<TrackObjectSimplified | TrackObjectFull>
) => {
	return {
		type: PLAYER_SET_TRACKS,
		payload: {
			tracks
		}
	}
}

export const setTrack = (track: TrackObjectSimplified | TrackObjectFull) => {
	return {
		type: PLAYER_SET_TRACK,
		payload: {
			track
		}
	}
}
