import { TrackObjectFull, TrackObjectSimplified } from 'services'
import React from 'react'
import PreviewItem from '../../../../components/preview/preview-item/preview-item'
import { PreviewItemObject } from 'components'
import ImagePlaceholder from '../../../../components/image/image-placeholder/image-placeholder'

type Props = {
	track: PreviewItemObject | null
}
const PlayedTrack = ({ track }: Props) => {
	if (!track) return null

	return (
		<PreviewItem item={track}>
			<div className="row middle-xs">
				<div className="col-xs-4">
					<PreviewItem.Cover />
				</div>
				<div className="col-xs-8">
					<PreviewItem.Content />
				</div>
			</div>
		</PreviewItem>
	)
}

export default PlayedTrack
