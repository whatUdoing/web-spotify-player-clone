import React, { useRef, ReactNode, useState, useEffect } from 'react'
import { css } from '@emotion/core'
import useLazyLoading from '../../../utils/hooks/use-image-lazy-loading'
import ImagePlaceholder from '../image-placeholder/image-placeholder'

type Props = {
	src: string
	alt?: string
	title?: string
	children?: ReactNode | string
}

// change support fro srcset images
const LazyImage = ({ src, alt, title, children }: Props) => {
	const $imgEl = useRef(null)
	const [isLoaded, setLoading] = useState(false)
	let isVisible = useLazyLoading($imgEl)

	return (
		<figure ref={$imgEl}>
			<img
				css={css`
					display: ${isVisible && isLoaded ? 'block' : 'none'};
					width: 100%;
					max-width: 100%;
				`}
				src={isVisible ? src : undefined}
				title={title}
				alt={alt}
				onLoad={() => setLoading(true)}
			/>

			{!isLoaded && <>{!children ? <ImagePlaceholder /> : children}</>}
		</figure>
	)
}

export default LazyImage
