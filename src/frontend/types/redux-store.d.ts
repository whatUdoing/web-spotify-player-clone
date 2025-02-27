declare module 'redux-store' {
	import { LazyExoticComponent, ReactNode } from 'react'
	import {
		PlaylistObjectSimplified,
		AuthObject,
		User,
		PlaylistObjectFull,
		TrackObjectFull,
		AlbumObjectFull,
		ArtistObjectFull,
		TrackObjectSimplified
	} from 'services'

	export type RootStateShape = {
		user: UserStateShape
		playlists: PlaylistsStateShape
		tracks: TracksStateShape
		albums: AlbumsStateShape
		collection: CollectionStateShape
		player: PlayerStateShape
		ui: UiStateShape
	}

	/**
	 * Playlists
	 */
	export type PlaylistsStateShape = {
		playlists: Record<string, PlaylistObjectFull>
	}

	/**
	 * User
	 */
	export type PagingPlaylistObject<T> = SpotifyApi.PagingObject<T> & {
		allLoaded: boolean
	}

	export type UserStateShape = {
		auth: AuthObject
		profile: User | null
		isLoading: boolean
	}

	/**
	 * Tracks
	 */
	export type TracksStateShape = {
		tracks: Record<string, TrackObjectFull>
	}

	/**
	 * Albums
	 */
	export type AlbumsStateShape = {
		albums: Record<string, AlbumObjectFull>
	}

	/**
	 * Collection
	 */
	export type CollectionStateShape = {
		playlists: {
			paging: PagingPlaylistObject<PlaylistObjectSimplified> | null
			items: Array<PlaylistObjectSimplified>
		}
		tracks: Record<string, TrackObjectFull> | null
		albums: Record<string, AlbumObjectFull> | null
		artists: Record<string, ArtistObjectFull> | null
	}

	/**
	 * Player
	 */

	export type PlayerStateShape = {
		currentTrack: TrackObjectSimplified | TrackObjectFull | null

		isPlaying: boolean
		currentTrackNumber: number
		currentVolumeLevel: number

		tracks: Array<TrackObjectSimplified | TrackObjectFull>
		queue: Array<TrackObjectSimplified | TrackObjectFull>
	}

	/**
	 * Ui
	 */
	export type UiStateShape = {
		isSidebarOpen: boolean
	}
}
