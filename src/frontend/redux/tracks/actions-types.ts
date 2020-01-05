import { TrackObjectFull } from 'types/services'

export const ADD_TRACK = '[ tracks ] ADD_TRACK'
export const REMOVE_TRACK = '[ tracks ] REMOVE_TRACK'
export const GET_TRACK = '[ tracks ] GET_TRACK'

interface IAddTrack {
	type: typeof ADD_TRACK
	payload: {
		track: TrackObjectFull
	}
}

interface IRemoveTrack {
	type: typeof REMOVE_TRACK
	payload: {
		trackId: string
	}
}

interface IGetTrack {
	type: typeof GET_TRACK
	payload: {
		trackId: string
	}
}

export type tracksActionTypes = IAddTrack | IRemoveTrack | IGetTrack
