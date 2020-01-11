const initialState = {
	auth: {
		isAuth: false
	},

	currentUser: null
}

const UserReducer = (
	profile = initialState.profile,
	action: userActionTypes
) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return action.payload.user

		default:
			return profile
	}
}

const CurrentUserPlaylistsReducer = (
	currentUserPlaylists = initialState.currentUserPlaylists,
	action: userActionTypes
) => {
	switch (action.type) {
		case SET_CURR_USER_PLAYLISTS:
			let newPlaylists = action.payload.playlistsPaging
			if (currentUserPlaylists) {
				newPlaylists.items = [
					...currentUserPlaylists.items,
					...newPlaylists.items
				]
			}

			return newPlaylists

		default:
			return currentUserPlaylists
	}
}

const AuthReducer = (auth = initialState.auth, action: userActionTypes) => {
	// const EventBus = <IObserver>Container.get('event-bus')

	switch (action.type) {
		case SET_USER_AUTH: {
			const isAuth = action.payload.auth

			/**
			 * Concept more details in subscribers/index
			 */
			// if (isAuth) {
			// 	requestAnimationFrame(() => {
			// 		EventBus.dispatch(UserAuthenticatedEvent, true)
			// 	})
			// }

			return isAuth
		}

		default:
			return auth
	}
}

const LoadingReducer = (
	isLoading = initialState.isLoading,
	action: userActionTypes
) => {
	switch (action.type) {
		case SET_USER_LOADING: {
			return action.payload.isLoading
		}

		default:
			return isLoading
	}
}

export default combineReducers({
	auth: AuthReducer,
	profile: UserReducer,
	isLoading: LoadingReducer,
	currentUserPlaylists: CurrentUserPlaylistsReducer
})
