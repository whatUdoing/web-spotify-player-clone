import React, { ReactNode } from 'react'
import { PreviewItemObject } from 'components'
import { PreviewItemContext } from './state/context'
import PreviewCover from './preview-cover'
import PreviewContent from './preview-content'

type Props = {
	item: PreviewItemObject
	children: ReactNode
}

const PreviewItem = ({ item, children }: Props) => {
	return (
		<div className="preview-item">
			<PreviewItemContext.Provider value={item}>
				{children}
			</PreviewItemContext.Provider>
		</div>
	)
}

PreviewItem.Cover = PreviewCover
PreviewItem.Content = PreviewContent

export default PreviewItem
