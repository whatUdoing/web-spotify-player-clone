import React, { forwardRef } from 'react'

const LoaderGuardian = forwardRef((props, ref) => {
	return (
		<div
			aria-hidden="true"
			style={{
				border: '1px solid red',
				height: '5px'
			}}
			ref={ref}
			className="js__loader-guardina"
		></div>
	)
})

export default LoaderGuardian
