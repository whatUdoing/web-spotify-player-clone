import TrackFullPreview from './track-full-preview'
import { connect } from 'react-redux'
import { RootStateShape } from 'types/redux'

const mapState = (
	state: RootStateShape,
	props: {
		trackId: string
	}
) => {
	const { trackId } = props
	return {
		track: state.tracks.tracks[trackId]
	}
}

export default connect(mapState)(TrackFullPreview)
