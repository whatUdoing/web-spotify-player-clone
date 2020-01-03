import PlaylistFullView from './playlist-full-view'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux/store'

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

export default connect(mapState)(PlaylistFullView)
