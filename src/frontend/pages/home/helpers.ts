import {
	MyDashboardResponse,
	MyDashboardPagingObject,
	PlaylistObject
} from 'types/services'
import { PreviewItemObject } from 'types/components'

const mapPlaylistObjectToPreviewItem = (
	playlist: PlaylistObject
): PreviewItemObject => {
	let image
	if (playlist?.images?.length > 2) {
		image = {
			url: playlist.images[2].url
		}
	}

	return {
		id: playlist.id,
		path: playlist.href,
		name: playlist.name,
		image,
		description: `by ${playlist.owner.display_name}`
	}
}

const mapArtistObjectToPreviewItem = (
	artistObject: SpotifyApi.ArtistObjectSimplified
): PreviewItemObject => {
	return {
		id: artistObject.id,
		name: artistObject.name,
		path: artistObject.href //TODO convert url
	}
}

const mapTrackObjectToPreviewItem = (
	trackObject: SpotifyApi.TrackObjectSimplified
): PreviewItemObject => {
	return {
		id: trackObject.id,
		name: trackObject.name,
		path: trackObject.href,
		description: `by ${trackObject.artists
			.map(artist => ` ${artist.name}`)
			.join('')}`
	}
}

const mapAlbumObjectToPreviewItem = (
	albumObject: SpotifyApi.AlbumObjectSimplified
): PreviewItemObject => {
	return {
		id: albumObject.id,
		name: albumObject.name,
		path: albumObject.href,
		description: albumObject.album_type
	}
}

export const processResponse = (response: MyDashboardResponse) => {
	const responseActions: Record<string, Function> = {
		playlist: mapPlaylistObjectToPreviewItem,
		artist: mapArtistObjectToPreviewItem,
		track: mapTrackObjectToPreviewItem,
		album: mapAlbumObjectToPreviewItem
	}
	// let processedItems: {
	// 	items: Array<{
	// 		title: string
	// 		type: string
	// 		items: Array<PreviewItemObject>
	// 	}>
	// } = {
	// 	items: []
	// }

	const processedItems = response.items.reduce(
		(prev, pagingObject: MyDashboardPagingObject) => {
			prev.items.push({
				title: pagingObject.title,
				type: pagingObject.type,
				items: pagingObject.items.map(item => {
					console.log(pagingObject.type)
					return responseActions[pagingObject.type](item)
				})
			})

			return prev
		},
		{
			items: []
		}
	)

	return processedItems
}
