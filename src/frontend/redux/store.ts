import { createStore, applyMiddleware, Store } from 'redux'
import reducers from './reducers'
import { userMiddlewares } from './user/middleware'

export { RootStateShape } from './reducers'

export let store: Store | null = null

export const initStore = (): Store => {
	store = createStore(reducers, applyMiddleware(...userMiddlewares))

	/**
	 * Concept more details in user/subscribers/index
	 */
	// setupUserSubscribers({
	// 	dispatch: store.dispatch
	// })

	return store
}
