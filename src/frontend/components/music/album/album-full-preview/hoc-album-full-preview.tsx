import AlbumFullPreview from './album-full-preview'
import { connect } from 'react-redux'
import { RootStateShape } from 'types/redux'
import { getAlbumTracks } from '../../../../redux/albums/actions'
import { Dispatch } from 'redux'

const mapState = (
	state: RootStateShape,
	props: {
		albumId: string
	}
) => {
	const { albumId } = props

	return {
		album: state.albums.albums[albumId]
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		getAlbumTracks(albumId: string) {
			dispatch(getAlbumTracks(albumId))
		}
	}
}

export default connect(mapState, mapDispatch)(AlbumFullPreview)
