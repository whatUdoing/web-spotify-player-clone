import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import PlaylistsNavigation from './playlists-navigation'
import { PagingPlaylistObject } from 'redux-store'
import { Dispatch } from 'redux'
import { getPlaylists } from '../../../../core/store-manager/collection/actions'
import { PlaylistObjectSimplified } from 'services'

const mapState = (state: RootStateShape) => {
	const playlists = state.collection?.playlists
	const playlistsObject: PagingPlaylistObject<
		PlaylistObjectSimplified
	> | null = playlists?.paging

	return {
		playlists: playlists?.items ?? [],
		allLoaded: playlistsObject?.next === null
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		loadMoreUserPlaylist() {
			dispatch(getPlaylists())
		}
	}
}

export default connect(mapState, mapDispatch)(PlaylistsNavigation)
