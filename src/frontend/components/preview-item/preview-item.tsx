import React from 'react'
import LazyImage from '../image/lazy-image/lazy-image'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { PreviewItemObject } from 'types/components'

type Props = {
	item: PreviewItemObject
}

const PreviewItem = ({ item }: Props) => {
	return (
		<div
			css={css`
				border: 1px solid red;
			`}
		>
			{item.image && <LazyImage src={item.image.url} />}

			{item.name && (
				<h4>
					<Link to="/">{item.name}</Link>
				</h4>
			)}

			{item.description && <p>{item.description}</p>}
		</div>
	)
}

export default PreviewItem
