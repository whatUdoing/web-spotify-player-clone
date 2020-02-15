import React, { forwardRef } from 'react'

const LoaderGuardian = forwardRef<HTMLDivElement>((props, ref) => {
	return <div aria-hidden="true" ref={ref}></div>
})

export default LoaderGuardian
