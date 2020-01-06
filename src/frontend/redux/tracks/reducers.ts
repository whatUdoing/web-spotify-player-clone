import { combineReducers } from 'redux'
import { ADD_TRACK, REMOVE_TRACK, tracksActionTypes } from './actions-types'
import { TracksStateShape } from 'types/redux'

/**
 * To think, move all tracks here, instead keeping them seprate in playlist, albums etc...
 * Pros: we wont be keeping same track x - times, np i album and playlist
 * Cons: we need to manage tracks separetly here, for ex sould we clean them if
 * user destroy playlist :?
 */

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
