import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type Props = {
	children: ReactNode | ReactNode[]
	isVisible?: boolean
	css?: string
}

const Modal = ({ children, isVisible = false, css = '' }: Props) => {
	const portal = document.querySelector('.js__modal-portal')

	return portal && isVisible
		? createPortal(<div css={css}>{children}</div>, portal)
		: null
}

export default Modal
