import React, { useRef, ReactNode, useState } from 'react'
import { css } from '@emotion/core'
import useLazyLoading from '../../../utils/hooks/useLazyLoading'
import ImagePlaceholder from '../image-placeholder/image-placeholder'

type Props = {
	src: string
	alt?: string
	title?: string
	children?: ReactNode | string
}

const LazyImage = ({ src, alt, title, children }: Props) => {
	const $imgEl = useRef(null)
	const [isLoaded, setLoading] = useState()
	let isVisible = useLazyLoading($imgEl)

	return (
		<figure ref={$imgEl}>
			<img
				css={css`
					display: ${isVisible && isLoaded ? 'block' : 'none'};
					width: 100%;
					max-width: 100%;
				`}
				data-href={isVisible ? null : src}
				src={isVisible ? src : undefined}
				title={title}
				alt={alt}
				onLoad={() => setLoading(true)}
			/>

			{!isVisible ||
				(!isLoaded && (
					<>{!children ? <ImagePlaceholder /> : children}</>
				))}
		</figure>
	)
}

export default LazyImage
