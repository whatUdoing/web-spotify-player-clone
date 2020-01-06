import React, { useEffect, useState } from 'react'
import {
	TrackObjectFull,
	AlbumObjectFull,
	TrackObjectSimplified
} from 'types/services'
import { CoverObject } from 'types/components'
import { getImage } from '../../../../utils/functions/images/images'
import { Container, Row, Col } from '../../../flexobx-grid'
import CoverPreview from '../../cover-preview/cover-preview'
import Tracks from '../../tracks/tracks'
import { PagingTrackObject } from 'types/redux'

type Props = {
	album: AlbumObjectFull
	getAlbumTracks: (albumId: string) => void
}

const defaultTracks: Array<TrackObjectSimplified> = []

const AlbumFullPreview = ({ album, getAlbumTracks }: Props) => {
	const [tracks, setTracks] = useState<Array<TrackObjectSimplified>>(
		defaultTracks
	)
	const [coverItem, setCoverItem] = useState<CoverObject>()
	const handleLoadMoreTracks = () => {
		console.log(album)
		console.log(allLoaded)
		if (album) {
			console.log('load more tracks')
			getAlbumTracks(album.id)
		}
	}

	const allLoaded =
		(album?.tracks as PagingTrackObject<TrackObjectSimplified>)
			?.allLoaded ?? false

	useEffect(() => {
		if (album) {
			setCoverItem({
				id: album.id,
				image: {
					src: getImage(album.images, 1)?.url,
					title: `Playlist ${album.name} cover`
				},
				title: album.name,
				author: album.artists.join(', '),
				description: album.name
			} as CoverObject)

			setTracks(album.tracks.items.filter(track => track ?? false))
		}
	}, [album])
	return (
		<Container>
			<Row>
				<Col>{coverItem && <CoverPreview item={coverItem} />}</Col>

				<Col>
					<Tracks
						tracks={tracks}
						loadAction={handleLoadMoreTracks}
						allLoaded={allLoaded}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default AlbumFullPreview
