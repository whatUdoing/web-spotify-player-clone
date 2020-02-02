import { Link } from 'react-router-dom'
import { trimString } from '../../../lib/helpers/trim-string/trim-string'
import React, { useContext } from 'react'
import { PreviewItemObject } from 'components'
import { PreviewItemContext } from './preview-item'

const trim = trimString(50)

const PreviewContent = () => {
	const item = useContext<PreviewItemObject>(PreviewItemContext)

	return (
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
	)
}

export default PreviewContent
