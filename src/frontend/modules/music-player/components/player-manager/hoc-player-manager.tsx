import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import PlayerManger from './player-manager'
import {
	playNextTrack,
	playPrevTrack,
	stopTrack,
	startTrack
} from '../../store/actions'

const mapState = (state: RootStateShape) => {
	return {
		currentTrack: state.player.currentTrack,
		currentTrackNumber: state.player.currentTrackNumber,
		isPlaying: state.player.isPlaying,

		tracks: state.player.tracks
	}
}

const mapDispatch = (displatch: Dispatch) => {
	return {
		playNext() {
			displatch(playNextTrack())
		},

		playPrev() {
			displatch(playPrevTrack())
		},

		pause() {
			displatch(stopTrack())
		},

		resume() {
			displatch(startTrack())
		}
	}
}

export default connect(mapState, mapDispatch)(PlayerManger)
