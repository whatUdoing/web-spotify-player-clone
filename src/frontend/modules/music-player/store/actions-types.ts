import { TrackObjectFull, TrackObjectSimplified } from 'services'

export const PLAYER_SET_SOURCE = '[ player ] PLAYER_SET_SOURCE'
export const PLAYER_PLAY_TRACK = '[ player ] PLAYER_PLAY_TRACK'
export const PLAYER_STOP_TRACK = '[ player ] PLAYER_STOP_TRACK'
export const PLAYER_SET_TRACKS = '[ player ] PLAYER_SET_TRACKS'
export const PLAYER_SET_CURRENT_TRACK = '[ player ] PLAYER_CURRENT_TRACK'
export const PLAYER_PLAY_NEXT = '[ player ] PLAYER_PLAY_NEXT'
export const PLAYER_PLAY_PREV = '[ player ] PLAYER_PLAY_PREV'
export const PLAYER_SET_TRACK = '[ player ] PLAYER_SET_TRACK'
export const PLAYER_SET_VOLUME = '[ player ] PLAYER_SET_VOLUME'

interface IPlayerSetSourde {
	type: typeof PLAYER_SET_SOURCE
	payload: {
		source: string
	}
}

interface IPlayerPlayTrack {
	type: typeof PLAYER_PLAY_TRACK
}

interface IPlayerPlayNext {
	type: typeof PLAYER_PLAY_NEXT
}

interface IPlayerPlayPrev {
	type: typeof PLAYER_PLAY_PREV
}

interface IPlayerStopTrack {
	type: typeof PLAYER_STOP_TRACK
}

interface IPlayerSetTracks {
	type: typeof PLAYER_SET_TRACKS
	payload: {
		tracks: Array<TrackObjectSimplified | TrackObjectFull>
	}
}

interface IPlayerSetTrack {
	type: typeof PLAYER_SET_TRACK
	payload: {
		track: TrackObjectFull | TrackObjectSimplified
	}
}

interface IPlayerSetVolume {
	type: typeof PLAYER_SET_VOLUME
	payload: {
		volume: number
	}
}

export type playerActionsTypes =
	| IPlayerSetSourde
	| IPlayerStopTrack
	| IPlayerPlayTrack
	| IPlayerSetTracks
	| IPlayerPlayNext
	| IPlayerPlayPrev
	| IPlayerSetTrack
	| IPlayerSetVolume
