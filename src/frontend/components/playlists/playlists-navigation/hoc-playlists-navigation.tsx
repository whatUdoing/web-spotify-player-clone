import { RootStateShape } from '../../../redux/store'
import { connect } from 'react-redux'
import PlaylistsNavigation from './playlists-navigation'
import { PagingPlaylistObject } from 'types/redux'
import { Dispatch } from 'redux'
import { getUserPlaylists } from '../../../redux/user/actions'

const mapState = (state: RootStateShape) => {
	const playlistsObject: PagingPlaylistObject =
		state.user?.currentUserPlaylists

	// todo change loading, add lazy loading
	return {
		playlists: state.user?.currentUserPlaylists?.items,
		allLoaded: playlistsObject
			? playlistsObject.offset >= playlistsObject.total
			: false
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		loadMoreUserPlaylist() {
			console.log('load more user playlist')
			dispatch(getUserPlaylists())
		}
	}
}

export default connect(mapState, mapDispatch)(PlaylistsNavigation)
