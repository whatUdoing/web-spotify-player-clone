import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

type RowProps = {
	children: ReactNode
} & typeof DefaultRowProps

const DefaultRowProps = {
	justify: 'flex-start',
	align: 'center'
}

// export const Row = styled.div<RowProps>`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: ${(props: RowProps) => props.justify};
// 	align-items: ${({ align }) => align};
// `
// Row.defaultProps = DefaultRowProps

export const Row = ({ children, justify, align }: RowProps) => {
	return (
		<div
			css={css`
				display: flex;
				flex-wrap: wrap;
				justify-content: ${justify};
				align-items: ${align};
			`}
		>
			{children}
		</div>
	)
}
