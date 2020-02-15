import { connect } from 'react-redux'
import PlayedTrack from './played-track'
import { RootStateShape } from 'redux-store'
import { mapTrackObjectToPreviewItem } from '../../../../components/preview/preview-item/lib/data-mappers'
import { TrackObjectFull } from 'services'

const mapState = (state: RootStateShape) => {
	let track = state.player.currentTrack
		? mapTrackObjectToPreviewItem(
				state.player.currentTrack as TrackObjectFull
		  )
		: null

	return {
		track
	}
}

export default connect(mapState)(PlayedTrack)
