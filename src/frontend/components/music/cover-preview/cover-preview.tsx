import React from 'react'
import { Container, Row, Col } from '../../../components/flexobx-grid'
import LazyImage from '../../image/lazy-image/lazy-image'
import { CoverObject } from 'components'

type Props = {
	item: CoverObject
}
const CoverPreview = ({ item }: Props) => {
	return (
		<Container>
			<Row justify="center">
				<Col>
					<LazyImage
						src={item.image.src}
						title={item.image.title}
						alt={item.image.alt}
					/>
				</Col>
			</Row>
			<Row justify="center">
				<Col>{item.title}</Col>
			</Row>
			<Row justify="center">
				<Col>{item.author}</Col>
			</Row>
			<Row justify="center">
				<Col>action button</Col>
			</Row>
			<Row justify="center">
				<Col>{item.description}</Col>
			</Row>
		</Container>
	)
}

export default CoverPreview
