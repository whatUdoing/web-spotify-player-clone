import React from 'react'
import { css } from '@emotion/core'

const ImagePlaceholder = () => {
	// TODO add theming
	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				background: #230a59;
				width: 100%;
				height: 100%;
				padding: 20px;
			`}
		>
			<i className="fas fa-music"></i>
		</div>
	)
}

export default ImagePlaceholder
