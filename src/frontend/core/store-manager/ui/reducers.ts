import { UiStateShape } from 'redux-store'
import { UiActionsType, SHOW_SIDEBAR, HIDE_SIDEBAR } from './actions-types'

const initialState: UiStateShape = {
	isSidebarOpen: true
}

const uiReducers = (state = initialState, action: UiActionsType) => {
	switch (action.type) {
		case HIDE_SIDEBAR: {
			return {
				...state,
				isSidebarOpen: false
			}
		}

		case SHOW_SIDEBAR: {
			return {
				...state,
				isSidebarOpen: true
			}
		}

		default:
			return state
	}
}

export default uiReducers
