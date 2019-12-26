import React, { ReactNode } from 'react'

type ContainerProps = {
	children: ReactNode
}
export const Container = ({ children }: ContainerProps) => {
	return <div>{children}</div>
}

export { Col } from './Column'
export { Row } from './Row'
