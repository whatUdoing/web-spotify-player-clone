import AlbumFullPreview from './album-full-preview'
import { connect } from 'react-redux'
import { RootStateShape } from 'types/redux'

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

export default connect(mapState)(AlbumFullPreview)
