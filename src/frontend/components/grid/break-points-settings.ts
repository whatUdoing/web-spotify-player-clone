export type BreakPointsKeys = 'xs' | 'md' | 'lg' | 'xl'

export const breakPoints: { [key in BreakPointsKeys]?: number } = {
	xs: 540,
	md: 720,
	lg: 1140
}

export const mediaQueries: { [index: string]: string } = {
	xs: `@media (max-width: ${breakPoints.xs}px)`,
	md: `@media (min-width: ${breakPoints.xs &&
		breakPoints.xs + 1}px) and (max-width: ${breakPoints.md}px)`,
	lg: `@media (max-width: ${breakPoints.md &&
		breakPoints.md + 1})px) and (max-width: ${breakPoints.lg}px`,
	xl: `@media (min-width: ${breakPoints.lg && breakPoints.lg + 1}px)`
}

export type MediaActions = {
	[index: string]: string
}

export const generateMediaQueries = (mediaActions: MediaActions) => {
	return Object.keys(breakPoints).reduce((prev, key) => {
		if (mediaActions[key]) {
			return `
				${prev}
				${mediaQueries[key]} ${mediaActions[key]}
			`
		}

		return prev
	}, '')
}
