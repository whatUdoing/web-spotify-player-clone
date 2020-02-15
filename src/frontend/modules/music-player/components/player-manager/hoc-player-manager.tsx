import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import PlayerManger from './player-manager'
import {
	playNextTrack,
	playPrevTrack,
	stopTrack,
	startTrack,
	setVolume
} from '../../store/actions'

const mapState = (state: RootStateShape) => {
	return {
		currentTrack: state.player.currentTrack,
		currentTrackNumber: state.player.currentTrackNumber,
		isPlaying: state.player.isPlaying,
		currentVolumeLevel: state.player.currentVolumeLevel,

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
		},

		setVolume(volume: number) {
			displatch(setVolume(volume))
		}
	}
}

export default connect(mapState, mapDispatch)(PlayerManger)
