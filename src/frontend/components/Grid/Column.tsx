import styled from '@emotion/styled'

type BreakPointsKeys = 'xs' | 'md' | 'lg' | 'xl'
export const breakPoints: { [key in BreakPointsKeys]?: number } = {
	xs: 540,
	md: 720,
	lg: 1140
}
export const mediaQueries: { [index: string]: string } = {
	xs: `@media(max-width: ${breakPoints.xs})`,
	md: `@media(min-width: ${breakPoints.xs &&
		breakPoints.xs + 1} and max-width: ${breakPoints.md})`,
	lg: `@media(max-width: ${breakPoints.md &&
		breakPoints.md + 1}) and max-width: ${breakPoints.lg}`,
	xl: `@media(min-width: ${breakPoints.lg && breakPoints.lg + 1})`
}
type MediaActions = {
	[index: string]: Function
}
export const generateMediaQueries = (mediaActions: MediaActions) => {
	return Object.keys(breakPoints).reduce((prev, key) => {
		return `
            ${prev}
            ${mediaQueries[key]}: ${mediaActions[key]}
        `
	})
}

type ColProps = {
	[key: string]: any
	xs?: string
	md?: string
	lg?: string
	xl?: string
} & typeof DefaultColProps

const DefaultColProps = {}

export const Col = styled.div<ColProps>`
	flex-basis: 100%;
	${(props: ColProps) => {
        const colCount = 12;
        const colSize = 100 / colCount;
		const sizes: Array<BreakPointsKeys> = ['xs', 'md', 'lg', 'xl']

		const mediaActions = Object.keys(sizes).reduce((prev, size) => {
            if (props[size]) {
                return `
                    ${prev}
                    ${mediaQueries[size]}: {
                        flex-basis: ${props[size] * }
                    } 
                `
            }
        })
		return prev
	}}
`
