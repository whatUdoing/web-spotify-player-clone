import React, { ReactElement } from 'react'
import { css } from '@emotion/core'
import { BreakPointsKeys, generateMediaQueries } from './break-points-settings'
import { ReactNode } from 'react'

type ColProps = {
	[key: string]: string | ReactNode
	xs?: string
	md?: string
	lg?: string
	xl?: string
	children: ReactNode
}

const getMediaQueries = (props: { [index: string]: any }) => {
	const colCount = 12
	const colSize = 100 / colCount
	const sizes: Array<BreakPointsKeys> = ['xs', 'md', 'lg', 'xl']
	const mediaActions = sizes.reduce(
		(actions: { [key: string]: string }, size) => {
			const propSize = parseInt(props[size], 10)

			if (propSize) {
				actions[size] = `
		{
			flex-basis: ${propSize * colSize}%;	
		}
	`
			}

			return actions
		},
		{}
	)

	return generateMediaQueries(mediaActions)
}

export const Col = ({ children, ...rest }: ColProps) => {
	const mediaQueries = getMediaQueries(rest)

	return (
		<div
			css={css`
				flex-basis: 100%;
				${mediaQueries}
			`}
		>
			{children}
		</div>
	)
}
