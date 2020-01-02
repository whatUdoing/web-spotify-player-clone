import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

type Props = {
	children: ReactNode
}

const PreviewHeader = ({ children }: Props) => {
	return (
		<header
			css={css`
				grid-column: 1 / -1;
			`}
		>
			{children}
		</header>
	)
}

export default PreviewHeader
