import { ADD_TRACK, REMOVE_TRACK, GET_TRACK } from './actions-types'
import { TrackObjectFull } from 'services'

export const addTrack = (track: TrackObjectFull) => {
	return {
		type: ADD_TRACK,
		payload: {
			track
		}
	}
}

export const removeTrack = (trackId: string) => {
	return {
		type: REMOVE_TRACK,
		payload: {
			trackId
		}
	}
}

export const getTrack = (trackId: string) => {
	return {
		type: GET_TRACK,
		payload: {
			trackId
		}
	}
}
