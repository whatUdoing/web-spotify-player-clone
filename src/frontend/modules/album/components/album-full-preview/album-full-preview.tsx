import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Container, Row, Col } from '../../../../components/flexobx-grid'
import Tracks from '../../../track/components/tracks/tracks'
import CoverPreview from '../media-item/media-item'
import {
	PlaylistObjectFull,
	TrackObjectFull,
	AlbumObjectFull,
	TrackObjectSimplified
} from 'services'
import { getImage } from '../../../../lib/helpers/images/images'
import { CoverObject } from 'components'
import { AlbumContext } from '../../store/index'

const getCoverImage = (playlist: AlbumObjectFull): CoverObject =>
	({
		id: playlist.id,
		image: {
			src: getImage(playlist.images, 1)?.url,
			title: `Playlist ${playlist.name} cover`
		},
		title: playlist.name,
		author: 'playlist',
		description: 'sssss'
	} as CoverObject)

const AlbumFullView = () => {
	const context = useContext(AlbumContext)
	const [coverItem, setCoverItem] = useState<CoverObject>()
	const [tracks, setTracks] = useState<Array<TrackObjectSimplified>>([])

	useEffect(() => {
		// console.log('context.album', context.album)
		if (context.album) {
			setCoverItem(getCoverImage(context.album))
			setTracks(context.album.tracks.items.filter(item => item))
		}
	}, [context.album])

	return (
		<div className="row">
			<div className="col-xs-12 col-sm-4">
				{coverItem && <CoverPreview item={coverItem} />}
			</div>

			<div className="col-xs col-sm-8">
				{tracks && (
					<div className="ui__box_s">
						<Tracks
							tracks={tracks}
							loadAction={context.loadTracks}
							allLoaded={context.tracksLoaded}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default AlbumFullView
