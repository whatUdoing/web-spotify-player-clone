declare module 'redux-store' {
	import { LazyExoticComponent, ReactNode } from 'react'
	import {
		PlaylistObjectSimplified,
		AuthObject,
		User,
		PlaylistObjectFull,
		TrackObjectFull,
		AlbumObjectFull,
		ArtistObjectFull
	} from 'services'

	export type RootStateShape = {
		user: UserStateShape
		playlists: PlaylistsStateShape
		tracks: TracksStateShape
		albums: AlbumsStateShape
		collection: CollectionStateShape
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
		// currentUserPlaylists: PagingPlaylistObject<
		// 	PlaylistObjectSimplified
		// > | null
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
}
