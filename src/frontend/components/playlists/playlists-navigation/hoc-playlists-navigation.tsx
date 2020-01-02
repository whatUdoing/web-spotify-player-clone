import { RootStateShape } from '../../../redux/store'
import { connect } from 'react-redux'
import PlaylistsNavigation from './playlists-navigation'

const mapState = (state: RootStateShape) => {
	return {
		playlists: state.user?.currentUserPlaylists?.items
	}
}

export default connect(mapState)(PlaylistsNavigation)
