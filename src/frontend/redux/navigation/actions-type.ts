const ADD_PLAYLIST_NAV_ITEM = '[ navigation ] ADD_PLAYLIST_NAV_ITEM'

interface IAddPlaylistNavItem {
	type: typeof ADD_PLAYLIST_NAV_ITEM
	payload: {
		playlist: object
	}
}

export type navigationActionTypes = IAddPlaylistNavItem
