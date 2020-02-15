import { SHOW_SIDEBAR, HIDE_SIDEBAR } from './actions-types'

export const showSidebar = () => {
	return {
		type: SHOW_SIDEBAR
	}
}

export const hideSidebar = () => {
	return {
		type: HIDE_SIDEBAR
	}
}
