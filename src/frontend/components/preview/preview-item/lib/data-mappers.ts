import { PlaylistObjectSimplified } from 'services'
import { PreviewItemObject } from 'components'
import { AlbumObjectFull, ArtistObjectFull, TrackObjectFull } from 'services'
import { getImage } from '../../../../lib/helpers/images/images'
import { getResourceUri } from '../../../../lib/helpers/resource-uri/resource-uri'

export const mapPlaylistObjectToPreviewItem = (
	playlist: PlaylistObjectSimplified
): PreviewItemObject => {
	const type = 'playlist'

	return {
		id: playlist.id,
		type,
		name: playlist.name,
		image: getImage(playlist.images),
		description: `by ${playlist.owner.display_name}`,
		path: getResourceUri('playlist', {
			playlistId: playlist.id
		})
	}
}

export const mapArtistObjectToPreviewItem = (
	artist: ArtistObjectFull
): PreviewItemObject => {
	const type = 'artist'

	return {
		id: artist.id,
		type,
		name: artist.name,
		image: getImage(artist.images),
		path: getResourceUri('artist', {
			artistId: artist.id
		})
	}
}

export const mapTrackObjectToPreviewItem = (
	track: TrackObjectFull
): PreviewItemObject => {
	const type = 'track'
	return {
		id: track.id,
		type,
		name: track.name,
		path: getResourceUri('track', {
			trackId: track.id
		}),
		image: getImage(track.album.images),
		description: `by ${track.artists
			.map(artist => ` ${artist.name}`)
			.join('')}`
	}
}

export const mapAlbumObjectToPreviewItem = (
	album: AlbumObjectFull
): PreviewItemObject => {
	const type = 'album'

	return {
		id: album.id,
		type,
		name: album.name,
		image: getImage(album.images),
		description: album.album_type,
		path: getResourceUri('album', {
			albumId: album.id
		})
	}
}
