import PlaylistFullView from './playlist-full-view'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'
import { getPlaylistTracks } from '../../../core/store-manager/playlists/actions'
import { Dispatch } from 'redux'

const mapState = (
	state: RootStateShape,
	props: {
		playlistId: string
	}
) => {
	const { playlistId } = props
	return {
		playlist: state.playlists.playlists[playlistId]
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		loadMoreTracks(playlistId: string) {
			dispatch(getPlaylistTracks(playlistId))
		}
	}
}

export default connect(mapState, mapDispatch)(PlaylistFullView)
