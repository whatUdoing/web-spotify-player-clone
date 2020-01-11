import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import PlaylistsNavigation from './playlists-navigation'
import { PagingPlaylistObject } from 'redux-store'
import { Dispatch } from 'redux'
import { getUserPlaylists } from '../../../core/store-manager/user/actions'
import { PlaylistObjectSimplified } from 'services'

const mapState = (state: RootStateShape) => {
	const playlistsObject: PagingPlaylistObject<
		PlaylistObjectSimplified
	> | null = state.user?.currentUserPlaylists
	console.log(playlistsObject)
	// todo change loading, add lazy loading
	return {
		playlists: playlistsObject?.items ?? [],
		allLoaded: playlistsObject?.next ? !playlistsObject.next : false
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		loadMoreUserPlaylist() {
			dispatch(getUserPlaylists())
		}
	}
}

export default connect(mapState, mapDispatch)(PlaylistsNavigation)
