import {
	MyDashboardResponse,
	MyDashboardPagingObject,
	PlaylistObjectSimplified
} from 'types/services'
import { PreviewItemObject, PreviewSectionObject } from 'types/components'
import {
	ImageObject,
	AlbumObjectFull,
	ArtistObjectFull,
	TrackObjectFull
} from 'types/services'

const getImage = (images: Array<ImageObject>) => {
	return images.length > 1 ? images[1] : images[0]
}

const mapPlaylistObjectToPreviewItem = (
	playlist: PlaylistObjectSimplified
): PreviewItemObject => {
	return {
		id: playlist.id,
		path: playlist.href,
		name: playlist.name,
		image: getImage(playlist.images),
		description: `by ${playlist.owner.display_name}`
	}
}

const mapArtistObjectToPreviewItem = (
	artistObject: ArtistObjectFull
): PreviewItemObject => {
	return {
		id: artistObject.id,
		name: artistObject.name,
		image: getImage(artistObject.images),
		path: artistObject.href //TODO convert url
	}
}

const mapTrackObjectToPreviewItem = (
	trackObject: TrackObjectFull
): PreviewItemObject => {
	return {
		id: trackObject.id,
		name: trackObject.name,
		path: trackObject.href,
		image: getImage(trackObject.album.images),
		description: `by ${trackObject.artists
			.map(artist => ` ${artist.name}`)
			.join('')}`
	}
}

const mapAlbumObjectToPreviewItem = (
	albumObject: AlbumObjectFull
): PreviewItemObject => {
	return {
		id: albumObject.id,
		name: albumObject.name,
		path: albumObject.href,
		image: getImage(albumObject.images),
		description: albumObject.album_type
	}
}

type ProcessedResponse = {
	items: Array<PreviewSectionObject>
}

export const processResponse = (response: MyDashboardResponse) => {
	const responseActions: Record<string, Function> = {
		playlist: mapPlaylistObjectToPreviewItem,
		artist: mapArtistObjectToPreviewItem,
		track: mapTrackObjectToPreviewItem,
		album: mapAlbumObjectToPreviewItem
	}

	const processedItems = response.items.reduce(
		(prev, pagingObject: MyDashboardPagingObject) => {
			prev.items.push({
				href: pagingObject.href,
				title: pagingObject.title,
				type: pagingObject.type,
				items: pagingObject.items.map(item => {
					return responseActions[pagingObject.type](item)
				})
			})

			return prev
		},
		<ProcessedResponse>{
			items: []
		}
	)

	return processedItems
}
