import React from 'react'
import { AlbumObjectFull } from 'services'

const initialValue = {
	album: null,
	isLoadingAlbum: false,

	tracksLoaded: false,
	isLoadingTracks: false,

	loadTracks: () => {}
}

export type AlbumStoreShape = {
	album: AlbumObjectFull | null
	isLoadingAlbum: boolean

	tracksLoaded: boolean
	isLoadingTracks: boolean

	loadTracks: () => void
}

export const AlbumContext = React.createContext<AlbumStoreShape>(initialValue)
