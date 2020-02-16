import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
	startTrack,
	setTracks,
	setTrack
} from '../../../music-player/store/actions'
import { TrackObjectSimplified, TrackObjectFull } from 'services'
import Tracks from './tracks'

const mapDispatchToProps = (disapatch: Dispatch) => {
	return {
		handleTrackClick: (track: TrackObjectSimplified | TrackObjectFull) => {
			disapatch(setTrack(track))
			disapatch(startTrack())
		},

		setPlayerTracks: (
			tracks: Array<TrackObjectSimplified | TrackObjectFull>
		) => {
			disapatch(setTracks(tracks))
		}
	}
}

export default connect(null, mapDispatchToProps)(Tracks)
