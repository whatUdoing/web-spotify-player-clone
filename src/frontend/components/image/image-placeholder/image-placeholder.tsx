import React from 'react'
import { css } from '@emotion/core'

const ImagePlaceholder = () => {
	// TODO add theming
	return (
		<div
			css={css`
				position: relative;
				color: #ffffff;
				background: #230a59;
				width: 100%;
				height: 0%;
				padding-top: 100%;
				max-width: 100%;
				max-height: 100%;
			`}
		>
			<i
				css={css`
					position: absolute;
					color: #ffffff;
					height: 1.25em;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				`}
				className="fas fa-music fa-2x fa-fw"
			></i>
		</div>
	)
}

export default ImagePlaceholder
