import CreatePlaylistBtn from './create-playlis-btn'
import { Dispatch } from 'redux'
import { createPlaylist } from '../../../redux/playlists/actions'
import { connect } from 'react-redux'

const mapDispatch = (dispatch: Dispatch) => {
	return {
		createPlaylist(playlistName: string) {
			dispatch(createPlaylist(playlistName))
		}
	}
}

export default connect(null, mapDispatch)(CreatePlaylistBtn)
