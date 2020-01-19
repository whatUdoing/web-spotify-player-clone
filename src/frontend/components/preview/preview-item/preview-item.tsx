import React from 'react'
import LazyImage from '../../image/lazy-image/lazy-image'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { PreviewItemObject } from 'components'
import { trimString } from '../../../lib/helpers/trim-string/trim-string'
import ImagePlaceholder from '../../image/image-placeholder/image-placeholder'

type Props = {
	item: PreviewItemObject
}

const PreviewItem = ({ item }: Props) => {
	const trim = trimString(50)

	return (
		<div className="preview-item">
			<div className="cover">
				{item.image ? (
					<LazyImage src={item.image.url} />
				) : (
					<ImagePlaceholder />
				)}
			</div>

			<div className="preview-item__content">
				{item.name && (
					<Link className="link preview-item__title" to={item.path}>
						{trim(item.name)}
					</Link>
				)}

				{item.description && (
					<p className="preview-item__description">
						{trim(item.description)}
					</p>
				)}
			</div>
		</div>
	)
}

export default PreviewItem
