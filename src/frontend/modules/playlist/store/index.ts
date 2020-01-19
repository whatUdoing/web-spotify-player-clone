import React from 'react'
import { PlaylistObjectFull, TrackObjectFull } from 'services'

const initialValue = {
	playlist: null,
	isLoadingPlaylist: false,

	tracksLoaded: false,
	isLoadingTracks: false,

	loadTracks: () => {}
}

export type PlaylistStoreShape = {
	playlist: PlaylistObjectFull | null
	isLoadingPlaylist: boolean

	tracksLoaded: boolean
	isLoadingTracks: boolean

	loadTracks: () => void
}

export const PlaylistContext = React.createContext<PlaylistStoreShape>(
	initialValue
)
