import { createStore } from 'redux'
import reducers from './reducers'

export { RootStateShape } from './reducers'

export const store = createStore(reducers)
