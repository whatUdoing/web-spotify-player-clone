import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

type RowProps = {
	children: ReactNode
	justify: string
	align: string
}

export const Row = ({
	children,
	justify = 'flex-start',
	align = 'top'
}: RowProps) => {
	return (
		<div
			css={css`
				display: flex;
				flex-wrap: no-wrap;
				justify-content: ${justify};
				align-items: ${align};
			`}
		>
			{children}
		</div>
	)
}
