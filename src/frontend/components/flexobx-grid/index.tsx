import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}
export const Container = ({ children }: Props) => {
	return <div>{children}</div>
}

export { Col } from './Column'
export { Row } from './Row'
