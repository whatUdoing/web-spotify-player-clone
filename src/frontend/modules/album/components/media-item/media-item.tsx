import React from 'react'
import { Container, Row, Col } from '../../../../components/flexobx-grid'
import LazyImage from '../../../../components/image/lazy-image/lazy-image'
import { CoverObject } from 'components'

type Props = {
	item: CoverObject
}
const MediaItem = ({ item }: Props) => {
	return (
		<div className="media-item ">
			<div className="media-item__cover">
				<LazyImage
					src={item.image.src}
					title={item.image.title}
					alt={item.image.alt}
				/>
			</div>

			<div className="media-item__content">
				<h4 className="media-item__title">
					<span className="color_light-1 weight_bold size_xl">
						{item.title}
					</span>
				</h4>

				<div className="media-item__more-info">
					<span className="color_light-2">{item.author}</span>
				</div>

				<div className="media-item__action">
					<button className="btn btn_bg">Play</button>
				</div>

				<p className="media-item__description">
					<span className="color_light-2">{item.description}</span>
				</p>
			</div>
		</div>
	)
}

export default MediaItem
