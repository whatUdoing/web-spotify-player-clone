import { RootStateShape } from 'types/redux'
import { connect } from 'react-redux'
import PlaylistsNavigation from './playlists-navigation'
import { PagingPlaylistObject } from 'types/redux'
import { Dispatch } from 'redux'
import { getUserPlaylists } from '../../../redux/user/actions'
import { PlaylistObjectSimplified } from 'types/services'

const mapState = (state: RootStateShape) => {
	const playlistsObject: PagingPlaylistObject<
		PlaylistObjectSimplified
	> | null = state.user?.currentUserPlaylists

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
