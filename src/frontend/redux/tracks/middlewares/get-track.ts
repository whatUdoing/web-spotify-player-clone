import { Middleware } from 'redux'
import { tracksActionTypes, GET_TRACK } from '../actions-types'
import { ITracksService } from 'services'
import { addTrack } from '../actions'
import { Container } from '../../../utils/classes/dependency-injector/dependency-injector'

export const getTrack: Middleware = ({ dispatch }) => next => async (
	action: tracksActionTypes
) => {
	next(action)

	if (action.type === GET_TRACK) {
		const TracksService = Container.get('tracks-service') as ITracksService

		const [track, error] = await TracksService.getTrack(
			action.payload.trackId
		)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (track) {
			// console.log('dispatch add track', addTrack(track))
			dispatch(addTrack(track))
		}
	}
}
