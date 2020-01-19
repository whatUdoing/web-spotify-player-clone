import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Container, Row, Col } from '../../../../components/flexobx-grid'
import Tracks from '../../../track/components/tracks/tracks'
import CoverPreview from '../../../album/components/media-item/media-item'
import { PlaylistObjectFull, TrackObjectFull } from 'services'
import { getImage } from '../../../../lib/helpers/images/images'
import { CoverObject } from 'components'
import { PlaylistContext } from '../../store/index'

const getCoverImage = (playlist: PlaylistObjectFull): CoverObject =>
	({
		id: playlist.id,
		image: {
			src: getImage(playlist.images, 1)?.url,
			title: `Playlist ${playlist.name} cover`
		},
		title: playlist.name,
		author: playlist.owner.display_name,
		description: playlist.description
	} as CoverObject)

const PlaylistFullView = () => {
	const context = useContext(PlaylistContext)
	const [coverItem, setCoverItem] = useState<CoverObject>()
	const [tracks, setTracks] = useState<Array<TrackObjectFull>>([])

	useEffect(() => {
		if (context.playlist) {
			setCoverItem(getCoverImage(context.playlist))
			setTracks(
				context.playlist.tracks.items
					.filter(item => item)
					.map(item => item.track)
			)
		}
	}, [context.playlist])

	return (
		<div className="row">
			<div className="col-xs-12 col-sm-4">
				<div className="pr-1">
					{coverItem && <CoverPreview item={coverItem} />}
				</div>
			</div>

			<div className="col-xs col-sm-8">
				{tracks && (
					<Tracks
						tracks={tracks}
						loadAction={context.loadTracks}
						allLoaded={context.tracksLoaded}
					/>
				)}
			</div>
		</div>
	)
}

export default PlaylistFullView
