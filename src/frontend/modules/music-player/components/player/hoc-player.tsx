import Player from './player'
import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
	playNextTrack,
	playPrevTrack,
	stopTrack,
	startTrack
} from '../../store/actions'

const mapState = (state: RootStateShape) => {
	return {
		currentTrack: state.player.currentTrack,
		isPlaying: state.player.isPlaying,

		tracks: state.player.tracks,
		currentTrackNumber: state.player.currentTrackNumber
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

export default connect(mapState, mapDispatch)(Player)
