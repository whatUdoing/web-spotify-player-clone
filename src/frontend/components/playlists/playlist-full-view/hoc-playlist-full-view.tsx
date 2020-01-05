import PlaylistFullView from './playlist-full-view'
import { connect } from 'react-redux'
import { RootStateShape } from 'types/redux'
import { getPlaylistTracks } from '../../../redux/playlists/actions'
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
