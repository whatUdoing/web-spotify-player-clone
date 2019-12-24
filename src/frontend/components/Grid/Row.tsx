import styled from '@emotion/styled'

type RowProps = {} & typeof DefaultRowProps

const DefaultRowProps = {
	justify: 'flex-start',
	align: 'center'
}

export const Row = styled.div<RowProps>`
	display: flex;
	justify-content: ${(props: RowProps) => props.justify};
	align-items: ${({ align }) => align};
`
Row.defaultProps = DefaultRowProps
