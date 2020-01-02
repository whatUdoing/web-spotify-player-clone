import React, { ReactNode } from 'react'
import { Container, Row, Col } from '../flexobx-grid'

const SliderItem = ({ children }) => {
	return <div>{children}</div>
}

type Props = {
	children: ReactNode
	title: string
}

const Slider = ({ children, title }: Props) => {
	return (
		<div>
			<h3>{title}</h3>
			<Container>
				<Row>
					{React.Children.map(children, child => (
						<Col>
							<SliderItem>{child}</SliderItem>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}

export default Slider
