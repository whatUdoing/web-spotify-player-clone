import { createStore, applyMiddleware, Store } from 'redux'
import reducers from './reducers'
import { userMiddlewares } from './user/middlewares/'
import { playlistsMiddlewares } from './playlists/middlewares/'
import { albumsMiddlewares } from './albums/middlewares/'
import { tracksMiddlewares } from './tracks/middlewares/'
import { collectionMiddlewares } from './collection/middlewares/'

export let store: Store | null = null

export const initStore = (): Store => {
	store = createStore(
		reducers,
		applyMiddleware(
			...userMiddlewares,
			...playlistsMiddlewares,
			...tracksMiddlewares,
			...albumsMiddlewares,
			...collectionMiddlewares
		)
	)

	/**
	 * Concept more details in user/subscribers/index
	 */
	// setupUserSubscribers({
	// 	dispatch: store.dispatch
	// })

	return store
}
