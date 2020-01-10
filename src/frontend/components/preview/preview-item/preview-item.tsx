import React from 'react'
import LazyImage from '../../image/lazy-image/lazy-image'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { PreviewItemObject } from 'components'
import { trimString } from '../../../utils/functions/trim-string/trim-string'
import ImagePlaceholder from '../../image/image-placeholder/image-placeholder'

type Props = {
	item: PreviewItemObject
}

const PreviewItem = ({ item }: Props) => {
	const trim = trimString(50)

	return (
		<div
			css={css`
				padding: calc(var(--global-spacing) * 0.5);
			`}
		>
			<div
				css={css`
					border-radius: var(--global-border-radius);
					overflow: hidden;
				`}
			>
				{item.image ? (
					<LazyImage src={item.image.url} />
				) : (
					<ImagePlaceholder />
				)}
			</div>

			<div>
				{item.name && (
					<div>
						<Link className="link" to={item.path}>
							{trim(item.name)}
						</Link>
					</div>
				)}

				{item.description && <p>{trim(item.description)}</p>}
			</div>
		</div>
	)
}

export default PreviewItem
