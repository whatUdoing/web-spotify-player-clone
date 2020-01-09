import React, { ReactNode, createContext, useMemo } from 'react'
import { css } from '@emotion/core'
import { PreviewItemObject } from 'components'

type PreviewContextType = {
	items: Array<PreviewItemObject>
}

export const PreviewSectionContext = createContext({
	items: []
} as PreviewContextType)

type Props = {
	items: Array<PreviewItemObject>
	children: ReactNode
}

const PreviewSection = ({ children, items }: Props) => {
	const value = useMemo(
		() => ({
			items
		}),
		[items]
	)
	return (
		<section
			css={css`
				display: grid;
				grid-gap: 10px;
				grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
			`}
		>
			<PreviewSectionContext.Provider value={value}>
				{children}
			</PreviewSectionContext.Provider>
		</section>
	)
}

export { default as PreviewHeader } from './preview-header'

export { default as PreviewList } from './preview-list'

export default PreviewSection
