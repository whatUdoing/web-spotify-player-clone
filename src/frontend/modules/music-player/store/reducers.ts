import {
	playerActionsTypes,
	PLAYER_PLAY_TRACK,
	PLAYER_STOP_TRACK,
	PLAYER_SET_TRACKS,
	PLAYER_PLAY_NEXT,
	PLAYER_PLAY_PREV,
	PLAYER_SET_TRACK,
	PLAYER_SET_VOLUME
} from './actions-types'

import { PlayerStateShape } from 'redux-store'

const initialState: PlayerStateShape = {
	currentTrack: null,

	currentTrackNumber: -1, //index of current playing track
	isPlaying: false,
	currentVolumeLevel: 1,

	tracks: [],
	queue: []
}

const playerReducers = (
	state = initialState,
	action: playerActionsTypes
): PlayerStateShape => {
	switch (action.type) {
		case PLAYER_PLAY_TRACK:
			return {
				...state,
				isPlaying: true
			}
		case PLAYER_STOP_TRACK:
			return {
				...state,
				isPlaying: false
			}
		case PLAYER_SET_TRACK: {
			const newTrack = action.payload.track

			return {
				...state,
				currentTrack: newTrack,
				currentTrackNumber: state.tracks.findIndex(
					track => track.preview_url === newTrack.preview_url
				)
			}
		}
		case PLAYER_SET_TRACKS: {
			return {
				...state,
				tracks: action.payload.tracks
			}
		}
		case PLAYER_PLAY_NEXT: {
			const nextTrack = state.tracks[state.currentTrackNumber + 1]

			return {
				...state,
				currentTrack: nextTrack ?? null,
				currentTrackNumber: nextTrack ? ++state.currentTrackNumber : -1
			}
		}
		case PLAYER_PLAY_PREV: {
			const prevTrack = state.tracks[state.currentTrackNumber - 1]

			return {
				...state,
				currentTrack: prevTrack ?? null,
				currentTrackNumber: prevTrack ? --state.currentTrackNumber : -1
			}
		}
		case PLAYER_SET_VOLUME: {
			return {
				...state,
				currentVolumeLevel: action.payload.volume
			}
		}
		default:
			return state
	}
}

export default playerReducers
