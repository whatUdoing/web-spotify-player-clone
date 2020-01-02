export type BreakPointsKeys = 'xs' | 'md' | 'lg' | 'xl'

export const breakPoints: { [key in BreakPointsKeys]: number } = {
	xs: 576,
	md: 768,
	lg: 992,
	xl: 1200
}

export const mediaQueries: { [index: string]: string } = {
	xs: `@media (min-width: ${breakPoints.xs}px)`,
	md: `@media (min-width: ${breakPoints.md}px)`,
	lg: `@media (min-width: ${breakPoints.lg}px)`,
	xl: `@media (min-width: ${breakPoints.xl}px)`
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
