import React, { useContext } from 'react'
import { PreviewItemContext } from './state/context'
import { PreviewItemObject } from 'components'
import LazyImage from '../../../components/image/lazy-image/lazy-image'
import ImagePlaceholder from '../../../components/image/image-placeholder/image-placeholder'

const PreviewCover = () => {
	const item = useContext<PreviewItemObject>(PreviewItemContext)

	return (
		<div className="cover">
			{item.image ? (
				<LazyImage src={item.image.url} />
			) : (
				<ImagePlaceholder />
			)}
		</div>
	)
}

export default PreviewCover
