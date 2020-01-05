import { combineReducers } from 'redux'
import { ADD_TRACK, REMOVE_TRACK, tracksActionTypes } from './actions-types'
import { TracksStateShape } from 'types/redux'

const inittialState: TracksStateShape = {
	tracks: {}
}

const tracksReducers = (
	tracks = inittialState.tracks,
	action: tracksActionTypes
) => {
	switch (action.type) {
		case ADD_TRACK:
			const track = action.payload.track
			console.log('set track', track)

			return {
				...tracks,
				[track.id]: track
			}
		case REMOVE_TRACK:
			Reflect.deleteProperty(tracks, action.payload.trackId)

			return {
				...tracks
			}
		default:
			return tracks
	}
}

export default combineReducers({
	tracks: tracksReducers
})
