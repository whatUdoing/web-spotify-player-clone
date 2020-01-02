import { navigationActionTypes } from './actions-type'
import { combineReducers } from 'redux'

const initialState = {
	/**
	 * This nav is based on router objects, and is static
	 * Contains id's of route paths, consider other options (more dynamics)
	 */
	main: [1, 2, 3],

	/**
	 * Based on user playlist, can be extended during
	 */
	playlits: [],

	collections: []
}

const MainReducer = (
	main = initialState.main,
	action: navigationActionTypes
) => {
	return main
}

const PlaylistReducer = (
	playlits = initialState.main,
	action: navigationActionTypes
) => {
	return playlits
}

const CollectionsReducer = (
	collections = initialState.main,
	action: navigationActionTypes
) => {
	return collections
}

export default combineReducers({
	main: MainReducer,
	playlits: PlaylistReducer,
	collections: CollectionsReducer
})
