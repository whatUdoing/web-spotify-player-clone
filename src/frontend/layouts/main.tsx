import React from 'react'
import { Container, Row, Col } from '../components/grid/index'

type Props = {
	header?: React.ReactNode | string
	main?: React.ReactNode | string
	aside?: React.ReactNode | string
	footer?: React.ReactNode | string
	children?: React.ReactNode | string
}
const MainLayout = ({ header, main, aside, footer }: Props) => {
	return (
		<Container>
			{header && (
				<Row>
					<Col>
						<header>{header}</header>}
					</Col>
				</Row>
			)}

			{(aside || main) && (
				<Row>
					{aside && (
						<Col xs="4">
							<aside>{aside}</aside>
						</Col>
					)}
					{main && (
						<Col xs="8">
							<main>{main}</main>
						</Col>
					)}
				</Row>
			)}

			{footer && (
				<Row>
					<Col>
						<footer>{footer}</footer>
					</Col>
				</Row>
			)}
		</Container>
	)
}

export default MainLayout
