import { css } from '@emotion/core'
import React from 'react'

const ModalPortal = () => {
	return (
		<div
			css={css`
				&:not(:empty) {
					position: fixed;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					z-index: 2;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgba(0, 0, 0, 0.4);
				}
			`}
			className="js__modal-portal"
		></div>
	)
}

export default ModalPortal
