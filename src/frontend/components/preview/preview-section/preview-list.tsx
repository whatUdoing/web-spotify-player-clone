import React, { useContext } from 'react'
import { PreviewItemObject } from 'types/components'
import PreviewItem from '../preview-item/preview-item'
import { PreviewSectionContext } from './preview-section'

const PreviewList = () => {
	const context = useContext(PreviewSectionContext)

	return (
		<>
			{context.items.map((item: PreviewItemObject) => {
				return <PreviewItem key={item.id} item={item} />
			})}
		</>
	)
}

export default PreviewList
