export interface IPlaylist {
	collaborative: boolean
	description: string
	id: string
	href: string
	images?: Array<object> //change to image object
	name: string
	owner: object // change to userobject
	public: boolean
	tracks: Array<object> // change to track object
	uri: string
	type: string
}

export interface IPlaylistsService {
	getDashboardPlaylists(): Array<IPlaylist>
	getPlaylist(playlistId: string): IPlaylist
	addPlaylist(playlistName: string): void
	removePlaylist(playlistId: string): void
}
